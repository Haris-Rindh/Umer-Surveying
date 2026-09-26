import { spawn, execSync } from 'node:child_process';
import path from 'node:path';

const server = spawn('npm.cmd', ['run', 'preview'], { shell: true, stdio: 'ignore' });

setTimeout(() => {
  try {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    const screenshotPath = path.resolve('screenshot-mobile.png');
    const cmd = `"${edgePath}" --headless --disable-gpu --screenshot="${screenshotPath}" --window-size=400,2400 http://localhost:4173/`;
    execSync(cmd, { stdio: 'inherit' });
    console.log('MOBILE_SCREENSHOT_SUCCESS');
  } catch (err) {
    console.error('Error taking screenshot:', err.message);
  } finally {
    server.kill();
    process.exit(0);
  }
}, 3000);
