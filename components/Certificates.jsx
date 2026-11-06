import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  Calendar,
  Building,
  ShieldCheck,
  ExternalLink,
  ZoomIn,
  X,
  FileCheck,
  Sparkles,
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../constants';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredCert = CERTIFICATIONS_DATA.find((c) => c.featured) || CERTIFICATIONS_DATA[0];
  const otherCerts = CERTIFICATIONS_DATA.filter((c) => c.id !== featuredCert.id);

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 w-full max-w-full"
    >
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/40 border border-primary-200/80 dark:border-primary-800/60 mb-4 shadow-xs">
            <Award className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wider">
              Verified Credentials &amp; Training
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600">
              Certifications
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 via-sky-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Officially verified technical certifications and high-distinction credentials validating real-world expertise in Cloud Computing, Microsoft Azure, and Web Development.
          </p>
        </motion.div>

        {/* Featured Certificate Card: Cloud Computing NAVTTC 2024 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="relative rounded-3xl bg-white dark:bg-dark-card border-2 border-emerald-500/30 dark:border-emerald-500/25 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-9 lg:p-10 items-center">
              {/* Left Column: Certificate Preview (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  className="group relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-md bg-slate-900/5 dark:bg-slate-950/40 cursor-pointer"
                  onClick={() => setSelectedImage(featuredCert.image)}
                >
                  {/* Floating Distinction Badge */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-lg backdrop-blur-md">
                    <Sparkles size={13} className="text-amber-300" />
                    <span>{featuredCert.grade} Distinction</span>
                  </div>

                  {/* Certificate Image */}
                  <img
                    src={featuredCert.image}
                    alt={featuredCert.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm backdrop-blur-[2px]">
                    <ZoomIn size={18} />
                    <span>Click to Expand</span>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-3 mt-4 w-full">
                  <button
                    onClick={() => setSelectedImage(featuredCert.image)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <ZoomIn size={14} />
                    <span>View Certificate</span>
                  </button>

                  <a
                    href={featuredCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary-50 hover:bg-primary-100 dark:bg-primary-950/40 dark:hover:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-xs font-semibold transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Open Full Tab</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Narrative & Credential Details (7 cols on lg) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Issuer & Status Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    {featuredCert.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 text-xs font-semibold">
                    <Building size={13} />
                    {featuredCert.provider}
                  </span>
                </div>

                {/* Course Title & Program */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {featuredCert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {featuredCert.program}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredCert.description}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      Date Issued
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                      {featuredCert.issueDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      Grade Achieved
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                      {featuredCert.grade}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      Duration
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                      {featuredCert.duration}
                    </span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Key Competencies &amp; Accreditations
                  </h4>
                  <ul className="space-y-2">
                    {featuredCert.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {featuredCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Reference Footer */}
                <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span>Credential ID: <strong className="text-slate-600 dark:text-slate-400 font-mono">{featuredCert.credentialId}</strong></span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ Verified Digital Record</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Certifications Grid */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
            <FileCheck className="w-5 h-5 text-primary-500" />
            <span>Additional Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-primary-500/10 to-purple-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                      <Award size={22} />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-1">
                      {cert.issuer} {cert.provider ? `· ${cert.provider}` : ''}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {cert.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 size={14} className="text-primary-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {cert.issueDate}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Certificate Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col cursor-default"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm sm:text-base text-slate-800 dark:text-white">
                    {featuredCert.title} — Official Certificate
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Open full image in new tab"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    title="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body: Image Container */}
              <div className="p-4 sm:p-6 overflow-auto flex items-center justify-center bg-slate-950/40">
                <img
                  src={selectedImage}
                  alt="Certificate Full View"
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg border border-slate-800"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 px-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>{featuredCert.credentialId}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {featuredCert.grade} Distinction
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;