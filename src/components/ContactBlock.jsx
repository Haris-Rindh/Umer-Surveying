import React from 'react';
import ContactForm from './ContactForm';
import './ContactBlock.css';

export default function ContactBlock() {
  return (
    <section id="contact" className="contact-section" aria-label="Survey Requisition & Consultation">
      <div className="section-title-line">
        <h2 className="section-h2">Survey Requisition &amp; Consultation</h2>
        <p className="section-lead">
          Commission our surveying crew or request boundary verification through direct telephone, WhatsApp, or formal intake requisition.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Office Location, Direct Links & Map */}
        <div className="plat-description-col">
          <div className="plat-description-box">
            <div className="legal-plat-text">
              <p className="plat-firm-line">UMER SURVEYING™ CONSULTANCY</p>
              <p className="plat-address-line">
                Model Town A, Block A, Commercial Sector<br />
                Multan, Punjab 60200<br />
                Islamic Republic of Pakistan
              </p>
              <div className="plat-coordinates-line">
                <span>Geodetic Coordinates: <strong>30.2447° N, 71.4923° E</strong></span>
                <span>Reference Datum: <strong>WGS 84 / Survey of Pakistan</strong></span>
              </div>
            </div>

            <div className="plain-links-list">
              <div className="link-entry">
                <span className="link-label">TELEPHONE / DISPATCH:</span>
                <a href="tel:+923075859035" className="plain-survey-link">
                  +92 307 5859035
                </a>
              </div>

              <div className="link-entry">
                <span className="link-label">WHATSAPP FIELD LINE:</span>
                <a href="https://wa.me/923075859035" target="_blank" rel="noopener noreferrer" className="plain-survey-link">
                  +92 307 5859035
                </a>
              </div>

              <div className="link-entry">
                <span className="link-label">ELECTRONIC MAIL:</span>
                <a href="mailto:farooqista_n@icloud.com" className="plain-survey-link">
                  farooqista_n@icloud.com
                </a>
              </div>

              <div className="link-entry">
                <span className="link-label">LINKEDIN DIRECTORY:</span>
                <a href="https://www.linkedin.com/company/umer-surveying/" target="_blank" rel="noopener noreferrer" className="plain-survey-link">
                  linkedin.com/company/umer-surveying
                </a>
              </div>

              <div className="link-entry">
                <span className="link-label">OPERATING ROSTER:</span>
                <span className="hours-val">24/7 Active Fieldwork &amp; Emergency Boundary Demarcation</span>
              </div>
            </div>
          </div>

          {/* Single Embedded Google Map */}
          <div className="map-embed-wrapper">
            <iframe
              title="Umer Surveying Multan Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.733067943245!2d71.49231809999999!3d30.244687700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35a32d628275%3A0xcbe9c89c8168a6d5!2sUmer%20Surveying!5e0!3m2!1sen!2s!4v1744825236055!5m2!1sen!2s"
              width="100%"
              height="280"
              style={{ border: "1px solid var(--rule-color)", display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Single Formal Survey Intake Form */}
        <div className="plat-form-col">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
