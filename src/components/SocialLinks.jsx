import React from 'react';
import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const socialLinks = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6283875127164',
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/naazln.lsha',
    icon: <Instagram className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nazwatuzhakiya',
    icon: <Github className="w-5 h-5" />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nazwatuzhakiyalatansha',
    icon: <Linkedin className="w-5 h-5" />
  },
  {
    name: 'Email',
    url: 'mailto:nazwatuzhakiya@gmail.com',
    icon: <Mail className="w-5 h-5" />
  }
];

export default function SocialLinks({ className = "flex gap-4" }) {
  return (
    <div className={className}>
      {socialLinks.map((link, idx) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-mint/20 hover:border-mint transition-all text-white hover:text-mint shadow-[0_0_0_rgba(93,248,216,0)] hover:shadow-[0_0_20px_rgba(93,248,216,0.6)] flex items-center justify-center"
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
