import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderKanban, Image as ImageIcon, X, ZoomIn } from 'lucide-react';

const projects = [
  {
    title: "SIMA HSE - System Monitoring HSE Administration",
    category: "Enterprise HSE Management System (Laravel)",
    architecture: "A centralized web platform engineered to govern occupational health, safety, and operational administration. Features real-time manpower tracking, PPE supply allocation, automated 5R inspection scoring, and periodic executive compliance analytics.",
    role: "Systems Analyst & Full-Stack Developer",
    link: "https://github.com/nazwatuzhakiya/SIMA-HSE-System-Monitoring-HSE-Administration",
    image: "/projects/sima.png",
    tags: ["Laravel Framework", "PHP", "MySQL", "HSE Governance", "5R Compliance Auditing"],
    hasScreenshot: true
  },
  {
    title: "Safety Induction & HSE Reporting System",
    category: "Full-Stack Web Application (React & Tailwind)",
    architecture: "An interactive, web-based platform designed to digitize the Safety Induction process for new workers and plant visitors. Facilitates instant reporting of safety observations, unsafe conditions, and industrial incidents with automated notification workflows.",
    role: "Frontend / Full-Stack Developer & HSE Systems Designer",
    link: "https://github.com/nazwatuzhakiya/Induction-Pelaporan",
    image: "/projects/induction.png",
    tags: ["React", "Tailwind CSS", "Vite", "Safety Induction", "Real-Time Incident Logs"],
    hasScreenshot: true
  },
  {
    title: "SILOKOS - Boarding House Information & Management System",
    category: "Business Process Modeling & Full-Stack System",
    architecture: "A comprehensive management system developed to streamline boarding house operations. Encompasses structured relational schema modeling for tenant onboarding, automated billing reconciliation, and visual room occupancy analytics.",
    role: "Data Analyst & Systems Designer",
    link: "https://github.com/nazwatuzhakiya/SILOKOS-Sistem-Informasi-Pengelolaan-Kost",
    image: "/projects/silokos.png",
    tags: ["Systems Analysis", "PHP", "MySQL", "ERD Design", "Financial Reconciliation"],
    hasScreenshot: true
  },
  {
    title: "Sanggar Goong Prasasti Information System",
    category: "Full-Stack Web Application (Laravel)",
    architecture: "An end-to-end organizational management platform designed for cultural arts centers. Centralizes member registration records, automated performance and rehearsal scheduling, and institutional financial bookkeeping.",
    role: "Full-Stack Developer & Systems Analyst",
    link: "https://github.com/nazwatuzhakiya",
    image: "/projects/goong.png",
    tags: ["Laravel Framework", "MySQL", "Relational Architecture", "Event Scheduling"],
    hasScreenshot: true
  },
  {
    title: "Automated Sparepart Stock Management System (Berkah Diesel)",
    category: "Inventory Automation & VBA / Macro Engineering",
    architecture: "Engineered an automated stock governance engine utilizing advanced VBA Macros for real-time inventory reconciliations, automated batch logging, and delivered standard technical SOP manuals.",
    role: "Automation Developer & Technical Writer",
    link: "https://github.com/nazwatuzhakiya/VBA_Excel-SistemManajemenStockPadaTokoSparepartBerkahDiesel-",
    image: null,
    tags: ["VBA Macros", "Advanced MS Excel", "Inventory Control", "Technical SOP"],
    hasScreenshot: false
  },
  {
    title: "DIFEST & ROBOFEST HIMATIKOM Portal",
    category: "Frontend Engineering & Administrative UI",
    architecture: "Built responsive, user-centric participant registration portals and administrative document verification workflows for regional and national technology competition events.",
    role: "Frontend Developer & UI Specialist",
    link: "https://github.com/Zackisaeful/difest",
    image: null,
    tags: ["Frontend Web", "JavaScript", "HTML5/CSS3", "UI/UX Design"],
    hasScreenshot: false
  },
  {
    title: "Pharmaceutical Warehouse Inventory System (UPTD Farmasi)",
    category: "Healthcare Logistics & Document Governance",
    architecture: "Architected a relational database web application to manage regional pharmaceutical inventory, automated medication expiration tracking, and monthly health distribution compliance reports.",
    role: "Full-Stack Developer & Systems Administrator",
    link: "https://github.com/nazwatuzhakiya",
    image: null,
    tags: ["Relational Database", "Inventory Audit", "Document Control", "Compliance Tracking"],
    hasScreenshot: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

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
          A showcase of information systems, software engineering applications, and HSE automation platforms I have designed and engineered.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-4"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/[0.08] hover:border-mint/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Project Image Preview or Code Banner */}
              {project.hasScreenshot && project.image ? (
                <button 
                  type="button"
                  aria-label={`View screenshot for ${project.title}`}
                  className="relative h-48 w-full block overflow-hidden bg-navy/80 cursor-pointer border-b border-white/10 group/img focus:outline-none text-left"
                  onClick={() => setSelectedImage({ url: project.image, title: project.title })}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  
                  {/* Zoom badge overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-navy/60 transition-opacity duration-300 backdrop-blur-[2px] pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-mint text-navy font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" /> View Screenshot
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[11px] text-mint flex items-center gap-1 font-mono pointer-events-none">
                    <ImageIcon className="w-3 h-3" /> Preview
                  </div>
                </button>
              ) : (
                <div className="relative h-28 w-full bg-gradient-to-br from-navy via-[#0c2238] to-[#061827] border-b border-white/10 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-mint/80 bg-mint/10 border border-mint/20 px-2.5 py-0.5 rounded-md">
                      GitHub Source Available
                    </span>
                    <Github className="w-4 h-4 text-white/40 group-hover:text-mint transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <FolderKanban className="w-3.5 h-3.5 text-teal" />
                    <span className="truncate">{project.category}</span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[11px] font-mono font-semibold text-mint bg-mint/10 border border-mint/20 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cream transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-white/75 leading-relaxed mb-4">
                  {project.architecture}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-2">
              <div>
                <span className="text-[11px] text-white/50 block">Role:</span>
                <span className="text-xs font-semibold text-cream">{project.role}</span>
              </div>
              
              <div className="flex items-center gap-2">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-mint hover:text-navy rounded-lg transition-all text-xs font-medium text-white group/btn shadow-sm"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal for Screenshot Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] bg-navy border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#071324]">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-mint" />
                  {selectedImage.title}
                </h4>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-auto p-4 flex items-center justify-center bg-black/40">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
