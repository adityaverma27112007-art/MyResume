import React from 'react';
import ProjectCard from '../components/ProjectCard';
import BackgroundScene from '../components/BackgroundScene';
import InteractiveWrapper from '../components/InteractiveWrapper';
import { motion } from 'framer-motion';

/**
 * Projects section with 3D background and interactive tilt effect.
 */
const Projects = ({ data }) => (
  <InteractiveWrapper>
    <motion.section
      id="projects"
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundScene />
      <section className="glass" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-8"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected Work
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, when: 'beforeChildren' } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {data.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.section>
  </InteractiveWrapper>
);

export default Projects;
