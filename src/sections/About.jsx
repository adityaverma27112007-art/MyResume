import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import BackgroundScene from '../components/BackgroundScene';
import InteractiveWrapper from '../components/InteractiveWrapper';

/**
 * About section with 3D background and interactive tilt effect.
 */
const About = ({ data }) => (
  <InteractiveWrapper>
    <motion.section
      id="about"
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundScene />
      <section className="glass" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="section-header"><h2 className="reveal">About</h2></div>
          <div className={styles.grid}>
            <aside className={`${styles.label} reveal`}>
              <span>Bio</span>
              <div className={styles.vertLine} aria-hidden="true" />
            </aside>
            <div className={`${styles.body} reveal`} style={{ transitionDelay: '0.12s' }}>
              {data.map((paragraph, i) => (
                <p key={i} className={i === data.length - 1 ? styles.highlight : styles.paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  </InteractiveWrapper>
);

export default About;
