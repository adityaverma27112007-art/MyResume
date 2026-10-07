import React from 'react';
import styles from './Skills.module.css';

const categoryLabels = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Tooling: 'Tooling & Deployment',
};

const Skills = ({ data, statement }) => {
  return (
    <section id="skills">
      <div className="container">
        {/* Section header */}
        <div className="section-header">
          <h2 className="reveal">Capabilities</h2>
        </div>

        {/* Work-statement banner */}
        <p className={`${styles.statement} reveal`}>{statement}</p>

        {/* Three-column skill groups */}
        <div className={styles.groups}>
          {Object.entries(data).map(([key, items], index) => (
            <div
              key={key}
              className={`${styles.group} reveal`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <h3 className={styles.groupTitle}>
                {categoryLabels[key] || key}
              </h3>
              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span className={styles.arrow} aria-hidden="true">&rsaquo;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
