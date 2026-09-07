import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

let errors = [];
let passes = [];

function check(desc, condition) {
  if (condition) {
    passes.push(desc);
  } else {
    errors.push(desc);
  }
}

console.log('--- RUNNING DEEP SYSTEM VERIFICATION SUITE ---');

// 1. Check Images in public/images and dist/images
const expectedImages = [
  'agriculture-land-measurements.webp',
  'commercial-measurements.jpg',
  'contouring-1.webp',
  'cost-estimation.webp',
  'farooq.svg',
  'gis.png',
  'kmlkmz-formatting.webp',
  'land-dispute-resolution.webp',
  'mr-nazar.svg',
  'property-valuation.webp',
  'quantity-estimation.webp',
  'real-estate-consultancy.webp',
  'residential-land-measurements.webp',
  'survey.jpg',
  'surveyor-course.webp',
  'topographic-map-of-jica.jpg',
  'topographic-surveying.webp',
  'umer-surveying.png',
  'umer-surveying-survey.jpg',
  'urban-planning-survey.jpg',
  'about2.png',
  'herosection.jpg',
  'jica.jpg',
  'topography-202278.webp',
  'yamashita.jpg'
];

for (const img of expectedImages) {
  check(`public/images/${img} exists`, fs.existsSync(path.join(rootDir, 'public/images', img)));
  check(`dist/images/${img} exists in production build`, fs.existsSync(path.join(rootDir, 'dist/images', img)));
}

// 2. Check no spaces in images/ directory
const imagesDirFiles = fs.readdirSync(path.join(rootDir, 'images'));
const filesWithSpaces = imagesDirFiles.filter(f => f.includes(' '));
check('No image filenames contain spaces in images/', filesWithSpaces.length === 0);

// 3. Check design tokens
const tokensCss = fs.readFileSync(path.join(rootDir, 'src/tokens.css'), 'utf-8');
check('Design token --paper is #E7E4D9', tokensCss.includes('--paper: #E7E4D9;'));
check('Design token --ink is #131E29', tokensCss.includes('--ink: #131E29;'));
check('Design token --blueprint is #1C3F60', tokensCss.includes('--blueprint: #1C3F60;'));
check('Design token --flag-orange is #C4592B', tokensCss.includes('--flag-orange: #C4592B;'));
check('Design token --contour is #4A6B5A', tokensCss.includes('--contour: #4A6B5A;'));
check('Design token --brass is #A8823C', tokensCss.includes('--brass: #A8823C;'));
check('Design token --spine-offset is 64px', tokensCss.includes('--spine-offset: 64px;'));
check('Design token --spine-offset-mobile is 24px', tokensCss.includes('--spine-offset-mobile: 24px;'));
check('Design token --radius is 0', tokensCss.includes('--radius: 0;'));
check('Reduced motion query handled', tokensCss.includes('prefers-reduced-motion'));
check('Focus-visible states handled', tokensCss.includes(':focus-visible'));

// 4. Check Hero animation timing
const heroCss = fs.readFileSync(path.join(rootDir, 'src/components/Hero.css'), 'utf-8');
check('Hero reveal animation duration is under 800ms', heroCss.includes('0.5s cubic-bezier') && heroCss.includes('0.15s'));

// 5. Check Forbidden Buzzwords in copy
const forbidden = ['unlock', 'seamless', 'elevate', 'cutting-edge'];
const filesToCheck = [
  'src/data/services.js',
  'src/data/founders.js',
  'src/data/projects.js',
  'src/data/posts.js',
  'src/pages/Home.jsx',
  'src/pages/Portfolio.jsx',
  'src/pages/Blog.jsx'
];

for (const relPath of filesToCheck) {
  const content = fs.readFileSync(path.join(rootDir, relPath), 'utf-8').toLowerCase();
  for (const word of forbidden) {
    check(`File ${relPath} does not contain filler word "${word}"`, !content.includes(word));
  }
}

// 6. Check JSON-LD in index.html
const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
check('index.html contains LocalBusiness schema', indexHtml.includes('"@type": "LocalBusiness"'));
check('index.html contains geodetic coordinates 30.2447 / 71.4923', indexHtml.includes('30.2447') && indexHtml.includes('71.4923'));
check('index.html contains Multan address', indexHtml.includes('Model Town A'));
check('index.html contains 24/7 hours', indexHtml.includes('00:00') && indexHtml.includes('23:59'));

// 7. Check SEO hook unique titles and descriptions
const seoJs = fs.readFileSync(path.join(rootDir, 'src/utils/seo.js'), 'utf-8');
check('SEO config has unique home title', seoJs.includes('home:'));
check('SEO config has unique portfolio title', seoJs.includes('portfolio:'));
check('SEO config has unique blog title', seoJs.includes('blog:'));

// 8. Check Removed Reference Codes (SVC-xx, SEAL-xx, Hero datum)
const servicesJs = fs.readFileSync(path.join(rootDir, 'src/data/services.js'), 'utf-8');
check('src/data/services.js does not contain SVC- codes', !servicesJs.includes('SVC-'));

const foundersJs = fs.readFileSync(path.join(rootDir, 'src/data/founders.js'), 'utf-8');
check('src/data/founders.js does not contain SEAL- tags', !foundersJs.includes('SEAL-'));

const heroJsx = fs.readFileSync(path.join(rootDir, 'src/components/Hero.jsx'), 'utf-8');
check('Hero.jsx does not contain datum string', !heroJsx.includes('DATUM: WGS 84 / SURVEY OF PAKISTAN BENCHMARK'));
check('Hero.jsx retains coordinate mark 30.2447° N and 71.4923° E', heroJsx.includes('30.2447° N') && heroJsx.includes('71.4923° E'));

// 9. Check Removed Eyebrow Labels (// style)
const homeJsx = fs.readFileSync(path.join(rootDir, 'src/pages/Home.jsx'), 'utf-8');
check('Home.jsx does not contain LEGEND REGISTER eyebrow', !homeJsx.includes('LEGEND REGISTER'));
check('Home.jsx does not contain FIELD ACADEMY eyebrow', !homeJsx.includes('FIELD ACADEMY'));
check('Home.jsx does not contain CADASTRAL RECONNAISSANCE eyebrow', !homeJsx.includes('CADASTRAL RECONNAISSANCE'));
check('Home.jsx does not contain PRINCIPALS REGISTER eyebrow', !homeJsx.includes('PRINCIPALS REGISTER'));
check('Hero.jsx does not contain FIELD PLAT DISPATCH eyebrow', !heroJsx.includes('FIELD PLAT DISPATCH'));

// 10. Check Service Row action button
const legendRowJsx = fs.readFileSync(path.join(rootDir, 'src/components/LegendRow.jsx'), 'utf-8');
check('LegendRow.jsx contains "Ask about this service."', legendRowJsx.includes('Ask about this service.'));
check('LegendRow.jsx does not contain SPECIFICATION button', !legendRowJsx.includes('SPECIFICATION') && !legendRowJsx.includes('THQUIRE'));

// 11. Check Unified Primary CTA
check('Hero.jsx uses unified primary CTA "Request a survey consultation"', heroJsx.includes('Request a survey consultation'));
check('Home.jsx uses unified primary CTA "Request a survey consultation"', homeJsx.includes('Request a survey consultation'));

// 12. Check index.html has no merge conflict markers and single contact section
check('index.html has no git conflict markers', !indexHtml.includes('<<<<<<<') && !indexHtml.includes('=======') && !indexHtml.includes('>>>>>>>'));
check('index.html has only one body element', (indexHtml.match(/<body/g) || []).length === 1);

console.log(`\nPASSED CHECKS: ${passes.length}`);
if (errors.length > 0) {
  console.error(`FAILED CHECKS (${errors.length}):`);
  errors.forEach(e => console.error(`  ✕ ${e}`));
  process.exit(1);
} else {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
}
