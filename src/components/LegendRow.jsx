import React from 'react';
import './LegendRow.css';

export default function LegendRow({ service, onSelect }) {
  const handleClick = (e) => {
    if (onSelect) {
      onSelect(service);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="legend-row" aria-label={`Survey Service: ${service.label}`}>
      <div className="legend-main">
        {/* Technical Surveying Symbol / Icon */}
        <div className="legend-symbol-box" aria-hidden="true">
          <span className="legend-glyph">{service.symbol}</span>
        </div>

        {/* Service Name */}
        <div className="legend-info">
          <h3 className="legend-title">{service.label}</h3>
        </div>

        {/* One-Sentence Description */}
        <div className="legend-description-block">
          <p className="legend-desc">{service.description}</p>
        </div>

        {/* Single Action */}
        <div className="legend-action">
          <a 
            href="#contact" 
            className="legend-link"
            onClick={handleClick}
            aria-label={`Ask about ${service.label}`}
          >
            Ask about this service.
          </a>
        </div>
      </div>

      {/* Hairline Divider Below */}
      <div className="hairline-rule" />
    </article>
  );
}
