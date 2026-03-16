/**
 * Accessibility Utilities & WCAG Guidelines
 * Ensures portfolio is accessible to all users including those with disabilities
 */

/**
 * ARIA Labels for common patterns
 */
export const ariaLabels = {
  // Navigation
  navigation: 'Main navigation',
  mobileMenu: 'Mobile menu toggle',
  closeMenu: 'Close navigation menu',
  
  // Forms
  search: 'Search portfolio',
  submit: 'Submit form',
  
  // Interactive elements
  toggleTheme: 'Toggle dark mode',
  scrollToTop: 'Scroll to top',
  
  // Sections
  projectsSection: 'Featured projects showcase',
  skillsSection: 'Technical skills and expertise',
  experienceSection: 'Professional experience',
  certificationSection: 'Certifications and credentials',
  educationSection: 'Education history',
  
  // External links
  externalLink: 'Opens in new window',
  githubProfile: 'View profile on GitHub',
  linkedinProfile: 'View profile on LinkedIn',
};

/**
 * Keyboard navigation hints
 */
export const keyboardHints = {
  skipToContent: 'Press Enter to skip to main content',
  menuNavigation: 'Use arrow keys to navigate menu items',
  closeDialog: 'Press Escape to close',
};

/**
 * Color contrast checker
 * Ensures text meets WCAG AA standards (4.5:1 for normal text)
 */
export const colorContrast = {
  requirements: {
    wcagAA_normal: 4.5, // For normal text
    wcagAA_large: 3.0,   // For large text (18pt+)
    wcagAAA_normal: 7.0, // Enhanced
    wcagAAA_large: 4.5,  // Enhanced for large
  },
  
  /**
   * Calculate relative luminance (WCAG formula)
   */
  getLuminance: (hex: string): number => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    
    const luminance = (channel: number) => {
      const c = channel / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    
    return 0.2126 * luminance(r) + 0.7152 * luminance(g) + 0.0722 * luminance(b);
  },
  
  /**
   * Calculate contrast ratio between two colors
   */
  getContrastRatio: (hexColor1: string, hexColor2: string): number => {
    const lum1 = colorContrast.getLuminance(hexColor1);
    const lum2 = colorContrast.getLuminance(hexColor2);
    
    const lighter = Math.max(lum1, lum2);
    const darker = Math.min(lum1, lum2);
    
    return (lighter + 0.05) / (darker + 0.05);
  },
  
  /**
   * Check if contrast meets WCAG AA
   */
  meetsWCAG_AA: (hexColor1: string, hexColor2: string, isLargeText = false): boolean => {
    const ratio = colorContrast.getContrastRatio(hexColor1, hexColor2);
    const requirement = isLargeText ? colorContrast.requirements.wcagAA_large : colorContrast.requirements.wcagAA_normal;
    return ratio >= requirement;
  },
};

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Check if element is visible and focusable
   */
  isFocusable: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    const isVisible = style.visibility !== 'hidden' && style.display !== 'none';
    const isInViewport = element.offsetHeight > 0 && element.offsetWidth > 0;
    const isTabIndex = element.tabIndex >= -1;
    
    return isVisible && isInViewport && isTabIndex;
  },
  
  /**
   * Move focus to element
   */
  setFocus: (element: HTMLElement | null) => {
    if (element && focusManagement.isFocusable(element)) {
      element.focus();
      return true;
    }
    return false;
  },
  
  /**
   * Get all focusable elements in container
   */
  getFocusableElements: (container: HTMLElement): HTMLElement[] => {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];
    
    return Array.from(container.querySelectorAll(selectors.join(','))) as HTMLElement[];
  },
};

/**
 * Screen reader text utilities
 */
export const screenReader = {
  /**
   * CSS class for hiding text visually but keeping it for screen readers
   */
  hiddenClass: 'sr-only',
  
  /**
   * Hidden text for screen readers
   */
  srOnly: 'sr-only text-xs absolute w-px h-px p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0',
  
  /**
   * Announce dynamic changes to screen readers (via aria-live)
   */
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = screenReader.srOnly;
    liveRegion.textContent = message;
    
    document.body.appendChild(liveRegion);
    
    setTimeout(() => {
      liveRegion.remove();
    }, 1000);
  },
};

/**
 * Skip link for keyboard navigation
 */
export const skipLink = {
  /**
   * Create skip-to-content link
   */
  createSkipLink: (): HTMLAnchorElement => {
    const link = document.createElement('a');
    link.href = '#main-content';
    link.textContent = 'Skip to main content';
    link.className = `${screenReader.srOnly} focus:not-sr-only`;
    return link;
  },
};

/**
 * WCAG 2.1 Compliance Checklist
 */
export const wcagChecklist = {
  perception: [
    'Text color contrast (4.5:1 minimum)',
    'Images have alt text or are decorative',
    'No information conveyed by color alone',
    'Resizable text (no fixed px only)',
  ],
  operation: [
    'All functionality keyboard accessible',
    'Focus indicators always visible',
    'No keyboard trap',
    'Focus order is logical',
  ],
  understandable: [
    'Language of page specified',
    'Consistent navigation',
    'Label all form inputs',
    'Error messages are clear',
  ],
  robust: [
    'Valid HTML/CSS',
    'ARIA used correctly',
    'Works with screen readers',
    'No accessibility barriers',
  ],
};
