import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="neomorph-card bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="neomorph-icon bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl flex-shrink-0"
                      >
                        <Briefcase className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                            {exp.type}
                          </span>
                        </div>
                        <motion.p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3" onClick={() => {
                            if(exp.url != "")
                                window.open(exp.url,"_blank")
                            else
                            { /* empty */ }
                        }}>
                          {exp.company}
                        </motion.p>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2, type: 'spring' }}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-full h-full rounded-full bg-blue-400"
                    />
                  </motion.div>
                </div>

                <div className="w-full md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
