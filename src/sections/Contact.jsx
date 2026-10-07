import React, { useState } from 'react';
import styles from './Contact.module.css';
import BackgroundScene from '../components/BackgroundScene';
import InteractiveWrapper from '../components/InteractiveWrapper';
import { motion } from 'framer-motion';

/**
 * Contact section with 3D background and interactive tilt effect.
 */
const Contact = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <InteractiveWrapper>
      <motion.section
        id="contact"
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <BackgroundScene />
        <section className="glass" style={{ position: 'relative', zIndex: 10 }}>
          <div className="container">
            <div className="section-header"><h2 className="reveal">Get In Touch</h2></div>
            <div className={styles.layout}>
              <div className={`${styles.left} reveal`}>
                <p className={styles.message}>
                  I'm actively seeking internships and opportunities. Whether you have a project in mind or just want to say hi — reach out.
                </p>
              </div>
              <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.12s' }}>
                <div className={styles.emailRow}>
                  <a href={`mailto:${data.email}`} className={styles.email}>{data.email}</a>
                  <button onClick={handleCopyEmail} className={styles.copyBtn} aria-label="Copy email address">
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
                <div className={styles.social}>
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className="btn" data-variant="primary">GitHub ↗</a>
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="btn" data-variant="primary">LinkedIn ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.section>
    </InteractiveWrapper>
  );
};

export default Contact;
