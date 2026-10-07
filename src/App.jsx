// Editorial Brutalist aesthetic
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { content } from './data/content';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero data={content.hero} name={content.name} year={content.year} />
        <About data={content.about} />
        <Skills data={content.skillsSection} statement={content.workStatement} />
        <Projects data={content.projects} />
        <Contact data={content.contact} />
      </main>
      <Footer name={content.name} />
    </>
  );
}

export default App;
