import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Moon,
  Sun,
  Code2,
  Download,
  User,
  Briefcase,
  Cpu,
  Layers,
  Send,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['contact', 'projects', 'skills', 'experience', 'about'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200/60 dark:border-slate-800/80'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative p-2.5 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-purple-600 text-white shadow-md shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                <Code2 className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                  Quonain<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">.dev</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-widest leading-none mt-1 hidden sm:block">
                  Software Engineer
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation Capsule */}
            <nav className="hidden md:flex items-center p-1.5 rounded-full bg-slate-100/80 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {/* Hover Capsule Highlight */}
                    {hoveredLink === link.name && (
                      <motion.div
                        layoutId="navHoverCapsule"
                        className="absolute inset-0 bg-white dark:bg-slate-700/80 rounded-full shadow-sm -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}

                    {/* Active Section Dot */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
                    )}

                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons (Right) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct Resume Download Button */}
              <a
                href="/Quonain_Ejaz_Resume.pdf"
                download="Quonain_Ejaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 hover:from-primary-500 hover:to-purple-500 shadow-md shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Download size={15} className="relative z-10 group-hover:translate-y-0.5 transition-transform" />
                <span className="relative z-10">Resume</span>
              </a>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                aria-label="Toggle Theme"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <motion.div
                  key={darkMode ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <motion.button
                onClick={toggleDarkMode}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white cursor-pointer"
                aria-label="Toggle Mobile Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX }}
        />

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mx-4 mt-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden"
            >
              <div className="p-4 space-y-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/40'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive
                              ? 'bg-primary-500 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <span>{link.name}</span>
                      </div>
                      <ArrowRight size={14} className="opacity-40" />
                    </a>
                  );
                })}

                {/* Mobile Download Resume CTA */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <a
                    href="/Quonain_Ejaz_Resume.pdf"
                    download="Quonain_Ejaz_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-primary-600 to-purple-600 shadow-lg shadow-primary-500/25 active:scale-95 transition-all"
                  >
                    <Download size={16} />
                    <span>Download CV (Latest PDF)</span>
                  </a>

                  {/* Mobile Quick Socials */}
                  <div className="flex items-center justify-center gap-3 pt-1 text-slate-500 dark:text-slate-400">
                    <a
                      href={CONTACT_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={CONTACT_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#0077b5] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="https://wa.me/923482449429"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-[#25D366] transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-primary-500 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;

