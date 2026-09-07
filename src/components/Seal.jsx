import React from 'react';
import './Seal.css';

export default function Seal({ founder }) {
  return (
    <article className="founder-seal-card" aria-label={`Founder Seal: ${founder.name}`}>
      {/* Benchmark Stamp Outer Framing */}
      <div className="seal-outer-frame">
        <div className="seal-header-row">
          <span className="seal-stamp-id">{founder.sealCode}</span>
          <span className="seal-established">COMMISSION // PK-PUNJAB</span>
        </div>

        <div className="seal-body">
          {/* Portrait & Circular Benchmark Seal */}
          <div className="seal-portrait-container">
            <div className="seal-round-stamp">
              <svg className="seal-circular-text" viewBox="0 0 100 100" aria-hidden="true">
                <path id={`circle-path-${founder.sealCode}`} d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                <text fontSize="7" fontFamily="var(--font-mono)" fill="var(--brass)" letterSpacing="0.14em">
                  <textPath href={`#circle-path-${founder.sealCode}`}>
                    UMER SURVEYING • VERIFIED SEAL •
                  </textPath>
                </text>
              </svg>
              <img 
                src={founder.image} 
                alt={founder.alt} 
                className="seal-portrait-image" 
              />
            </div>
          </div>

          {/* Biographical Technical Notation */}
          <div className="seal-content">
            <h3 className="seal-name">{founder.name}</h3>
            <div className="seal-title-line">
              <span className="seal-title">{founder.title}</span>
            </div>
            <div className="seal-credentials">
              {founder.credentials}
            </div>
            <p className="seal-bio">
              {founder.bio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
