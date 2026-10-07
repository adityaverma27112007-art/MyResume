import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="reveal">Get In Touch</h2>
        </div>

        <div className={styles.layout}>
          {/* ── Left: heading + message ──── */}
          <div className={`${styles.left} reveal`}>
            <p className={styles.message}>
              I'm actively seeking internships and opportunities.
              Whether you have a project in mind or just want to say hi — reach out.
            </p>
          </div>

          {/* ── Right: email + socials ───── */}
          <div className={`${styles.right} reveal`} style={{ transitionDelay: '0.12s' }}>
            {/* Email row */}
            <div className={styles.emailRow}>
              <a href={`mailto:${data.email}`} className={styles.email}>
                {data.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className={styles.copyBtn}
                aria-label="Copy email address"
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Social links */}
            <div className={styles.social}>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                data-variant="primary"
              >
                GitHub ↗
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
