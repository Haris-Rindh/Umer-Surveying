import React, { useEffect, useState } from 'react';

/**
 * ThreeDScrollParallax — Lightweight 3D Spatial Scroll & Parallax Depth Overlay
 * Zero external dependencies, pure CSS 3D coordinate displacement.
 * Automatically throttles on low-power devices and respects prefers-reduced-motion.
 */
export default function ThreeDScrollParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion or data-saver
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches || Boolean(navigator.connection?.saveData));

    const handleMediaChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    if (mediaQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  if (reducedMotion) {
    return null;
  }

  // Calculate subtle 3D rotational tilt and vertical depth displacement
  const parallaxOffset1 = (scrollY * 0.05).toFixed(1);
  const parallaxOffset2 = (scrollY * -0.03).toFixed(1);
  const tiltAngle = (Math.sin(scrollY * 0.002) * 1.5).toFixed(2);

  return (
    <div 
      className="threed-ambient-parallax-canvas" 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        perspective: '1400px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background 3D Floating Geodetic Elevation Rings */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '320px',
          height: '320px',
          border: '1px solid rgba(75, 94, 85, 0.07)',
          borderRadius: '50%',
          transform: `translate3d(0, ${parallaxOffset1}px, -120px) rotateX(55deg) rotateZ(${tiltAngle}deg)`,
          transition: 'transform 0.1s linear'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '55%',
          left: '2%',
          width: '420px',
          height: '420px',
          border: '1px dashed rgba(35, 49, 66, 0.05)',
          borderRadius: '50%',
          transform: `translate3d(0, ${parallaxOffset2}px, -180px) rotateX(45deg) rotateY(15deg)`,
          transition: 'transform 0.1s linear'
        }}
      />
    </div>
  );
}
