import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ThreeDDomainExplorer from '../components/ThreeDDomainExplorer';
import ThreeDScrollParallax from '../components/ThreeDScrollParallax';
import EquipmentSection from '../components/EquipmentSection';
import InteractiveEstimator from '../components/InteractiveEstimator';
import LegendRow from '../components/LegendRow';
import Seal from '../components/Seal';
import ContactBlock from '../components/ContactBlock';
import { servicesData, serviceCategories } from '../data/services';
import { foundersData } from '../data/founders';
import { useDocumentTitle } from '../utils/seo';
import './Home.css';

export default function Home() {
  useDocumentTitle('home');

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'auto' }), 50);
      }
    }
  }, []);

  return (
    <div className="home-page-flow sobha-page-flow">
      {/* Ambient 3D Depth & Spatial Parallax Canvas */}
      <ThreeDScrollParallax />

      {/* 01. Exact Sobha Hero: The Art of Precision */}
      <Hero />

      {/* 02. Sobha Signature 3-Image Showcase: A Handpicked Repertoire of Rarest Precision Feats */}
      <section id="about" className="page-section sobha-triptych-section" aria-label="Signature Repertoire of Surveying Feats">
        <div className="section-title-line sobha-center-header">
          <span className="sobha-kicker">RECORDED IN BENCHMARKS &amp; PARCELS</span>
          <h2 className="section-h2 sobha-grand-title">A Handpicked Repertoire of Rarest Precision Feats</h2>
          <p className="section-lead sobha-lead-center">
            Demarcated with millimeter rigor. We verify land sovereignty, high-density boundaries, and spatial engineering infrastructure across Southern Punjab.
          </p>
        </div>

        {/* Triptych 3-Image Layout */}
        <div className="sobha-triptych-grid">
          {/* Card 1: Staggered Left */}
          <div className="sobha-triptych-card sobha-card-left">
            <div className="sobha-image-wrap">
              <img 
                src="/images/commercial-measurements.jpg" 
                alt="Commercial high-density cadastral measurement" 
                className="sobha-img" 
                loading="eager"
              />
              <div className="sobha-img-overlay">
                <span className="sobha-img-tag">CADASTRE 01</span>
              </div>
            </div>
            <div className="sobha-card-caption">
              <h3 className="sobha-card-h3">Commercial Demarcations</h3>
              <p className="sobha-card-sub">High-Density Urban Parcels &amp; Sovereign Title Protection</p>
            </div>
          </div>

          {/* Card 2: Prominent Centerpiece */}
          <div className="sobha-triptych-card sobha-card-center">
            <div className="sobha-image-wrap sobha-wrap-hero">
              <img 
                src="/images/topographic-map-of-jica.jpg" 
                alt="JICA Topographic Base Mapping and Geodetic Benchmarks" 
                className="sobha-img" 
                loading="eager"
              />
              <div className="sobha-img-overlay">
                <span className="sobha-img-tag highlight">BENCHMARK 02 • CORE DATUM</span>
              </div>
            </div>
            <div className="sobha-card-caption">
              <h3 className="sobha-card-h3">JICA Topographic Control Network</h3>
              <p className="sobha-card-sub">Sub-Centimeter Geodetic Triangulation &amp; National Datum Tie</p>
            </div>
          </div>

          {/* Card 3: Staggered Right */}
          <div className="sobha-triptych-card sobha-card-right">
            <div className="sobha-image-wrap">
              <img 
                src="/images/urban-planning-survey.jpg" 
                alt="Metropolitan urban infrastructure and GIS survey" 
                className="sobha-img" 
                loading="eager"
              />
              <div className="sobha-img-overlay">
                <span className="sobha-img-tag">INFRASTRUCTURE 03</span>
              </div>
            </div>
            <div className="sobha-card-caption">
              <h3 className="sobha-card-h3">Metropolitan Master Layouts</h3>
              <p className="sobha-card-sub">GIS Right-of-Way Basemaps &amp; Civil Highway Alignment</p>
            </div>
          </div>
        </div>

        {/* Editorial Narrative & Secondary Images (Exact Sobha Section 2 Structure) */}
        <div className="sobha-editorial-block">
          <p className="sobha-editorial-quote">
            Exclusive surveys across Pakistan's most iconic infrastructure.
            <span className="sobha-editorial-accent"> For the true connoisseurs of fine engineering.</span>
          </p>

          <div className="sobha-editorial-gallery">
            <div className="editorial-gallery-item">
              <img 
                src="/images/survey.jpg" 
                alt="Precision optical total station deployed on geodetic baseline" 
                className="editorial-gallery-img"
                loading="eager"
              />
              <div className="editorial-caption">
                <span className="caption-tag">CALIBRATED FIELDWORK</span>
                <span className="caption-desc">Sub-second angular reading with electronic traverse closure</span>
              </div>
            </div>

            <div className="editorial-gallery-item">
              <img 
                src="/images/topographic-surveying.webp" 
                alt="Topographic contour surveying and digital elevation basemap" 
                className="editorial-gallery-img"
                loading="eager"
              />
              <div className="editorial-caption">
                <span className="caption-tag">SPATIAL BASEMAPS</span>
                <span className="caption-desc">High-density digital elevation models and civil earthwork verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Validation Badges Strip */}
        <div className="sobha-metrics-ribbon">
          <div className="sobha-metric-box">
            <span className="sobha-metric-val">0.005m</span>
            <span className="sobha-metric-lbl">Maximum Traverse Misclosure</span>
          </div>
          <div className="sobha-metric-sep"></div>
          <div className="sobha-metric-box">
            <span className="sobha-metric-val">35+ Yrs</span>
            <span className="sobha-metric-lbl">Senior Field Command</span>
          </div>
          <div className="sobha-metric-sep"></div>
          <div className="sobha-metric-box">
            <span className="sobha-metric-val">100%</span>
            <span className="sobha-metric-lbl">Survey of Pakistan Datum Match</span>
          </div>
        </div>
      </section>

      {/* 03. Sobha Cinematic Full-Bleed Architectural Statement Banner (SOME CREATIONS MERIT A PLACE) */}
      <section className="page-section sobha-statement-section" aria-label="Statement of Surveying Excellence">
        <div className="sobha-statement-glow"></div>
        <div className="sobha-statement-content">
          <span className="sobha-statement-kicker">PHILOSOPHY OF MEASUREMENT</span>
          <h2 className="sobha-statement-heading">
            SOME CREATIONS MERIT A PLACE
            <span className="sobha-statement-accent">Above The Lofty Adage Of Precision</span>
          </h2>
          <p className="sobha-statement-body">
            Where every coordinate is etched into sovereign legal deeds and national geodetic grids. At Umer Surveying, precision is not a feature—it is our inviolable pact with the land.
          </p>
          <div className="sobha-statement-coords">
            <span className="coord-dot"></span>
            <span>30.2447° N, 71.4923° E • ESTABLISHED MULTAN 2022</span>
          </div>
          <div className="sobha-statement-action">
            <a href="#contact" className="btn-survey">
              Request a survey consultation
            </a>
          </div>
        </div>
      </section>

      {/* 04. Sobha Section 4: EVOKING A CERTAINTY */}
      <section className="page-section sobha-sensation-section" aria-label="Evoking Geodetic Certainty">
        <div className="sobha-sensation-grid">
          <div className="sobha-sensation-text-col">
            <span className="sobha-sensation-kicker">RIGOR IN THE FIELD</span>
            <h2 className="sobha-sensation-title">
              EVOKING A CERTAINTY CHASED BY SO MANY, ATTAINED BY SO FEW
            </h2>
            <p className="sobha-sensation-p">
              Umer Surveying captures this certainty, using millimeter tolerance as the benchmark to measure every boundary that bears our title block. In doing so, we have crafted this technical rigor into an art form. We call it: The Art of Precision.
            </p>
            <div className="sobha-sensation-meta">
              <div className="sensation-stat">
                <span className="sensation-num">1:50,000</span>
                <span className="sensation-label">Linear Traverse Ratio</span>
              </div>
              <div className="sensation-stat">
                <span className="sensation-num">0.5"</span>
                <span className="sensation-label">Angular Instrument Accuracy</span>
              </div>
            </div>
          </div>

          <div className="sobha-sensation-image-col">
            <div className="sobha-sensation-card">
              <img 
                src="/images/herosection.jpg" 
                alt="Survey of Pakistan geodetic benchmark instrument observation" 
                className="sobha-sensation-img"
                loading="eager"
              />
              <div className="sobha-sensation-overlay">
                <span className="sensation-tag">BENCHMARK BENCHMARK MULTAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Sobha Section 5: THE SUBLIME */}
      <section id="sublime" className="page-section sobha-sublime-section" aria-label="Sublime Precision">
        <div className="sobha-sublime-content text-center">
          <p className="sobha-sublime-lead">
            The feeling of absolute legal certainty,<br />
            the standard that can only be captured by calling it
          </p>
          <h2 className="sobha-sublime-word">Sublime Precision</h2>
        </div>
      </section>

      {/* 06. Interactive 3D Surveying Domain Explorer with Floating Elements */}
      <ThreeDDomainExplorer />

      {/* 07. Field Equipment & Technology Arsenal */}
      <EquipmentSection />

      {/* 08. Categorized Surveying Services Directory ("The Collection") */}
      <section id="services" className="page-section services-section" aria-label="Surveying Services Directory">
        <div className="section-title-line">
          <span className="sector-kicker">THE COLLECTION // DISCIPLINES</span>
          <h2 className="section-h2">Surveying Services &amp; Field Capabilities</h2>
          <p className="section-lead">
            We map terrain, establish legal property lines, and quantify site earthwork using calibrated total stations, dual-frequency GNSS, and GIS workstations.
          </p>
        </div>

        <div className="services-sectors-grid">
          {serviceCategories.map((cat) => {
            const catServices = servicesData.filter((s) => s.category === cat.id);
            return (
              <div key={cat.id} className="service-sector-card">
                <div className="sector-header">
                  <span className="sector-kicker">ENGINEERING DISCIPLINE</span>
                  <h3 className="sector-title">{cat.title}</h3>
                  <p className="sector-desc">{cat.description}</p>
                </div>
                <div className="sector-services-list" role="region" aria-label={cat.title}>
                  {catServices.map((service) => (
                    <LegendRow key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 09. Interactive Survey Scope & Requisition Builder */}
      <InteractiveEstimator />

      {/* 10. Professional Training / Courses Section */}
      <section id="courses" className="page-section courses-section" aria-label="Professional Surveyor Certification">
        <div className="section-title-line">
          <span className="sector-kicker">TENETS OF KNOWLEDGE // FIELD ACADEMY</span>
          <h2 className="section-h2">Surveying Certification Program</h2>
          <p className="section-lead">
            Practical field training covering total station operation, optical leveling, CAD drafting, and GIS data pipelines.
          </p>
        </div>

        <div className="course-docket-box">
          <div className="course-spec-grid">
            <div className="course-spec-item">
              <span className="spec-label">CURRICULUM FOCUS:</span>
              <span className="spec-value">Total Station Calibration, RTK GPS, CAD Mapping, Aks Shajra Reading</span>
            </div>
            <div className="course-spec-item">
              <span className="spec-label">FACULTY TENURE:</span>
              <span className="spec-value">Led by Chief Surveyor Nazar Muhammad (35 Years Field Experience)</span>
            </div>
            <div className="course-spec-item">
              <span className="spec-label">FIELDWORK RATIO:</span>
              <span className="spec-value">70% Active Instrument Fieldwork / 30% CAD Spatial Data Processing</span>
            </div>
          </div>

          <div className="course-action-line">
            <p className="course-summary-copy">
              Trainees execute live traverse loops, establish closed boundary networks, calculate coordinate misclosures, and produce professional topographic sheets that meet engineering standards.
            </p>
            <a href="#contact" className="btn-survey">
              Request a survey consultation
            </a>
          </div>
        </div>
      </section>

      {/* 11. Founders Section */}
      <section id="founders" className="page-section founders-section" aria-label="Founders and Leadership Seals">
        <div className="section-title-line">
          <span className="sector-kicker">LEADERSHIP // CHIEF SURVEYORS</span>
          <h2 className="section-h2">Founders &amp; Chief Surveyors</h2>
          <p className="section-lead">
            Field leadership combining three decades of classical cadastral survey experience with modern GIS and BIM integration.
          </p>
        </div>

        <div className="founders-seal-grid">
          {foundersData.map((founder, idx) => (
            <Seal key={idx} founder={founder} />
          ))}
        </div>
      </section>

      {/* 12. Contact Section: exactly one contact section at the bottom of Home */}
      <ContactBlock />
    </div>
  );
}
