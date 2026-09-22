import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div className="relative min-h-screen">
      <div className="mesh-bg"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-12 space-y-32">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="leadership">
          <Leadership />
        </section>
        
        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="py-8 text-center text-white/50 border-t border-white/10 mt-20">
        <p>&copy; {new Date().getFullYear()} Nazwatuzhakiya Latansha. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


