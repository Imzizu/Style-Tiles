import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  sanitizeFilename,
  getForcedPathname,
  onBeforeGenerateToken,
  POST,
} from '../api/upload.js';
import {
  MAX_UPLOAD_FILE_SIZE,
  ALLOWED_CONTENT_TYPES,
  SUBMISSION_PREFIX,
} from '../api/constants.js';

test('sanitizeFilename removes path separators, strips dots, and enforces .html extension', () => {
  assert.equal(sanitizeFilename('../../../evil.exe'), 'evil.exe.html');
  assert.equal(sanitizeFilename('C:\\Windows\\system32\\calc.exe'), 'calc.exe.html');
  assert.equal(sanitizeFilename('my-design.html'), 'my-design.html');
  assert.equal(sanitizeFilename('my-design.htm'), 'my-design.htm');
  assert.equal(sanitizeFilename('spaced design name.HTML'), 'spaced-design-name.html');
  assert.equal(sanitizeFilename(''), 'submission.html');
  assert.equal(sanitizeFilename(null), 'submission.html');
});

test('getForcedPathname prefixes path with submissions/YYYY-MM-DD/', () => {
  const forced = getForcedPathname('test-file.html');
  assert.match(forced, /^submissions\/\d{4}-\d{2}-\d{2}\/test-file\.html$/);
});

test('onBeforeGenerateToken rejects non-HTML extensions even if client is bypassed', async () => {
  await assert.rejects(
    async () => {
      await onBeforeGenerateToken('submissions/2026-09-06/image.png', '{}', false);
    },
    { message: /only standalone \.html \/ \.htm files are allowed/ }
  );

  await assert.rejects(
    async () => {
      await onBeforeGenerateToken('submissions/2026-09-06/script.js', '{}', false);
    },
    { message: /only standalone \.html \/ \.htm files are allowed/ }
  );
});

test('onBeforeGenerateToken rejects paths outside submissions/ or with path traversal', async () => {
  await assert.rejects(
    async () => {
      await onBeforeGenerateToken('catalog/design.html', '{}', false);
    },
    { message: /Forbidden pathname: must be stored under submissions\// }
  );

  await assert.rejects(
    async () => {
      await onBeforeGenerateToken('submissions/../../etc/passwd.html', '{}', false);
    },
    { message: /path traversal/ }
  );
});

test('onBeforeGenerateToken rejects multipart uploads', async () => {
  await assert.rejects(
    async () => {
      await onBeforeGenerateToken('submissions/2026-09-06/large.html', '{}', true);
    },
    { message: /Multipart uploads are forbidden/ }
  );
});

test('onBeforeGenerateToken enforces maximum size 5MB, private access, and addRandomSuffix: true', async () => {
  const options = await onBeforeGenerateToken('submissions/2026-09-06/valid.html', '{}', false);

  assert.equal(options.maximumSizeInBytes, MAX_UPLOAD_FILE_SIZE);
  assert.equal(options.maximumSizeInBytes, 5 * 1024 * 1024);
  assert.equal(options.access, 'private');
  assert.equal(options.addRandomSuffix, true);
  assert.deepEqual(options.allowedContentTypes, ALLOWED_CONTENT_TYPES);
});

test('onBeforeGenerateToken enforces passphrase only when UPLOAD_PASSPHRASE is configured', async () => {
  const originalEnv = process.env.UPLOAD_PASSPHRASE;

  try {
    // 1. When unset, any passphrase or empty passes
    delete process.env.UPLOAD_PASSPHRASE;
    const resNoPass = await onBeforeGenerateToken('submissions/2026-09-06/test.html', '{}', false);
    assert.ok(resNoPass);

    // 2. When set, missing or wrong passphrase throws
    process.env.UPLOAD_PASSPHRASE = 'secret-curator-code-42';

    await assert.rejects(
      async () => {
        await onBeforeGenerateToken('submissions/2026-09-06/test.html', JSON.stringify({ passphrase: 'wrong' }), false);
      },
      { message: /Unauthorized: invalid or missing curator passphrase/ }
    );

    await assert.rejects(
      async () => {
        await onBeforeGenerateToken('submissions/2026-09-06/test.html', '{}', false);
      },
      { message: /Unauthorized: invalid or missing curator passphrase/ }
    );

    // 3. When correct passphrase provided, it succeeds
    const resCorrect = await onBeforeGenerateToken(
      'submissions/2026-09-06/test.html',
      JSON.stringify({ passphrase: 'secret-curator-code-42' }),
      false
    );
    assert.ok(resCorrect);
  } finally {
    if (originalEnv !== undefined) {
      process.env.UPLOAD_PASSPHRASE = originalEnv;
    } else {
      delete process.env.UPLOAD_PASSPHRASE;
    }
  }
});

test('POST handler rejects non-POST HTTP methods', async () => {
  const req = new Request('http://localhost/api/upload', { method: 'GET' });
  const res = await POST(req);
  assert.equal(res.status, 405);
  const data = await res.json();
  assert.equal(data.error, 'Method not allowed');
});

test('POST handler rejects missing body or unsupported operations', async () => {
  const reqMissing = new Request('http://localhost/api/upload', {
    method: 'POST',
    body: JSON.stringify(null),
    headers: { 'Content-Type': 'application/json' },
  });
  const resMissing = await POST(reqMissing);
  assert.equal(resMissing.status, 400);

  const reqUnsupported = new Request('http://localhost/api/upload', {
    method: 'POST',
    body: JSON.stringify({ type: 'blob.unsupported-operation' }),
    headers: { 'Content-Type': 'application/json' },
  });
  const resUnsupported = await POST(reqUnsupported);
  assert.equal(resUnsupported.status, 400);
  const data = await resUnsupported.json();
  assert.equal(data.error, 'Unsupported operation type');
});

test('POST handler rejects non-HTML filenames in presigned generation request', async () => {
  const req = new Request('http://localhost/api/upload', {
    method: 'POST',
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'malicious.exe' },
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.match(data.error, /only standalone \.html \/ \.htm files are allowed/);
});

test('POST handler rejects multipart requests in presigned generation request', async () => {
  const req = new Request('http://localhost/api/upload', {
    method: 'POST',
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'my-design.html', multipart: true },
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.match(data.error, /Multipart uploads are forbidden/);
});

test('POST handler rejects requests exceeding 5 MB ceiling in presigned generation request', async () => {
  const req = new Request('http://localhost/api/upload', {
    method: 'POST',
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'my-design.html', maximumSizeInBytes: 10 * 1024 * 1024 },
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const res = await POST(req);
  assert.equal(res.status, 400);
  const data = await res.json();
  assert.match(data.error, /File exceeds maximum allowed size/);
});
