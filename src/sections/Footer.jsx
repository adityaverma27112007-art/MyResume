import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ name }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© {currentYear} {name}. All rights reserved.</p>
          <a href="#" className={styles.backToTop}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
