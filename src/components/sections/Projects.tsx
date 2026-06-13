import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '../../data/portfolioData.json';

const ProjectCard: React.FC<{ project: typeof portfolioData.projects[0]; index: number }> = ({
  project,
  index,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col md:flex-row gap-8 items-center ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <motion.div style={{ y }} className="w-full md:w-1/2">
        <div className="relative group overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex gap-3">
              {project.links.live !== '#' && (
                <a
                  href={project.links.live}
                  className="p-2.5 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              )}
              <a
                href={project.links.github}
                className="p-2.5 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full md:w-1/2">
        <div className="neomorph-card rounded-2xl p-8">
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            {project.category}
          </span>

          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mt-2 mb-4">
            {project.title}
          </h3>

          <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-sm">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
                Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm">
                    <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-neutral-900 dark:text-neutral-50">
            Featured Projects
          </h2>
          <div className="section-divider" />
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm max-w-xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="space-y-16">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
