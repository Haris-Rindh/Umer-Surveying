import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outPath = path.resolve(__dirname, '..', 'screenshot.png');

try {
  execFileSync(edgePath, [
    '--headless=new',
    '--disable-gpu',
    `--screenshot=${outPath}`,
    '--window-size=1440,6000',
    'http://localhost:4173/'
  ]);
  console.log('Screenshot saved to', outPath);
} catch (err) {
  console.error('Failed with --headless=new, trying --headless:', err.message);
  try {
    execFileSync(edgePath, [
      '--headless',
      '--disable-gpu',
      `--screenshot=${outPath}`,
      '--window-size=1440,3000',
      'http://localhost:4173/'
    ]);
    console.log('Screenshot saved to', outPath);
  } catch (err2) {
    console.error('Failed with --headless:', err2.message);
  }
}
