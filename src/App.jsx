import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

export default function App() {
  return (
    <div className="app-container">
      {/* Global Scroll & Anchor Restoration */}
      <ScrollToAnchor />

      {/* Shared Sticky Header */}
      <Header />

      {/* Main Drafting Spine Container */}
      <main className="drafting-layout" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Shared Benchmark Footer */}
        <Footer />
      </main>
    </div>
  );
}
