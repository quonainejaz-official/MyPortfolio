import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Heart,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  ExternalLink,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO, PERSONAL_INFO } from '../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-800 w-full max-w-full">
      {/* Top Colorful Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"></div>

      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 -mt-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 -mb-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 relative z-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Value (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer inline-flex"
              onClick={scrollToTop}
            >
              <div className="p-2 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg shadow-lg shadow-primary-500/30">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Quonain<span className="text-primary-400">.dev</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Software Engineer with 2+ years of experience delivering high-performance web, mobile, and desktop applications using React, Next.js, Node.js, PHP/Laravel, and Tauri/Rust.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for Remote Roles &amp; Projects
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-slate-400 hover:text-primary-400 transition-colors inline-flex items-center group cursor-pointer"
                  >
                    <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/Quonain_Ejaz_Resume.pdf"
                  download="Quonain_Ejaz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 font-medium text-xs pt-1 transition-colors"
                >
                  <Download size={14} />
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-primary-400 shrink-0">
                  <MapPin size={15} />
                </div>
                <span>{CONTACT_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-primary-400 shrink-0">
                  <Mail size={15} />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-primary-400 transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-primary-400 shrink-0">
                  <Phone size={15} />
                </div>
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0077b5] hover:bg-slate-800 hover:border-[#0077b5]/50 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/923482449429"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#25D366] hover:bg-slate-800 hover:border-[#25D366]/50 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-primary-400 hover:bg-slate-800 hover:border-primary-500/50 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="font-semibold text-slate-300">{PERSONAL_INFO.name}</span>
            <span>Â· All rights reserved.</span>
          </p>

          <p className="flex items-center gap-1">
            Built with
            <Heart size={13} className="text-rose-500 fill-rose-500 inline-block animate-pulse mx-0.5" />
            using React, Vite &amp; Tailwind CSS
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-primary-400 transition-all cursor-pointer group"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

