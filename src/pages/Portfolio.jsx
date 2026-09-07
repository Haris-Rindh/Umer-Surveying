import React from 'react';
import { Link } from 'react-router-dom';
import PlatRecord from '../components/PlatRecord';
import { projectsData } from '../data/projects';
import { useDocumentTitle } from '../utils/seo';
import './Portfolio.css';

export default function Portfolio() {
  useDocumentTitle('portfolio');

  return (
    <div className="portfolio-page-flow">
      {/* Portfolio Header Docket */}
      <section className="portfolio-intro-docket" aria-label="Portfolio Registry Docket">
        <h1 className="portfolio-h1">
          Cadastral Field Records &amp; Engineering Projects
        </h1>

        <p className="portfolio-lead">
          Verified survey engagements executed by Umer Surveying. Every project is documented as a legal plat record with client credentials, coordinate benchmarks, instrument logs, and delivered technical sheets.
        </p>

        <div className="portfolio-stats-strip">
          <div className="stat-unit">
            <span className="stat-label">INTERNATIONAL FRAMEWORK:</span>
            <span className="stat-val">JICA / Yamashita Sekkei Inc.</span>
          </div>
          <div className="stat-unit">
            <span className="stat-label">MUNICIPAL INFRASTRUCTURE:</span>
            <span className="stat-val">Nawabpur Union Council, Multan</span>
          </div>
          <div className="stat-unit">
            <span className="stat-label">METHODOLOGIES:</span>
            <span className="stat-val">Total Station Traverses • GIS Satellites • CAD Sheets • Excel Takeoffs</span>
          </div>
        </div>
      </section>

      {/* Plat Record 01: JICA Children Hospital Multan */}
      <PlatRecord project={projectsData[0]} />

      {/* Plat Record 02: Nawabpur Union Council */}
      <PlatRecord project={projectsData[1]} />

      {/* Project Commission Callout */}
      <section className="portfolio-cta-section" aria-label="Commission Project Survey">
        <div className="portfolio-cta-box">
          <h2 className="cta-title">Require Topographic or Cadastral Survey Records?</h2>
          <p className="cta-desc">
            Commission our instrument crews for commercial boundaries, municipal infrastructure planning, or agricultural parcel demarcations across Pakistan.
          </p>
          <div className="cta-actions">
            <Link to="/#contact" className="btn-survey">
              Request a survey consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
