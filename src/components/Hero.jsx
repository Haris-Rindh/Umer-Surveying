import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    src: '/images/hero-slide-4.webp',
    title: 'Commercial & Civil Infrastructure',
    caption: 'Civil Engineering Foundation & Layout Traverses',
    location: 'Urban Development & Infrastructure Expansion',
    datum: 'Engineering Grid Benchmark',
    precision: '1:50,000 Relative Closure Ratio',
    alt: 'Commercial surveying operations for large-scale development and foundation mapping'
  },
  {
    id: 'slide-2',
    src: '/images/hero-slide-2.webp',
    title: 'Total Station Geodetic Survey',
    caption: 'Electronic Total Station Traverse & Fieldwork',
    location: 'Multan Sector Geodetic Control Network',
    datum: 'Survey of Pakistan // WGS 84',
    precision: 'Sub-Centimeter Linear Precision',
    alt: 'Umer Surveying total station deployed in the field for precision geodetic land survey'
  },
  {
    id: 'slide-3',
    src: '/images/hero-slide-4.webp',
    title: 'Boundary Demarcation & Traverse',
    caption: 'Legal Aks Shajra & Revenue Boundary Alignment',
    location: 'Property Demarcation & Monumentation',
    datum: 'Revenue Cadastral Grid Alignment',
    precision: 'Sub-Centimeter Traverse Closure',
    alt: 'High-precision surveying prism and total station equipment during land demarcation'
  },
  {
    id: 'slide-4',
    src: '/images/hero-slide-2.webp',
    title: 'Topographic Terrain Modeling',
    caption: 'Digital Elevation Model (DEM) & Spot Elevations',
    location: 'Cadastral Contour & Grid Mapping Fieldwork',
    datum: 'Mean Sea Level (MSL) Vertical Datum',
    precision: '0.5" Arc-Second Angular Resolution',
    alt: 'Field surveyor capturing topographic terrain elevations with electronic total station'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay functionality with clean interval handling
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Preload remaining slide images in background for sub-0.2s instant transitions
  useEffect(() => {
    HERO_SLIDES.slice(1).forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="section section--top section--full-height hero-section sobha-hero" aria-label="The Art of Precision Land Surveying">
      {/* Cinematic Background Canvas */}
      <div className="sobha-hero-bg">
        <picture className="sobha-hero-picture">
          <img 
            src={activeSlide.src} 
            alt={activeSlide.alt}
            className="sobha-hero-image"
          />
        </picture>
        <div className="sobha-hero-vignette"></div>
        <div className="sobha-hero-grid-overlay"></div>
      </div>

      <div className="sobha-hero-content-wrapper">
        {/* Top Floating Telemetry & Coordinates Benchmark */}
        <div className="sobha-hero-top-bar">
          <div className="hero-station-badge" role="status" aria-label="Geodetic Station Coordinates">
            <span className="station-dot" aria-hidden="true"></span>
            <span className="station-name">GEODETIC CONTROL STATION</span>
            <span className="station-sep">•</span>
            <span className="station-coords">30.2447° N, 71.4923° E</span>
            <span className="station-sep">•</span>
            <span className="station-datum">MULTAN, PK</span>
          </div>

          <div className="hero-discipline-tag">
            <span>CADASTRAL // TOPOGRAPHIC // CIVIL GIS</span>
          </div>
        </div>

        {/* Centerpiece: Exact Sobha Headline Hierarchy */}
        <div className="sobha-intro-content text-center">
          <h1 className="sobha-h1-group text-center">
            <span className="intro__subtitle text-subtitle leading-trim">The art</span>
            <span className="intro__title leading-trim">of precision</span>
          </h1>

          <p className="sobha-hero-lead">
            Sub-centimeter land surveying, Aks Shajra legal reconciliations, and geodetic terrain mapping across Pakistan. Built on calibrated total stations and immutable geodetic datums.
          </p>

          <div className="sobha-hero-actions">
            <a href="#contact" className="btn-survey hero-cta btn-fliplink" onClick={(e) => scrollToSection(e, 'contact')}>
              <span className="fliplink-wrap">
                <span className="fliplink-top">Request a survey consultation</span>
                <span className="fliplink-bottom" aria-hidden="true">Request a survey consultation</span>
              </span>
            </a>
            <a href="#about" className="btn-survey btn-outline" onClick={(e) => scrollToSection(e, 'about')}>
              Explore The Repertoire
            </a>
          </div>
        </div>

        {/* Bottom Bar: Center Circular Arrow & Left Spatial Widget */}
        <div className="sobha-hero-bottom-bar">
          {/* Left: Floating Spatial Azimuth Telemetry Widget */}
          <div className="hero-floating-spatial-widget" aria-hidden="true">
            <div className="azimuth-compass-circle">
              <svg className="compass-dial-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(194, 168, 126, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
                <line x1="50" y1="4" x2="50" y2="16" stroke="var(--sobha-gold)" strokeWidth="2" />
                <line x1="50" y1="84" x2="50" y2="96" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                <line x1="4" y1="50" x2="16" y2="50" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                <line x1="84" y1="50" x2="96" y2="50" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
                <text x="50" y="27" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--sobha-gold)" fontFamily="var(--font-mono)">N</text>
                <text x="80" y="53" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--sobha-muted)" fontFamily="var(--font-mono)">E</text>
                <text x="50" y="80" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--sobha-muted)" fontFamily="var(--font-mono)">S</text>
                <text x="20" y="53" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--sobha-muted)" fontFamily="var(--font-mono)">W</text>
              </svg>
              <div className="compass-core-crosshair"></div>
            </div>
            <div className="widget-telemetry-meta">
              <div className="meta-row">
                <span className="meta-dot"></span>
                <span className="meta-status">RTK FIX (8mm)</span>
              </div>
              <div className="meta-coord">AZIMUTH: N 14.8° E</div>
              <div className="meta-datum">GEODETIC DATUM: WGS 84</div>
            </div>
          </div>

          {/* Center: Sobha Circular Gradient Scroll Arrow */}
          <div className="intro__arrow">
            <a 
              className="btn btn--square btn--gradient sobha-circle-scroll-btn" 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              aria-label="Scroll to the next section"
            >
              <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" className="btn__gradient">
                <circle cx="22" cy="22" r="21" fill="none" strokeWidth="1.2" stroke="url(#sobha-gold-gradient)" />
                <defs>
                  <linearGradient id="sobha-gold-gradient" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C2A87E" />
                    <stop offset="100%" stopColor="rgba(194, 168, 126, 0.2)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="btn__content">
                <svg width="12" height="18" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0V13M5 13L1 9M5 13L9 9" stroke="#C2A87E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right: Exact Sobha Floating button-3d "3d open the map" Card */}
          <a 
            href="#threed-explorer" 
            className="button-3d btn-container sobha-floating-3d-card"
            onClick={(e) => scrollToSection(e, 'threed-explorer')}
            aria-label="Open 3D Map and Spatial Domains Explorer"
          >
            <div className="button-3d-preview">
              <img 
                src="/images/gis.png" 
                alt="3D Spatial Terrain Model" 
                className="button-3d-img"
              />
              <div className="button-3d-radar-sweep"></div>
            </div>
            <div className="button-3d-text-group">
              <span className="button-3d__top">3D</span>
              <span className="button-3d__bottom">OPEN<br />THE MAP</span>
            </div>
            <span className="btn button-3d__icon btn--outline btn--outline-plus btn--square">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15M1 8H15" stroke="#C2A87E" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Trust & Verification Strip (Directly below hero content) */}
      <div className="hero-trust-strip-container">
        <div className="hero-trust-strip">
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
      </div>
    </section>
  );
}
