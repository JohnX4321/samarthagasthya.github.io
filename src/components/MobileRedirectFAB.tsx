import { useState } from 'react';

export function MobileRedirectFAB() {
  const [isHovering, setIsHovering] = useState(false);

  // Don't show on mobile domain
  if (window.location.host.includes('m.samarthagasthya.dev')) {
    return null;
  }

  const handleRedirect = () => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    window.location.href = `https://m.samarthagasthya.dev${currentPath}${currentSearch}`;
  };

  return (
    <button
      onClick={handleRedirect}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="fixed bottom-8 right-8 z-40 group"
      aria-label="Open Kotlin Multiplatform version"
      title="Kotlin Multiplatform"
    >
      {isHovering && (
        <div className="absolute bottom-16 right-0 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg animate-in fade-in duration-200">
          Kotlin Multiplatform
          <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
        </div>
      )}

      <div className="relative">
        <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-pulse opacity-50" />

        <div className="relative w-14 h-14 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all duration-200 flex items-center justify-center cursor-pointer">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white dark:text-neutral-900"
            aria-hidden="true"
          >
            <path fill="currentColor" d="M24 24H0V0h24L12 12Z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
