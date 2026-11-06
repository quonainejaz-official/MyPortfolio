import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../constants';
import { Award, GraduationCap, Download, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-dark-bg w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Building scalable, production-grade web, mobile &amp; desktop applications.
              </h3>
            </div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I am passionate about clean code, performance optimization, and building user-focused applications using modern stacks like React, Next.js, Node.js, PHP/Laravel, React Native, and cross-platform desktop development with Tauri and Rust.
            </p>

            {/* Direct Download CV Button */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Quonain_Ejaz_Resume.pdf"
                download="Quonain_Ejaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 cursor-pointer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV (Latest PDF)
              </a>
              <a
                href="/Quonain_Ejaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-xl font-semibold transition-all cursor-pointer"
              >
                <FileText className="mr-2 h-5 w-5 text-primary-500" />
                View CV in Browser
              </a>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="ml-2 sm:ml-6 pl-6 sm:pl-8 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="flex items-center mb-4 sm:mb-8">
              <GraduationCap className="w-7 sm:w-8 h-7 sm:h-8 text-primary-500 mr-2" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                Education &amp; Certifications
              </h3>
            </div>

            <div className="space-y-6 sm:space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 sm:ml-6 pl-2 sm:pl-8">
              {EDUCATION_DATA.map((item) => (
                <div key={item.id} className="relative">
                  <span className="absolute -left-[30px] sm:-left-[39px] top-1 h-5 w-5 rounded-full bg-primary-500 border-4 border-white dark:border-slate-800"></span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-[10px] sm:text-sm text-slate-400 dark:text-slate-500 mt-1">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
