import React from 'react';
import styles from './About.module.css';

const About = ({ data }) => {
  return (
    <section id="about">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="reveal">About</h2>
        </div>

        {/* Asymmetric 1fr 2fr grid — indent text to the right */}
        <div className={styles.grid}>
          <aside className={`${styles.label} reveal`}>
            <span>Bio</span>
            <div className={styles.vertLine} aria-hidden="true" />
          </aside>

          <div className={`${styles.body} reveal`} style={{ transitionDelay: '0.12s' }}>
            {data.map((paragraph, i) => (
              <p
                key={i}
                className={i === data.length - 1 ? styles.highlight : styles.paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
