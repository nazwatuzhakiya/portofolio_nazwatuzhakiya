import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy/80 backdrop-blur-[10px] shadow-lg shadow-black/20 border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-white font-medium tracking-tighter text-sm sm:text-base hover:text-cream transition-colors">
          <a href="mailto:nazwatuzhakiya@gmail.com">nazwatuzhakiya@gmail.com</a>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex gap-4 text-xs font-medium uppercase tracking-wider">
            <a href="#home" className="hover:text-cream transition-colors">Home</a>
            <a href="#about" className="hover:text-cream transition-colors">About</a>
            <a href="#experience" className="hover:text-cream transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cream transition-colors">Projects</a>
            <a href="#education" className="hover:text-cream transition-colors">Education</a>
            <a href="#leadership" className="hover:text-cream transition-colors">Leadership</a>
            <a href="#skills" className="hover:text-cream transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
          </div>
          <SocialLinks className="flex gap-3" />
        </div>
      </div>
    </motion.nav>
  );
}


