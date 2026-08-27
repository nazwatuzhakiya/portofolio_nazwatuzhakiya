import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderKanban } from 'lucide-react';

const projects = [
  {
    title: "Sistem Informasi Sanggar Goong Prasasti",
    category: "Full-Stack Web Application (Laravel)",
    architecture: "Engineered an end-to-end management platform centralizing member enrollment, automated activity scheduling, and financial/event data governance.",
    role: "Full-Stack Developer & Systems Analyst",
    link: "#"
  },
  {
    title: "SILOKOS - Sistem Informasi & Pengelolaan Kost",
    category: "Business Process Analysis & Analytics",
    architecture: "Conducted comprehensive process mapping and structured data schema design to digitize tenant profiles, payment reconciliations, and property utilization metrics.",
    role: "Data Analyst & Systems Designer",
    link: "https://github.com/xyuifdnsky/silokos.com"
  },
  {
    title: "Sistem Manajemen Stock Barang Toko Berkah Diesel",
    category: "Automated Inventory & Documentation",
    architecture: "Developed an automated stock control system utilizing VBA Macro scripts for real-time transactional reconciliations, accompanied by full technical documentation and SOP manuals.",
    role: "Automation Developer & Technical Writer",
    link: "https://github.com/nazwatuzhakiya/VBA_Excel-SistemManajemenStockPadaTokoSparepartBerkahDiesel-"
  },
  {
    title: "Sistem DIFEST & ROBOFEST HIMATIKOM",
    category: "Frontend Engineering & Admin UI",
    architecture: "Built responsive, user-centric frontend interfaces for national technology competitions, facilitating participant onboarding and document verification workflows.",
    role: "Frontend Developer & UI Specialist",
    link: "https://github.com/Zackisaeful/difest"
  },
  {
    title: "Sistem Inventory Gudang Obat (UPTD Farmasi)",
    category: "Full-Stack Inventory System",
    architecture: "Architected a relational database web application to manage pharmaceutical stock workflows, automated expiration tracking, and generated monthly compliance reports.",
    role: "Full-Stack Developer & Systems Administrator",
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Featured Systems & Technical Projects</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-base">
          A showcase of information systems and administrative data management projects I have designed and managed.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-4"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-mint/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FolderKanban className="w-5 h-5 text-mint shrink-0" />
                <span className="text-xs font-mono font-semibold text-mint bg-mint/10 px-2.5 py-1 rounded-md">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cream transition-colors leading-snug">
                {project.title}
              </h3>

              <div className="space-y-3 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-1">Architecture & Impact</h4>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-white/50 block">Role:</span>
                <span className="text-sm font-semibold text-cream">{project.role}</span>
              </div>
              
              {project.link !== "#" && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-mint hover:text-navy transition-colors text-white"
                  title="View Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


