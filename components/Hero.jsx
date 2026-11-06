import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO, PERSONAL_INFO } from '../constants';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full max-w-full flex items-center pt-16 sm:pt-24 pb-8 sm:pb-16 relative overflow-hidden"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      {/* Background Image with Smooth Depth Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/mypics/banner.jpeg"
          alt="Background Banner"
          className="w-full h-full object-cover object-top opacity-10 dark:opacity-20 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white dark:from-dark-bg/95 dark:via-dark-bg/80 dark:to-dark-bg"></div>
      </div>

      {/* Soft Ambient Light Glows */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 w-full max-w-full"
          >
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-xs mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-wide">
                Available for Remote Roles &amp; Full-Time
              </span>
              <Sparkles size={13} className="text-amber-500" />
            </motion.div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600 inline-block min-w-[160px] sm:min-w-[240px]">
                <Typewriter text={PERSONAL_INFO.name} />
              </span>
            </h1>

            {/* Role Subtitle with Accent */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <h2 className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-200 tracking-tight">
                {PERSONAL_INFO.role}
              </h2>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.tagline} Experienced in building full-stack web, mobile, and cross-platform desktop applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-purple-600 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Quonain_Ejaz_Resume.pdf"
                download="Quonain_Ejaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold text-sm sm:text-base shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[#0077b5] hover:text-[#0077b5] dark:hover:border-[#0077b5] rounded-xl font-semibold text-sm sm:text-base shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Linkedin className="mr-2 h-4 w-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Social Connect Strip */}
            <div className="flex items-center space-x-3 text-slate-500 dark:text-slate-400 pt-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-2">
                Connect:
              </span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center hover:text-primary-500 transition-all hover:scale-110 shadow-2xs"
                aria-label="Email"
                title="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110 shadow-2xs"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/923482449429"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center hover:text-[#25D366] transition-all hover:scale-110 shadow-2xs"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual: Crafted, Blended Portrait Frame (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:flex justify-center relative"
          >
            {/* Ambient Lighting Glow Behind the Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary-500/25 via-purple-500/20 to-sky-400/20 rounded-3xl blur-2xl transform rotate-3 scale-95 pointer-events-none"></div>

            {/* Rotated & Crafted Card Frame */}
            <div className="relative w-full max-w-[390px] h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out bg-slate-900 group">
              {/* Portrait Photo */}
              <img
                src="/mypics/Portait.png"
                alt="Quonain Ejaz"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Subtle Gradient Overlay Blended into the Picture */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-7">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">
                  Crafted with Excellence
                </span>
                <p className="font-extrabold text-white text-xl leading-tight">
                  Clean Code &amp; Scalable Systems
                </p>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  Full-Stack &amp; Cross-Platform Development
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
