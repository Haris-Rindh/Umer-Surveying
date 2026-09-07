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
        {/* Technical Surveying Symbol */}
        <div className="legend-symbol-box" aria-hidden="true">
          <span className="legend-glyph">{service.symbol}</span>
        </div>

        {/* Identification & Title */}
        <div className="legend-info">
          <div className="legend-code-line">
            <span className="legend-code">{service.code}</span>
          </div>
          <h3 className="legend-title">{service.label}</h3>
        </div>

        {/* Technical Description (Section 5 Voice) */}
        <div className="legend-description-block">
          <p className="legend-desc">{service.description}</p>
          <span className="legend-scope">{service.scope}</span>
        </div>

        {/* Service Action Link (directs to /#contact, no trailing arrow) */}
        <div className="legend-action">
          <a 
            href="#contact" 
            className="legend-link"
            onClick={handleClick}
            aria-label={`Inquire about ${service.label}`}
          >
            Inquire Specification
          </a>
        </div>
      </div>

      {/* Hairline Divider Below */}
      <div className="hairline-rule" />
    </article>
  );
}
