import { handleUploadPresigned } from '@vercel/blob/client';
import { issueSignedToken, put } from '@vercel/blob';
import {
  MAX_UPLOAD_FILE_SIZE,
  ALLOWED_CONTENT_TYPES,
  SUBMISSION_PREFIX,
  METADATA_SIDECAR_SUFFIX,
} from './constants.js';

// Load local environment variables if running outside vercel dev/preview
if (!process.env.BLOB_STORE_ID || !process.env.BLOB_WEBHOOK_PUBLIC_KEY) {
  try {
    process.loadEnvFile?.('.env.local');
  } catch {
    // Ignore if not present or already in environment
  }
}

/**
 * Sanitizes a client-provided filename, stripping directories and unsafe characters.
 * Guarantees a safe .html or .htm filename.
 */
export function sanitizeFilename(filename) {
  if (!filename || typeof filename !== 'string') {
    return 'submission.html';
  }

  // Strip path segments (both POSIX and Windows separators)
  const base = filename.split(/[/\\]/).pop().trim();

  // Strip leading dots to prevent hidden files or traversal artifacts
  let clean = base.replace(/^\.+/, '');

  // Lowercase and sanitize characters
  clean = clean
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, '-')
    .replace(/-+/g, '-');

  // Enforce HTML extension
  if (!clean.endsWith('.html') && !clean.endsWith('.htm')) {
    clean = `${clean}.html`;
  }

  if (clean === '.html' || clean === '.htm' || !clean) {
    clean = 'submission.html';
  }

  return clean;
}

/**
 * Builds the canonical forced storage pathname under submissions/<YYYY-MM-DD>/<cleanName>.
 * The server decides this pattern, never trusting the client folder hierarchy.
 */
export function getForcedPathname(clientPathname) {
  const cleanName = sanitizeFilename(clientPathname);
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(now.getUTCDate()).padStart(2, '0');
  const dateDir = `${yyyy}-${mm}-${dd}`;
  return `${SUBMISSION_PREFIX}${dateDir}/${cleanName}`;
}

/**
 * Pairs a stored HTML blob with its curator metadata sidecar.
 * submissions/2026-09-07/tile-abc123.html → submissions/2026-09-07/tile-abc123.meta.json
 */
export function getSidecarPathname(htmlPathname) {
  if (!htmlPathname || typeof htmlPathname !== 'string') return null;
  if (!htmlPathname.startsWith(SUBMISSION_PREFIX)) return null;
  if (htmlPathname.includes('..') || htmlPathname.includes('\\')) return null;

  const lower = htmlPathname.toLowerCase();
  if (lower.endsWith(METADATA_SIDECAR_SUFFIX)) return null;

  if (lower.endsWith('.html')) {
    return `${htmlPathname.slice(0, -'.html'.length)}${METADATA_SIDECAR_SUFFIX}`;
  }
  if (lower.endsWith('.htm')) {
    return `${htmlPathname.slice(0, -'.htm'.length)}${METADATA_SIDECAR_SUFFIX}`;
  }

  return null;
}

function parseTokenPayload(tokenPayload) {
  if (!tokenPayload) return {};
  if (typeof tokenPayload === 'object') return tokenPayload;
  if (typeof tokenPayload !== 'string') return {};
  try {
    const parsed = JSON.parse(tokenPayload);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return { raw: tokenPayload };
  }
}

/**
 * Curator-facing JSON stored next to the HTML blob. Never includes passphrase.
 */
export function buildSidecarBody({ blob, tokenPayload, originalFilename } = {}) {
  const meta = parseTokenPayload(tokenPayload);
  const submittedName = typeof originalFilename === 'string' ? originalFilename.trim() : '';
  const fromPayload = typeof meta.originalFilename === 'string' ? meta.originalFilename.trim() : '';

  return {
    kind: 'style-tiles.submission-meta',
    htmlPathname: blob?.pathname || null,
    originalFilename: submittedName || fromPayload || null,
    authorName: (meta.name || meta.authorName || '').trim(),
    designName: (meta.designName || '').trim(),
    note: (meta.note || meta.curatorNote || '').trim(),
    submittedAt: meta.submittedAt || new Date().toISOString(),
  };
}

export async function putSubmissionSidecar({ blob, tokenPayload, originalFilename, auth = {} }) {
  const pathname = getSidecarPathname(blob?.pathname);
  if (!pathname) return null;

  const record = buildSidecarBody({ blob, tokenPayload, originalFilename });
  return put(pathname, JSON.stringify(record, null, 2), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    ...auth,
  });
}

async function persistSidecarAndComplete({ blob, tokenPayload, originalFilename, auth = {} }) {
  let sidecarPathname = getSidecarPathname(blob?.pathname);
  try {
    const sidecar = await putSubmissionSidecar({ blob, tokenPayload, originalFilename, auth });
    if (sidecar?.pathname) sidecarPathname = sidecar.pathname;
  } catch (err) {
    console.error(
      '[Style Tiles Intake] Failed to store submission metadata sidecar:',
      sanitizeErrorMessage(err)
    );
  }
  return onUploadCompleted({ blob, tokenPayload, sidecarPathname });
}

/**
 * Hook called prior to issuing client token/presigned URL.
 * Enforces passphrase (if configured), file extension, size limit, random suffix, prefix, and metadata payload.
 */
export async function onBeforeGenerateToken(pathname, clientPayload, multipart) {
  // 1. Enforce single-file restriction (no multipart)
  if (multipart) {
    throw new Error('Multipart uploads are forbidden. Submissions must be standalone files under 5 MB.');
  }

  // 2. Storage prefix and path traversal guardrails
  if (!pathname || typeof pathname !== 'string' || !pathname.startsWith(SUBMISSION_PREFIX)) {
    throw new Error(`Forbidden pathname: must be stored under ${SUBMISSION_PREFIX}`);
  }

  if (pathname.includes('..') || pathname.includes('\\')) {
    throw new Error('Forbidden pathname: path traversal sequences are not permitted.');
  }

  // 3. Strict file extension validation
  const lowerPath = pathname.toLowerCase();
  if (!lowerPath.endsWith('.html') && !lowerPath.endsWith('.htm')) {
    throw new Error('Invalid file type: only standalone .html / .htm files are allowed.');
  }

  // 4. Passphrase check if UPLOAD_PASSPHRASE is set in environment
  const configuredPassphrase = process.env.UPLOAD_PASSPHRASE?.trim();
  let parsedClientPayload = {};

  if (typeof clientPayload === 'string') {
    try {
      parsedClientPayload = JSON.parse(clientPayload);
    } catch {
      parsedClientPayload = {};
    }
  } else if (clientPayload && typeof clientPayload === 'object') {
    parsedClientPayload = clientPayload;
  }

  if (configuredPassphrase) {
    const providedPassphrase = (parsedClientPayload.passphrase || '').trim();
    if (!providedPassphrase || providedPassphrase !== configuredPassphrase) {
      throw new Error('Unauthorized: invalid or missing curator passphrase.');
    }
  }

  // 5. Extract metadata for completion log and sidecar (never persist passphrase)
  const authorName = (parsedClientPayload.name || parsedClientPayload.authorName || '').trim();
  const designName = (parsedClientPayload.designName || '').trim();
  const curatorNote = (parsedClientPayload.note || parsedClientPayload.curatorNote || '').trim();
  const originalFilename = (parsedClientPayload.originalFilename || '').trim();

  const tokenPayloadObj = {
    name: authorName || undefined,
    designName: designName || undefined,
    note: curatorNote || undefined,
    originalFilename: originalFilename || undefined,
    submittedAt: new Date().toISOString(),
  };

  return {
    allowedContentTypes: ALLOWED_CONTENT_TYPES,
    maximumSizeInBytes: MAX_UPLOAD_FILE_SIZE,
    addRandomSuffix: true,
    access: 'private',
    tokenPayload: JSON.stringify(tokenPayloadObj),
  };
}

/**
 * Runtime OIDC lives on the Function request header, not in env.local.
 * At runtime Vercel sets `x-vercel-oidc-token`; `VERCEL_OIDC_TOKEN` is mainly
 * a build/dev fallback. issueSignedToken/put must receive this explicitly.
 */
export function getOidcTokenFromRequest(request) {
  if (!request || !request.headers) return undefined;

  let headerValue;
  if (typeof request.headers.get === 'function') {
    headerValue = request.headers.get('x-vercel-oidc-token');
  } else {
    const raw = request.headers['x-vercel-oidc-token'];
    headerValue = Array.isArray(raw) ? raw[0] : raw;
  }

  const fromHeader = typeof headerValue === 'string' ? headerValue.trim() : '';
  if (fromHeader) return fromHeader;

  const fromEnv = typeof process.env.VERCEL_OIDC_TOKEN === 'string'
    ? process.env.VERCEL_OIDC_TOKEN.trim()
    : '';
  return fromEnv || undefined;
}

function blobAuthOptions(request) {
  const oidcToken = getOidcTokenFromRequest(request);
  const storeId = typeof process.env.BLOB_STORE_ID === 'string'
    ? process.env.BLOB_STORE_ID.trim()
    : '';
  return {
    ...(storeId ? { storeId } : {}),
    ...(oidcToken ? { oidcToken } : {}),
  };
}

/**
 * Bridges handleUploadPresigned with @vercel/blob issueSignedToken.
 */
export async function getSignedToken(pathname, clientPayload, multipart, auth = {}) {
  const urlOptions = await onBeforeGenerateToken(pathname, clientPayload, multipart);

  const token = await issueSignedToken({
    pathname,
    operations: ['put'],
    maximumSizeInBytes: urlOptions.maximumSizeInBytes,
    allowedContentTypes: urlOptions.allowedContentTypes,
    storeId: auth.storeId || process.env.BLOB_STORE_ID,
    ...(auth.oidcToken ? { oidcToken: auth.oidcToken } : {}),
  });

  return {
    token,
    urlOptions: {
      allowedContentTypes: urlOptions.allowedContentTypes,
      maximumSizeInBytes: urlOptions.maximumSizeInBytes,
      addRandomSuffix: true,
      allowOverwrite: false,
      access: 'private',
      tokenPayload: urlOptions.tokenPayload,
    },
  };
}

/**
 * Callback triggered by Vercel Blob webhook when file upload finishes.
 * Logs intake record for the owner without modifying catalog or public files.
 */
export async function onUploadCompleted({ blob, tokenPayload, sidecarPathname } = {}) {
  try {
    const meta = parseTokenPayload(tokenPayload);
    const metadataPathname = sidecarPathname || getSidecarPathname(blob?.pathname) || null;

    const intakeRecord = {
      event: 'upload.completed',
      status: 'received',
      pathname: blob?.pathname || null,
      metadataPathname,
      url: blob?.url || null,
      downloadUrl: blob?.downloadUrl || null,
      size: typeof blob?.size === 'number' ? blob.size : null,
      contentType: blob?.contentType || 'text/html',
      uploadedAt: blob?.uploadedAt || new Date().toISOString(),
      metadata: {
        authorName: meta?.name || meta?.authorName || 'Anonymous',
        designName: meta?.designName || 'Untitled',
        note: meta?.note || meta?.curatorNote || '(none)',
        originalFilename: meta?.originalFilename || null,
        submittedAt: meta?.submittedAt || null,
      },
    };

    console.log('[Style Tiles Intake] Submission received:', JSON.stringify(intakeRecord, null, 2));
    return intakeRecord;
  } catch (err) {
    console.error('[Style Tiles Intake] Error in onUploadCompleted handler:', err);
    return null;
  }
}

function sanitizeErrorMessage(error) {
  if (!error) return 'Upload request failed';
  const msg = error instanceof Error ? error.message : String(error);
  return msg.replace(/[A-Za-z0-9+/=]{30,}/g, '[REDACTED]');
}

async function parseRequestBody(request) {
  if (typeof request.json === 'function') {
    return await request.json();
  }
  if (request.body) {
    if (typeof request.body === 'string') {
      try {
        return JSON.parse(request.body);
      } catch {
        return {};
      }
    }
    return request.body;
  }
  if (typeof request.text === 'function') {
    const text = await request.text();
    return text ? JSON.parse(text) : {};
  }
  if (typeof request[Symbol.asyncIterator] === 'function') {
    try {
      const chunks = [];
      for await (const chunk of request) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      if (chunks.length > 0) {
        const raw = Buffer.concat(chunks).toString('utf8');
        return raw ? JSON.parse(raw) : {};
      }
    } catch {
      return {};
    }
  }
  return {};
}

function getContentType(request) {
  if (!request || !request.headers) return '';
  if (typeof request.headers.get === 'function') {
    return request.headers.get('content-type') || '';
  }
  const raw = request.headers['content-type'];
  return Array.isArray(raw) ? raw[0] || '' : raw || '';
}

function formValue(form, ...keys) {
  for (const key of keys) {
    const value = form.get(key);
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
}

/**
 * Browser FormData intake: file is written by this Function with OIDC.
 * Avoids browser→Blob presigned PUTs, which fail without a read-write token.
 */
export async function handleFileUpload(request) {
  if (typeof request.formData !== 'function') {
    return Response.json({ error: 'Upload form could not be read.' }, { status: 400 });
  }

  const form = await request.formData();
  const file = form.get('file');

  if (!file || typeof file === 'string' || typeof file.name !== 'string') {
    return Response.json({ error: 'Choose an .html design file first.' }, { status: 400 });
  }

  const originalName = file.name;
  const lower = originalName.toLowerCase();
  if (!lower.endsWith('.html') && !lower.endsWith('.htm')) {
    return Response.json(
      { error: 'Invalid file type: only standalone .html / .htm files are allowed.' },
      { status: 400 }
    );
  }

  if (typeof file.size === 'number' && file.size > MAX_UPLOAD_FILE_SIZE) {
    return Response.json(
      { error: `File exceeds maximum allowed size of ${MAX_UPLOAD_FILE_SIZE} bytes (5 MB).` },
      { status: 400 }
    );
  }

  const authorName = formValue(form, 'name', 'authorName');
  const designName = formValue(form, 'designName');
  const note = formValue(form, 'note', 'curatorNote');
  const passphrase = formValue(form, 'passphrase');
  const pathname = getForcedPathname(originalName);
  const clientPayload = JSON.stringify({
    passphrase,
    name: authorName,
    designName,
    note,
    originalFilename: originalName,
  });

  const tokenOptions = await onBeforeGenerateToken(pathname, clientPayload, false);
  const auth = blobAuthOptions(request);
  const blob = await put(pathname, file, {
    access: 'private',
    addRandomSuffix: true,
    allowOverwrite: false,
    contentType: file.type && ALLOWED_CONTENT_TYPES.includes(file.type)
      ? file.type
      : 'text/html',
    ...auth,
  });

  const intake = await persistSidecarAndComplete({
    blob,
    tokenPayload: tokenOptions.tokenPayload,
    originalFilename: originalName,
    auth,
  });

  return Response.json({
    ok: true,
    pathname: blob.pathname,
    metadataPathname: intake?.metadataPathname || getSidecarPathname(blob.pathname),
  });
}

/**
 * Vercel Serverless Function POST Handler for /api/upload
 */
export async function POST(request) {
  try {
    if (request.method && request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    if (getContentType(request).includes('multipart/form-data')) {
      return await handleFileUpload(request);
    }

    const body = await parseRequestBody(request);
    if (!body || typeof body !== 'object') {
      return Response.json({ error: 'Missing request body' }, { status: 400 });
    }

    // Only allow expected Blob client operations
    if (body.type !== 'blob.generate-presigned-url' && body.type !== 'blob.upload-completed') {
      return Response.json({ error: 'Unsupported operation type' }, { status: 400 });
    }

    // If generating a presigned URL, enforce pathname sanitization, prefixing, and constraints
    if (body.type === 'blob.generate-presigned-url') {
      if (!body.payload || typeof body.payload !== 'object') {
        return Response.json({ error: 'Missing event payload' }, { status: 400 });
      }

      if (body.payload.multipart) {
        return Response.json(
          { error: 'Multipart uploads are forbidden. Standalone design files must be under 5 MB.' },
          { status: 400 }
        );
      }

      const clientPathname = body.payload.pathname;
      if (!clientPathname || typeof clientPathname !== 'string') {
        return Response.json({ error: 'Filename is required' }, { status: 400 });
      }

      const lower = clientPathname.toLowerCase();
      if (!lower.endsWith('.html') && !lower.endsWith('.htm')) {
        return Response.json(
          { error: 'Invalid file type: only standalone .html / .htm files are allowed.' },
          { status: 400 }
        );
      }

      if (body.payload.maximumSizeInBytes && Number(body.payload.maximumSizeInBytes) > MAX_UPLOAD_FILE_SIZE) {
        return Response.json(
          { error: `File exceeds maximum allowed size of ${MAX_UPLOAD_FILE_SIZE} bytes (5 MB).` },
          { status: 400 }
        );
      }

      // Enforce submissions/YYYY-MM-DD/<sanitized-filename>
      body.payload.pathname = getForcedPathname(clientPathname);

      // Force private access and random suffix guardrails
      body.payload.access = 'private';
      body.payload.addRandomSuffix = true;
      body.payload.maximumSizeInBytes = MAX_UPLOAD_FILE_SIZE;
      body.payload.allowedContentTypes = ALLOWED_CONTENT_TYPES;
    }

    const auth = blobAuthOptions(request);
    const jsonResponse = await handleUploadPresigned({
      body,
      request,
      webhookPublicKey: process.env.BLOB_WEBHOOK_PUBLIC_KEY,
      getSignedToken: (pathname, clientPayload, multipart) =>
        getSignedToken(pathname, clientPayload, multipart, auth),
      onUploadCompleted: ({ blob, tokenPayload }) =>
        persistSidecarAndComplete({ blob, tokenPayload, auth }),
    });

    return Response.json({
      ...jsonResponse,
      ...(body.type === 'blob.generate-presigned-url' ? { pathname: body.payload.pathname } : {}),
    });
  } catch (error) {
    const message = sanitizeErrorMessage(error);
    return Response.json({ error: message }, { status: 400 });
  }
}

async function incomingMessageToRequest(req) {
  const protoHeader = req.headers && req.headers['x-forwarded-proto'];
  const proto = (Array.isArray(protoHeader) ? protoHeader[0] : protoHeader) || 'https';
  const host = (req.headers && req.headers.host) || 'localhost';
  const url = `${proto}://${host}${req.url || '/api/upload'}`;
  const chunks = [];
  if (req[Symbol.asyncIterator]) {
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
  }
  const body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers || {})) {
    if (value == null) continue;
    headers.set(key, Array.isArray(value) ? value.join(', ') : String(value));
  }
  const method = req.method || 'POST';
  return new Request(url, {
    method,
    headers,
    body: method === 'GET' || method === 'HEAD' ? undefined : body,
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (res && (typeof res.status === 'function' || typeof res.writeHead === 'function')) {
    const webRequest = typeof req.formData === 'function' || typeof req.headers?.get === 'function'
      ? req
      : await incomingMessageToRequest(req);
    const webResponse = await POST(webRequest);
    const data = await webResponse.json();
    if (typeof res.status === 'function') {
      return res.status(webResponse.status).json(data);
    }
    res.writeHead(webResponse.status, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(data));
  }
  return POST(req);
}
