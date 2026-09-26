import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';

const HERO_SLIDES = [
  {
    id: 'slide-1',
    src: '/images/hero-slide-1.webp',
    title: 'Total Station Geodetic Survey',
    caption: 'Electronic Total Station Traverse & Fieldwork',
    location: 'Multan Sector Geodetic Control Network',
    datum: 'Survey of Pakistan // WGS 84',
    precision: 'Sub-Centimeter Linear Precision',
    alt: 'Umer Surveying total station deployed in the field for precision geodetic land survey'
  },
  {
    id: 'slide-2',
    src: '/images/hero-slide-2.webp',
    title: 'Topographic Terrain Modeling',
    caption: 'Digital Elevation Model (DEM) & Spot Elevations',
    location: 'Cadastral Contour & Grid Mapping Fieldwork',
    datum: 'Mean Sea Level (MSL) Vertical Datum',
    precision: '0.5" Arc-Second Angular Resolution',
    alt: 'Field surveyor capturing topographic terrain elevations with electronic total station'
  },
  {
    id: 'slide-3',
    src: '/images/hero-slide-3.webp',
    title: 'Boundary Demarcation & Traverse',
    caption: 'Legal Aks Shajra & Revenue Boundary Alignment',
    location: 'Property Demarcation & Monumentation',
    datum: 'Revenue Cadastral Grid Alignment',
    precision: 'Sub-Centimeter Traverse Closure',
    alt: 'High-precision surveying prism and total station equipment during land demarcation'
  },
  {
    id: 'slide-4',
    src: '/images/hero-slide-4.webp',
    title: 'Commercial & Civil Infrastructure',
    caption: 'Civil Engineering Foundation & Layout Traverses',
    location: 'Urban Development & Infrastructure Expansion',
    datum: 'Engineering Grid Benchmark',
    precision: '1:50,000 Relative Closure Ratio',
    alt: 'Commercial surveying operations for large-scale development and foundation mapping'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const touchStartXRef = useRef(null);
  const timerRef = useRef(null);
  const cardRef = useRef(null);

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

  // 3D Tilt calculation on mouse move over the card
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to subtle tilt (-6 to +6 deg)
    const rotateY = (x / (rect.width / 2)) * 6;
    const rotateX = -(y / (rect.height / 2)) * 6;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsPlaying(true);
  };

  // Keyboard navigation when user is focused on the carousel
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  };

  // Touch swipe handling for mobile devices
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="hero-section" aria-label="Precision Land Surveying & GIS Analysis">
      <div className="hero-container">
        {/* Top Header Group: Coordinates & Station Benchmark */}
        <div className="hero-benchmark-row">
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

        {/* Core Narrative & Slideshow Split Grid */}
        <div className="hero-split-grid">
          {/* Left Column: Narrative Content & Unified CTAs */}
          <div className="hero-main-content">
            <h1 className="hero-h1">
              Sub-Centimeter Land Surveying &amp; GIS Analysis
            </h1>

            <p className="hero-intro">
              We deploy calibrated electronic total stations, dual-frequency RTK GNSS receivers, and dedicated GIS workstations across Pakistan. Delivering legal boundary demarcations, Aks Shajra reconciliations, certified topographic terrain models, and volumetric earthwork calculations.
            </p>

            <div className="hero-action-line">
              <a href="#contact" className="btn-survey hero-cta btn-fliplink" onClick={(e) => scrollToSection(e, 'contact')}>
                <span className="fliplink-wrap">
                  <span className="fliplink-top">Request a survey consultation</span>
                  <span className="fliplink-bottom" aria-hidden="true">Request a survey consultation</span>
                </span>
              </a>
              <a href="#threed-explorer" className="btn-3d-explorer-pill" onClick={(e) => scrollToSection(e, 'threed-explorer')}>
                <span className="pill-badge-3d">3D</span>
                <span className="pill-label">Inspect Domains in 3D</span>
                <span className="pill-arrow-circle" aria-hidden="true">→</span>
              </a>
              <a href="#equipment" className="btn-survey btn-outline" onClick={(e) => scrollToSection(e, 'equipment')}>
                Explore Equipment Arsenal
              </a>
            </div>

            {/* Floating Geodetic Spatial Telemetry Widget (Sobha / SWSH Inspired) */}
            <div className="hero-floating-spatial-widget" aria-hidden="true">
              <div className="azimuth-compass-circle">
                <svg className="compass-dial-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(125, 104, 70, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(35, 49, 66, 0.2)" strokeWidth="1.5" />
                  <line x1="50" y1="4" x2="50" y2="16" stroke="var(--flag-orange)" strokeWidth="2" />
                  <line x1="50" y1="84" x2="50" y2="96" stroke="rgba(35, 49, 66, 0.35)" strokeWidth="1.5" />
                  <line x1="4" y1="50" x2="16" y2="50" stroke="rgba(35, 49, 66, 0.35)" strokeWidth="1.5" />
                  <line x1="84" y1="50" x2="96" y2="50" stroke="rgba(35, 49, 66, 0.35)" strokeWidth="1.5" />
                  <text x="50" y="27" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--flag-orange)" fontFamily="var(--font-mono)">N</text>
                  <text x="80" y="53" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--ink-muted)" fontFamily="var(--font-mono)">E</text>
                  <text x="50" y="80" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--ink-muted)" fontFamily="var(--font-mono)">S</text>
                  <text x="20" y="53" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--ink-muted)" fontFamily="var(--font-mono)">W</text>
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
          </div>

          {/* Right Column: 3D Geodetic Field Telemetry Slideshow Frame */}
          <div 
            ref={cardRef}
            className="hero-slideshow-card"
            role="region"
            aria-roledescription="carousel"
            aria-label="Field Surveying Operations Showcase"
            tabIndex={0}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
            onMouseMove={handleMouseMove}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => setIsPlaying(false)}
            onBlur={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Instrument Card Header Strip */}
            <div className="slideshow-header">
              <div className="slideshow-status">
                <span className="status-indicator-dot" aria-hidden="true"></span>
                <span className="status-text">ACTIVE FIELD TELEMETRY</span>
              </div>
              <div className="slideshow-counter">
                <span>INDEX [0{currentSlide + 1} / 0{HERO_SLIDES.length}]</span>
              </div>
            </div>

            {/* Viewport Frame with Slides & Overlays */}
            <div className="slideshow-viewport">
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`slide-item ${isActive ? 'active' : ''}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${HERO_SLIDES.length}: ${slide.title}`}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="slide-image"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                );
              })}

              {/* 3D Floating Geodetic Reticle Crosshair Overlay */}
              <div className="telemetry-reticle-overlay" aria-hidden="true">
                <div className="reticle-corner top-left"></div>
                <div className="reticle-corner top-right"></div>
                <div className="reticle-corner bottom-left"></div>
                <div className="reticle-corner bottom-right"></div>
                <div className="reticle-center-crosshair"></div>
                <div className="reticle-tag">BM EL 124.50m</div>
              </div>

              {/* Manual Navigation Arrows */}
              <button
                type="button"
                className="slide-nav-btn prev-btn"
                onClick={prevSlide}
                aria-label="Previous field survey slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                type="button"
                className="slide-nav-btn next-btn"
                onClick={nextSlide}
                aria-label="Next field survey slide"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Slide Floating Caption Banner */}
              <div className="slide-caption-bar">
                <span className="slide-caption-title">{activeSlide.title}</span>
                <span className="slide-caption-sub">{activeSlide.location}</span>
              </div>
            </div>

            {/* Instrument Card Controls & Indicator Bar */}
            <div className="slideshow-controls-bar">
              <div className="slide-indicators" role="tablist" aria-label="Slideshow Selectors">
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={index === currentSlide}
                    aria-label={`Jump to slide ${index + 1}: ${slide.title}`}
                    className={`indicator-pill ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="slideshow-toggle-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pause slideshow auto-rotation' : 'Start slideshow auto-rotation'}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>

            {/* Instrument Card Specifications Footer */}
            <div className="slideshow-footer">
              <div className="footer-datum-row">
                <span className="f-label">STATION DATUM:</span>
                <span className="f-val">{activeSlide.datum}</span>
              </div>
              <div className="footer-datum-row">
                <span className="f-label">SPECIFICATION:</span>
                <span className="f-val">{activeSlide.precision}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Benchmark & Trust Strip */}
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
      </div>
    </section>
  );
}
