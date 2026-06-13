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
    <section id="education" className="min-h-screen py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
            Education
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="neomorph-card rounded-2xl p-8 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="neomorph-icon bg-neutral-900 dark:bg-neutral-100 p-3.5 rounded-xl flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white dark:text-neutral-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-neutral-500 dark:text-neutral-400 text-sm">
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
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-0 md:ml-16">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + idx * 0.08 }}
                            className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed"
                          >
                            <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 flex-shrink-0" />
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
