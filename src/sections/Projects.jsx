import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = ({ data }) => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="reveal">Selected Work</h2>
        </div>

        <div className={styles.grid}>
          {data.map((project, index) => (
            <div
              key={index}
              className="reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
