/**
 * Skip Link Component
 * Provides keyboard users with quick navigation to main content
 * WCAG 2.1 Level A requirement
 */

import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-0 left-0 z-50 px-4 py-2 bg-blue-600 text-white font-bold"
    >
      Skip to main content
    </a>
  );
};
