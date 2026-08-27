import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Contact & Engagement</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
          Are you seeking a high-performing professional who combines analytical rigor, administrative precision, and technical software engineering capabilities? Let's connect.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="mailto:nazwatuzhakiya@gmail.com"
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-mint/50 transition-all text-center flex flex-col items-center group"
        >
          <div className="p-4 bg-navy rounded-full border border-mint/30 mb-4 group-hover:bg-mint group-hover:text-navy transition-colors text-mint">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">Email</h3>
          <p className="text-base font-semibold text-cream group-hover:text-mint transition-colors">nazwatuzhakiya@gmail.com</p>
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.03 }}
          href="https://linkedin.com/in/nazwatuzhakiya"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-mint/50 transition-all text-center flex flex-col items-center group"
        >
          <div className="p-4 bg-navy rounded-full border border-mint/30 mb-4 group-hover:bg-mint group-hover:text-navy transition-colors text-mint">
            <Linkedin className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">LinkedIn</h3>
          <p className="text-base font-semibold text-cream group-hover:text-mint transition-colors">linkedin.com/in/nazwatuzhakiya</p>
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-center flex flex-col items-center"
        >
          <div className="p-4 bg-navy rounded-full border border-mint/30 mb-4 text-mint">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">Location</h3>
          <p className="text-base font-semibold text-cream">Subang, West Java, Indonesia</p>
        </motion.div>
      </div>
    </div>
  );
}


