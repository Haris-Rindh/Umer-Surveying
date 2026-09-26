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

const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

// 1. Check Active Images in public/images and images
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
  'yamashita.jpg',
  'herosection.jpg',
  'topographic-surveying.webp',
  'hero-slide-1.webp',
  'hero-slide-2.webp',
  'hero-slide-3.webp',
  'hero-slide-4.webp'
];

for (const img of activeImages) {
  check(`public/images/${img} exists`, fs.existsSync(path.join(rootDir, 'public/images', img)));
  check(`images/${img} exists`, fs.existsSync(path.join(rootDir, 'images', img)));
}

// 2. Check Unrendered Images & Bloated SVGs Purged
const purgedAssets = [
  'agriculture-land-measurements.webp',
  'real-estate-consultancy.webp',
  'surveyor-course.webp',
  'about2.png',
  'cost-estimation.webp',
  'residential-land-measurements.webp',
  'land-dispute-resolution.webp',
  'quantity-estimation.webp',
  'contouring-1.webp',
  'property-valuation.webp',
  'kmlkmz-formatting.webp',
  'farooq.svg',
  'mr-nazar.svg'
];

for (const img of purgedAssets) {
  check(`Purged asset public/images/${img} is absent`, !fs.existsSync(path.join(rootDir, 'public/images', img)));
  check(`Purged asset images/${img} is absent`, !fs.existsSync(path.join(rootDir, 'images', img)));
}

// 3. Check Asset Optimization Sizes
const faviconExists = fs.existsSync(path.join(rootDir, 'custom_favicon.svg'));
check(`custom_favicon.svg exists`, faviconExists);
check(`index.html references umer-surveying.png as favicon`, indexHtml.includes('href="/images/umer-surveying.png"'));

const farooqStats = fs.statSync(path.join(rootDir, 'images/farooq.png'));
check(`images/farooq.png is under 60 KB (actual: ${farooqStats.size} bytes)`, farooqStats.size < 61440);

const nazarStats = fs.statSync(path.join(rootDir, 'images/mr-nazar.png'));
check(`images/mr-nazar.png is under 60 KB (actual: ${nazarStats.size} bytes)`, nazarStats.size < 61440);

// 4. Check no spaces in images/ directory
const imagesDirFiles = fs.readdirSync(path.join(rootDir, 'images'));
const filesWithSpaces = imagesDirFiles.filter(f => f.includes(' '));
check('No image filenames contain spaces in images/', filesWithSpaces.length === 0);

// 5. Check vercel.json SPA rewrites
const vercelJsonPath = path.join(rootDir, 'vercel.json');
check('vercel.json exists in root', fs.existsSync(vercelJsonPath));
if (fs.existsSync(vercelJsonPath)) {
  const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
  check('vercel.json has client-side SPA rewrites', Array.isArray(vercelJson.rewrites) && vercelJson.rewrites[0].destination === '/index.html');
}

// 6. Check design tokens & accessibility contrast
const tokensCss = fs.readFileSync(path.join(rootDir, 'src/tokens.css'), 'utf-8');
check('Design token --paper is #F6F6F4', tokensCss.includes('--paper: #F6F6F4;'));
check('Design token --ink is #181B1E', tokensCss.includes('--ink: #181B1E;'));
check('Design token --blueprint is #233142', tokensCss.includes('--blueprint: #233142;'));
check('Design token --flag-orange is #9E482B (WCAG AA compliant)', tokensCss.includes('--flag-orange: #9E482B;'));
check('Design token --contour is #4B5E55', tokensCss.includes('--contour: #4B5E55;'));
check('Design token --brass is #7D6846', tokensCss.includes('--brass: #7D6846;'));
check('Design token --spine-offset is 64px', tokensCss.includes('--spine-offset: 64px;'));
check('Design token --spine-offset-mobile is 24px', tokensCss.includes('--spine-offset-mobile: 24px;'));
check('Design token --radius is 4px', tokensCss.includes('--radius: 4px;'));
check('Reduced motion query handled', tokensCss.includes('prefers-reduced-motion'));
check('Focus-visible states handled', tokensCss.includes(':focus-visible'));

// Check Niche Components exist
const homeContent = fs.readFileSync(path.join(rootDir, 'src/pages/Home.jsx'), 'utf-8');
check('Home.jsx includes EquipmentSection', homeContent.includes('<EquipmentSection />'));
check('Home.jsx includes InteractiveEstimator', homeContent.includes('<InteractiveEstimator />'));

// 7. Check Synchronized Breakpoint (800px)
const headerCss = fs.readFileSync(path.join(rootDir, 'src/components/Header.css'), 'utf-8');
check('Header.css mobile breakpoint synchronized to 800px', headerCss.includes('@media (max-width: 800px)'));
check('Header.css does not contain 880px bracket', !headerCss.includes('880px'));

// 8. Check Semantic HTML & Landmark Fixes in App.jsx & Home.jsx
const appJsx = fs.readFileSync(path.join(rootDir, 'src/App.jsx'), 'utf-8');
check('App.jsx contains accessible skip link', appJsx.includes('Skip to primary content'));
check('App.jsx moves Footer outside <main id="main-content">', !appJsx.includes('<Footer />\n      </main>') && !appJsx.includes('<Footer />\r\n      </main>'));

const homeJsx = fs.readFileSync(path.join(rootDir, 'src/pages/Home.jsx'), 'utf-8');
check('Home.jsx services-legend-table uses role="region" instead of role="table"', !homeJsx.includes('role="table"') && homeJsx.includes('role="region"'));

// 9. Check PlatRecord ARIA relationships & roving tabindex
const platJsx = fs.readFileSync(path.join(rootDir, 'src/components/PlatRecord.jsx'), 'utf-8');
check('PlatRecord.jsx has role="tabpanel"', platJsx.includes('role="tabpanel"'));
check('PlatRecord.jsx has aria-controls', platJsx.includes('aria-controls'));
check('PlatRecord.jsx handles arrow key navigation', platJsx.includes('ArrowRight') && platJsx.includes('ArrowLeft'));

// 10. Check ContactForm Error Resilience
const contactFormJsx = fs.readFileSync(path.join(rootDir, 'src/components/ContactForm.jsx'), 'utf-8');
check('ContactForm.jsx catches network/API errors', contactFormJsx.includes('.catch(') && contactFormJsx.includes('errorMessage'));
check('ContactForm.jsx provides direct telephone/whatsapp fallback', contactFormJsx.includes('+92 300 6358728') || contactFormJsx.includes('tel:'));

// 11. Check JSON-LD Address Typo Fixed in index.html
check('index.html contains LocalBusiness schema', indexHtml.includes('"@type": "LocalBusiness"'));
check('index.html contains Model Town A, Block A, Commercial Sector', indexHtml.includes('Model Town A, Block A, Commercial Sector'));
check('index.html contains geodetic coordinates 30.2447 / 71.4923', indexHtml.includes('30.2447') && indexHtml.includes('71.4923'));
check('index.html contains 24/7 hours', indexHtml.includes('00:00') && indexHtml.includes('23:59'));

// 12. Check Codebase Cleanup (Legacy files & orphaned components)
check('Orphaned ContourDivider.jsx deleted', !fs.existsSync(path.join(rootDir, 'src/components/ContourDivider.jsx')));
check('Legacy blog.html removed from root', !fs.existsSync(path.join(rootDir, 'blog.html')));
check('Legacy portfolio.html removed from root', !fs.existsSync(path.join(rootDir, 'portfolio.html')));
check('Legacy script.js removed from root', !fs.existsSync(path.join(rootDir, 'script.js')));
check('Legacy style.css removed from root', !fs.existsSync(path.join(rootDir, 'style.css')));
check('Legacy styles.css removed from root', !fs.existsSync(path.join(rootDir, 'styles.css')));

// 13. Check Forbidden Buzzwords in copy
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

// 14. Check Removed Reference Codes & Unified CTA
const servicesJs = fs.readFileSync(path.join(rootDir, 'src/data/services.js'), 'utf-8');
check('src/data/services.js does not contain SVC- codes', !servicesJs.includes('SVC-'));
check('src/data/services.js does not contain image properties', !servicesJs.includes('image:'));

const foundersJs = fs.readFileSync(path.join(rootDir, 'src/data/founders.js'), 'utf-8');
check('src/data/founders.js references farooq.png', foundersJs.includes('farooq.png'));
check('src/data/founders.js references mr-nazar.png', foundersJs.includes('mr-nazar.png'));
check('src/data/founders.js does not contain SEAL- tags', !foundersJs.includes('SEAL-'));

const heroJsx = fs.readFileSync(path.join(rootDir, 'src/components/Hero.jsx'), 'utf-8');
check('Hero.jsx retains coordinate mark 30.2447° N and 71.4923° E', heroJsx.includes('30.2447° N') && heroJsx.includes('71.4923° E'));
check('Hero.jsx uses unified primary CTA "Request a survey consultation"', heroJsx.includes('Request a survey consultation'));
check('Home.jsx uses unified primary CTA "Request a survey consultation"', homeJsx.includes('Request a survey consultation'));

// 15. Check Section Spacing (>= 96px on desktop)
const homeCss = fs.readFileSync(path.join(rootDir, 'src/pages/Home.css'), 'utf-8');
const contactBlockCss = fs.readFileSync(path.join(rootDir, 'src/components/ContactBlock.css'), 'utf-8');
const heroCss = fs.readFileSync(path.join(rootDir, 'src/components/Hero.css'), 'utf-8');
check('Home.css .page-section vertical padding is at least 96px', /padding:\s*([9][6-9]|[1-9]\d{2,})px/.test(homeCss));
check('Hero.css .hero-section vertical padding is at least 96px', /padding:\s*([9][6-9]|[1-9]\d{2,})px/.test(heroCss));
check('ContactBlock.css .contact-section vertical padding is at least 96px', /padding:\s*([9][6-9]|[1-9]\d{2,})px/.test(contactBlockCss));

// 16. Check Exactly One ContactBlock in Home.jsx
check('Home.jsx contains exactly one ContactBlock invocation', (homeJsx.match(/<ContactBlock\s*\/>/g) || []).length === 1);

// Clean up any stray generator files in scripts/
for (const tempFile of ['check-png.js', 'extract-parts.js', 'inspect-images.js', 'cleanup-assets.js', 'process-founders.js']) {
  const p = path.join(rootDir, 'scripts', tempFile);
  if (fs.existsSync(p)) {
    try { fs.unlinkSync(p); } catch (e) {}
  }
}

console.log(`\nPASSED CHECKS: ${passes.length}`);
if (errors.length > 0) {
  console.error(`FAILED CHECKS (${errors.length}):`);
  errors.forEach(e => console.error(`  ✕ ${e}`));
  process.exit(1);
} else {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!');
}
