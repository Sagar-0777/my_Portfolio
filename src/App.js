import React, { useEffect } from 'react';
import './index.css';
import './styles/theme.css';
import './styles/responsive.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import initAnimateOnScroll from './utils/animateOnScroll';

function App(){
  useEffect(() => {
    const cleanup = initAnimateOnScroll();
    return () => cleanup && cleanup();
  }, []);
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
