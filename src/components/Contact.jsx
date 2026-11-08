import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
} from 'lucide-react';

export default function Contact({ profile, onOpenCustomizer }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [mailtoReady, setMailtoReady] = useState(null);
  const [copied, setCopied] = useState(false);

  const isPlaceholder = (val) => !val || val.includes('[ADD');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const recipient = isPlaceholder(profile.email) ? '' : profile.email.trim();
    const subjectEncoded = encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject.trim()}`
    );
    const bodyText = `Hi Vikas,

${formData.message.trim()}

---
From: ${formData.name.trim()}
Email: ${formData.email.trim()}`;
    const bodyEncoded = encodeURIComponent(bodyText);

    const mailtoHref = `mailto:${recipient}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setMailtoReady({
      href: mailtoHref,
      recipient: recipient || '[ADD EMAIL ADDRESS — opens your mail client for recipient entry]',
      bodyText,
    });
  };

  const copyFormattedMessage = () => {
    if (!mailtoReady) return;
    try {
      navigator.clipboard.writeText(mailtoReady.bodyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = mailtoReady.bodyText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-100/60 dark:bg-[#080D1A]/70 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Me
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Open to Software Developer and Full Stack Developer internships and full-time opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase text-slate-400">Email Address</p>
                    {isPlaceholder(profile.email) ? (
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-amber-600 dark:text-amber-300">
                          {profile.email}
                        </span>
                        {onOpenCustomizer && (
                          <button
                            type="button"
                            onClick={onOpenCustomizer}
                            className="text-[11px] font-mono underline text-cyan-400"
                          >
                            Set Email
                          </button>
                        )}
                      </div>
                    ) : (
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-400 break-all"
                      >
                        {profile.email}
                      </a>
                    )}
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
                  <Linkedin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase text-slate-400">LinkedIn</p>
                    {isPlaceholder(profile.linkedin) ? (
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono text-amber-600 dark:text-amber-300">
                          {profile.linkedin}
                        </span>
                        {onOpenCustomizer && (
                          <button
                            type="button"
                            onClick={onOpenCustomizer}
                            className="text-[11px] font-mono underline text-cyan-400"
                          >
                            Set LinkedIn
                          </button>
                        )}
                      </div>
                    ) : (
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-400 break-all"
                      >
                        {profile.linkedin}
                      </a>
                    )}
                  </div>
                </div>

                {/* GitHub */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
                  <Github className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase text-slate-400">GitHub</p>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-400 break-all"
                    >
                      {profile.github}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Transparent Mailto Fallback */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8">
            <div className="mb-6 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">
                  Transparent Client-Side Mailto Mode:
                </strong>{' '}
                No backend mail server is configured by default. Validating and submitting this form prepares a pre-populated{' '}
                <code className="font-mono text-cyan-500">mailto:</code> email draft and clipboard copy—never a fake submission alert.
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="e.g., Priya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5"
                  >
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="e.g., recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: null });
                  }}
                  placeholder="e.g., Full Stack Developer Internship / Interview Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  placeholder="Hello Vikas, we reviewed your CivicConnect and DevJourney projects and would love to connect..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 resize-y"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message (Prepare Mailto Draft)</span>
              </button>
            </form>

            {/* Verified Mailto Fallback Action Box */}
            {mailtoReady && (
              <div className="mt-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Message Validated &amp; Mailto Link Ready
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                      Since no backend mail server is connected, click below to launch your default email client with your message pre-filled, or copy the formatted message text.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={mailtoReady.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Default Email App (mailto:)</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyFormattedMessage}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200"
                  >
                    <Copy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Message'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
