import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? import.meta.env.WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [fieldErrors, setFieldErrors] = React.useState({});

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email': {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Enter a valid email address';
        return '';
      }
      case 'message':
        return value.trim() ? '' : 'Message is required';
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
      message: validateField('message', message),
    };
    setFieldErrors(next);
    return !next.name && !next.email && !next.message;
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
        formData.append('subject', 'New message from portfolio');
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

      setSuccess("Thanks! Your message has been sent. I'll get back to you soon.");
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Contact form error:', err);
      setError(
        'Sorry, something went wrong while sending your message. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project in mind or want to hire me? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-xl text-primary-600 dark:text-primary-400">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Email
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">
                  Drop me a line anytime
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block text-lg font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-400 transition-colors break-words leading-tight"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl text-green-600 dark:text-green-400">
                <Phone className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">
                  Mon-Fri from 9am to 6pm
                </p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 transition-colors break-words leading-tight"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start space-x-6">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl text-purple-600 dark:text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Location
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-1">
                  Open to remote work worldwide
                </p>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                  {CONTACT_INFO.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-card p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send Message
            </h3>
            {success && (
              <div className="mb-4 rounded-lg border border-green-200 bg-green-50 text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300 px-4 py-3">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300 px-4 py-3">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: '' }));
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  {fieldErrors.name && (
                    <span className="text-red-500 dark:text-red-400 text-xs mt-1 block">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: '' }));
                    }}
                    onBlur={handleBlur}
                    required
                  />
                  {fieldErrors.email && (
                    <span className="text-red-500 dark:text-red-400 text-xs mt-1 block">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (fieldErrors.message) setFieldErrors((p) => ({ ...p, message: '' }));
                  }}
                  onBlur={handleBlur}
                  required
                ></textarea>
                {fieldErrors.message && (
                  <span className="text-red-500 dark:text-red-400 text-xs mt-1 block">
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex justify-center items-center group disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

