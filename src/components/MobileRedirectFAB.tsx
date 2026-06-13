import { useState } from 'react';
import { Smartphone } from 'lucide-react';

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
      aria-label="Open mobile version"
      title="View optimized mobile version"
    >
      {/* Tooltip */}
      {isHovering && (
        <div className="absolute bottom-16 right-0 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg animate-in fade-in duration-200">
          Open Mobile Site
          <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 dark:bg-gray-100 rotate-45" />
        </div>
      )}

      {/* FAB Button */}
      <div className="relative">
        {/* Pulse background effect */}
        <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-pulse opacity-50" />
        
        <div className="relative w-14 h-14 bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-700 transition-all duration-200 flex items-center justify-center cursor-pointer">
          <Smartphone size={24} className="text-white dark:text-neutral-900" strokeWidth={2} />
        </div>
      </div>
    </button>
  );
}
