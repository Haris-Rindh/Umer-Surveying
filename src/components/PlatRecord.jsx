import React, { useState } from 'react';
import './PlatRecord.css';

export default function PlatRecord({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
          <div className="primary-drawing-frame">
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
                  type="button" 
                  role="tab"
                  aria-selected={activeImageIndex === i}
                  className={`thumb-button ${activeImageIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(i)}
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
