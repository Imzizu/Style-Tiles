import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  onUploadCompleted,
  getSidecarPathname,
  buildSidecarBody,
} from '../api/upload.js';

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

test('getSidecarPathname pairs the stored HTML pathname with a .meta.json sidecar', () => {
  assert.equal(
    getSidecarPathname('submissions/2026-09-07/mineral-celadon-abc123.html'),
    'submissions/2026-09-07/mineral-celadon-abc123.meta.json'
  );
  assert.equal(
    getSidecarPathname('submissions/2026-09-07/tile-xyz.htm'),
    'submissions/2026-09-07/tile-xyz.meta.json'
  );
  assert.equal(getSidecarPathname('submissions/2026-09-07/tile-xyz.meta.json'), null);
  assert.equal(getSidecarPathname('catalog/tile.html'), null);
  assert.equal(getSidecarPathname('submissions/../secret.html'), null);
  assert.equal(getSidecarPathname(''), null);
});

test('buildSidecarBody stores submitted fields and never includes passphrase', () => {
  const body = buildSidecarBody({
    blob: { pathname: 'submissions/2026-09-07/mineral-celadon-abc123.html' },
    tokenPayload: JSON.stringify({
      name: 'Elena Rostova',
      designName: 'Mineral Celadon',
      note: 'Please credit as @elena',
      originalFilename: 'mineral-celadon.html',
      submittedAt: '2026-09-07T12:00:00.000Z',
      passphrase: 'should-never-appear',
    }),
  });

  assert.equal(body.kind, 'style-tiles.submission-meta');
  assert.equal(body.htmlPathname, 'submissions/2026-09-07/mineral-celadon-abc123.html');
  assert.equal(body.originalFilename, 'mineral-celadon.html');
  assert.equal(body.authorName, 'Elena Rostova');
  assert.equal(body.designName, 'Mineral Celadon');
  assert.equal(body.note, 'Please credit as @elena');
  assert.equal(body.submittedAt, '2026-09-07T12:00:00.000Z');
  assert.equal(Object.hasOwn(body, 'passphrase'), false);
  assert.equal(JSON.stringify(body).includes('should-never-appear'), false);
});

test('buildSidecarBody keeps empty optional fields as empty strings', () => {
  const body = buildSidecarBody({
    blob: { pathname: 'submissions/2026-09-07/untitled-1.html' },
    tokenPayload: '{}',
  });

  assert.equal(body.authorName, '');
  assert.equal(body.designName, '');
  assert.equal(body.note, '');
  assert.equal(body.originalFilename, null);
});

test('onUploadCompleted reports the sidecar pathname next to the HTML blob', async () => {
  const originalLog = console.log;
  let loggedOutput = null;
  console.log = (prefix, data) => {
    loggedOutput = { prefix, data };
  };

  try {
    const result = await onUploadCompleted({
      blob: { pathname: 'submissions/2026-09-07/my-design-abc.html', size: 12 },
      tokenPayload: JSON.stringify({ name: 'Ada' }),
    });

    assert.equal(result.pathname, 'submissions/2026-09-07/my-design-abc.html');
    assert.equal(result.metadataPathname, 'submissions/2026-09-07/my-design-abc.meta.json');
    const parsedLog = JSON.parse(loggedOutput.data);
    assert.equal(parsedLog.metadataPathname, 'submissions/2026-09-07/my-design-abc.meta.json');
  } finally {
    console.log = originalLog;
  }
});
