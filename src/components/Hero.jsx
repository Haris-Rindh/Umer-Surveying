import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" aria-label="Precision Land Surveying & GIS Analysis">
      {/* Background Animated Contour Lines Illustration */}
      <div className="hero-contour-canvas" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 600" 
          className="contour-svg" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Contour Lines with Elevation Labels */}
          <path className="contour-line c1" d="M -50,150 Q 250,50 550,180 T 1150,120 T 1300,160" />
          <path className="contour-line c2" d="M -50,220 Q 280,110 600,240 T 1120,180 T 1300,230" />
          <path className="contour-line c3" d="M -50,290 Q 310,180 620,310 T 1150,250 T 1300,300" />
          <path className="contour-line c4" d="M -50,360 Q 340,250 650,380 T 1180,310 T 1300,380" />
          <path className="contour-line c5" d="M -50,430 Q 380,320 700,450 T 1200,390 T 1300,450" />
          <path className="contour-line c6" d="M -50,500 Q 420,400 750,520 T 1250,470 T 1300,530" />

          {/* Elevation Index Ticks */}
          <text x="210" y="105" className="contour-elevation-text">EL 122.0m</text>
          <text x="590" y="235" className="contour-elevation-text">EL 124.0m</text>
          <text x="890" y="275" className="contour-elevation-text">EL 126.0m</text>
          <text x="350" y="375" className="contour-elevation-text">EL 128.0m</text>
        </svg>
      </div>

      {/* Centered Coordinate Crosshair & Benchmark Mark (Earned Technical Detail) */}
      <div className="hero-benchmark-center">
        <div className="crosshair-reticle">
          <div className="crosshair-h"></div>
          <div className="crosshair-v"></div>
          <div className="reticle-ring inner"></div>
          <div className="reticle-ring outer"></div>
        </div>
        <div className="benchmark-coordinates" aria-label="Geodetic Coordinates">
          <span className="coord-val">30.2447° N</span>
          <span className="coord-sep">•</span>
          <span className="coord-val">71.4923° E</span>
        </div>
      </div>

      {/* Left-Aligned Headline, Intro & Single CTA */}
      <div className="hero-content">
        <h1 className="hero-h1">
          Precision Land Surveying &amp; GIS Analysis
        </h1>

        <p className="hero-intro">
          We map terrain with total stations and GPS, re-establish legal boundaries from revenue records, and generate verified spatial data you can act on.
        </p>

        <div className="hero-action-line">
          <a href="#contact" className="btn-survey hero-cta" onClick={scrollToContact}>
            Request a survey consultation
          </a>
        </div>
      </div>
    </section>
  );
}
