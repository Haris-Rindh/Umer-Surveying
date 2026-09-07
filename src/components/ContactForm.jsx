import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Topographic Surveying',
    parcelLocation: '',
    projectScope: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form handling: Prepare payload for backend or mailto dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Survey Consultation Request Payload:', formData);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceRequired: 'Topographic Surveying',
      parcelLocation: '',
      projectScope: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <span className="form-badge">FORM 01-SR // FORMAL SURVEY COMMISSION INTAKE</span>
        <span className="form-legend-note">ALL SPECIFICATIONS TREATED UNDER CONFIDENTIAL CLIENT PRIVILEGE</span>
      </div>

      {submitted ? (
        <div className="form-success-banner" role="status" aria-live="polite">
          <div className="success-badge">TRANSMISSION CONFIRMED // LOGGED</div>
          <h3 className="success-title">Consultation Requisition Received</h3>
          <p className="success-text">
            Your survey inquiry for <strong>{formData.serviceRequired}</strong> has been logged to our active survey dispatch desk. Our chief surveyor will review your parcel specifications and contact you directly at <strong>{formData.phone || formData.email}</strong> within 24 hours.
          </p>
          <div className="success-action">
            <button type="button" className="btn-survey btn-outline" onClick={handleReset}>
              Submit Another Field Requisition
            </button>
          </div>
        </div>
      ) : (
        <form className="cadastral-form" onSubmit={handleSubmit} noValidate={false}>
          {/* Row 1: Name */}
          <div className="form-field-row">
            <label htmlFor="fullName" className="field-label">
              Client / Organization <span className="req-mark">*</span>
            </label>
            <div className="field-input-box">
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                required 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Principal, Company, or Landowner Name"
                className="technical-input"
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="form-field-row">
            <label htmlFor="email" className="field-label">
              Electronic Mail <span className="req-mark">*</span>
            </label>
            <div className="field-input-box">
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="client@organization.com"
                className="technical-input"
              />
            </div>
          </div>

          {/* Row 3: Phone / WhatsApp */}
          <div className="form-field-row">
            <label htmlFor="phone" className="field-label">
              Telephone / WhatsApp <span className="req-mark">*</span>
            </label>
            <div className="field-input-box">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required 
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className="technical-input"
              />
            </div>
          </div>

          {/* Row 4: Service Selection */}
          <div className="form-field-row">
            <label htmlFor="serviceRequired" className="field-label">
              Survey Service Required <span className="req-mark">*</span>
            </label>
            <div className="field-input-box">
              <select 
                id="serviceRequired" 
                name="serviceRequired" 
                value={formData.serviceRequired}
                onChange={handleChange}
                className="technical-input technical-select"
              >
                <option value="Topographic Surveying">Topographic Surveying (Total Station &amp; GPS)</option>
                <option value="Property Valuation">Property Valuation (Market &amp; Legal Assessment)</option>
                <option value="Real Estate Consultancy">Real Estate Consultancy (Feasibility &amp; Layout)</option>
                <option value="Quantity Estimation">Quantity Estimation (Cut-and-Fill Takeoffs)</option>
                <option value="Cost Estimation">Cost Estimation (Civil Budgeting Schedules)</option>
                <option value="Land Dispute Resolution">Land Dispute Resolution (Aks Shajra &amp; Court Plats)</option>
                <option value="KML/KMZ Map Formatting">KML/KMZ Map Formatting (Google Earth GIS Layers)</option>
                <option value="Agricultural Land Measurement">Agricultural Land Measurement (Murabba &amp; Acreage)</option>
                <option value="3D Contouring">3D Contouring (DEM &amp; Drainage Slopes)</option>
                <option value="Residential Land Measurement">Residential Land Measurement (Perimeter &amp; Setbacks)</option>
                <option value="Surveying Certification Program">Professional Surveyor Training Certification</option>
              </select>
            </div>
          </div>

          {/* Row 5: Parcel Location */}
          <div className="form-field-row">
            <label htmlFor="parcelLocation" className="field-label">
              Parcel Location / Coordinates
            </label>
            <div className="field-input-box">
              <input 
                type="text" 
                id="parcelLocation" 
                name="parcelLocation" 
                value={formData.parcelLocation}
                onChange={handleChange}
                placeholder="e.g. Mouza, Tehsil, District Multan, or GPS Coordinates"
                className="technical-input"
              />
            </div>
          </div>

          {/* Row 6: Project Scope Narrative */}
          <div className="form-field-row">
            <label htmlFor="projectScope" className="field-label">
              Project Scope &amp; Deliverables <span className="req-mark">*</span>
            </label>
            <div className="field-input-box">
              <textarea 
                id="projectScope" 
                name="projectScope" 
                required 
                rows="4"
                value={formData.projectScope}
                onChange={handleChange}
                placeholder="State required deliverables: CAD drawings, boundary demarcation, elevation contours, volume schedules, or court plats."
                className="technical-input technical-textarea"
              ></textarea>
            </div>
          </div>

          {/* Submit Row */}
          <div className="form-submit-row">
            <div className="submit-label-spacer"></div>
            <div className="submit-action-box">
              <button 
                type="submit" 
                className="btn-survey" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging Requisition..." : "Transmit Survey Requisition"}
              </button>
              <span className="submit-confidential-note">
                DIRECT TO CHIEF SURVEYOR DESK • 24/7 ROSTER
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
