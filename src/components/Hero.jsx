import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" aria-label="Precision Land Surveying & GIS Analysis">
      {/* Background Animated Contour Elevation Linework */}
      <div className="hero-contour-canvas" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 600" 
          className="contour-svg" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="contour-line c1" d="M -50,150 Q 250,50 550,180 T 1150,120 T 1300,160" />
          <path className="contour-line c2" d="M -50,220 Q 280,110 600,240 T 1120,180 T 1300,230" />
          <path className="contour-line c3" d="M -50,290 Q 310,180 620,310 T 1150,250 T 1300,300" />
          <path className="contour-line c4" d="M -50,360 Q 340,250 650,380 T 1180,310 T 1300,380" />
          <path className="contour-line c5" d="M -50,430 Q 380,320 700,450 T 1200,390 T 1300,450" />
          <path className="contour-line c6" d="M -50,500 Q 420,400 750,520 T 1250,470 T 1300,530" />
        </svg>
      </div>

      {/* Main Hero Split Grid */}
      <div className="hero-grid">
        {/* Left Column: Technical Proposition */}
        <div className="hero-content">
          {/* Geodetic Benchmark Station Header */}
          <div className="hero-station-badge" role="status" aria-label="Geodetic Station Coordinates">
            <span className="station-dot" aria-hidden="true"></span>
            <span className="station-name">GEODETIC STATION</span>
            <span className="station-sep">•</span>
            <span className="station-coords">30.2447° N, 71.4923° E</span>
            <span className="station-sep">•</span>
            <span className="station-datum">MULTAN, PK</span>
          </div>

          <h1 className="hero-h1">
            Sub-Centimeter Land Surveying &amp; GIS Analysis
          </h1>

          <p className="hero-intro">
            We deploy calibrated electronic total stations, dual-frequency RTK GNSS receivers, and GIS workstations. Delivering certified boundary demarcation, topographic terrain models, and quantitative earthwork takeoffs across Pakistan.
          </p>

          <div className="hero-action-line">
            <a href="#contact" className="btn-survey hero-cta" onClick={(e) => scrollToSection(e, 'contact')}>
              Request a survey consultation
            </a>
            <a href="#equipment" className="btn-survey btn-outline" onClick={(e) => scrollToSection(e, 'equipment')}>
              Explore Equipment Arsenal
            </a>
          </div>
        </div>

        {/* Right Column: Instrument Telemetry & Field Showcase */}
        <div className="hero-visual-col">
          <div className="field-instrument-card">
            <div className="instrument-card-top">
              <div className="inst-status-group">
                <span className="inst-live-indicator" aria-hidden="true"></span>
                <span className="inst-badge">ACTIVE FIELD DEPLOYMENT</span>
              </div>
              <span className="inst-model">TOTAL STATION // DTM SURVEY</span>
            </div>

            <div className="hero-img-container">
              <img 
                src="/images/topography-202278.webp" 
                alt="Total Station instrument measuring spot elevation grid for Digital Terrain Model" 
                className="hero-field-img" 
                loading="eager"
              />
              <div className="img-reticle-overlay" aria-hidden="true">
                <div className="overlay-reticle"></div>
                <span className="overlay-el-tag">BM EL 124.50m</span>
              </div>
            </div>

            <div className="instrument-card-footer">
              <div className="footer-spec">
                <span className="f-label">STATION DATUM:</span>
                <span className="f-val">Survey of Pakistan (WGS 84)</span>
              </div>
              <div className="footer-spec">
                <span className="f-label">ANGULAR TOLERANCE:</span>
                <span className="f-val">0.5" Arc-Seconds Precision</span>
              </div>
              <div className="footer-spec">
                <span className="f-label">TRAVERSE ACCURACY:</span>
                <span className="f-val">Sub-Centimeter Linear Closure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Verification Strip */}
      <div className="hero-trust-strip" role="region" aria-label="Field Credentials and Trust Markers">
        <div className="trust-unit">
          <span className="trust-val">35+ Years</span>
          <span className="trust-label">Chief Field Experience (Nazar Muhammad)</span>
        </div>
        <div className="trust-unit">
          <span className="trust-val">Sub-Centimeter</span>
          <span className="trust-label">Electronic Total Station Precision</span>
        </div>
        <div className="trust-unit">
          <span className="trust-val">Survey of Pakistan</span>
          <span className="trust-label">Geodetic Control Benchmark Adherence</span>
        </div>
        <div className="trust-unit">
          <span className="trust-val">JICA / Sekkei</span>
          <span className="trust-label">International Expansion Track Record</span>
        </div>
        <div className="trust-unit">
          <span className="trust-val">24/7 Dispatch</span>
          <span className="trust-label">Emergency Boundary &amp; Site Mobilization</span>
        </div>
      </div>
    </section>
  );
}
