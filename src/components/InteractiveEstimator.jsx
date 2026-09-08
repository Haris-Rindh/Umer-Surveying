import React, { useState } from 'react';
import './InteractiveEstimator.css';

export default function InteractiveEstimator() {
  const [discipline, setDiscipline] = useState('topographic');
  const [scale, setScale] = useState('residential-plot');
  const [deliverable, setDeliverable] = useState('cad-dwg');

  const disciplines = [
    { id: 'topographic', label: 'Topographic & Elevation Survey' },
    { id: 'dispute', label: 'Land Dispute & Revenue Demarcation' },
    { id: 'agricultural', label: 'Agricultural Parcel Measurement' },
    { id: 'quantity', label: 'Earthwork Volume & Quantity Takeoff' },
    { id: 'valuation', label: 'Property Valuation & Inspection' },
    { id: 'contouring', label: '3D Contouring & Terrain Modeling' }
  ];

  const scales = [
    { id: 'residential-plot', label: 'Residential Plot (5 Marla – 2 Kanal)' },
    { id: 'commercial-site', label: 'Commercial Site / Building Sector' },
    { id: 'agricultural-farm', label: 'Agricultural Land (5 – 50+ Acres)' },
    { id: 'corridor-infra', label: 'Infrastructure / Road / Sewer Corridor' }
  ];

  const deliverables = [
    { id: 'cad-dwg', label: 'CAD Drawings (AutoCAD DWG / DXF)' },
    { id: 'kml-kmz', label: 'Google Earth Georeferenced KML / KMZ' },
    { id: 'staked-pins', label: 'Physical Staked Corner Pins & Benchmark' },
    { id: 'court-plat', label: 'Court-Ready Certified Cadastral Plat' },
    { id: 'excel-takeoff', label: 'Quantitative Earthwork Takeoff Schedule' }
  ];

  const selectedDisciplineObj = disciplines.find(d => d.id === discipline);
  const selectedScaleObj = scales.find(s => s.id === scale);
  const selectedDeliverableObj = deliverables.find(d => d.id === deliverable);

  const requisitionText = `Hello Umer Surveying, I require a survey crew for:\n- Discipline: ${selectedDisciplineObj?.label}\n- Land Scale: ${selectedScaleObj?.label}\n- Deliverable Required: ${selectedDeliverableObj?.label}\nLocation: Southern Punjab / Pakistan. Please provide mobilization schedule and scope.`;
  const whatsappUrl = `https://wa.me/923075859035?text=${encodeURIComponent(requisitionText)}`;
  const mailtoUrl = `mailto:farooqista_n@icloud.com?subject=${encodeURIComponent(`Survey Requisition: ${selectedDisciplineObj?.label}`)}&body=${encodeURIComponent(requisitionText)}`;

  return (
    <section id="estimator" className="page-section estimator-section" aria-label="Interactive Survey Scope Estimator">
      <div className="section-title-line">
        <h2 className="section-h2">Survey Scope &amp; Requisition Builder</h2>
        <p className="section-lead">
          Configure your parcel parameters below to generate an immediate technical requisition docket for our chief surveyor and instrument dispatch crews.
        </p>
      </div>

      <div className="estimator-card">
        <div className="estimator-steps-grid">
          {/* Step 1 */}
          <div className="step-column">
            <div className="step-header">
              <span className="step-num">01</span>
              <span className="step-title">SELECT DISCIPLINE</span>
            </div>
            <div className="step-options">
              {disciplines.map(d => (
                <button
                  key={d.id}
                  type="button"
                  className={`opt-btn ${discipline === d.id ? 'active' : ''}`}
                  onClick={() => setDiscipline(d.id)}
                >
                  <span className="opt-indicator">{discipline === d.id ? '■' : '□'}</span>
                  <span className="opt-text">{d.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-column">
            <div className="step-header">
              <span className="step-num">02</span>
              <span className="step-title">LAND SCALE &amp; SECTOR</span>
            </div>
            <div className="step-options">
              {scales.map(s => (
                <button
                  key={s.id}
                  type="button"
                  className={`opt-btn ${scale === s.id ? 'active' : ''}`}
                  onClick={() => setScale(s.id)}
                >
                  <span className="opt-indicator">{scale === s.id ? '■' : '□'}</span>
                  <span className="opt-text">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-column">
            <div className="step-header">
              <span className="step-num">03</span>
              <span className="step-title">PRIMARY DELIVERABLE</span>
            </div>
            <div className="step-options">
              {deliverables.map(del => (
                <button
                  key={del.id}
                  type="button"
                  className={`opt-btn ${deliverable === del.id ? 'active' : ''}`}
                  onClick={() => setDeliverable(del.id)}
                >
                  <span className="opt-indicator">{deliverable === del.id ? '■' : '□'}</span>
                  <span className="opt-text">{del.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Requisition Docket */}
        <div className="estimator-output-docket">
          <div className="docket-top">
            <span className="docket-title">GENERATED REQUISITION SPECIFICATION</span>
            <span className="docket-meta">SURVEY OF PAKISTAN DATUM // TOTAL STATION METROLOGY</span>
          </div>

          <div className="docket-specs-row">
            <div className="spec-unit">
              <span className="s-tag">DISCIPLINE:</span>
              <span className="s-value">{selectedDisciplineObj?.label}</span>
            </div>
            <div className="spec-unit">
              <span className="s-tag">LAND SCALE:</span>
              <span className="s-value">{selectedScaleObj?.label}</span>
            </div>
            <div className="spec-unit">
              <span className="s-tag">DELIVERABLE:</span>
              <span className="s-value">{selectedDeliverableObj?.label}</span>
            </div>
          </div>

          <div className="docket-action-bar">
            <p className="docket-instructions">
              Transmit this specification directly to our dispatch desk for crew availability, turnaround timetable, and formal quotation.
            </p>
            <div className="docket-btn-group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-survey">
                Dispatch via WhatsApp
              </a>
              <a href={mailtoUrl} className="btn-survey btn-outline">
                Transmit via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
