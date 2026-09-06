import { handleUploadPresigned } from '@vercel/blob/client';
import { issueSignedToken } from '@vercel/blob';
import {
  MAX_UPLOAD_FILE_SIZE,
  ALLOWED_CONTENT_TYPES,
  SUBMISSION_PREFIX,
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

  // 5. Extract metadata for completion log
  const authorName = (parsedClientPayload.name || parsedClientPayload.authorName || '').trim();
  const designName = (parsedClientPayload.designName || '').trim();
  const curatorNote = (parsedClientPayload.note || parsedClientPayload.curatorNote || '').trim();

  const tokenPayloadObj = {
    name: authorName || undefined,
    designName: designName || undefined,
    note: curatorNote || undefined,
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
 * Bridges handleUploadPresigned with @vercel/blob issueSignedToken.
 */
export async function getSignedToken(pathname, clientPayload, multipart) {
  const urlOptions = await onBeforeGenerateToken(pathname, clientPayload, multipart);

  const token = await issueSignedToken({
    pathname,
    operations: ['put'],
    maximumSizeInBytes: urlOptions.maximumSizeInBytes,
    allowedContentTypes: urlOptions.allowedContentTypes,
    storeId: process.env.BLOB_STORE_ID,
  });

  return {
    token,
    urlOptions,
  };
}

/**
 * Callback triggered by Vercel Blob webhook when file upload finishes.
 * Logs intake record for the owner without modifying catalog or public files.
 */
export async function onUploadCompleted({ blob, tokenPayload }) {
  try {
    let meta = null;
    if (tokenPayload) {
      try {
        meta = typeof tokenPayload === 'string' ? JSON.parse(tokenPayload) : tokenPayload;
      } catch {
        meta = { raw: tokenPayload };
      }
    }

    const intakeRecord = {
      event: 'upload.completed',
      status: 'received',
      pathname: blob?.pathname || null,
      url: blob?.url || null,
      downloadUrl: blob?.downloadUrl || null,
      size: typeof blob?.size === 'number' ? blob.size : null,
      contentType: blob?.contentType || 'text/html',
      uploadedAt: blob?.uploadedAt || new Date().toISOString(),
      metadata: {
        authorName: meta?.name || meta?.authorName || 'Anonymous',
        designName: meta?.designName || 'Untitled',
        note: meta?.note || meta?.curatorNote || '(none)',
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
      return JSON.parse(request.body);
    }
    return request.body;
  }
  if (typeof request.text === 'function') {
    const text = await request.text();
    return text ? JSON.parse(text) : {};
  }
  return {};
}

/**
 * Vercel Serverless Function POST Handler for /api/upload
 */
export async function POST(request) {
  try {
    if (request.method && request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
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

    const jsonResponse = await handleUploadPresigned({
      body,
      request,
      webhookPublicKey: process.env.BLOB_WEBHOOK_PUBLIC_KEY,
      getSignedToken,
      onBeforeGenerateToken,
      onUploadCompleted,
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

export default POST;
