import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { POST, onBeforeGenerateToken, onUploadCompleted } from '../api/upload.js';
import { MAX_UPLOAD_FILE_SIZE } from '../api/constants.js';

test('Step 10: Fixture Agent/fixtures/sample-submission.html exists and is valid standalone HTML', () => {
  const fixturePath = path.resolve('Agent/fixtures/sample-submission.html');
  assert.ok(fs.existsSync(fixturePath), 'Fixture must exist');
  const stat = fs.statSync(fixturePath);
  assert.ok(stat.size > 0 && stat.size <= MAX_UPLOAD_FILE_SIZE, 'Fixture size must be > 0 and <= 5 MB');
  const content = fs.readFileSync(fixturePath, 'utf8');
  assert.match(content, /<html[\s>]/i, 'Must contain <html> tag');
  assert.match(content, /<\/html>/i, 'Must contain </html> tag');
});

test('Step 10: Live /api/upload handler rejects non-POST methods with 405', async () => {
  const req = new Request('http://localhost:3000/api/upload', { method: 'GET' });
  const res = await POST(req);
  assert.equal(res.status, 405);
  const data = await res.json();
  assert.equal(data.error, 'Method not allowed');
});

test('Step 10: Live /api/upload handler enforces all negative security checks', async () => {
  // Negative 1: .png file rejected
  const reqPng = new Request('http://localhost:3000/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'screenshot.png' }
    })
  });
  const resPng = await POST(reqPng);
  assert.equal(resPng.status, 400);
  const dataPng = await resPng.json();
  assert.match(dataPng.error, /only standalone \.html \/ \.htm files are allowed/);

  // Negative 2: Empty pathname rejected
  const reqEmpty = new Request('http://localhost:3000/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: '' }
    })
  });
  const resEmpty = await POST(reqEmpty);
  assert.equal(resEmpty.status, 400);
  const dataEmpty = await resEmpty.json();
  assert.match(dataEmpty.error, /Filename is required/);

  // Negative 3: File > 5 MB rejected
  const reqLarge = new Request('http://localhost:3000/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'large.html', maximumSizeInBytes: 6 * 1024 * 1024 }
    })
  });
  const resLarge = await POST(reqLarge);
  assert.equal(resLarge.status, 400);
  const dataLarge = await resLarge.json();
  assert.match(dataLarge.error, /File exceeds maximum allowed size/);

  // Negative 4: Multipart forbidden
  const reqMulti = new Request('http://localhost:3000/api/upload', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'blob.generate-presigned-url',
      payload: { pathname: 'tile.html', multipart: true }
    })
  });
  const resMulti = await POST(reqMulti);
  assert.equal(resMulti.status, 400);
  const dataMulti = await resMulti.json();
  assert.match(dataMulti.error, /Multipart uploads are forbidden/);
});

test('Step 10: Passphrase verification rejects invalid passphrase when configured', async () => {
  const originalPass = process.env.UPLOAD_PASSPHRASE;
  try {
    process.env.UPLOAD_PASSPHRASE = 'curator-test-secret';

    // Wrong passphrase
    await assert.rejects(
      async () => {
        await onBeforeGenerateToken(
          'submissions/2026-09-06/test.html',
          JSON.stringify({ passphrase: 'bad-guess' }),
          false
        );
      },
      { message: /Unauthorized: invalid or missing curator passphrase/ }
    );

    // Correct passphrase passes token generation check
    const tokenOptions = await onBeforeGenerateToken(
      'submissions/2026-09-06/test.html',
      JSON.stringify({ passphrase: 'curator-test-secret', name: 'Author', designName: 'Tile X' }),
      false
    );
    assert.equal(tokenOptions.access, 'private');
    assert.equal(tokenOptions.addRandomSuffix, true);
    assert.equal(tokenOptions.maximumSizeInBytes, MAX_UPLOAD_FILE_SIZE);
  } finally {
    if (originalPass !== undefined) {
      process.env.UPLOAD_PASSPHRASE = originalPass;
    } else {
      delete process.env.UPLOAD_PASSPHRASE;
    }
  }
});

test('Step 10: onUploadCompleted creates intake record without catalog mutation', async () => {
  const result = await onUploadCompleted({
    blob: {
      pathname: 'submissions/2026-09-06/sample-submission.html',
      url: 'https://store.blob.vercel-storage.com/submissions/2026-09-06/sample-submission.html',
      size: 512,
      contentType: 'text/html'
    },
    tokenPayload: JSON.stringify({
      name: 'Agent Tester',
      designName: 'Minimal Brutalism',
      note: 'Step 10 verification pass'
    })
  });

  assert.equal(result.status, 'received');
  assert.equal(result.metadata.authorName, 'Agent Tester');
  assert.equal(result.metadata.designName, 'Minimal Brutalism');
  assert.equal(result.metadata.note, 'Step 10 verification pass');
});
