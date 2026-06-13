import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Package, X } from 'lucide-react';

interface Technology {
  name: string;
  version: string;
  description: string;
  license: string;
  url: string;
  category: 'runtime' | 'build' | 'styling' | 'utility';
}

interface OpenSourceLicensesProps {
  isOpen: boolean;
  onClose: () => void;
}

const technologies: Technology[] = [
  // Runtime Dependencies
  {
    name: 'React',
    version: '18.3.1',
    description: 'JavaScript library for building user interfaces with components',
    license: 'MIT',
    url: 'https://react.dev',
    category: 'runtime',
  },
  {
    name: 'React DOM',
    version: '18.3.1',
    description: 'React package for working with the DOM',
    license: 'MIT',
    url: 'https://react.dev',
    category: 'runtime',
  },
  {
    name: 'TypeScript',
    version: '5.5.3',
    description: 'Programming language that builds on JavaScript with static types',
    license: 'Apache 2.0',
    url: 'https://www.typescriptlang.org',
    category: 'runtime',
  },
  {
    name: 'Framer Motion',
    version: '12.23.22',
    description: 'Production-ready motion library for React animations',
    license: 'MIT',
    url: 'https://www.framer.com/motion',
    category: 'runtime',
  },
  {
    name: 'react-icons',
    version: '5.5.0',
    description: 'Icon library with multiple icon sets (Font Awesome, Heroicons, etc)',
    license: 'MIT',
    url: 'https://react-icons.github.io/react-icons',
    category: 'runtime',
  },
  {
    name: 'lucide-react',
    version: '0.344.0',
    description: 'Beautiful & consistent SVG icon library for React',
    license: 'ISC',
    url: 'https://lucide.dev',
    category: 'runtime',
  },
  {
    name: 'React Intersection Observer',
    version: '9.16.0',
    description: 'React component for detecting when elements enter/exit viewport',
    license: 'MIT',
    url: 'https://github.com/thebuilder/react-intersection-observer',
    category: 'runtime',
  },
  {
    name: 'Zod',
    version: '4.3.6',
    description: 'TypeScript-first schema validation with static type inference',
    license: 'MIT',
    url: 'https://zod.dev',
    category: 'utility',
  },
  {
    name: 'Font Awesome',
    version: '7.1.0',
    description: 'Iconic font and CSS toolkit with comprehensive icon library',
    license: 'CC BY 4.0 & MIT',
    url: 'https://fontawesome.com',
    category: 'runtime',
  },

  // Build Tools
  {
    name: 'Vite',
    version: '5.4.2',
    description: 'Next generation frontend tooling - blazingly fast build tool',
    license: 'MIT',
    url: 'https://vitejs.dev',
    category: 'build',
  },
  {
    name: 'ESLint',
    version: '9.9.1',
    description: 'Find and fix problems in JavaScript code',
    license: 'MIT',
    url: 'https://eslint.org',
    category: 'build',
  },

  // Styling
  {
    name: 'Tailwind CSS',
    version: '3.4.1',
    description: 'Utility-first CSS framework for rapidly building custom designs',
    license: 'MIT',
    url: 'https://tailwindcss.com',
    category: 'styling',
  },
  {
    name: 'PostCSS',
    version: '8.4.35',
    description: 'Tool for transforming CSS with JavaScript plugins',
    license: 'MIT',
    url: 'https://postcss.org',
    category: 'styling',
  },
  {
    name: 'Autoprefixer',
    version: '10.4.18',
    description: 'PostCSS plugin to parse CSS and add vendor prefixes automatically',
    license: 'MIT',
    url: 'https://github.com/postcss/autoprefixer',
    category: 'styling',
  },
];

const categoryColors: Record<Technology['category'], { bg: string; text: string }> = {
  runtime: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-700 dark:text-neutral-300' },
  build: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-700 dark:text-neutral-300' },
  styling: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-700 dark:text-neutral-300' },
  utility: { bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-700 dark:text-neutral-300' },
};

const categoryLabels: Record<Technology['category'], string> = {
  runtime: 'Runtime',
  build: 'Build Tools',
  styling: 'Styling',
  utility: 'Utilities',
};

export const OpenSourceLicenses: React.FC<OpenSourceLicensesProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const groupedTechs = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<Technology['category'], Technology[]>
  );

  const categories: Technology['category'][] = ['runtime', 'build', 'styling', 'utility'];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto"
      >
        <div className="w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-neutral-900 px-8 py-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between rounded-t-2xl z-10">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                Technologies & Licenses
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="px-8 py-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8">
              Open source technologies powering this portfolio. All licenses have been respected and acknowledged.
            </p>

            <div className="space-y-10">
              {categories.map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                      {categoryLabels[category]}
                    </h3>
                    <div className="section-divider !mx-0" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {groupedTechs[category]?.map((tech, index) => {
                      const colors = categoryColors[tech.category];
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 dark:text-white">
                                {tech.name}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                v{tech.version}
                              </p>
                            </div>
                            <a
                              href={tech.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg transition-colors flex-shrink-0"
                              aria-label={`Visit ${tech.name} website`}
                            >
                              <ExternalLink className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                            </a>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 text-xs mb-3 leading-relaxed">
                            {tech.description}
                          </p>

                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                            {tech.license}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mt-10 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700"
            >
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Special thanks to all the open source maintainers and contributors. Click the links above to visit official project pages.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
