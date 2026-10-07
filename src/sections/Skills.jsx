import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';
import InteractiveWrapper from '../components/InteractiveWrapper';

/**
 * Skills section with 3D background and interactive tilt effect.
 */
const Skills = ({ data, statement }) => (
  <InteractiveWrapper>
    <motion.section
      id="skills"
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundScene />
      <section className="glass" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="reveal">Capabilities</h2>
          </div>
          <p className={`${styles.statement} reveal`}>{statement}</p>
          <div className={styles.groups}>
            {Object.entries(data).map(([key, items], index) => (
              <div key={key} className={`${styles.group} reveal`} style={{ transitionDelay: `${index * 0.08}s` }}>
                <h3 className={styles.groupTitle}>{key}</h3>
                <ul className={styles.list}>
                  {items.map((item) => (
                    <li key={item} className={styles.item}>
                      <span className={styles.arrow} aria-hidden="true">&rsaquo;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  </InteractiveWrapper>
);

export default Skills;
