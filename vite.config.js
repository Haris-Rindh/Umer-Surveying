import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const imageMap = {
  'Agriculture Land Measurements.webp': 'agriculture-land-measurements.webp',
  'Commercial Measurements.jpg': 'commercial-measurements.jpg',
  'Contouring 1.webp': 'contouring-1.webp',
  'Cost Estimation.webp': 'cost-estimation.webp',
  'Farooq.svg': 'farooq.svg',
  'GIS.png': 'gis.png',
  'KMLKMZ Formatting.webp': 'kmlkmz-formatting.webp',
  'Land Dispute Resolution.webp': 'land-dispute-resolution.webp',
  'Mr.Nazar.svg': 'mr-nazar.svg',
  'Property Valuation.webp': 'property-valuation.webp',
  'Quantity Estimation.webp': 'quantity-estimation.webp',
  'Real Estate Consultancy.webp': 'real-estate-consultancy.webp',
  'Residential Land measurements.webp': 'residential-land-measurements.webp',
  'Survey.jpg': 'survey.jpg',
  'Surveyor course.webp': 'surveyor-course.webp',
  'Topographic Map of JICA.jpg': 'topographic-map-of-jica.jpg',
  'Topographic Surveying.webp': 'topographic-surveying.webp',
  'UMER SURVEYING.png': 'umer-surveying.png',
  'Umer Surveying Survey.jpg': 'umer-surveying-survey.jpg',
  'Urban Planning Survey.jpg': 'urban-planning-survey.jpg',
  'about2.png': 'about2.png',
  'herosection.jpg': 'herosection.jpg',
  'jica.jpg': 'jica.jpg',
  'topography-202278.webp': 'topography-202278.webp',
  'yamashita.jpg': 'yamashita.jpg'
};

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
  if (fs.existsSync(faviconSrc) && !fs.existsSync(faviconDest)) {
    fs.copyFileSync(faviconSrc, faviconDest);
  }

  // Process all mapped images
  if (fs.existsSync(imagesDir)) {
    for (const [oldName, kebabName] of Object.entries(imageMap)) {
      const oldPath = path.join(imagesDir, oldName);
      const kebabInImages = path.join(imagesDir, kebabName);
      const publicDest = path.join(publicImagesDir, kebabName);

      // 1. Ensure public/images has the kebab-case version
      if (fs.existsSync(oldPath)) {
        fs.copyFileSync(oldPath, publicDest);
        // Rename original in images/ if different
        if (oldName !== kebabName) {
          try {
            if (fs.existsSync(kebabInImages)) {
              fs.unlinkSync(oldPath);
            } else {
              fs.renameSync(oldPath, kebabInImages);
            }
          } catch (e) {
            // Fallback: keep both if file is locked
          }
        }
      } else if (fs.existsSync(kebabInImages)) {
        fs.copyFileSync(kebabInImages, publicDest);
      }
    }

    // Also ensure images/ directory has all files synced in lowercase kebab-case
    const publicFiles = fs.readdirSync(publicImagesDir);
    for (const file of publicFiles) {
      const src = path.join(publicImagesDir, file);
      const dest = path.join(imagesDir, file);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
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
