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

        {/* Core Narrative Block */}
        <div className="hero-main-content">
          <h1 className="hero-h1">
            Sub-Centimeter Land Surveying &amp; GIS Analysis
          </h1>

          <p className="hero-intro">
            We deploy calibrated electronic total stations, dual-frequency RTK GNSS receivers, and dedicated GIS workstations across Pakistan. Delivering legal boundary demarcations, Aks Shajra reconciliations, certified topographic terrain models, and volumetric earthwork calculations.
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

