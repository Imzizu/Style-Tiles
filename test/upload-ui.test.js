import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('upload.html contains #upload-intake-intro wrapping desk header and specs', () => {
  const html = fs.readFileSync(path.resolve('upload.html'), 'utf8');
  assert.match(html, /<div id="upload-intake-intro" class="upload-intake-intro">/);
  assert.match(html, /class="upload-desk-header"/);
  assert.match(html, /class="upload-specs-callout"/);
});

test('upload.html receipt has copy docket button and note row', () => {
  const html = fs.readFileSync(path.resolve('upload.html'), 'utf8');
  assert.match(html, /id="btn-copy-docket"/);
  assert.match(html, /id="receipt-docket-id"/);
  assert.match(html, /id="receipt-note-row"/);
  assert.match(html, /id="receipt-curator-note"/);
  assert.match(html, /id="btn-send-another"/);
});

test('styles.css contains unboxed receipt, theme-aware badge tokens, and scroll-margin', () => {
  const css = fs.readFileSync(path.resolve('styles.css'), 'utf8');
  assert.match(css, /\.upload-desk-card\s*\{[^}]*scroll-margin-top/s);
  assert.match(css, /\.upload-intake-intro\[hidden\]\s*\{[^}]*display:\s*none\s*!important/s);
  assert.match(css, /\.upload-dropzone\.has-file/);
  assert.match(css, /\.receipt-docket-copy-btn/);
  assert.match(css, /\.receipt-spec-row-full/);
  assert.match(css, /--badge-success-border:/);
  assert.match(css, /--badge-success-ink:/);
});

test('all theme packs define badge success border and ink variables', () => {
  const themes = [
    'themes/archival-drafting.css',
    'themes/monolithic-hyper-editorial.css',
    'themes/neo-editorial-poster-brutalism.css',
    'themes/editorial-noir.css'
  ];

  for (const t of themes) {
    const content = fs.readFileSync(path.resolve(t), 'utf8');
    assert.match(content, /--badge-success-bg:/, `${t} must have --badge-success-bg`);
    assert.match(content, /--badge-success-border:/, `${t} must have --badge-success-border`);
    assert.match(content, /--badge-success-ink:/, `${t} must have --badge-success-ink`);
  }
});

test('upload.js showToast adds and removes .show class for animation', () => {
  const js = fs.readFileSync(path.resolve('upload.js'), 'utf8');
  assert.match(js, /toast\.classList\.add\("show"\)/);
  assert.match(js, /toast\.classList\.remove\("show"\)/);
});

test('upload.js renderReceipt hides intake intro and problem alert, populates curator note', () => {
  const js = fs.readFileSync(path.resolve('upload.js'), 'utf8');
  assert.match(js, /intakeIntro\.hidden = true/);
  assert.match(js, /hideProblemAlert\(\)/);
  assert.match(js, /receipt-note-row/);
  assert.match(js, /receipt-curator-note/);
});

test('upload.js resetFormToRest restores intake intro and unhides form', () => {
  const js = fs.readFileSync(path.resolve('upload.js'), 'utf8');
  assert.match(js, /intakeIntro\.hidden = false/);
  assert.match(js, /form\.reset\(\)/);
  assert.match(js, /form\.hidden = false/);
  assert.match(js, /receiptView\.hidden = true/);
});

test('upload.html contains "what happens to your design" callout in upload desk intake intro', () => {
  const html = fs.readFileSync(path.resolve('upload.html'), 'utf8');
  assert.match(html, /<div class="upload-intake-grid">[\s\S]*WHAT HAPPENS TO YOUR DESIGN[\s\S]*<\/div>/);
  assert.match(html, /WHAT HAPPENS TO YOUR DESIGN/i);
  assert.match(html, /The HTML file is reviewed and the design is extracted from the file/i);
  assert.match(html, /The file is rewritten to match the rules of a style tile showcase/i);
  assert.match(html, /A style tile is made based on that design/i);
  assert.match(html, /Your handle is credited if you provide one/i);
});

test('styles.css contains styling and responsiveness for upload-intake-grid', () => {
  const css = fs.readFileSync(path.resolve('styles.css'), 'utf8');
  assert.match(css, /\.upload-intake-grid\s*\{[^}]*grid-template-columns:\s*1fr 1fr/s);
  assert.match(css, /@media\s*\(max-width:\s*768px\)[\s\S]*?\.upload-intake-grid\s*\{[^}]*grid-template-columns:\s*1fr/);
});

