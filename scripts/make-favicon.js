import fs from 'node:fs';
import path from 'node:path';

const pngPath = path.resolve('public/images/umer-surveying.png');
const pngData = fs.readFileSync(pngPath).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="32" fill="#FFFFFF" />
  <circle cx="32" cy="32" r="31" fill="none" stroke="#E0E0DC" stroke-width="1" />
  <image href="data:image/png;base64,${pngData}" x="4" y="4" width="56" height="56" />
</svg>`;

fs.writeFileSync(path.resolve('public/custom_favicon.svg'), svg);
fs.writeFileSync(path.resolve('custom_favicon.svg'), svg);
console.log('FAVICON_UPDATED_WITH_LOGO');
