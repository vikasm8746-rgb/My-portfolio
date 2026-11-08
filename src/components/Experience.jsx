import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, CheckCircle2, Sparkles } from 'lucide-react';

export default function Experience({ profile }) {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-100/60 dark:bg-[#080D1A]/70 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experience &amp; Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
        </div>

        {/* Official Verified Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border-l-4 border-l-cyan-400 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-glow">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                Current Status • Open to Software Developer Internships &amp; Full-Time Roles
              </span>
              <blockquote className="text-lg sm:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed">
                &ldquo;{profile.experienceStatement}&rdquo;
              </blockquote>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                To add future internships or work experience entries, append items to{' '}
                <code className="text-cyan-500">experienceFocusAreas</code> inside{' '}
                <code className="text-cyan-500">src/data/profile.js</code>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Practical Project Engineering Breakdown */}
        <div className="grid grid-cols-1 gap-6">
          {(profile.experienceFocusAreas || []).map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-blue-500 dark:text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 dark:text-cyan-400">
                      {item.type}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                {item.summary}
              </p>

              <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                {item.highlights.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
