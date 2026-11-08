import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Code2,
  Database,
  Layers,
} from 'lucide-react';

export default function Hero({ profile, onSelectPlaceholderAlert }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = profile.animatedRoles || [
    'Full Stack Java Developer',
    'React Developer',
    'Software Developer',
    'Problem Solver',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isPlaceholder = (val) => !val || val.includes('[ADD');

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden"
    >
      {/* Subtle Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introduction & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-cyan-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.careerObjective}</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400">
                Hello, I&apos;m {profile.name}.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Full Stack{' '}
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Java Developer
                </span>
              </h1>

              {/* Animated Role Switcher */}
              <div className="h-8 flex items-center gap-2 text-lg sm:text-xl font-mono text-slate-600 dark:text-slate-300">
                <span className="text-cyan-500">&gt;</span>
                <span>{displayText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {profile.tagline} Passionate Master of Computer Applications (MCA) candidate
              focused on architecting clean frontend interfaces with{' '}
              <span className="text-slate-900 dark:text-white font-medium">React.js</span> and
              robust backend systems using{' '}
              <span className="text-slate-900 dark:text-white font-medium">
                Java, Node.js, Express.js, and MySQL
              </span>
              .
            </p>

            {/* Location & Education Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Education: Master of Computer Applications (MCA)
              </span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white shadow-glow transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={profile.resumeUrl || '/resume.pdf'}
                download="Vikas_M_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:border-cyan-400 text-slate-800 dark:text-slate-100 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/40 hover:bg-slate-200/70 dark:hover:bg-slate-800/70 text-slate-700 dark:text-slate-300 transition-all"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-200 text-xs font-medium transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              {isPlaceholder(profile.linkedin) ? (
                <button
                  type="button"
                  onClick={() =>
                    onSelectPlaceholderAlert &&
                    onSelectPlaceholderAlert('LinkedIn Profile', 'linkedin')
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 text-amber-600 dark:text-amber-300 text-xs font-mono transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{profile.linkedin}</span>
                </button>
              ) : (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 text-slate-700 dark:text-slate-200 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Developer Workspace Illustration / Profile Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative Gradient Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-violet-600 opacity-35 blur-xl" />

              <div className="relative glass-card rounded-3xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
                {/* Top Window Controls */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    vikas-m@portfolio:~/workspace
                  </span>
                </div>

                {/* Hero Illustration Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-square">
                  <img
                    src="/images/hero-illustration.jpg"
                    alt="Vikas M Full Stack Developer Workspace Illustration"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-transparent to-transparent opacity-80" />

                  {/* Bottom Overlay Profile Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-cyan-400">MCA • Full Stack Engineer</p>
                      <p className="text-sm font-bold text-white">{profile.name}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-[11px] font-mono text-blue-300">
                      India
                    </span>
                  </div>
                </div>

                {/* Floating Stack Pills */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[10px] text-slate-400">Frontend</p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                        React &amp; Tailwind
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-violet-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[10px] text-slate-400">Backend</p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                        Java &amp; Node.js
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[10px] text-slate-400">Database</p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                        MySQL &amp; SQL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
