import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 10; // tilt intensity
    const rotateY = -(x / rect.width) * 10;
    gsap.to(card, { rotationX: rotateX, rotationY: rotateY, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'power2.out' });
  };

  const isPlaceholder = project.title.includes('PLACEHOLDER');

  if (isPlaceholder) {
    return (
      <motion.div
        ref={cardRef}
        className={`${styles.card} ${styles.placeholder}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
      >
        <span className={styles.plus} aria-hidden="true">+</span>
        <h3 className={styles.placeholderTitle}>Future Project</h3>
        <p className={styles.placeholderSub}>More work coming soon</p>
      </motion.div>
    );
  }

  return (
    <motion.article
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
    >
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.roleBadge}>{project.role}</span>
      </div>
      <p className={styles.pitch}>{project.pitch}</p>
      <div className={styles.techRow}>
        {project.tech.map((t) => (
          <span key={t} className={styles.tech}>{t}</span>
        ))}
      </div>
      <p className={styles.problem}>{project.problem}</p>
      <div className={styles.actions}>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn" data-variant="primary">Live Demo ↗</a>
        {project.source !== '[YOUR REPO LINK]' && (
          <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">Source ↗</a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
