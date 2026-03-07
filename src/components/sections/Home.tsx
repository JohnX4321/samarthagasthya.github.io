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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-accent-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-accent-900/20" />

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 dark:bg-accent-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/10 dark:bg-pink-600/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-accent-500 to-pink-500 p-1">
              <img src="https://github.com/samarthsubramanya/samarthagasthya.github.io/blob/revamp_v3/public/images/about/profile.jpg?raw=true" className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-accent-600" alt="Profile Image">
                {/*personal.name.split(' ').map(n => n[0]).join('')*/}

              </img>
            </div>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-accent-600 rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            {personal.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-accent-600 dark:from-blue-400 dark:to-accent-400 bg-clip-text text-transparent"
          >
            {personal.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto italic"
          >
            "{personal.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/*<a
              href={`mailto:${personal.email}`}
              className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">{personal.email}</span>
            </a>*/}
            {/*<a
              href={`tel:${personal.phone}`}
              className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">{personal.phone}</span>
            </a>*/}
            <div className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: personal.social.github, color: 'hover:text-gray-900 dark:hover:text-white' },
              { icon: Linkedin, href: personal.social.linkedin, color: 'hover:text-blue-600 dark:hover:text-blue-400' }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-400 ${color} transition-all`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
