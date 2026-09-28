import React, { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.location.search.includes('no-preloader') || navigator.webdriver) {
        return true;
      }
      return !!sessionStorage.getItem('umer_sobha_preloader_seen');
    }
    return false;
  });

  useEffect(() => {
    if (removed) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setHidden(true);
            setTimeout(() => {
              setRemoved(true);
              sessionStorage.setItem('umer_sobha_preloader_seen', 'true');
            }, 600);
          }, 300);
          return 100;
        }
        // Rapid acceleration for instantaneous feel (< 0.8s total)
        const step = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (removed) return null;

  return (
    <div className={`sobha-preloader ${hidden ? 'is-hidden' : ''}`} aria-hidden="true">
      <div className="sobha-preloader-inner">
        {/* Animated Geometric Geodetic Monogram */}
        <div className="preloader-monogram">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="#C2A87E" strokeWidth="1" strokeDasharray="4 4" className="preloader-spin" />
            <circle cx="32" cy="32" r="22" stroke="rgba(245, 243, 239, 0.4)" strokeWidth="1" />
            <path d="M32 10V54M10 32H54" stroke="#C2A87E" strokeWidth="1.2" strokeLinecap="round" />
            <polygon points="32,20 42,40 22,40" stroke="#F5F3EF" strokeWidth="1.2" fill="none" />
            <circle cx="32" cy="32" r="3" fill="#C2A87E" />
          </svg>
        </div>

        <div className="preloader-brand">
          <span className="preloader-brand-title">UMER SURVEYING</span>
          <span className="preloader-brand-sub">THE ART OF PRECISION</span>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="preloader-progress-wrap">
          <div className="preloader-progress-track">
            <div className="preloader-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <span className="preloader-progress-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
