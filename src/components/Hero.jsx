import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, Mail } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-teal text-xl font-medium tracking-wide">Hello, I am</h2>
          <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Nazwatuzhakiya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream to-mint">Latansha</span>
          </h1>
        </div>
        
        <div className="text-lg md:text-2xl font-semibold text-mint min-h-[3rem] flex items-center">
          <Typewriter
            words={[
              'Systems Analyst',
              'Operations & Document Control Specialist',
              'Full-Stack Developer'
            ]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </div>
        
        <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
          A tech-savvy systems and administrative professional with end-to-end expertise in business process modeling, advanced data analytics, document governance, and full-stack system architecture designed to drive digital transformation and operational precision.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-mint text-navy font-bold px-7 py-3.5 rounded-full shadow-[0_0_20px_rgba(93,248,216,0.3)] hover:shadow-[0_0_30px_rgba(93,248,216,0.5)] transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/drive/folders/1sG3PYbw-4RHvP0j4usLB22o0DPdWOEMU?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/40 text-cream hover:bg-cream/10 font-medium px-7 py-3.5 rounded-full transition-all text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            Download Professional Resume
          </motion.a>
        </div>

        <div className="pt-2 flex items-center gap-4">
          <SocialLinks className="flex gap-4" />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal to-mint rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-[2rem] bg-[#0A192F]/80 border border-mint/30 backdrop-blur-md overflow-hidden flex items-start justify-start p-6 shadow-[0_0_30px_rgba(93,248,216,0.15)] font-mono text-xs sm:text-sm">
            <div className="absolute top-0 left-0 w-full h-8 bg-black/40 flex items-center px-4 gap-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-white/50">enterprise_operations.engine</span>
            </div>
            <div className="mt-8 text-mint w-full leading-relaxed">
              <Typewriter
                words={[
`// Enterprise Operations & Archiving Engine
> Manpower Registry: Synchronized (100%)
> Compliance Audits: Executed
> Executive Reporting & Analytics: Compiled
> Full-Stack Applications: Operational`
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={35}
                deleteSpeed={20}
                delaySpeed={2500}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}



