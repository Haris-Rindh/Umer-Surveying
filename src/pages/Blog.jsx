import React from 'react';
import { postsData } from '../data/posts';
import { useDocumentTitle } from '../utils/seo';
import './Blog.css';

export default function Blog() {
  useDocumentTitle('blog');

  return (
    <div className="blog-page-flow">
      {/* Field Notes Header Docket */}
      <section className="blog-intro-docket" aria-label="Field Notes Header Docket">
        <h1 className="blog-h1">
          Field Notes &amp; Technical Dispatches
        </h1>

        <p className="blog-lead">
          Technical dispatches, calibration standards, and legal cadastral analyses compiled by the survey engineers of Umer Surveying™. All articles published in full technical text without truncation.
        </p>

        <div className="blog-disclaimer-strip">
          <span className="disclaimer-badge">PRACTICE STANDARDS:</span>
          <span className="disclaimer-text">
            Observations derived from active field surveys across Southern Punjab, Survey of Pakistan benchmarks, and municipal infrastructure assessments.
          </span>
        </div>
      </section>

      {/* Field Notes List — Full Text Visible */}
      <div className="dispatches-container">
        {postsData.map((post) => (
          <article 
            key={post.id} 
            className="dispatch-entry" 
            aria-label={`Field Note: ${post.title}`}
          >
            {/* Dispatch Header Block */}
            <div className="dispatch-meta-block">
              <div className="dispatch-top-row">
                <span className="dispatch-num">{post.dispatchNumber}</span>
                <span className="dispatch-date">{post.date}</span>
              </div>
              <h2 className="dispatch-title">{post.title}</h2>
              <div className="dispatch-byline">
                <span className="byline-author">AUTHOR: {post.author}</span>
                <span className="byline-sep">•</span>
                <span className="byline-cat">FIELD: {post.category}</span>
              </div>
            </div>

            {/* Executive Summary Lead */}
            <div className="dispatch-summary-box">
              <span className="summary-tag">EXECUTIVE MEMORANDUM:</span>
              <p className="summary-content">{post.summary}</p>
            </div>

            {/* Complete Full Text Sections */}
            <div className="dispatch-full-text">
              {post.sections.map((sec, secIdx) => (
                <div key={secIdx} className="dispatch-text-section">
                  <h3 className="section-subheading">{sec.heading}</h3>
                  {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="dispatch-p">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul className="dispatch-bullet-list">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="dispatch-bullet-item">
                          <span className="bullet-point">▸</span>
                          <span className="bullet-text">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Dispatch Footer Seal */}
            <div className="dispatch-seal-footer">
              <span className="seal-notation">
                VERIFIED FIELD DISPATCH • UMER SURVEYING™ CADASTRAL ARCHIVE • MULTAN
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
