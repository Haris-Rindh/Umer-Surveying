import React from 'react';

export default function ContourDivider({ elevation = "125.00m", label = "ELEVATION INDEX CONTOUR" }) {
  return (
    <div className="contour-divider" role="separator" aria-label={`Section Divider — Elevation ${elevation}`}>
      <svg 
        viewBox="0 0 1200 24" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '24px', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="12" x2="350" y2="12" stroke="rgba(19, 30, 41, 0.15)" strokeWidth="1" />
        <path 
          d="M 350,12 C 400,6 450,18 500,12 C 550,6 600,18 650,12" 
          fill="none" 
          stroke="var(--contour)" 
          strokeWidth="1.25" 
        />
        <line x1="650" y1="12" x2="1200" y2="12" stroke="rgba(19, 30, 41, 0.15)" strokeWidth="1" />
        <text 
          x="660" 
          y="15" 
          fontFamily="var(--font-mono)" 
          fontSize="9" 
          fill="var(--contour)" 
          letterSpacing="0.08em"
        >
          {label} [EL. {elevation}]
        </text>
      </svg>
    </div>
  );
}
