import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToAnchor: Ensures reliable navigation to both route tops and hash anchors
 * across multi-page transitions (e.g. from /portfolio to /#services or /#contact).
 */
export default function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (hash) {
      lastHash.current = hash;
      const targetId = hash.replace('#', '');
      
      let attempts = 0;
      const maxAttempts = 10;
      
      const scrollHandler = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < maxAttempts) {
          attempts += 1;
          setTimeout(scrollHandler, 60);
        }
      };

      // Slight delay to allow React Router / page components to mount
      setTimeout(scrollHandler, 40);
    } else {
      lastHash.current = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
