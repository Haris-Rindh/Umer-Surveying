import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Active, pruned and optimized image set (12 images)
const activeImages = [
  'commercial-measurements.jpg',
  'farooq.png',
  'gis.png',
  'jica.jpg',
  'mr-nazar.png',
  'survey.jpg',
  'topographic-map-of-jica.jpg',
  'topography-202278.webp',
  'umer-surveying.png',
  'umer-surveying-survey.jpg',
  'urban-planning-survey.jpg',
  'yamashita.jpg'
];

function setupStaticAssets() {
  const imagesDir = path.resolve(__dirname, 'images');
  const publicDir = path.resolve(__dirname, 'public');
  const publicImagesDir = path.resolve(publicDir, 'images');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  // Favicon
  const faviconSrc = path.resolve(__dirname, 'custom_favicon.svg');
  const faviconDest = path.resolve(publicDir, 'custom_favicon.svg');
  if (fs.existsSync(faviconSrc)) {
    fs.copyFileSync(faviconSrc, faviconDest);
  }

  // Sync active images between images/ and public/images/
  if (fs.existsSync(imagesDir)) {
    for (const imgName of activeImages) {
      const srcInImages = path.join(imagesDir, imgName);
      const destInPublic = path.join(publicImagesDir, imgName);

      if (fs.existsSync(srcInImages) && !fs.existsSync(destInPublic)) {
        fs.copyFileSync(srcInImages, destInPublic);
      } else if (fs.existsSync(destInPublic) && !fs.existsSync(srcInImages)) {
        fs.copyFileSync(destInPublic, srcInImages);
      }
    }
  }
}

// Run setup immediately on load
setupStaticAssets();

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 5173,
    open: false
  }
});
