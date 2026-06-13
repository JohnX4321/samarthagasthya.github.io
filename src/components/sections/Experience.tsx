import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Device3DAnimation } from '../Device3DAnimation';
import portfolioData from '../../data/portfolioData.json';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-white dark:bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
            Work Experience
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <React.Fragment key={exp.id}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-[calc(50%-2rem)]">
                    <div className="neomorph-card rounded-2xl p-8 transition-colors duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="neomorph-icon bg-neutral-900 dark:bg-neutral-100 p-3 rounded-xl flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-white dark:text-neutral-900" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                              {exp.title}
                            </h3>
                            <span className="px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                          <motion.p
                            className="text-base text-neutral-600 dark:text-neutral-400 font-medium mb-3 cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                            onClick={() => {
                              if (exp.url != '') window.open(exp.url, '_blank');
                            }}
                          >
                            {exp.company}
                          </motion.p>
                          <div className="flex flex-wrap gap-4 text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.15 + idx * 0.08 }}
                              className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-neutral-400 dark:text-neutral-500 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-3 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15, type: 'spring' }}
                      className="w-3 h-3 rounded-full bg-neutral-900 dark:bg-neutral-100 border-2 border-white dark:border-neutral-900"
                    />
                  </div>

                  <div className="w-full md:w-[calc(50%-2rem)]">
                    {exp.id === 2 ? (
                      <div className="flex flex-col items-center justify-center h-full gap-3">
                        <img loading="lazy" src="/images/hci.webp" alt="HCIS" className="w-full max-w-sm rounded-xl border border-neutral-200 dark:border-neutral-800" />
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                          AI generated image for illustration purposes only
                        </p>
                      </div>
                    ) : exp.id === 3 ? (
                      <div className="flex flex-col items-center justify-center h-full gap-3">
                        <img loading="lazy" src="/images/gia.webp" alt="Math IA" className="w-full max-w-sm rounded-xl border border-neutral-200 dark:border-neutral-800" />
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                          AI generated image for illustration purposes only
                        </p>
                      </div>
                    ) : exp.id === 4 ? (
                      <div className="flex flex-col items-center justify-center h-full gap-3">
                        <img loading="lazy" src="/images/ev_scooter.webp" alt="EV Scooter" className="w-full max-w-sm rounded-xl border border-neutral-200 dark:border-neutral-800" />
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                          AI generated image for illustration purposes only
                        </p>
                      </div>
                    ) : exp.id === 5 ? (
                      <div className="flex items-center justify-center h-full">
                        <Device3DAnimation />
                      </div>
                    ) : exp.id === 6 ? (
                      <div className="flex flex-col items-center justify-center h-full gap-3">
                        <img loading="lazy" src="/images/edtech.webp" alt="EdTech VR" className="w-full max-w-sm rounded-xl border border-neutral-200 dark:border-neutral-800" />
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
                          AI generated image for illustration purposes only
                        </p>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
