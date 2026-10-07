import React, { useRef } from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import BackgroundScene from '../components/BackgroundScene';
import InteractiveWrapper from '../components/InteractiveWrapper';

const Hero = ({ data, name, year }) => {
  const sectionRef = useRef(null);
  const handleMouseMove = (e) => {
    const el = sectionRef.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (y / rect.height) * 8;
    const rotateY = -(x / rect.width) * 8;
    gsap.to(el, { rotationX: rotateX, rotationY: rotateY, duration: 0.3, ease: 'power2.out' });
  };
  const handleMouseLeave = () => {
    const el = sectionRef.current;
    gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'power2.out' });
  };

  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  return (
    <InteractiveWrapper>
      <div className={styles.hero} style={{ position: 'relative' }}>
        <BackgroundScene />
        <motion.section
          id="hero"
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="container">
            <div className={styles.grid}>
              {/* Left: typography */}
              <div className={`${styles.content} reveal`}>
                <div className={styles.eyebrow}>
                  <span className={styles.status} aria-hidden="true" />
                  {year} · SRMIST Kattankulathur
                </div>
                <h1 className={styles.title}>
                  <span className={styles.firstName}>{firstName}</span>
                  <span className={styles.lastName}>{lastName}</span>
                </h1>
                <p className={styles.roleLine}>{data.tagline}</p>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.cta}>
                  <a href="#projects" className="btn" data-variant="primary">View Work</a>
                  <a href="#contact" className="btn">Let's Talk</a>
                </div>
              </div>
              {/* Right: terminal visual */}
              <div className={`${styles.visual} reveal`} style={{ transitionDelay: '0.15s' }} aria-hidden="true">
                <div className={styles.terminalWrap}>
                  <div className={styles.terminalHeader}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <div className={styles.terminalBody}>
                    <p><span className={styles.prompt}>$</span> aditya --who</p>
                    <p className={styles.output}>AI &amp; ML student @ SRMIST</p>
                    <p><span className={styles.prompt}>$</span> aditya --status</p>
                    <p className={styles.output}>Open to internships ✓</p>
                    <p><span className={styles.prompt}>$</span> aditya --build</p>
                    <p className={styles.output}>&gt; Building scalable web apps...</p>
                    <p><span className={styles.prompt}>$</span> <span className={styles.cursor} /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </InteractiveWrapper>
  );
};

export default Hero;
