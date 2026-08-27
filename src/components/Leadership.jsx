import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award } from 'lucide-react';

const leadershipRoles = [
  {
    title: "Active Member – Research & Technology Department (Development Division)",
    desc: "Spearheaded software development initiatives within the department, serving as Frontend Engineer for the DIFEST and ROBOFEST national event portals."
  },
  {
    title: "Documentation & Visual Asset Specialist (PDD) – Project Days",
    desc: "Managed media coverage, digital branding assets, and event documentation workflows."
  },
  {
    title: "Student Mentor – PKKMB Departmental Orientation",
    desc: "Guided incoming freshmen through academic transitions, department culture, and technical study pathways."
  },
  {
    title: "Station Officer – MABIM Student Orientation",
    desc: "Coordinated station-to-station operational activities and student evaluation metrics."
  }
];

export default function Leadership() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-3">Leadership & Organizational Experience</h2>
        <p className="text-white/70 max-w-xl mx-auto text-base">
          HIMATIKOM (Himpunan Mahasiswa Teknologi Informasi dan Komputer)
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipRoles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-mint/30 transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-navy rounded-xl border border-mint/20 shrink-0 text-mint">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-cream mb-2 leading-snug">{role.title}</h3>
              <p className="text-sm text-white/75 leading-relaxed">{role.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
