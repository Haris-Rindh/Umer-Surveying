import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (anchorId) => {
    setMenuOpen(false);
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Prevent background scroll when full-screen luxury menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header sobha-header">
        <div className="header-inner">
          {/* Left: Sobha-Style Menu Trigger */}
          <div className="header-left">
            <button 
              type="button"
              className={`sobha-menu-trigger ${menuOpen ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              <span className="sobha-hamburger-box">
                <span className="sobha-bar bar-1"></span>
                <span className="sobha-bar bar-2"></span>
              </span>
              <span className="sobha-menu-label">
                {menuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>

          {/* Center: Sobha-Style Luxury Brand Centerpiece */}
          <Link to="/" className="title-block sobha-brand-center" onClick={() => handleNavClick(null)}>
            <div className="header-logo-badge">
              <img 
                src="/images/umer-surveying.png" 
                alt="Umer Surveying™ Cadastral & Geodetic Insignia" 
                className="header-logo" 
              />
            </div>
            <div className="title-text">
              <span className="brand-name">UMER SURVEYING<span className="brand-tm">™</span></span>
              <span className="brand-sub">THE ART OF PRECISION • MULTAN</span>
            </div>
          </Link>

          {/* Right: Sobha-Style 3D Map Trigger */}
          <div className="header-right">
            <a 
              href="#threed-explorer" 
              className="sobha-header-3d-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('threed-explorer');
              }}
            >
              <span className="sobha-3d-text">3D Map</span>
              <span className="sobha-underline"></span>
            </a>
            <a 
              href="#contact" 
              className="sobha-header-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      {/* Full-Screen Sobha Luxury Architectural Menu Overlay */}
      <div className={`sobha-full-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="sobha-menu-backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="sobha-menu-panel">
          <div className="sobha-menu-grid">
            {/* Navigation Column */}
            <div className="sobha-menu-nav-col">
              <span className="menu-kicker">INDEX // NAVIGATION</span>
              <nav className="sobha-menu-links">
                <a 
                  href="#top" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(null);
                  }}
                >
                  <span className="item-index">01</span>
                  <span className="item-title">The Art of Precision</span>
                </a>
                <a 
                  href="#about" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('about');
                  }}
                >
                  <span className="item-index">02</span>
                  <span className="item-title">The Repertoire</span>
                </a>
                <a 
                  href="#threed-explorer" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('threed-explorer');
                  }}
                >
                  <span className="item-index">03</span>
                  <span className="item-title">3D Spatial Domains</span>
                </a>
                <a 
                  href="#equipment" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('equipment');
                  }}
                >
                  <span className="item-index">04</span>
                  <span className="item-title">Field Instrument Arsenal</span>
                </a>
                <a 
                  href="#services" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('services');
                  }}
                >
                  <span className="item-index">05</span>
                  <span className="item-title">Surveying Disciplines</span>
                </a>
                <a 
                  href="#courses" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('courses');
                  }}
                >
                  <span className="item-index">06</span>
                  <span className="item-title">Certification Docket</span>
                </a>
                <a 
                  href="#founders" 
                  className="sobha-menu-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('founders');
                  }}
                >
                  <span className="item-index">07</span>
                  <span className="item-title">Chief Field Surveyors</span>
                </a>
                <a 
                  href="#contact" 
                  className="sobha-menu-item highlight"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  <span className="item-index">08</span>
                  <span className="item-title">Consultation Requisition</span>
                </a>
              </nav>
            </div>

            {/* Right Meta Column */}
            <div className="sobha-menu-meta-col">
              <div className="meta-card">
                <span className="meta-label">DIRECT INQUIRIES</span>
                <a href="tel:+923006358728" className="meta-value link">+92 300 6358728</a>
                <a href="https://wa.me/923006358728" target="_blank" rel="noopener noreferrer" className="meta-sublink">WhatsApp Direct</a>
              </div>

              <div className="meta-card">
                <span className="meta-label">HEADQUARTERS &amp; BASELINE</span>
                <p className="meta-value">Model Town A, Commercial Sector, Multan, Punjab, Pakistan</p>
                <span className="meta-coords">30.2447° N, 71.4923° E</span>
              </div>

              <div className="meta-card">
                <span className="meta-label">GEODETIC DATUM</span>
                <span className="meta-value">Survey of Pakistan Benchmarks • WGS 84</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
