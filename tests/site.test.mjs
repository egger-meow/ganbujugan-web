import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

console.log('Testing static build in:', distDir);

// 1. Verify all routes exist
const requiredFiles = [
  'index.html',
  '404.html',
  'download/index.html',
  'support/index.html',
  'privacy/index.html',
  'terms/index.html',
  'account-deletion/index.html',
  'sitemap-index.xml',
  'robots.txt',
];

for (const file of requiredFiles) {
  const filePath = path.join(distDir, file);
  assert.ok(fs.existsSync(filePath), `Required build artifact missing: ${file}`);
  const content = fs.readFileSync(filePath, 'utf-8');
  assert.ok(content.length > 50, `File is unexpectedly empty or short: ${file}`);
  console.log(`✓ Verified route: ${file} (${content.length} bytes)`);
}

// 2. Verify Canonical & QR Code URL
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const downloadHtml = fs.readFileSync(path.join(distDir, 'download/index.html'), 'utf-8');

assert.ok(
  indexHtml.includes('https://dare2jo.jjmowlab.com/'),
  'Canonical URL missing from index.html'
);
assert.ok(
  downloadHtml.includes('https://dare2jo.jjmowlab.com/download'),
  'Download URL missing from download page'
);
console.log('✓ Verified canonical URLs and download target');

// 3. Verify no fake store URLs
assert.ok(
  !indexHtml.includes('apps.apple.com/fake'),
  'Forbidden fake store link found in index.html'
);
assert.ok(
  !downloadHtml.includes('apps.apple.com/fake'),
  'Forbidden fake store link found in download.html'
);
console.log('✓ Verified zero fake store links');

// 4. Verify no client-side tracking scripts
assert.ok(
  !indexHtml.includes('googletagmanager.com') && !indexHtml.includes('connect.facebook.net'),
  'Third-party tracker detected in HTML!'
);
console.log('✓ Verified privacy fidelity: zero third-party tracking scripts');

// 5. Verify tutorial steps and mascot image files exist
const tutorialImgs = [
  'images/tutorial_steps/1.png',
  'images/tutorial_steps/2.png',
  'images/tutorial_steps/3.png',
  'images/tutorial_steps/4.png',
  'images/tutorial_steps/5.png',
  'images/tutorial_steps/6.png',
  'images/icon.png',
  'images/login_screen.png',
];

for (const img of tutorialImgs) {
  const imgPath = path.join(distDir, img);
  assert.ok(fs.existsSync(imgPath), `Required image missing from build: ${img}`);
}
console.log(`✓ Verified ${tutorialImgs.length} core product & tutorial images exist in dist`);

console.log('\nAll static site tests passed successfully! ✨');
