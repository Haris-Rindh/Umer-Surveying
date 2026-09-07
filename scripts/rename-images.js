import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.resolve(rootDir, 'images');
const publicDir = path.resolve(rootDir, 'public');
const publicImagesDir = path.resolve(publicDir, 'images');

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

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

let count = 0;
for (const [oldName, kebabName] of Object.entries(imageMap)) {
  const oldPath = path.join(imagesDir, oldName);
  const kebabInImages = path.join(imagesDir, kebabName);
  const publicDest = path.join(publicImagesDir, kebabName);

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, publicDest);
    if (oldName !== kebabName && !fs.existsSync(kebabInImages)) {
      fs.renameSync(oldPath, kebabInImages);
    }
    count++;
  } else if (fs.existsSync(kebabInImages)) {
    fs.copyFileSync(kebabInImages, publicDest);
    count++;
  }
}

console.log(`Successfully normalized and verified ${count} images in kebab-case.`);
