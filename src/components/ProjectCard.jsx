import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const isPlaceholder = project.title.includes('PLACEHOLDER');

  if (isPlaceholder) {
    return (
      <div className={`${styles.card} ${styles.placeholder}`}>
        <span className={styles.plus} aria-hidden="true">+</span>
        <h3 className={styles.placeholderTitle}>Future Project</h3>
        <p className={styles.placeholderSub}>More work coming soon</p>
      </div>
    );
  }

  return (
    <article className={styles.card}>
      {/* Header row */}
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.roleBadge}>{project.role}</span>
      </div>

      {/* One-line pitch */}
      <p className={styles.pitch}>{project.pitch}</p>

      {/* Tech tags */}
      <div className={styles.techRow}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tech}>{t}</span>
        ))}
      </div>

      {/* Problem solved */}
      <p className={styles.problem}>{project.problem}</p>

      {/* CTA */}
      <div className={styles.actions}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          data-variant="primary"
        >
          Live Demo ↗
        </a>
        {project.source !== '[YOUR REPO LINK]' && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Source ↗
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
