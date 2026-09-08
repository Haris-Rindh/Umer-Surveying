import React, { useState } from 'react';
import './PlatRecord.css';

export default function PlatRecord({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const recordSlug = (project.recordNumber || project.id || 'record').toLowerCase().replace(/[^a-z0-9]/g, '-');
  const panelId = `plat-panel-${recordSlug}`;
  const tabId = (idx) => `plat-tab-${recordSlug}-${idx}`;

  const handleKeyDown = (e, i) => {
    const total = project.images.length;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (i + 1) % total;
      setActiveImageIndex(next);
      const nextBtn = document.getElementById(tabId(next));
      if (nextBtn) nextBtn.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (i - 1 + total) % total;
      setActiveImageIndex(prev);
      const prevBtn = document.getElementById(tabId(prev));
      if (prevBtn) prevBtn.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveImageIndex(0);
      const firstBtn = document.getElementById(tabId(0));
      if (firstBtn) firstBtn.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveImageIndex(total - 1);
      const lastBtn = document.getElementById(tabId(total - 1));
      if (lastBtn) lastBtn.focus();
    }
  };

  return (
    <article className="plat-record-entry" aria-label={`Plat Record: ${project.title}`}>
      {/* Title Block Docket */}
      <div className="record-header-docket">
        <div className="docket-top-line">
          <span className="record-number-badge">{project.recordNumber}</span>
          <span className="record-status-stamp">VERIFIED SURVEY RECORD</span>
        </div>

        <h3 className="record-title">{project.title}</h3>

        {/* Scope / Duration Line in Monospace per Section 4 */}
        <div className="record-metadata-grid">
          <div className="meta-item">
            <span className="meta-label">CLIENT / COMMISSION:</span>
            <span className="meta-val">{project.client}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">LOCATION &amp; GEODESY:</span>
            <span className="meta-val">{project.location} [{project.coordinates}]</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">ENGAGEMENT DURATION:</span>
            <span className="meta-val">{project.duration}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">EQUIPMENT DEPLOYED:</span>
            <span className="meta-val">{project.equipment}</span>
          </div>
          <div className="meta-item full-width">
            <span className="meta-label">TECHNICAL DELIVERABLES:</span>
            <span className="meta-val">{project.deliverables}</span>
          </div>
        </div>
      </div>

      {/* Technical Narrative & Images */}
      <div className="record-content-grid">
        {/* Narrative Column */}
        <div className="record-narrative-col">
          <div className="narrative-summary-lead">
            <p>{project.summary}</p>
          </div>

          <div className="narrative-body">
            {project.narrative.map((paragraph, idx) => (
              <p key={idx} className="narrative-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Technical Drawings & Field Imagery Column */}
        <div className="record-images-col">
          <div 
            className="primary-drawing-frame"
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(activeImageIndex)}
            tabIndex={0}
          >
            <img 
              src={project.images[activeImageIndex].src} 
              alt={project.images[activeImageIndex].alt} 
              className="primary-drawing-img" 
            />
            <div className="drawing-caption-bar">
              <span className="caption-text">{project.images[activeImageIndex].caption}</span>
            </div>
          </div>

          {/* Thumbnail Strip if Multiple Images */}
          {project.images.length > 1 && (
            <div className="drawing-thumb-strip" role="tablist" aria-label="Field Sheet Views">
              {project.images.map((img, i) => (
                <button 
                  key={i} 
                  id={tabId(i)}
                  type="button" 
                  role="tab"
                  aria-selected={activeImageIndex === i}
                  aria-controls={panelId}
                  tabIndex={activeImageIndex === i ? 0 : -1}
                  className={`thumb-button ${activeImageIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                >
                  <img src={img.src} alt="" aria-hidden="true" className="thumb-img" />
                  <span className="thumb-index">VIEW 0{i + 1}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hairline Divider Below Entry */}
      <div className="hairline-rule" />
    </article>
  );
}
