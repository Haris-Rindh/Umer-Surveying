import React from 'react';
import { equipmentData } from '../data/equipment';
import './EquipmentSection.css';

export default function EquipmentSection() {
  return (
    <section id="equipment" className="page-section equipment-section" aria-label="Field Instruments and Technology Arsenal">
      <div className="section-title-line">
        <h2 className="section-h2">Field Instruments &amp; Technology Arsenal</h2>
        <p className="section-lead">
          We do not estimate boundaries by eye or rely on uncalibrated consumer gear. Every survey point is measured using calibrated electronic total stations, multi-constellation RTK GNSS receivers, optical auto-levels, and CAD/GIS workstations tied to Survey of Pakistan control benchmarks.
        </p>
      </div>

      <div className="equipment-grid">
        {equipmentData.map((item) => (
          <article key={item.id} className="equipment-card">
            <div className="equipment-card-header">
              <div className="equipment-badge-row">
                <span className="equipment-category">{item.category}</span>
                <span className="equipment-tag">{item.badge}</span>
              </div>
              <h3 className="equipment-title">{item.title}</h3>
              <div className="equipment-accuracy-line">
                <span className="acc-label">PRECISION STANDARD:</span>
                <span className="acc-value">{item.accuracy}</span>
              </div>
            </div>

            <p className="equipment-desc">{item.description}</p>

            <div className="equipment-app-box">
              <span className="app-box-title">DEPLOYED FIELDWORK &amp; CAPABILITIES:</span>
              <ul className="equipment-app-list">
                {item.applications.map((app, idx) => (
                  <li key={idx} className="equipment-app-item">
                    <span className="app-bullet">▸</span>
                    <span className="app-text">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
