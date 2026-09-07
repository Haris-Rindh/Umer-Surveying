import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import './Footer.css';

export default function Footer() {
  const scrollToAnchor = (anchorId) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" aria-label="Site Footer and Survey Benchmark Docket">
      <div className="hairline-rule" />

      <div className="footer-main-grid">
        {/* Col 1: Firm Title, Benchmark Seal & Coordinates */}
        <div className="footer-col col-identity">
          <div className="footer-brand-title">
            <span className="footer-brand-name">UMER SURVEYING<span className="brand-tm">™</span></span>
            <span className="footer-brand-sub">LAND SURVEYING &amp; GIS CONSULTANCY</span>
          </div>

          <p className="footer-narrative">
            Professional cadastral, geodetic, and engineering land surveying. Serving public departments, civil contractors, agricultural estates, and private developers from Multan across Pakistan since 2022.
          </p>

          {/* Cadastral Benchmark Mark per Section 4 */}
          <div className="footer-benchmark-block">
            <div className="bm-glyph-box" aria-hidden="true">
              <svg viewBox="0 0 32 32" className="bm-svg">
                <circle cx="16" cy="16" r="13" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="4" fill="var(--brass)" />
                <line x1="16" y1="2" x2="16" y2="30" stroke="var(--brass)" strokeWidth="1" />
                <line x1="2" y1="16" x2="30" y2="16" stroke="var(--brass)" strokeWidth="1" />
              </svg>
            </div>
            <div className="bm-text-data">
              <span className="bm-label">GEODETIC BENCHMARK MARK // MULTAN</span>
              <span className="bm-coords">30.2447° N, 71.4923° E</span>
              <span className="bm-datum">DATUM: WGS 84 • ELEVATION 124.0m</span>
            </div>
          </div>
        </div>

        {/* Col 2: Direct Links (Multi-page consistent anchors per Section 7 item 2) */}
        <div className="footer-col col-links">
          <h3 className="footer-col-heading">System Index</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                01 // Home Overview
              </Link>
            </li>
            <li>
              <Link to="/#services" onClick={() => scrollToAnchor('services')}>
                02 // Survey Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                03 // Portfolio Plats
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => scrollToAnchor('about')}>
                04 // About Consultancy
              </Link>
            </li>
            <li>
              <Link to="/blog">
                05 // Field Notes &amp; Dispatches
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={() => scrollToAnchor('contact')}>
                06 // Requisition &amp; Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services List (10 Services per Section 6) */}
        <div className="footer-col col-services">
          <h3 className="footer-col-heading">Verified Services (10)</h3>
          <ul className="footer-services-list">
            {servicesData.map((svc) => (
              <li key={svc.id}>
                <Link to="/#services" onClick={() => scrollToAnchor('services')} className="footer-svc-item">
                  <span className="svc-bullet" aria-hidden="true">{svc.symbol}</span>
                  <span className="svc-text">{svc.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Location, Registry & Hours */}
        <div className="footer-col col-legal">
          <h3 className="footer-col-heading">Cadastral Registry</h3>
          <div className="legal-docket-content">
            <p className="docket-line">
              <strong>PARCEL LOCATION:</strong><br />
              Umer Surveying, Model Town A, Block A, Commercial Sector, Multan, 60200, Pakistan
            </p>
            <p className="docket-line">
              <strong>COMMUNICATIONS:</strong><br />
              <a href="tel:+923075859035">+92 307 5859035</a> (Phone &amp; WhatsApp)<br />
              <a href="mailto:farooqista_n@icloud.com">farooqista_n@icloud.com</a>
            </p>
            <p className="docket-line">
              <strong>ROSTER STATUS:</strong><br />
              24/7 Field Availability &amp; Boundary Staking
            </p>
            <p className="docket-line">
              <strong>LINKEDIN:</strong><br />
              <a href="https://www.linkedin.com/company/umer-surveying/" target="_blank" rel="noopener noreferrer">
                linkedin.com/company/umer-surveying
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-inner">
          <span className="copyright-text">
            © 2022–2026 UMER SURVEYING™ • ALL RIGHTS RESERVED.
          </span>
          <span className="technical-specs-text">
            SYSTEM: REACT + VITE + REACT ROUTER • DESIGN SYSTEM: FIELD PLAT &amp; BLUEPRINT
          </span>
        </div>
      </div>
    </footer>
  );
}
