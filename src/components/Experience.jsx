import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "PT Murinda Iron Steel",
    role: "HSE & Operations Administration Specialist Intern",
    period: "July 2026 – Present",
    bullets: [
      "Oversee end-to-end operational logging, occupational health and safety administration, and crisis-management documentation for plant operations.",
      "Govern the enterprise manpower register, ensuring real-time workforce tracking and zero-defect record accuracy.",
      "Direct Personal Protective Equipment (PPE) supply chain allocation and execute 5R audit score calculations using advanced data reconciliation models in Microsoft Excel and WPS Office.",
      "Author visual communication media and deliver executive presentation assets for Safety Induction and Safety Morning Talk programs.",
      "Compile and deliver comprehensive periodic operational reports to provide actionable safety and manpower analytics to plant executives."
    ]
  },
  {
    company: "UPTD Farmasi Kabupaten Subang",
    role: "Pharmaceutical Inventory & Document Control Officer",
    period: "Vocational Internship (PKL)",
    bullets: [
      "Engineered structured archiving protocols for regional pharmaceutical supply chain documentation and regulatory compliance files.",
      "Executed data validation, stock balancing, and batch-tracking analytics for incoming and outgoing medical supplies.",
      "Managed cross-regional logistical documentation to ensure seamless pharmaceutical distribution across public health centers in Subang Regency."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full"></div>
      </motion.div>

      <motion.div 
        className="relative border-l border-white/20 ml-4 md:ml-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-10 ml-8 relative group"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-navy border-2 border-mint group-hover:bg-mint transition-colors shadow-[0_0_10px_rgba(93,248,216,0.5)]"></span>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 hover:border-mint/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-1">
                <h3 className="text-xl font-bold text-cream">{exp.company}</h3>
                <span className="text-xs font-mono text-mint bg-mint/10 px-3 py-1 rounded-full w-fit">{exp.period}</span>
              </div>
              <p className="text-base font-semibold text-white/90 mb-4">{exp.role}</p>
              
              <ul className="space-y-2.5">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="text-sm text-white/75 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-mint mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}



