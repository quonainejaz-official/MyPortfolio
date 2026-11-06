import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Layout,
  Smartphone,
  Cloud,
  Zap,
  Sparkles,
  CheckCircle2,
  Boxes,
  Terminal,
  ShieldCheck,
  Server,
  Workflow,
  ArrowRight,
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiRust,
  SiRedux,
  SiFirebase,
  SiVite,
} from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Featured Pillars (Core Superpowers)
  const corePillars = [
    {
      title: 'Frontend & SSR',
      subtitle: 'React.js · Next.js · TypeScript',
      description: 'Modular component architecture, SSR/SSG, Core Web Vitals, and responsive UI design.',
      icon: SiReact,
      color: 'from-sky-500 to-blue-600',
      shadow: 'shadow-sky-500/25',
      borderHover: 'group-hover:border-sky-500/50',
      badge: 'Core Specialty',
    },
    {
      title: 'Backend & APIs',
      subtitle: 'Node.js · PHP/Laravel · Microservices',
      description: 'RESTful API engineering, OAuth2, Redis/Horizon queues, and tenant isolation.',
      icon: SiLaravel,
      color: 'from-rose-500 to-red-600',
      shadow: 'shadow-rose-500/25',
      borderHover: 'group-hover:border-rose-500/50',
      badge: 'Enterprise',
    },
    {
      title: 'Mobile & Desktop',
      subtitle: 'React Native · Tauri & Rust',
      description: 'Google Play Store published mobile apps and ultra-lightweight native desktop clients.',
      icon: Smartphone,
      color: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/25',
      borderHover: 'group-hover:border-emerald-500/50',
      badge: 'Cross-Platform',
    },
    {
      title: 'Cloud & DevOps',
      subtitle: 'Azure · Docker · CI/CD',
      description: 'Certified Azure Administrator, containerization, virtual machines, and deployment.',
      icon: Cloud,
      color: 'from-purple-500 to-indigo-600',
      shadow: 'shadow-purple-500/25',
      borderHover: 'group-hover:border-purple-500/50',
      badge: 'Certified 2024',
    },
  ];

  // Comprehensive Categorized Skills
  const skillCategories = [
    {
      id: 'frontend',
      tab: 'frontend',
      title: 'Frontend Development',
      description: 'Building responsive, high-performance, and modular interfaces with modern web standards.',
      icon: Layout,
      accent: 'text-sky-500 dark:text-sky-400',
      gradient: 'from-sky-500 to-blue-500',
      bgGlow: 'from-sky-500/10 to-transparent',
      borderColor: 'hover:border-sky-500/50',
      glowShadow: 'hover:shadow-sky-500/10',
      skills: [
        { name: 'React.js', level: 'Expert', icon: SiReact },
        { name: 'Next.js', level: 'Expert', icon: SiNextdotjs },
        { name: 'TypeScript', level: 'Advanced', icon: SiTypescript },
        { name: 'JavaScript (ES6+)', level: 'Advanced', icon: SiJavascript },
        { name: 'Tailwind CSS', level: 'Expert', icon: SiTailwindcss },
        { name: 'Vue.js', level: 'Proficient' },
        { name: 'Vite', level: 'Advanced', icon: SiVite },
        { name: 'HTML5 / CSS3', level: 'Expert' },
        { name: 'Responsive UI / UX', level: 'Expert' },
      ],
    },
    {
      id: 'backend',
      tab: 'backend',
      title: 'Backend & Databases',
      description: 'Scalable server architectures, secure authentication, and database schemas.',
      icon: Database,
      accent: 'text-purple-500 dark:text-purple-400',
      gradient: 'from-purple-500 to-indigo-500',
      bgGlow: 'from-purple-500/10 to-transparent',
      borderColor: 'hover:border-purple-500/50',
      glowShadow: 'hover:shadow-purple-500/10',
      skills: [
        { name: 'Node.js', level: 'Advanced', icon: SiNodedotjs },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'PHP', level: 'Advanced', icon: SiPhp },
        { name: 'Laravel', level: 'Advanced', icon: SiLaravel },
        { name: 'RESTful APIs', level: 'Expert' },
        { name: 'MongoDB', level: 'Advanced', icon: SiMongodb },
        { name: 'PostgreSQL', level: 'Proficient', icon: SiPostgresql },
        { name: 'SQL', level: 'Advanced' },
        { name: 'Microservices API', level: 'Advanced' },
      ],
    },
    {
      id: 'crossplatform',
      tab: 'mobile',
      title: 'Mobile & Desktop Cross-Platform',
      description: 'Native experience on mobile operating systems and lightweight desktop environments.',
      icon: Smartphone,
      accent: 'text-emerald-500 dark:text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500',
      bgGlow: 'from-emerald-500/10 to-transparent',
      borderColor: 'hover:border-emerald-500/50',
      glowShadow: 'hover:shadow-emerald-500/10',
      skills: [
        { name: 'React Native', level: 'Expert', icon: SiReact },
        { name: 'Android Development', level: 'Advanced' },
        { name: 'iOS Mobile Apps', level: 'Proficient' },
        { name: 'Tauri', level: 'Advanced' },
        { name: 'Rust', level: 'Proficient', icon: SiRust },
        { name: 'Chrome Extensions', level: 'Advanced' },
        { name: 'Google Play Store Release', level: 'Published' },
        { name: 'React Navigation', level: 'Expert' },
      ],
    },
    {
      id: 'state',
      tab: 'frontend',
      title: 'State Management & Architecture',
      description: 'Predictable application state, asynchronous caching, and queue pipelines.',
      icon: Code2,
      accent: 'text-rose-500 dark:text-rose-400',
      gradient: 'from-rose-500 to-pink-500',
      bgGlow: 'from-rose-500/10 to-transparent',
      borderColor: 'hover:border-rose-500/50',
      glowShadow: 'hover:shadow-rose-500/10',
      skills: [
        { name: 'Redux Toolkit', level: 'Expert', icon: SiRedux },
        { name: 'Context API', level: 'Expert' },
        { name: 'Zustand', level: 'Advanced' },
        { name: 'Redis / Horizon Queues', level: 'Advanced' },
        { name: 'OAuth2 & JWT', level: 'Advanced' },
        { name: 'Webhooks & Async Tasks', level: 'Advanced' },
      ],
    },
    {
      id: 'cloud',
      tab: 'cloud',
      title: 'Cloud, Infrastructure & DevOps',
      description: 'Containerized deployments, cloud hosting, and automated server workflows.',
      icon: Cloud,
      accent: 'text-amber-500 dark:text-amber-400',
      gradient: 'from-amber-500 to-orange-500',
      bgGlow: 'from-amber-500/10 to-transparent',
      borderColor: 'hover:border-amber-500/50',
      glowShadow: 'hover:shadow-amber-500/10',
      skills: [
        { name: 'Microsoft Azure', level: 'Certified 2024' },
        { name: 'Virtual Machines', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced', icon: SiDocker },
        { name: 'Docker Swarm', level: 'Proficient' },
        { name: 'Git & GitHub', level: 'Expert' },
        { name: 'Vercel Deployment', level: 'Expert' },
        { name: 'Firebase', level: 'Advanced', icon: SiFirebase },
        { name: 'Server Configuration', level: 'Advanced' },
      ],
    },
    {
      id: 'tools',
      tab: 'tools',
      title: 'Automation, AI & Workflows',
      description: 'Modern AI-augmented engineering, process automation, and rapid troubleshooting.',
      icon: Zap,
      accent: 'text-blue-500 dark:text-blue-400',
      gradient: 'from-blue-500 to-indigo-500',
      bgGlow: 'from-blue-500/10 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      glowShadow: 'hover:shadow-blue-500/10',
      skills: [
        { name: 'Zapier Automation', level: 'Advanced' },
        { name: 'AI-Assisted Development', level: 'Expert' },
        { name: 'Cursor / Windsurf', level: 'Expert' },
        { name: 'Claude & ChatGPT', level: 'Expert' },
        { name: 'Performance Optimization', level: 'Advanced' },
        { name: 'Debugging & Profiling', level: 'Advanced' },
        { name: 'Client Onboarding', level: 'Experienced' },
        { name: 'Technical Support', level: 'Experienced' },
      ],
    },
  ];

  const filterTabs = [
    { id: 'all', name: 'All Technologies' },
    { id: 'frontend', name: 'Frontend & State' },
    { id: 'backend', name: 'Backend & Database' },
    { id: 'mobile', name: 'Mobile & Desktop' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Automation & AI' },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab === 'all') return true;
    return cat.tab === activeTab;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-slate-900/50 relative overflow-hidden w-full max-w-full">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-slate-800 border border-primary-200 dark:border-slate-700 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            <Sparkles size={14} className="animate-spin text-primary-500" style={{ animationDuration: '6s' }} />
            <span>Full-Stack &amp; Cross-Platform Stack</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600">Arsenal</span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A comprehensive suite of modern frameworks, programming languages, and cloud tools I leverage to deliver scalable production applications.
          </p>

          {/* Metrics Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>2+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
              <Boxes size={16} className="text-primary-500" />
              <span>Web · Mobile · Desktop</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/80 dark:border-slate-700/80">
              <ShieldCheck size={16} className="text-purple-500" />
              <span>Certified Azure Admin</span>
            </div>
          </div>
        </motion.div>

        {/* Core Superpower Pillars (4 Cards with 3D Spring Hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  y: -6,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className={`relative p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 ${pillar.borderHover} shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col overflow-hidden`}
              >
                {/* Subtle Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} ${pillar.shadow} shadow-lg flex items-center justify-center text-white text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-auto">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-white dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25 scale-102'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Skill Categories Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{
                    y: -6,
                    transition: { type: 'spring', stiffness: 400, damping: 25 },
                  }}
                  className={`relative p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 ${category.borderColor} shadow-lg hover:shadow-2xl ${category.glowShadow} transition-all duration-300 flex flex-col group overflow-hidden`}
                >
                  {/* Subtle Top Gradient Strip */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Subtle Corner Glow */}
                  <div
                    className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br ${category.bgGlow} blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
                  ></div>

                  {/* Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${category.accent} shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skill Badges / Chips with micro-interaction */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.04, y: -1 }}
                          whileTap={{ scale: 0.96 }}
                          className="group/chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/70 hover:border-primary-400 dark:hover:border-primary-500 shadow-xs hover:shadow-md transition-all duration-200 cursor-default"
                        >
                          {SkillIcon && (
                            <SkillIcon className="text-primary-500 dark:text-primary-400 text-sm group-hover/chip:rotate-12 transition-transform" />
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-md bg-slate-200/60 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 font-medium ml-0.5">
                              {skill.level}
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Philosophy & Architecture Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 25 }}
          whileHover={{ y: -4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl hover:shadow-2xl hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-primary-500/20 text-primary-400 border border-primary-500/30 shrink-0">
                <Terminal size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Architecture First Approach
                </h4>
                <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
                  I prioritize scalable folder structures, modular design tokens, server-side caching, automated CI/CD pipelines, and type-safe contracts to ensure clean, maintainable systems.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg transition-all shrink-0 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Workflow size={16} />
              <span>See Technologies in Action</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
