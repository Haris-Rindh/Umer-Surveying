import React from 'react';
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

  return (
    <div className="home-page-flow">
      {/* Ambient 3D Depth & Spatial Parallax Canvas */}
      <ThreeDScrollParallax />

      {/* 01. Hero Component with Split Instrument Showcase & Trust Strip */}
      <Hero />

      {/* 02. Interactive 3D Surveying Domain Explorer with Floating Elements */}
      <ThreeDDomainExplorer />

      {/* 03. Field Equipment & Technology Arsenal */}
      <EquipmentSection />

      {/* 03. Categorized Surveying Services Directory */}
      <section id="services" className="page-section services-section" aria-label="Surveying Services Directory">
        <div className="section-title-line">
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

      {/* 04. Interactive Survey Scope & Requisition Builder */}
      <InteractiveEstimator />

      {/* 05. Professional Training / Courses Section */}
      <section id="courses" className="page-section courses-section" aria-label="Professional Surveyor Certification">
        <div className="section-title-line">
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

      {/* 06. About Section */}
      <section id="about" className="page-section about-section" aria-label="About Umer Surveying">
        <div className="section-title-line">
          <h2 className="section-h2">About Umer Surveying™</h2>
          <p className="section-lead">
            Established in 2022 in Multan, Umer Surveying provides land surveying, GIS mapping, and civil drafting across Southern Punjab.
          </p>
        </div>

        <div className="about-content-grid">
          <div className="about-narrative-block">
            <p className="about-p">
              We work for public agencies, engineering firms, agricultural landowners, and private developers. Our field crews deploy total stations, GPS receivers, and CAD/GIS workstations to produce legal plats, quantity takeoffs, and topographic basemaps that meet strict regulatory and engineering specifications.
            </p>
            <p className="about-p">
              We do not estimate boundaries by eye or rely on uncalibrated consumer GPS. Every survey point is measured against established Survey of Pakistan control benchmarks or tied to geodetic reference networks with verified angular and linear closure.
            </p>

            <div className="about-specs-row">
              <div className="spec-badge">
                <span className="spec-num">2022</span>
                <span className="spec-label">Established in Multan</span>
              </div>
              <div className="spec-badge">
                <span className="spec-num">35+</span>
                <span className="spec-label">Years chief field experience</span>
              </div>
              <div className="spec-badge">
                <span className="spec-num">24/7</span>
                <span className="spec-label">Active survey availability</span>
              </div>
            </div>
          </div>

          <div className="about-diagram-frame">
            <div className="plat-diagram-box">
              <div className="diagram-header">
                <span className="diagram-title">Topographic Elevation Specification</span>
              </div>
              <img 
                src="/images/topography-202278.webp" 
                alt="Topographic contour surveying and digital elevation model produced by Umer Surveying" 
                className="about-technical-image" 
              />
              <div className="diagram-footer">
                <span>Digital Terrain Model (0.5m contour interval)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Founders Section */}
      <section id="founders" className="page-section founders-section" aria-label="Founders and Leadership Seals">
        <div className="section-title-line">
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

      {/* 08. Contact Section: exactly one contact section at the bottom of Home */}
      <ContactBlock />
    </div>
  );
}
