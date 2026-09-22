import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ExternalLink, Send } from 'lucide-react';

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
          Seeking a high-performing professional who combines analytical rigor, operational document governance, and technical software engineering capabilities? Let's connect.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card (Logo only clickable button, no raw email text displayed) */}
        <motion.a
          whileHover={{ scale: 1.04, y: -4 }}
          whileTap={{ scale: 0.96 }}
          href="mailto:nazwatuzhakiya@gmail.com"
          className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:border-mint/50 transition-all text-center flex flex-col items-center justify-between group shadow-lg"
          title="Send an Email"
          aria-label="Send an Email"
        >
          <div className="p-4 bg-navy rounded-2xl border border-mint/30 mb-3 group-hover:bg-mint group-hover:text-navy transition-all duration-300 text-mint shadow-[0_0_15px_rgba(93,248,216,0.15)] group-hover:shadow-[0_0_25px_rgba(93,248,216,0.4)]">
            <Mail className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white group-hover:text-mint transition-colors">
              Email
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint bg-mint/10 border border-mint/20 px-3 py-1 rounded-full group-hover:bg-mint group-hover:text-navy transition-colors">
              <Send className="w-3 h-3" /> Send Message
            </span>
          </div>
        </motion.a>

        {/* LinkedIn Card (Logo only clickable button, no raw URL text displayed) */}
        <motion.a
          whileHover={{ scale: 1.04, y: -4 }}
          whileTap={{ scale: 0.96 }}
          href="https://www.linkedin.com/in/nazwatuzhakiyalatansha"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:border-mint/50 transition-all text-center flex flex-col items-center justify-between group shadow-lg"
          title="Connect on LinkedIn"
          aria-label="Connect on LinkedIn"
        >
          <div className="p-4 bg-navy rounded-2xl border border-mint/30 mb-3 group-hover:bg-mint group-hover:text-navy transition-all duration-300 text-mint shadow-[0_0_15px_rgba(93,248,216,0.15)] group-hover:shadow-[0_0_25px_rgba(93,248,216,0.4)]">
            <Linkedin className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white group-hover:text-mint transition-colors">
              LinkedIn
            </h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-mint bg-mint/10 border border-mint/20 px-3 py-1 rounded-full group-hover:bg-mint group-hover:text-navy transition-colors">
              <ExternalLink className="w-3 h-3" /> Connect Profile
            </span>
          </div>
        </motion.a>

        {/* Location Card */}
        <motion.div
          whileHover={{ scale: 1.04, y: -4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:border-mint/50 transition-all text-center flex flex-col items-center justify-between group shadow-lg cursor-default"
        >
          <div className="p-4 bg-navy rounded-2xl border border-mint/30 mb-3 group-hover:bg-mint group-hover:text-navy transition-all duration-300 text-mint shadow-[0_0_15px_rgba(93,248,216,0.15)] group-hover:shadow-[0_0_25px_rgba(93,248,216,0.4)]">
            <MapPin className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white group-hover:text-mint transition-colors">
              Location
            </h3>
            <p className="text-xs font-medium text-cream/90">
              Subang, West Java, Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
