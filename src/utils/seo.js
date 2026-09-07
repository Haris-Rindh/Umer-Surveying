import { useEffect } from 'react';

/**
 * Base canonical domain for Umer Surveying™.
 * NOTE: Flagged for confirmation per Section 7 item 3 before final deployment.
 */
export const SITE_DOMAIN = 'https://umersurveying.vercel.app';

export const pageSeoData = {
  home: {
    title: "Umer Surveying™ — Land Surveying & GIS Consultancy | Multan, Pakistan",
    description: "Umer Surveying™ provides precision cadastral, topographic, and GIS land surveying across Southern Punjab from Multan, Pakistan. Total station mapping, boundary demarcation, and legal dispute resolution.",
    path: "/"
  },
  portfolio: {
    title: "Cadastral Field Records & Projects | Umer Surveying™",
    description: "Engineering surveys and cadastral field records executed by Umer Surveying, including the JICA Multan Children Hospital expansion and Nawabpur Union Council urban planning project.",
    path: "/portfolio"
  },
  blog: {
    title: "Field Notes & Surveying Dispatches | Umer Surveying™",
    description: "Technical dispatches and field notes from Umer Surveying on boundary law, instrument calibration, GNSS control networks, and cadastral mapping standards.",
    path: "/blog"
  }
};

/**
 * React hook to set per-page unique title, meta description, and canonical URL.
 */
export function useDocumentTitle(pageKey) {
  useEffect(() => {
    const seo = pageSeoData[pageKey] || pageSeoData.home;
    document.title = seo.title;

    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', seo.description);

    // Update Canonical URL
    const fullUrl = `${SITE_DOMAIN}${seo.path}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Update Open Graph tags
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // Scroll to top on route change unless hash is present
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pageKey]);
}
