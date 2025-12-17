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
    <section id="certifications" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-accent-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
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
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Filter by Provider:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((provider) => (
              <motion.button
                key={provider}
                onClick={() => setSelectedProvider(provider)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedProvider === provider
                    ? 'bg-gradient-to-r from-blue-600 to-accent-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md neomorph-card'
                }`}
              >
                {provider}
                {provider !== 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
          {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="neomorph-card bg-white dark:bg-gray-800 rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 group relative"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center neomorph-icon"
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="text-4xl">🏆</div>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {cert.name}
                </h3>

                <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-mono">{cert.credentialId}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-accent-50 dark:from-blue-900/30 dark:to-accent-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span>View Badge</span>
                  <ExternalLink className="w-4 h-4" />
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
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            More Badges at
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.badgeProviders.map((provider, index) => (
              <motion.a
                key={provider.name}
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="neomorph-card bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-blue-100 to-accent-50 dark:from-blue-900/30 dark:to-accent-900/30 flex items-center justify-center">
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {provider.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {provider.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                    <span>Visit Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block neomorph-card bg-gradient-to-r from-blue-50 to-accent-50 dark:from-blue-900/20 dark:to-accent-900/20 rounded-2xl p-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
              Committed to continuous professional development
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Always expanding knowledge and staying current with industry standards
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
