import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Code, Server, Database, Cpu, GraduationCap, Target } from 'lucide-react';

const ICONS = [Code, Server, Database, Cpu];

export default function About({ profile }) {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Practical, Real-World Software Solutions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Combining strong academic foundations in Computer Applications with hands-on full stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Bio Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {profile.name}
                </h3>
                <p className="text-sm font-mono text-blue-600 dark:text-cyan-400">
                  {profile.title}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                MCA Candidate
              </span>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Career Objective Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-violet-500/10 border border-blue-500/20 flex items-start gap-3">
              <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-blue-500 dark:text-cyan-300">
                  Career Objective
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100 mt-0.5">
                  {profile.careerObjective}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4 Pillar Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {profile.aboutHighlights.map((item, idx) => {
              const IconComponent = ICONS[idx % ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-card rounded-2xl p-5 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-slate-800 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
