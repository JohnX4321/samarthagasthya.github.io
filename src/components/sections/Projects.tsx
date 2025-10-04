import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
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

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
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
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex gap-4">
              <a
                href={project.links.live}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
              <a
                href={project.links.github}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full md:w-1/2">
        <div className="neomorph-card bg-white dark:bg-gray-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
              Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
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
    <section id="projects" className="min-h-screen py-20 px-6 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="space-y-20">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
