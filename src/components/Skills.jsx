import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu,
  Sparkles,
  Lightbulb,
  Users,
  MessageSquare,
  Clock,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';

// Official Tech & Tool Logos in clean SVG format
const LaravelLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.2 3.8L3 6.8V12.7L8.2 9.7V3.8Z" fill="#FF2D20"/>
    <path d="M8.2 9.7L3 12.7L8.2 15.7L13.4 12.7L8.2 9.7Z" fill="#E02418"/>
    <path d="M13.4 12.7V18.6L8.2 15.7V9.7L13.4 12.7Z" fill="#C51D12"/>
    <path d="M15.8 8.3L10.6 11.3V17.2L15.8 14.2V8.3Z" fill="#FF2D20"/>
    <path d="M15.8 14.2L10.6 17.2L15.8 20.2L21 17.2L15.8 14.2Z" fill="#E02418"/>
    <path d="M21 11.3L15.8 14.2V8.3L21 5.3V11.3Z" fill="#C51D12"/>
  </svg>
);

const PhpLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
    <path d="M6 10H8.5C9.3 10 9.8 10.4 9.8 11.2C9.8 12 9.2 12.5 8.5 12.5H7.2L6.8 14H5.5L6.4 10H6ZM7.4 11.7H8.3C8.7 11.7 8.9 11.5 8.9 11.2C8.9 10.9 8.7 10.7 8.3 10.7H7.7L7.4 11.7Z" fill="white"/>
    <path d="M10.8 10H12.1L11.5 12.5H13.2L13.8 10H15.1L14.2 14H12.9L13.4 11.8H11.7L11.2 14H9.9L10.8 10Z" fill="white"/>
    <path d="M15.8 10H18.3C19.1 10 19.6 10.4 19.6 11.2C19.6 12 19 12.5 18.3 12.5H17L16.6 14H15.3L16.2 10H15.8ZM17.2 11.7H18.1C18.5 11.7 18.7 11.5 18.7 11.2C18.7 10.9 18.5 10.7 18.1 10.7H17.5L17.2 11.7Z" fill="white"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.87 2C6.98 2 7.28 4.12 7.28 4.12L7.29 6.32H12.01V7.01H5.16C5.16 7.01 2 6.65 2 11.55C2 16.45 4.76 16.22 4.76 16.22H6.41V13.89C6.41 11.23 8.68 11.25 8.68 11.25H13.37C14.73 11.25 15.65 10.15 15.65 8.79V4.12C15.65 4.12 16.03 2 11.87 2ZM9.47 3.33C9.97 3.33 10.38 3.74 10.38 4.24C10.38 4.75 9.97 5.16 9.47 5.16C8.96 5.16 8.55 4.75 8.55 4.24C8.55 3.74 8.96 3.33 9.47 3.33Z" fill="#3776AB"/>
    <path d="M12.13 22C17.02 22 16.72 19.88 16.72 19.88L16.71 17.68H11.99V16.99H18.84C18.84 16.99 22 17.35 22 12.45C22 7.55 19.24 7.78 19.24 7.78H17.59V10.11C17.59 12.77 15.32 12.75 15.32 12.75H10.63C9.27 12.75 8.35 13.85 8.35 15.21V19.88C8.35 19.88 7.97 22 12.13 22ZM14.53 20.67C14.03 20.67 13.62 20.26 13.62 19.76C13.62 19.25 14.03 18.84 14.53 18.84C15.04 18.84 15.45 19.25 15.45 19.76C15.45 20.26 15.04 20.67 14.53 20.67Z" fill="#FFD43B"/>
  </svg>
);

const JsLogo = () => (
  <svg className="w-8 h-8 rounded-lg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M7 17.5C7.8 18 8.6 18.3 9.4 18.3C11 18.3 12 17.4 12 15.6V9H10V15.5C10 16.3 9.5 16.7 8.8 16.7C8.2 16.7 7.6 16.4 7.2 16.1L7 17.5ZM13.8 17.3C14.8 17.9 16 18.3 17.2 18.3C19.6 18.3 20.8 17.1 20.8 15.3C20.8 13.8 19.9 13.1 18.4 12.4L17.7 12.1C16.8 11.7 16.3 11.3 16.3 10.7C16.3 10.1 16.8 9.6 17.7 9.6C18.5 9.6 19.3 9.9 19.9 10.3L20.4 9C19.8 8.5 18.8 8.2 17.7 8.2C15.5 8.2 14.3 9.4 14.3 11C14.3 12.3 15.1 13 16.6 13.7L17.3 14C18.3 14.5 18.8 15 18.8 15.7C18.8 16.4 18.1 16.9 17.1 16.9C16 16.9 15 16.4 14.3 15.9L13.8 17.3Z" fill="#000000"/>
  </svg>
);

const ReactLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="2" fill="#61DAFB" />
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 6.5C8.001 6.5 5.501 8.5 4.501 12.5C6.001 10.5 7.751 9.75 9.751 10.25C10.892 10.535 11.708 11.365 12.632 12.304C14.137 13.834 15.897 15.625 20.001 15.625C24.001 15.625 26.501 13.625 27.501 9.625C26.001 11.625 24.251 12.375 22.251 11.875C21.11 11.59 20.294 10.76 19.37 9.821C17.865 8.291 16.105 6.5 12.001 6.5Z" transform="scale(0.7) translate(1, 3)" fill="#38BDF8"/>
  </svg>
);

const MySqlLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#00618A"/>
    <path d="M6 14C7.5 10 11 8 16 9C18 9.5 19 11 19 12C18 11.5 17 11.5 16 12C14 13 13 15 11 16C9.5 16.5 7.5 15.5 6 14Z" fill="#E48E00"/>
    <circle cx="15.5" cy="10.5" r="1" fill="#FFFFFF"/>
    <path d="M5 16C8 17 12 16 15 14" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const GitLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6 10.7L13.3 2.4C12.8 1.9 11.9 1.9 11.4 2.4L9.3 4.5L11.9 7.1C12.5 6.9 13.3 7.1 13.8 7.6C14.3 8.1 14.5 8.9 14.3 9.5L16.8 12C17.4 11.8 18.2 12 18.7 12.5C19.4 13.2 19.4 14.2 18.7 14.9C18 15.6 17 15.6 16.3 14.9C15.8 14.4 15.6 13.6 15.8 13L13.4 10.6V15.4C13.6 15.6 13.7 15.9 13.7 16.3C13.7 17.3 12.9 18.1 11.9 18.1C10.9 18.1 10.1 17.3 10.1 16.3C10.1 15.5 10.6 14.8 11.3 14.6V9.8C10.6 9.6 10.1 8.9 10.1 8.1C10.1 7.7 10.3 7.3 10.5 7L8 4.5L2.4 10.1C1.9 10.6 1.9 11.5 2.4 12L10.7 20.3C11.2 20.8 12.1 20.8 12.6 20.3L21.6 11.9C22.1 11.6 22.1 11.1 21.6 10.7Z" fill="#F05032"/>
  </svg>
);

const GitHubLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.444 4.865 20.198 8.839 21.523C9.339 21.615 9.521 21.306 9.521 21.042C9.521 20.803 9.512 20.169 9.507 19.33C6.726 19.934 6.139 17.986 6.139 17.986C5.685 16.832 5.031 16.525 5.031 16.525C4.123 15.904 5.1 15.917 5.1 15.917C6.104 15.987 6.633 16.95 6.633 16.95C7.525 18.48 8.971 18.038 9.541 17.781C9.632 17.133 9.89 16.69 10.176 16.44C7.956 16.188 5.621 15.328 5.621 11.492C5.621 10.398 6.012 9.504 6.653 8.805C6.549 8.551 6.205 7.532 6.752 6.166C6.752 6.166 7.594 5.896 9.508 7.193C10.308 6.971 11.157 6.86 12.001 6.856C12.845 6.86 13.694 6.971 14.495 7.193C16.408 5.896 17.248 6.166 17.248 6.166C17.797 7.532 17.453 8.551 17.349 8.805C17.992 9.504 18.379 10.398 18.379 11.492C18.379 15.339 16.04 16.184 13.812 16.431C14.17 16.74 14.489 17.351 14.489 18.286C14.489 19.636 14.477 20.724 14.477 21.042C14.477 21.31 14.656 21.622 15.166 21.52C19.136 20.191 22 16.441 22 12.017C22 6.484 17.522 2 12 2Z" fill="#FFFFFF"/>
  </svg>
);

const FigmaLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
    <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
    <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
    <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
    <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
  </svg>
);

const MsOfficeLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022"/>
    <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00"/>
    <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF"/>
    <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900"/>
  </svg>
);

const SpssLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#0F62FE"/>
    <path d="M4 14.5L8 11.5L12 13L16 7.5L20 10" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="11.5" r="1.5" fill="#FFFFFF"/>
    <circle cx="12" cy="13" r="1.5" fill="#FFFFFF"/>
    <circle cx="16" cy="7.5" r="1.5" fill="#FFFFFF"/>
    <text x="12" y="20.5" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif">SPSS</text>
  </svg>
);

const VsCodeLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 2.5L7.2 10.4L3.5 7.5L1.8 8.4V15.6L3.5 16.5L7.2 13.6L17.5 21.5L22.2 19.3V4.7L17.5 2.5Z" fill="#0065A9"/>
    <path d="M17.5 2.5V21.5L22.2 19.3V4.7L17.5 2.5Z" fill="#007ACC"/>
    <path d="M7.2 10.4L17.5 2.5V7.7L9.9 12L7.2 10.4Z" fill="#1F9CF0"/>
    <path d="M7.2 13.6L9.9 12L17.5 16.3V21.5L7.2 13.6Z" fill="#0065A9"/>
  </svg>
);

const CanvaLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#canva-gradient)"/>
    <path d="M14.5 8.5C13.2 8.5 12.3 9.4 12 10.3C11.5 9.2 10.4 8.5 9.1 8.5C7.2 8.5 5.8 10.1 5.8 12.2C5.8 14.5 7.5 16 9.4 16C10.6 16 11.6 15.4 12.1 14.5C12.3 15.4 13.2 16 14.4 16C16 16 17.2 14.9 17.5 13.2H15.8C15.6 14.1 15.1 14.5 14.4 14.5C13.6 14.5 13.1 13.9 13.1 13V12.9C13.6 12.8 14.2 12.7 14.8 12.5C16.8 12 17.8 10.9 17.8 9.6C17.8 8.8 16.9 8.5 14.5 8.5Z" fill="#FFFFFF"/>
    <defs>
      <linearGradient id="canva-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4CC"/>
        <stop offset="1" stopColor="#7D2AE8"/>
      </linearGradient>
    </defs>
  </svg>
);

// Perfectly balanced 14 tools (7 per row in desktop 7-col grid)
const coreTechSkills = [
  // Row 1 (7 items)
  { name: "Laravel", category: "Full-Stack Framework", logo: <LaravelLogo />, borderHover: "hover:border-[#FF2D20]/50" },
  { name: "PHP", category: "Backend Programming", logo: <PhpLogo />, borderHover: "hover:border-[#777BB4]/50" },
  { name: "JavaScript", category: "Frontend & Scripting", logo: <JsLogo />, borderHover: "hover:border-[#F7DF1E]/50" },
  { name: "Python", category: "Data & Automation", logo: <PythonLogo />, borderHover: "hover:border-[#3776AB]/50" },
  { name: "React", category: "Component UI Library", logo: <ReactLogo />, borderHover: "hover:border-[#61DAFB]/50" },
  { name: "Tailwind CSS", category: "Modern UI Styling", logo: <TailwindLogo />, borderHover: "hover:border-[#38BDF8]/50" },
  { name: "MySQL", category: "Relational Database", logo: <MySqlLogo />, borderHover: "hover:border-[#00618A]/50" },
  // Row 2 (7 items)
  { name: "Git", category: "Version Control", logo: <GitLogo />, borderHover: "hover:border-[#F05032]/50" },
  { name: "GitHub", category: "CI/CD & Collaboration", logo: <GitHubLogo />, borderHover: "hover:border-white/50" },
  { name: "Figma", category: "UI/UX & Prototyping", logo: <FigmaLogo />, borderHover: "hover:border-[#A259FF]/50" },
  { name: "IBM SPSS", category: "Statistical Analytics", logo: <SpssLogo />, borderHover: "hover:border-[#0F62FE]/50" },
  { name: "Microsoft Office", category: "Excel (VBA), Word, PPT", logo: <MsOfficeLogo />, borderHover: "hover:border-[#00A4EF]/50" },
  { name: "VS Code", category: "Development IDE", logo: <VsCodeLogo />, borderHover: "hover:border-[#007ACC]/50" },
  { name: "Canva", category: "Visual Communication", logo: <CanvaLogo />, borderHover: "hover:border-[#7D2AE8]/50" }
];

// Pure, balanced soft skills (6 items = 3 per row in 3-col grid)
const softSkills = [
  {
    title: "Problem Solving",
    desc: "Analytical and structured approach to troubleshooting complex issues, root-cause analysis, and practical solutions.",
    icon: <Lightbulb className="w-5 h-5 text-mint" />
  },
  {
    title: "Teamwork & Collaboration",
    desc: "Active cooperation, constructive communication, and synergy across multidisciplinary and cross-functional teams.",
    icon: <Users className="w-5 h-5 text-mint" />
  },
  {
    title: "Effective Communication",
    desc: "Clear and articulate verbal and written communication for technical reports, client dialogues, and presentations.",
    icon: <MessageSquare className="w-5 h-5 text-mint" />
  },
  {
    title: "Time & Task Management",
    desc: "Disciplined scheduling, priority assessment, deadline punctuality, and efficient handling of multiple tasks.",
    icon: <Clock className="w-5 h-5 text-mint" />
  },
  {
    title: "Adaptability & Fast Learning",
    desc: "High learning agility, quick onboarding with emerging technologies, and flexibility in fast-paced environments.",
    icon: <RefreshCw className="w-5 h-5 text-mint" />
  },
  {
    title: "High Attention to Detail",
    desc: "Meticulous accuracy in data reconciliation, system documentation, document control, and quality verification.",
    icon: <CheckCircle2 className="w-5 h-5 text-mint" />
  }
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-14">
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-3">Skills</h2>
        <p className="text-white/70 max-w-xl mx-auto text-base">
          Proven technical toolchains, software frameworks, and core professional soft skills.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-teal to-mint mx-auto rounded-full mt-4"></div>
      </motion.div>

      {/* Technical Toolchain Grid: 14 items = 7 top, 7 bottom */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-navy rounded-xl border border-mint/20 text-mint">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-cream">Technical Stack & Professional Tools</h3>
        </div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          {coreTechSkills.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 backdrop-blur-sm transition-all duration-300 ${tech.borderHover} hover:bg-white/[0.08] shadow-lg group`}
            >
              <div className="p-2 rounded-xl bg-navy/60 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                {tech.logo}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-mint transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[10px] text-white/50 leading-tight mt-0.5">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Professional & Soft Skills: 6 items = 3 top, 3 bottom */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-navy rounded-xl border border-mint/20 text-mint">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-cream">Professional & Soft Skills</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {softSkills.map((soft, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-mint/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-navy rounded-xl border border-mint/20 w-fit mb-3 text-mint">
                  {soft.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {soft.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {soft.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
