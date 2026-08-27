import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const skillSections = [
  {
    title: "Hard Skills & Technical Proficiencies",
    icon: <Cpu className="w-6 h-6 text-mint" />,
    categories: [
      {
        subtitle: "Software Engineering",
        items: ["Laravel Framework", "PHP", "JavaScript", "HTML5/CSS3", "VBA/Macros", "RESTful APIs"]
      },
      {
        subtitle: "Database & Analytics",
        items: ["MySQL", "Relational Database Design (ERD)", "Data Reconciliation", "Quantitative Reporting"]
      },
      {
        subtitle: "Analysis & Methods",
        items: ["Systems Analysis", "Business Process Modeling (BPMN)", "User Acceptance Testing (UAT)", "System Documentation & SOP Development"]
      },
      {
        subtitle: "Operations & Governance",
        items: ["Document Control", "Digital Archiving", "Inventory Audit Reconciliation", "Compliance Tracking", "Report Generation"]
      }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-mint" />,
    categories: [
      {
        subtitle: "Development & Infrastructure",
        items: ["Visual Studio Code", "Git / GitHub", "Cloudflare Tunnels", "MySQL Workbench"]
      },
      {
        subtitle: "Productivity & Operations",
        items: ["MS Excel (Advanced Formulas/Macros)", "WPS Office Suite", "Google Workspace"]
      },
      {
        subtitle: "Media & Design",
        items: ["Canva", "CapCut (Presentation & Instructional Assets)"]
      }
    ]
  },
  {
    title: "Soft Skills & Professional Attributes",
    icon: <Sparkles className="w-6 h-6 text-mint" />,
    categories: [
      {
        subtitle: "Core Strengths",
        items: [
          "Analytical Problem Solving",
          "Technical & Business Communication",
          "Strategic Leadership & Mentorship",
          "Cross-Functional Collaboration",
          "High Attention to Detail & Execution Precision"
        ]
      }
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-3">Categorized Skills Matrix</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-8">
        {skillSections.map((section, sIdx) => (
          <motion.div
            key={sIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: sIdx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-navy rounded-xl border border-mint/20 text-mint">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-cream">{section.title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.categories.map((cat, cIdx) => (
                <div key={cIdx} className="bg-white/5 border border-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-mint uppercase tracking-wider mb-3">{cat.subtitle}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, iIdx) => (
                      <span key={iIdx} className="text-xs bg-navy/80 border border-white/10 text-white/90 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mint" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}



