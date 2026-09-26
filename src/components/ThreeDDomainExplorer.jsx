import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ThreeDDomainExplorer.css';

const DOMAINS_3D = [
  {
    id: 'cadastral',
    symbol: '⊕',
    code: 'DOM-01 // CADASTRAL',
    title: 'Cadastral & Legal Demarcation',
    shortDesc: '3D boundary monumentation, revenue Aks Shajra reconciliation, and legal coordinate boundary pins.',
    tolerance: 'Angular: 0.5" | Linear: 1:50,000',
    instrument: 'Total Station & Dual-Frequency RTK GNSS',
    datum: 'Survey of Pakistan Control Network',
    pins: [
      { id: 'p1', label: 'MONUMENT CP-01', coords: '30.2447° N, 71.4923° E', el: '124.50m', x: 22, y: 24, z: 40 },
      { id: 'p2', label: 'CORNER CP-02', coords: '30.2452° N, 71.4938° E', el: '124.62m', x: 78, y: 22, z: 46 },
      { id: 'p3', label: 'BOUNDARY CP-03', coords: '30.2439° N, 71.4941° E', el: '124.40m', x: 80, y: 76, z: 36 },
      { id: 'p4', label: 'FRONTAGE CP-04', coords: '30.2435° N, 71.4927° E', el: '124.32m', x: 20, y: 78, z: 32 }
    ],
    layers: [
      { name: 'Revenue Aks Shajra Grid', active: true, zOffset: 12 },
      { name: 'Monument Corner Pins', active: true, zOffset: 38 },
      { name: 'Legal Perimeter Traverse', active: true, zOffset: 24 }
    ],
    metrics: [
      { label: 'CLOSURE MISCLOSURE', val: '0.004m (Sub-Centimeter)' },
      { label: 'BOUNDARY TRAVERSE', val: '4-Point Closed Loop' },
      { label: 'EVIDENCE GRADE', val: 'Courtroom Certified Plat' }
    ]
  },
  {
    id: 'topography',
    symbol: '⟁',
    code: 'DOM-02 // TOPOGRAPHY',
    title: 'Topography & Civil Earthwork',
    shortDesc: '3D Digital Elevation Models (DEM), stepped contour terrain slices, and volumetric cut-and-fill modeling.',
    tolerance: 'Vertical: ±2mm | Grid: 5m x 5m Mesh',
    instrument: 'Electronic Total Station & Precision Digital Level',
    datum: 'Mean Sea Level (MSL) Geodetic Datum',
    pins: [
      { id: 't1', label: 'RIDGE PEAK', coords: '30.2449° N, 71.4930° E', el: '+128.50m', x: 50, y: 26, z: 65 },
      { id: 't2', label: 'GRADE BENCHMARK', coords: '30.2444° N, 71.4925° E', el: '+124.00m', x: 26, y: 52, z: 40 },
      { id: 't3', label: 'EXCAVATION CUT', coords: '30.2441° N, 71.4935° E', el: '+120.20m', x: 74, y: 68, z: 20 },
      { id: 't4', label: 'FILL EMBANKMENT', coords: '30.2437° N, 71.4939° E', el: '+122.80m', x: 52, y: 82, z: 32 }
    ],
    layers: [
      { name: '3D DTM Wireframe Grid', active: true, zOffset: 10 },
      { name: 'Contour Slices (2m Interval)', active: true, zOffset: 34 },
      { name: 'Cut/Fill Volumetric Prism', active: true, zOffset: 50 }
    ],
    metrics: [
      { label: 'CALCULATED FILL', val: '+1,250 m³ Compacted' },
      { label: 'CALCULATED CUT', val: '-840 m³ Bulk In-Situ' },
      { label: 'NET VOLUME BALANCE', val: '+410 m³ Import Required' }
    ]
  },
  {
    id: 'valuation',
    symbol: '⚖',
    code: 'DOM-03 // VALUATION',
    title: 'Valuation & Advisory',
    shortDesc: '3D zoning envelopes, municipal setback planes, and empirical physical asset appraisal metrics.',
    tolerance: 'Zoning Alignment: Local Municipal Bylaws',
    instrument: 'GIS Spatial Analytics & Field Inspection Stations',
    datum: 'Multan Development Authority (MDA) Zoning Masterplan',
    pins: [
      { id: 'v1', label: 'SETBACK FRONT', coords: '20ft Mandatory Setback', el: 'Ground Level', x: 50, y: 18, z: 30 },
      { id: 'v2', label: 'MAX ENVELOPE', coords: 'FAR: 1:3.5 Ratio', el: '+36.00m Height', x: 50, y: 50, z: 70 },
      { id: 'v3', label: 'SIDE CLEARANCE', coords: '10ft Clear Buffer', el: 'Boundary Buffer', x: 82, y: 52, z: 25 },
      { id: 'v4', label: 'REAR ACCESS', coords: '15ft Rear Service', el: 'Drainage Corridor', x: 18, y: 52, z: 25 }
    ],
    layers: [
      { name: 'Cadastral Lot Boundary', active: true, zOffset: 8 },
      { name: 'Municipal Setback Planes', active: true, zOffset: 28 },
      { name: 'Structural Massing Volume', active: true, zOffset: 55 }
    ],
    metrics: [
      { label: 'ALLOWABLE FOOTPRINT', val: '65% Plot Coverage' },
      { label: 'VALUATION RATIO', val: 'Direct Market Comparison' },
      { label: 'STATUTORY COMPLIANCE', val: '100% Verified Survey' }
    ]
  },
  {
    id: 'spatial',
    symbol: '◈',
    code: 'DOM-04 // GEODESY',
    title: 'Geospatial & Geodesy',
    shortDesc: '3D orbiting geodetic coordinate sphere, GNSS satellite triangulation, and WGS 84 datum transformations.',
    tolerance: 'Dual-Frequency RTK GNSS: 8mm + 1ppm',
    instrument: 'Multi-Constellation GNSS & GIS Workstations',
    datum: 'WGS 84 / UTM Zone 42N Projected Grid',
    pins: [
      { id: 's1', label: 'GNSS SATELLITE SV-08', coords: 'Triangulation Ray 01', el: '20,200 km Orbit', x: 28, y: 16, z: 75 },
      { id: 's2', label: 'GNSS SATELLITE SV-14', coords: 'Triangulation Ray 02', el: '20,200 km Orbit', x: 74, y: 20, z: 80 },
      { id: 's3', label: 'BASE STATION ROVER', coords: 'Differential Correction', el: 'Benchmark Receiver', x: 50, y: 54, z: 25 },
      { id: 's4', label: 'GEOID UNDULATION', coords: 'N = -32.40m Offset', el: 'Ellipsoid Separation', x: 50, y: 84, z: 15 }
    ],
    layers: [
      { name: 'Geodetic Sphere Meridians', active: true, zOffset: 15 },
      { name: 'Satellite Triangulation Rays', active: true, zOffset: 50 },
      { name: 'Ground Station Base Rover', active: true, zOffset: 25 }
    ],
    metrics: [
      { label: 'FIX STATUS', val: 'RTK Fix (Sub-Centimeter)' },
      { label: 'CONSTELLATIONS', val: 'GPS / GLONASS / Galileo' },
      { label: 'PROJECTED GRID', val: 'UTM Zone 42 North' }
    ]
  }
];

export default function ThreeDDomainExplorer() {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 18, rotateY: -14 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [layerVisibility, setLayerVisibility] = useState({
    grid: true,
    contours: true,
    pins: true
  });
  const [selectedPin, setSelectedPin] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef(null);
  const viewportRef = useRef(null);
  const touchStartRef = useRef(null);
  const baseTiltRef = useRef({ rotateX: 18, rotateY: -14 });

  const activeDomain = DOMAINS_3D[activeDomainIndex];

  // Pause continuous animations when off-screen to save 100% CPU on mobile
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth mouse move 3D tilt tracking
  const handleMouseMove = (e) => {
    if (!viewportRef.current || !isVisible) return;
    const rect = viewportRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Map to dynamic perspective angles (-24 to +24 degrees)
    const rotateY = (x / (rect.width / 2)) * 24;
    const rotateX = 18 - (y / (rect.height / 2)) * 18;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
    // Smooth reset to isometric resting angle
    setTilt(baseTiltRef.current);
  };

  // Touch drag for mobile devices
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        rotX: tilt.rotateX,
        rotY: tilt.rotateY
      };
      setIsInteracting(true);
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - touchStartRef.current.x;
    const dy = e.touches[0].clientY - touchStartRef.current.y;
    const nextRotY = touchStartRef.current.rotY + (dx * 0.25);
    const nextRotX = Math.max(-10, Math.min(45, touchStartRef.current.rotX - (dy * 0.25)));
    setTilt({ rotateX: nextRotX, rotateY: nextRotY });
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
    setIsInteracting(false);
  };

  const toggleLayer = (layerKey) => {
    setLayerVisibility((prev) => ({
      ...prev,
      [layerKey]: !prev[layerKey]
    }));
  };

  const resetOrientation = () => {
    setTilt({ rotateX: 18, rotateY: -14 });
    setSelectedPin(null);
  };

  return (
    <section 
      ref={containerRef}
      className="page-section threed-explorer-section" 
      aria-label="3D Geodetic Domain Explorer"
    >
      <div className="section-title-line">
        <div className="threed-kicker-row">
          <span className="threed-badge">SPATIAL TELEMETRY 3D</span>
          <span className="threed-kicker">INTERACTIVE FIELD MODELS // ZERO-DOWNLOAD GRAPHICS</span>
        </div>
        <h2 className="section-h2">Surveying Engineering Domains in 3D</h2>
        <p className="section-lead">
          Explore spatial geometry across our four core engineering domains. Rotate isometric parcel blocks, inspect volumetric elevation contour slabs, and examine satellite triangulation in real-time 3D space.
        </p>
      </div>

      {/* 4-Domain Tab Bar */}
      <div className="threed-domain-tabs" role="tablist" aria-label="Surveying Domains">
        {DOMAINS_3D.map((dom, idx) => {
          const isActive = idx === activeDomainIndex;
          return (
            <button
              key={dom.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${dom.id}`}
              id={`tab-${dom.id}`}
              className={`threed-domain-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                setActiveDomainIndex(idx);
                setSelectedPin(null);
              }}
            >
              <span className="tab-sym" aria-hidden="true">{dom.symbol}</span>
              <div className="tab-text-group">
                <span className="tab-code">{dom.code}</span>
                <span className="tab-title">{dom.title}</span>
              </div>
              {isActive && <span className="tab-active-indicator" aria-hidden="true"></span>}
            </button>
          );
        })}
      </div>

      {/* Interactive 3D Canvas & Engineering Docket Split */}
      <div className="threed-display-grid">
        {/* Left Column: 3D Perspective Spatial Viewport */}
        <div 
          ref={viewportRef}
          className="threed-viewport-frame"
          tabIndex={0}
          role="region"
          aria-label={`Interactive 3D model for ${activeDomain.title}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Telemetry Header */}
          <div className="viewport-hud-header">
            <div className="hud-telemetry-left">
              <span className="hud-live-dot" aria-hidden="true"></span>
              <span className="hud-datum-tag">{activeDomain.datum}</span>
            </div>
            <div className="hud-telemetry-right">
              <span className="hud-angle-readout">
                ROT X: {Math.round(tilt.rotateX)}° // ROT Y: {Math.round(tilt.rotateY)}°
              </span>
              <button 
                type="button" 
                className="hud-reset-btn"
                onClick={resetOrientation}
                title="Reset to default isometric angle"
                aria-label="Reset 3D angle"
              >
                ⟲ RESET
              </button>
            </div>
          </div>

          {/* 3D Scene Root Canvas (Pure CSS 3D Transforms) */}
          <div className="threed-scene-stage">
            <div 
              className={`threed-spatial-assembly ${isInteracting ? 'is-interacting' : 'is-floating'}`}
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
              }}
            >
              {/* Base Drafting Grid Plate */}
              {layerVisibility.grid && (
                <div className="threed-layer drafting-grid-plane" aria-hidden="true">
                  <div className="grid-gridlines"></div>
                  <div className="grid-axis-x"></div>
                  <div className="grid-axis-y"></div>
                  <span className="grid-origin-tag">STATION BM-01 [0,0,0]</span>
                </div>
              )}

              {/* DOMAIN 1: CADASTRAL 3D PARCEL BLOCK */}
              {activeDomain.id === 'cadastral' && (
                <div className="domain-3d-model cadastral-model" aria-hidden="true">
                  {/* Parcel Extruded Slab */}
                  <div className="cadastral-extrusion">
                    <div className="face face-top">
                      <div className="shajra-grid-pattern"></div>
                      <div className="boundary-traverse-loop"></div>
                    </div>
                    <div className="face face-front"></div>
                    <div className="face face-right"></div>
                  </div>

                  {/* Floating Aks Shajra Vector Layer */}
                  {layerVisibility.contours && (
                    <div className="floating-plane shajra-plane">
                      <div className="vector-diagonal-line"></div>
                      <span className="shajra-stamp">AKS SHAJRA RECONCILIATION</span>
                    </div>
                  )}
                </div>
              )}

              {/* DOMAIN 2: TOPOGRAPHY 3D CONTOUR DTM SLABS */}
              {activeDomain.id === 'topography' && (
                <div className="domain-3d-model topography-model" aria-hidden="true">
                  {/* Stepped Elevation Contour Slabs */}
                  {layerVisibility.contours && (
                    <>
                      <div className="contour-step step-1"><span className="el-label">EL 120.0m</span></div>
                      <div className="contour-step step-2"><span className="el-label">EL 122.0m</span></div>
                      <div className="contour-step step-3"><span className="el-label">EL 124.0m</span></div>
                      <div className="contour-step step-4"><span className="el-label">EL 126.0m</span></div>
                      <div className="contour-step step-5"><span className="el-label">EL 128.5m</span></div>
                    </>
                  )}

                  {/* Floating Volumetric Cut-and-Fill Prism */}
                  <div className="earthwork-volume-prism">
                    <div className="volume-label fill-tag">+1,250 m³ FILL</div>
                    <div className="volume-label cut-tag">-840 m³ CUT</div>
                  </div>

                  {/* Laser Sightline Ray */}
                  <div className="sightline-ray"></div>
                </div>
              )}

              {/* DOMAIN 3: VALUATION 3D MASSING ENVELOPE */}
              {activeDomain.id === 'valuation' && (
                <div className="domain-3d-model valuation-model" aria-hidden="true">
                  {/* 3D Architectural Setback Footprint */}
                  <div className="setback-footprint">
                    <div className="setback-zone front-setback"><span>FRONT 20FT</span></div>
                    <div className="setback-zone rear-setback"><span>REAR 15FT</span></div>
                  </div>

                  {/* Structural Massing Volume */}
                  {layerVisibility.contours && (
                    <div className="massing-envelope">
                      <div className="envelope-floor f1"></div>
                      <div className="envelope-floor f2"></div>
                      <div className="envelope-floor f3"></div>
                      <div className="envelope-roof"><span>ZONING C-1 ENVELOPE</span></div>
                    </div>
                  )}
                </div>
              )}

              {/* DOMAIN 4: GEOSPATIAL 3D GEODETIC WIREFRAME SPHERE */}
              {activeDomain.id === 'spatial' && (
                <div className="domain-3d-model spatial-model" aria-hidden="true">
                  {/* Rotating Meridian Rings */}
                  <div className="sphere-ring equator-ring"></div>
                  <div className="sphere-ring meridian-1"></div>
                  <div className="sphere-ring meridian-2"></div>
                  <div className="sphere-ring meridian-3"></div>

                  {/* Orbiting Satellites with Triangulation Rays */}
                  {layerVisibility.contours && (
                    <>
                      <div className="satellite-orbit orbit-1">
                        <div className="satellite-node">
                          <span className="sat-tag">GNSS SV-08</span>
                          <div className="triangulation-ray ray-1"></div>
                        </div>
                      </div>
                      <div className="satellite-orbit orbit-2">
                        <div className="satellite-node">
                          <span className="sat-tag">GNSS SV-14</span>
                          <div className="triangulation-ray ray-2"></div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="datum-core-pin">
                    <span>WGS 84 DATUM</span>
                  </div>
                </div>
              )}

              {/* Floating Spatial Pins & Coordinate Readouts */}
              {layerVisibility.pins && (
                <div className="threed-pins-layer">
                  {activeDomain.pins.map((pin) => {
                    const isSelected = selectedPin?.id === pin.id;
                    return (
                      <div
                        key={pin.id}
                        className={`floating-pin ${isSelected ? 'selected' : ''}`}
                        style={{
                          left: `${pin.x}%`,
                          top: `${pin.y}%`,
                          transform: `translate3d(-50%, -50%, ${pin.z}px)`
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPin(isSelected ? null : pin);
                        }}
                      >
                        <div className="pin-marker">
                          <span className="pin-pulse"></span>
                          <span className="pin-point"></span>
                        </div>
                        <div className="pin-card">
                          <span className="pin-card-name">{pin.label}</span>
                          <span className="pin-card-coords">{pin.coords}</span>
                          <span className="pin-card-el">ELEVATION: {pin.el}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Viewport Floating Interactive Hint */}
          <div className="viewport-interaction-hint">
            <span className="hint-icon" aria-hidden="true">❖</span>
            <span>Drag or move cursor to tilt 3D spatial perspective • Click pins for coordinates</span>
          </div>

          {/* Layer Visibility Control Toggles */}
          <div className="threed-layer-toolbar" role="toolbar" aria-label="3D Model Layer Toggles">
            <button
              type="button"
              className={`layer-toggle-chip ${layerVisibility.grid ? 'active' : ''}`}
              onClick={() => toggleLayer('grid')}
              aria-pressed={layerVisibility.grid}
            >
              <span className="chip-led"></span>
              <span>GRID BENCHMARK</span>
            </button>
            <button
              type="button"
              className={`layer-toggle-chip ${layerVisibility.contours ? 'active' : ''}`}
              onClick={() => toggleLayer('contours')}
              aria-pressed={layerVisibility.contours}
            >
              <span className="chip-led"></span>
              <span>ELEVATION SLICES</span>
            </button>
            <button
              type="button"
              className={`layer-toggle-chip ${layerVisibility.pins ? 'active' : ''}`}
              onClick={() => toggleLayer('pins')}
              aria-pressed={layerVisibility.pins}
            >
              <span className="chip-led"></span>
              <span>MONUMENT PINS</span>
            </button>
          </div>
        </div>

        {/* Right Column: Engineering Docket & Technical Specifications */}
        <div className="threed-docket-card" role="region" aria-label="Domain Engineering Docket">
          <div className="docket-header">
            <div className="docket-kicker">ENGINEERING SPECIFICATION DOCKET</div>
            <h3 className="docket-title">{activeDomain.title}</h3>
            <p className="docket-desc">{activeDomain.shortDesc}</p>
          </div>

          {/* Selected Pin Readout (If user clicked a pin) */}
          {selectedPin && (
            <div className="docket-active-pin-callout">
              <div className="callout-header">
                <span className="callout-dot"></span>
                <strong>INSPECTED POINT: {selectedPin.label}</strong>
              </div>
              <div className="callout-body">
                <div><span>COORDINATE:</span> {selectedPin.coords}</div>
                <div><span>ELEVATION:</span> {selectedPin.el}</div>
                <div><span>3D POSITION:</span> X:{selectedPin.x}% | Y:{selectedPin.y}% | Z:+{selectedPin.z}mm</div>
              </div>
            </div>
          )}

          {/* Precision & Equipment Specs */}
          <div className="docket-spec-list">
            <div className="docket-spec-item">
              <span className="spec-name">INSTRUMENTATION:</span>
              <span className="spec-val">{activeDomain.instrument}</span>
            </div>
            <div className="docket-spec-item">
              <span className="spec-name">GEOMETRIC TOLERANCE:</span>
              <span className="spec-val">{activeDomain.tolerance}</span>
            </div>
            <div className="docket-spec-item">
              <span className="spec-name">REFERENCE DATUM:</span>
              <span className="spec-val">{activeDomain.datum}</span>
            </div>
          </div>

          {/* Real-time Field Metrics Grid */}
          <div className="docket-metrics-grid">
            {activeDomain.metrics.map((m, i) => (
              <div key={i} className="metric-box">
                <span className="metric-label">{m.label}</span>
                <span className="metric-val">{m.val}</span>
              </div>
            ))}
          </div>

          {/* Action Call to Action */}
          <div className="docket-footer-action">
            <a href="#contact" className="btn-survey">
              Request a survey consultation
            </a>
            <span className="docket-dispatch-note">Direct Surveyor Dispatch Across Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
