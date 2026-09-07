import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

// Image alias lookup table: kebab-case to legacy name with spaces
const imageAliasMap = {
  'agriculture-land-measurements.webp': 'Agriculture Land Measurements.webp',
  'commercial-measurements.jpg': 'Commercial Measurements.jpg',
  'contouring-1.webp': 'Contouring 1.webp',
  'cost-estimation.webp': 'Cost Estimation.webp',
  'farooq.svg': 'Farooq.svg',
  'gis.png': 'GIS.png',
  'kmlkmz-formatting.webp': 'KMLKMZ Formatting.webp',
  'land-dispute-resolution.webp': 'Land Dispute Resolution.webp',
  'mr-nazar.svg': 'Mr.Nazar.svg',
  'property-valuation.webp': 'Property Valuation.webp',
  'quantity-estimation.webp': 'Quantity Estimation.webp',
  'real-estate-consultancy.webp': 'Real Estate Consultancy.webp',
  'residential-land-measurements.webp': 'Residential Land measurements.webp',
  'survey.jpg': 'Survey.jpg',
  'surveyor-course.webp': 'Surveyor course.webp',
  'topographic-map-of-jica.jpg': 'Topographic Map of JICA.jpg',
  'topographic-surveying.webp': 'Topographic Surveying.webp',
  'umer-surveying.png': 'UMER SURVEYING.png',
  'umer-surveying-survey.jpg': 'Umer Surveying Survey.jpg',
  'urban-planning-survey.jpg': 'Urban Planning Survey.jpg',
  'about2.png': 'about2.png',
  'herosection.jpg': 'herosection.jpg',
  'jica.jpg': 'jica.jpg',
  'topography-202278.webp': 'topography-202278.webp',
  'yamashita.jpg': 'yamashita.jpg'
};

function kebabImagePlugin() {
  return {
    name: 'kebab-image-resolver',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/images/')) {
          const rawFilename = decodeURIComponent(req.url.slice('/images/'.length).split('?')[0]);
          const candidatePath = path.resolve(__dirname, 'images', rawFilename);
          
          if (fs.existsSync(candidatePath)) {
            return next();
          }
          
          const legacyName = imageAliasMap[rawFilename.toLowerCase()];
          if (legacyName) {
            const legacyPath = path.resolve(__dirname, 'images', legacyName);
            if (fs.existsSync(legacyPath)) {
              const ext = path.extname(legacyPath).toLowerCase();
              const mimeTypes = {
                '.webp': 'image/webp',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.svg': 'image/svg+xml'
              };
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              return fs.createReadStream(legacyPath).pipe(res);
            }
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), kebabImagePlugin()],
  publicDir: false, // We serve static assets from root or images via middleware
  server: {
    port: 5173,
    open: false
  }
});
