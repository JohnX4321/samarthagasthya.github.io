import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Shield, Tag, ExternalLink, Filter } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProvider, setSelectedProvider] = useState<string>('All');

  const providers = useMemo(() => {
    const uniqueProviders = Array.from(
      new Set(portfolioData.certifications.map((cert) => cert.provider))
    );
    return ['All', ...uniqueProviders];
  }, []);

  const filteredCertifications = useMemo(() => {
    if (selectedProvider === 'All') {
      return portfolioData.certifications;
    }
    return portfolioData.certifications.filter(
      (cert) => cert.provider === selectedProvider
    );
  }, [selectedProvider]);

  return (
    <section id="certifications" className="min-h-screen py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
            Certifications
          </h2>
          <div className="section-divider" />
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm max-w-xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Filter className="w-4 h-4 text-neutral-500" />
            <span className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
              Filter by Provider
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {providers.map((provider) => (
              <motion.button
                key={provider}
                onClick={() => setSelectedProvider(provider)}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedProvider === provider
                    ? 'btn-primary'
                    : 'border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600'
                }`}
              >
                {provider}
                {provider !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    {portfolioData.certifications.filter((c) => c.provider === provider).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProvider}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="neomorph-card rounded-2xl p-6 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-neutral-900 dark:bg-neutral-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white dark:text-neutral-900" />
                </div>

                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1 text-center">
                  {cert.name}
                </h3>

                <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm font-medium mb-4">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.date}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <Shield className="w-3.5 h-3.5" />
                  <span className="font-mono">{cert.credentialId}</span>
                </div>

                <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5 text-neutral-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 btn-primary rounded-lg text-sm transition-colors"
                >
                  <span>View Badge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-neutral-900 dark:text-neutral-50">
            More Badges at
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.badgeProviders.map((provider, index) => (
              <motion.a
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                className="neomorph-card rounded-xl p-5 transition-colors group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50 mb-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {provider.name}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    {provider.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 text-xs font-medium">
                    <span>Visit Platform</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-neutral-500 dark:text-neutral-400 text-sm"
        >
          Committed to continuous professional development
        </motion.p>
      </div>
    </section>
  );
};
