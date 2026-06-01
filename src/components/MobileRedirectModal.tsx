import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function MobileRedirectModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if already on mobile domain
    if (window.location.host.includes('m.samarthagasthya.dev')) {
      return;
    }

    // Detect mobile using both user-agent and screen dimensions
    const isMobileDevice = () => {
      const userAgent = navigator.userAgent || '';
      const isMobileUserAgent = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(userAgent);
      
      // Also check screen width (tablets will be caught if < 768px width in portrait)
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const isMobileWidth = screenWidth < 768;
      
      // Consider it mobile if either mobile user agent AND mobile width
      // This filters out tablets on landscape or desktop windows resized small
      return isMobileUserAgent && isMobileWidth;
    };

    // Show modal on mount if mobile detected
    if (isMobileDevice()) {
      setShowModal(true);
    }
  }, []);

  const handleRedirect = () => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    window.location.href = `https://m.samarthagasthya.dev${currentPath}${currentSearch}`;
  };

  const handleDismiss = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Mobile Experience Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I've detected that you're viewing from a mobile device. While this site works fine on all devices, I have an optimized mobile version with a better experience tailored for smaller screens.
          </p>
        </div>

        {/* Features List */}
        <div className="mb-6 space-y-2">
          <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">Mobile version includes:</p>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
            <li>• Optimized touch interactions</li>
            <li>• Responsive layout perfection optimized for small screens</li>
            <li>• Demonstrates the use of Kotlin Multiplatform</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDismiss}
            className="flex-1 px-4 py-2.5 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg font-semibold transition-colors"
          >
            Stay Here
          </button>
          <button
            onClick={handleRedirect}
            className="flex-1 px-4 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Go to Mobile Site
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-4">
          You can dismiss this and stay on the desktop version if you prefer.
        </p>
      </div>
    </div>
  );
}
