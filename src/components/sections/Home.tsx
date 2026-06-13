import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, MapPin } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const Home: React.FC = () => {
  const { personal } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20 bg-neutral-50 dark:bg-neutral-950"
    >
      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="w-36 h-36 mx-auto rounded-full border border-neutral-200 dark:border-neutral-700 p-1">
              <img
                loading="lazy"
                src="/images/profile.webp"
                className="w-full h-full rounded-full object-cover bg-neutral-100 dark:bg-neutral-800"
                alt="Profile Image"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50"
          >
            {personal.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-medium mb-6 text-neutral-600 dark:text-neutral-400"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-xl mx-auto"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center space-x-2 px-5 py-2.5 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span className="text-neutral-700 dark:text-neutral-300">{personal.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-4"
          >
            {[
              { icon: Github, href: personal.social.github },
              { icon: Linkedin, href: personal.social.linkedin },
            ]
              .filter(({ href }) => href !== '#')
              .map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-neutral-400 dark:border-neutral-600 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-neutral-500 dark:bg-neutral-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
