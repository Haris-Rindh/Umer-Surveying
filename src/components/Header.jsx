import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (anchorId) => {
    setMobileOpen(false);
    if (anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Title Block / Logo */}
        <Link to="/" className="title-block" onClick={() => handleNavClick(null)}>
          <div className="header-logo-badge">
            <img 
              src="/images/umer-surveying.png" 
              alt="Umer Surveying™ Cadastral & Geodetic Insignia" 
              className="header-logo" 
            />
          </div>
          <div className="title-text">
            <span className="brand-name">UMER SURVEYING<span className="brand-tm">™</span></span>
            <span className="brand-sub">LAND SURVEYING &amp; GIS CONSULTANCY • MULTAN, PK</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`}
            onClick={() => handleNavClick(null)}
          >
            Home
          </Link>
          <Link 
            to="/#services" 
            className="nav-link"
            onClick={() => handleNavClick('services')}
          >
            Services
          </Link>
          <Link 
            to="/#equipment" 
            className="nav-link"
            onClick={() => handleNavClick('equipment')}
          >
            Equipment
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/#about" 
            className="nav-link"
            onClick={() => handleNavClick('about')}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Field Notes
          </Link>
          <a 
            href="#threed-explorer" 
            className="nav-link sobha-header-3d-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('threed-explorer');
            }}
          >
            <span className="sobha-3d-text">3D Domains</span>
            <span className="sobha-underline"></span>
          </a>
          <Link 
            to="/#contact" 
            className="nav-link nav-link-cta"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          type="button"
          className="mobile-toggle" 
          aria-expanded={mobileOpen} 
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <Link 
            to="/" 
            className="mobile-nav-link"
            onClick={() => handleNavClick(null)}
          >
            Home
          </Link>
          <Link 
            to="/#services" 
            className="mobile-nav-link"
            onClick={() => handleNavClick('services')}
          >
            Services
          </Link>
          <Link 
            to="/#equipment" 
            className="mobile-nav-link"
            onClick={() => handleNavClick('equipment')}
          >
            Equipment
          </Link>
          <Link 
            to="/portfolio" 
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/#about" 
            className="mobile-nav-link"
            onClick={() => handleNavClick('about')}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Field Notes
          </Link>
          <Link 
            to="/#contact" 
            className="mobile-nav-link cta"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </Link>
        </nav>
      )}

      {/* Hairline Divider */}
      <div className="hairline-rule" />
    </header>
  );
}
