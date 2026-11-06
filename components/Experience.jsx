import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const Experience = () => {
  const getBadgeColor = (id) => {
    switch (id) {
      case 1:
        return {
          pill: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
          dot: 'bg-emerald-500',
          gradient: 'from-emerald-500 to-teal-500',
          borderHover: 'hover:border-emerald-500/50',
          glow: 'group-hover:shadow-emerald-500/10',
        };
      case 2:
        return {
          pill: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
          dot: 'bg-purple-500',
          gradient: 'from-purple-500 to-indigo-500',
          borderHover: 'hover:border-purple-500/50',
          glow: 'group-hover:shadow-purple-500/10',
        };
      case 3:
        return {
          pill: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
          dot: 'bg-blue-500',
          gradient: 'from-blue-500 to-sky-500',
          borderHover: 'hover:border-blue-500/50',
          glow: 'group-hover:shadow-blue-500/10',
        };
      default:
        return {
          pill: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
          dot: 'bg-amber-500',
          gradient: 'from-amber-500 to-orange-500',
          borderHover: 'hover:border-amber-500/50',
          glow: 'group-hover:shadow-amber-500/10',
        };
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/60 relative overflow-hidden w-full max-w-full">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-slate-800 border border-primary-200 dark:border-slate-700 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            <Sparkles size={14} className="text-primary-500" />
            <span>Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Experience</span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A progressive journey across production software engineering, cross-platform apps, and technical solutions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-10 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 sm:space-y-12 ml-4 sm:ml-6">
          {EXPERIENCE_DATA.map((job, index) => {
            const colors = getBadgeColor(job.id);
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Timeline Pulsing Node (centered on the border line) */}
                <div className="absolute -left-[9px] top-6 flex items-center justify-center pointer-events-none">
                  <span className={`absolute w-5 h-5 rounded-full ${colors.dot} opacity-40 animate-ping`}></span>
                  <span className={`relative w-4 h-4 rounded-full ${colors.dot} border-2 border-white dark:border-slate-900 shadow-md`}></span>
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`bg-white dark:bg-dark-card rounded-3xl p-6 sm:p-9 shadow-lg hover:shadow-2xl ${colors.glow} border border-slate-200/80 dark:border-slate-800 ${colors.borderHover} transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Subtle Top Gradient Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Top Role & Company Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl bg-gradient-to-tr ${colors.gradient} text-white shadow-md shadow-primary-500/20 shrink-0 group-hover:scale-105 transition-transform`}
                      >
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                          {job.role}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-primary-600 dark:text-primary-400 mt-0.5 flex items-center gap-1.5">
                          <Building2 size={15} />
                          <span>{job.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-xs ${colors.pill}`}
                      >
                        <Calendar size={13} />
                        <span>{job.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary / Description */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 italic border-l-4 border-slate-200 dark:border-slate-700 pl-4 py-1 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Key Achievements Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {job.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-emerald-500 mt-0.5 shrink-0"
                        />
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
