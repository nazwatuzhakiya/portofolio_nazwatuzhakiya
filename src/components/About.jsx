import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Code, GitBranch, BarChart3 } from 'lucide-react';

const coreCompetencies = [
  {
    title: "Business Process Modeling & Requirements Engineering",
    desc: "Designing structured business process flows, mapping system requirements, and translating operational needs into actionable technical specifications.",
    icon: <GitBranch className="w-6 h-6 text-mint" />
  },
  {
    title: "Full-Stack Software Engineering & System Architecture",
    desc: "Architecting scalable web applications, managing relational database schemes, and building custom logic for enterprise tools.",
    icon: <Code className="w-6 h-6 text-mint" />
  },
  {
    title: "Document Control & Executive Reporting",
    desc: "Establishing enterprise document retention schedules, maintaining version control, and compiling analytical reports for management.",
    icon: <FileSpreadsheet className="w-6 h-6 text-mint" />
  },
  {
    title: "Advanced Data Analytics & Workflow Optimization",
    desc: "Executing data reconciliation, quantitative audit modeling, and process automation to maximize cross-departmental productivity.",
    icon: <BarChart3 className="w-6 h-6 text-mint" />
  }
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 mb-12"
      >
        <p className="text-white/80 text-lg leading-relaxed mb-6">
          I am an Information Systems scholar at <span className="text-cream font-semibold">Politeknik Negeri Subang</span> who bridges operational excellence with custom software engineering. My practical tenure as an <span className="text-mint font-semibold">Operations & Administrative Specialist Intern at PT Murinda Iron Steel</span> refined my capabilities in managing workforce registries, administering safety compliance metrics, generating executive reports, and engineering internal corporate visual assets.
        </p>
        <p className="text-white/80 text-lg leading-relaxed">
          Leveraging a comprehensive background in Information Systems, I am uniquely equipped to drive daily office administration while simultaneously <span className="text-mint font-semibold font-mono">architecting, analyzing, and deploying custom code solutions</span> to streamline corporate workflows.
        </p>
      </motion.div>

      <h3 className="text-2xl font-bold text-cream mb-6 text-center">Core Competencies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreCompetencies.map((comp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-mint/30 transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-navy rounded-lg border border-mint/20 shrink-0">
              {comp.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{comp.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed">{comp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


