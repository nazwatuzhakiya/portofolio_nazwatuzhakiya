import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const educationList = [
  {
    institution: "Politeknik Negeri Subang",
    degree: "Associate Degree (D3) in Information Systems",
    period: "2024 – Present",
    scope: "Systems Analysis & Design, Database Architecture (MySQL), Web Application Development (Laravel Framework), Object-Oriented Programming, Data Analytics, Business Process Engineering, Software Testing & Quality Assurance, and Administrative Systems."
  },
  {
    institution: "SMKN 1 Cikaum",
    degree: "Vocational High School Diploma in Software Engineering (RPL)",
    period: "2021 – 2024",
    scope: "Algorithms & Data Structures, Relational Database Systems, Desktop/Web Programming Fundamentals, Software Life Cycle Management, and Technical Documentation."
  }
];

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-3">Education</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-mint/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-navy rounded-xl border border-mint/20 text-mint">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-mint bg-mint/10 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-xl font-bold text-cream mb-1">{edu.institution}</h3>
              <p className="text-base font-semibold text-white/90 mb-4">{edu.degree}</p>
              
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-mint" /> Academic Scope
                </h4>
                <p className="text-sm text-white/75 leading-relaxed">{edu.scope}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
