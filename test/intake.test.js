import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onUploadCompleted } from '../api/upload.js';

test('onUploadCompleted logs submission intake details with submitter metadata', async () => {
  const originalLog = console.log;
  let loggedOutput = null;
  console.log = (prefix, data) => {
    loggedOutput = { prefix, data };
  };

  try {
    const mockBlob = {
      pathname: 'submissions/2026-09-06/my-design.html',
      url: 'https://store.blob.vercel-storage.com/submissions/2026-09-06/my-design-123.html',
      downloadUrl: 'https://store.blob.vercel-storage.com/submissions/2026-09-06/my-design-123.html?download=1',
      size: 1024,
      contentType: 'text/html',
      uploadedAt: '2026-09-06T23:30:00.000Z',
    };

    const tokenPayload = JSON.stringify({
      name: 'Jane Designer',
      designName: 'Monochrome Bauhaus',
      note: 'Inspired by 1920s print posters.',
      submittedAt: '2026-09-06T23:29:55.000Z',
    });

    const result = await onUploadCompleted({ blob: mockBlob, tokenPayload });

    assert.ok(result);
    assert.equal(result.status, 'received');
    assert.equal(result.pathname, 'submissions/2026-09-06/my-design.html');
    assert.equal(result.size, 1024);
    assert.equal(result.metadata.authorName, 'Jane Designer');
    assert.equal(result.metadata.designName, 'Monochrome Bauhaus');
    assert.equal(result.metadata.note, 'Inspired by 1920s print posters.');
    assert.equal(result.metadata.submittedAt, '2026-09-06T23:29:55.000Z');

    assert.ok(loggedOutput);
    assert.match(loggedOutput.prefix, /Style Tiles Intake/);
    const parsedLog = JSON.parse(loggedOutput.data);
    assert.equal(parsedLog.pathname, 'submissions/2026-09-06/my-design.html');
    assert.equal(parsedLog.metadata.authorName, 'Jane Designer');
  } finally {
    console.log = originalLog;
  }
});

test('onUploadCompleted handles missing or malformed tokenPayload gracefully', async () => {
  const originalLog = console.log;
  let loggedOutput = null;
  console.log = (prefix, data) => {
    loggedOutput = { prefix, data };
  };

  try {
    const mockBlob = {
      pathname: 'submissions/2026-09-06/submission.html',
      url: 'https://store.blob.vercel-storage.com/submissions/2026-09-06/submission.html',
      size: 2048,
    };

    const result = await onUploadCompleted({ blob: mockBlob, tokenPayload: '{ malformed json' });

    assert.ok(result);
    assert.equal(result.pathname, 'submissions/2026-09-06/submission.html');
    assert.equal(result.metadata.authorName, 'Anonymous');
    assert.equal(result.metadata.designName, 'Untitled');
    assert.equal(result.metadata.note, '(none)');
  } finally {
    console.log = originalLog;
  }
});
