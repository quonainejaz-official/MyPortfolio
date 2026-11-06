import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Check,
  Copy,
  Sparkles,
  Clock,
  ArrowUpRight,
  User,
  Tag,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? import.meta.env.WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validateField = (field, value) => {
    const trimmed = value.trim();
    switch (field) {
      case 'name':
        if (!trimmed) return 'Name is required';
        if (trimmed.length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email': {
        if (!trimmed) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
          return 'Enter a valid email address';
        return '';
      }
      case 'subject':
        if (!trimmed) return 'Subject is required';
        if (trimmed.length < 2) return 'Subject must be at least 2 characters';
        return '';
      case 'message':
        if (!trimmed) return 'Message is required';
        if (trimmed.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const msg = validateField(id, value);
    setFieldErrors((prev) => ({ ...prev, [id]: msg }));
  };

  const validate = () => {
    const next = {
      name: validateField('name', name),
      email: validateField('email', email),
      subject: validateField('subject', subject),
      message: validateField('message', message),
    };
    setFieldErrors(next);
    return !next.name && !next.email && !next.subject && !next.message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    if (!validate()) return;
    if (!WEB3FORMS_ACCESS_KEY) {
      setError(
        'Email service is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY.'
      );
      return;
    }
    setLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      if (!formData.get('subject')) {
        formData.append('subject', `Portfolio Inquiry from ${name}`);
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || `Request failed with status ${response.status}`
        );
      }

      setSuccess("Thanks! Your message has been sent successfully. I'll get back to you shortly.");
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      console.error('Contact form error:', err);
      setError(
        'Sorry, something went wrong while sending your message. Please reach out directly via WhatsApp or email.'
      );
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/60 w-full max-w-full"
    >
      {/* Background Decorative Pattern & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/40 border border-primary-200/80 dark:border-primary-800/60 mb-4 shadow-xs">
            <MessageSquare className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wider">
              Let's Connect &amp; Collaborate
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600">
              Touch
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 via-sky-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Have an exciting project in mind, need full-stack or mobile engineering, or looking for a dedicated software engineer? Reach out through any channel below.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Channels (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            {/* Live Availability Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white via-white to-emerald-50/40 dark:from-dark-card dark:via-dark-card dark:to-emerald-950/20 border border-emerald-500/30 dark:border-emerald-500/20 shadow-md">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Available for Full-Time Roles &amp; Remote Contracts
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                <Clock size={13} className="text-slate-400" />
                <span>Typical response within a few hours</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 hover:border-primary-500/40 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-primary-600 to-sky-500 text-white shadow-md shadow-primary-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Direct Email
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Drop Me a Line
                  </h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="block text-sm sm:text-base font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors mt-1 truncate"
                    title={CONTACT_INFO.email}
                  >
                    {CONTACT_INFO.email}
                  </a>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={copyEmailToClipboard}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={13} className="text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary-50 hover:bg-primary-100 dark:bg-primary-950/40 dark:hover:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-xs font-medium transition-colors"
                    >
                      <span>Compose</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <FaWhatsapp size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      WhatsApp &amp; Phone
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                      Fastest
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                    Instant Messaging &amp; Call
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {CONTACT_INFO.phone}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`https://wa.me/923482449429?text=Hi%20Quonain,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <FaWhatsapp size={14} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
                    >
                      <Phone size={13} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Remote Card */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-md shadow-purple-500/20 shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Location &amp; Remote
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    Lahore, Pakistan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Available worldwide for remote work across US, UK, EU, and Asian time zones (UTC+5).
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 text-slate-700 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] text-xs font-bold transition-all shadow-xs"
              >
                <FaLinkedinIn size={15} className="text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all shadow-xs"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Glass Contact Form (7 cols on lg) */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800 shadow-xl p-6 sm:p-9 lg:p-10 overflow-hidden">
              {/* Subtle Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 via-sky-500 to-purple-500"></div>

              {/* Form Title & Subtitle */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                  Have a question or proposal? Send your details below and I'll respond as soon as possible.
                </p>
              </div>

              {/* Alert Feedback Messages */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl border border-emerald-300 dark:border-emerald-800/80 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 flex items-start gap-3 shadow-xs"
                    role="alert"
                  >
                    <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{success}</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl border border-red-300 dark:border-red-800/80 bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 flex items-start gap-3 shadow-xs"
                    role="alert"
                  >
                    <AlertCircle size={20} className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Elements */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <User size={13} className="text-primary-500" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border ${
                        fieldErrors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 dark:border-slate-700/80 focus:border-primary-500 focus:ring-primary-500/20'
                      } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: '' }));
                      }}
                      onBlur={handleBlur}
                      required
                    />
                    {fieldErrors.name && (
                      <span className="text-red-500 text-xs font-medium block">
                        {fieldErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <Mail size={13} className="text-primary-500" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border ${
                        fieldErrors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 dark:border-slate-700/80 focus:border-primary-500 focus:ring-primary-500/20'
                      } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: '' }));
                      }}
                      onBlur={handleBlur}
                      required
                    />
                    {fieldErrors.email && (
                      <span className="text-red-500 text-xs font-medium block">
                        {fieldErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                  >
                    <Tag size={13} className="text-primary-500" />
                    <span>Subject / Topic *</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. New Project Inquiry / Full-Stack Role"
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border ${
                      fieldErrors.subject
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-200 dark:border-slate-700/80 focus:border-primary-500 focus:ring-primary-500/20'
                    } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all`}
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (fieldErrors.subject) setFieldErrors((p) => ({ ...p, subject: '' }));
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  {fieldErrors.subject && (
                    <span className="text-red-500 text-xs font-medium block">
                      {fieldErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                  >
                    <MessageSquare size={13} className="text-primary-500" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your project, timelines, or role details..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border ${
                      fieldErrors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-slate-200 dark:border-slate-700/80 focus:border-primary-500 focus:ring-primary-500/20'
                    } text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-4 transition-all resize-none`}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (fieldErrors.message) setFieldErrors((p) => ({ ...p, message: '' }));
                    }}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  {fieldErrors.message && (
                    <span className="text-red-500 text-xs font-medium block">
                      {fieldErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-primary-600 via-sky-500 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white font-bold text-base shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;