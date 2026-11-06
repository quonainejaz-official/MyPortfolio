import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import {
  ExternalLink,
  Github,
  Globe,
  LayoutGrid,
  Smartphone,
  Laptop,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { FaChrome, FaGooglePlay } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return project.type === 'web';
    if (activeCategory === 'mobile') return project.type === 'mobile';
    if (activeCategory === 'desktop') return project.type === 'desktop';
    return true;
  });

  const getCategoryIcon = (project) => {
    if (project.link?.includes('chromewebstore.google.com')) {
      return <FaChrome size={12} className="text-amber-500" />;
    }
    if (project.link?.includes('play.google.com')) {
      return <FaGooglePlay size={11} className="text-emerald-500" />;
    }
    switch (project.type) {
      case 'mobile':
        return <Smartphone size={13} className="text-emerald-500" />;
      case 'desktop':
        return <Laptop size={13} className="text-purple-500" />;
      default:
        return <Globe size={13} className="text-sky-500" />;
    }
  };

  const getProjectAction = (project) => {
    if (project.link?.includes('chromewebstore.google.com')) {
      return {
        label: 'Chrome Web Store',
        icon: <FaChrome className="w-3.5 h-3.5 ml-1.5 text-amber-400 group-hover/btn:scale-110 transition-transform" />,
      };
    }
    if (project.link?.includes('play.google.com')) {
      return {
        label: 'Google Play Store',
        icon: <FaGooglePlay className="w-3.5 h-3.5 ml-1.5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />,
      };
    }
    return {
      label: 'View Project',
      icon: <ExternalLink className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />,
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-dark-bg relative overflow-hidden w-full max-w-full">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-slate-800 border border-primary-200 dark:border-slate-700 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-4">
            <Sparkles size={14} className="animate-spin text-primary-500" style={{ animationDuration: '6s' }} />
            <span>Proven Production Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600">Creations</span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From multi-state enterprise platforms to Play Store published mobile apps and cross-platform desktop applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-inner border border-slate-200/80 dark:border-slate-700/80">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25 scale-102'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === 'web'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25 scale-102'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Globe className="w-4 h-4" />
              Web &amp; Full-Stack
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === 'mobile'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25 scale-102'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveCategory('desktop')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === 'desktop'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25 scale-102'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
              }`}
            >
              <Laptop className="w-4 h-4" />
              Desktop &amp; Extensions
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className="group relative bg-white dark:bg-dark-card rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 border border-slate-200/80 dark:border-slate-800 hover:border-primary-400/60 dark:hover:border-primary-500/60 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Top Subtle Gradient Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                {/* Project Image & Media Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
                      Project Showcase
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Floating Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-md border border-white/20 dark:border-slate-700/50">
                    {getCategoryIcon(project)}
                    <span>{project.category}</span>
                  </div>

                  {/* Store Status Badge or Project Index Watermark */}
                  {project.link?.includes('chromewebstore.google.com') ? (
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-white backdrop-blur-md text-[10px] font-bold shadow-lg">
                      <FaChrome size={11} />
                      <span>Web Store Live</span>
                    </div>
                  ) : project.link?.includes('play.google.com') ? (
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-600 text-white backdrop-blur-md text-[10px] font-bold shadow-lg">
                      <FaGooglePlay size={10} />
                      <span>Play Store Live</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 right-4 z-10 text-xl font-black text-white/30 tracking-wider">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  )}

                  {/* Hover Quick Action Indicator */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3.5 right-3.5 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary-600 text-white text-xs font-semibold shadow-lg shadow-primary-600/40 hover:bg-primary-500"
                    >
                      <span>Preview</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-5 flex-1 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags with Interactive Hover */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 hover:bg-primary-50 dark:hover:bg-primary-950/40 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 text-[11px] rounded-lg font-semibold border border-slate-200/60 dark:border-slate-700/60 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex gap-2.5 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center flex-1 px-4 py-2.5 bg-slate-900 hover:bg-primary-600 dark:bg-white dark:hover:bg-primary-500 text-white dark:text-slate-900 dark:hover:text-white rounded-xl font-semibold text-xs transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary-500/25 group/btn"
                      >
                        <span>{getProjectAction(project).label}</span>
                        {getProjectAction(project).icon}
                      </a>
                    ) : null}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3.5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
