import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-accent-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="neomorph-card bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="neomorph-icon bg-gradient-to-br from-blue-500 to-accent-600 p-4 rounded-2xl flex-shrink-0"
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span className="font-semibold">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-0 md:ml-20">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-accent-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
