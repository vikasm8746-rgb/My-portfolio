import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2, Edit3 } from 'lucide-react';

export default function Education({ educationList, onOpenCustomizer }) {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education
            </h2>
          </div>

          {onOpenCustomizer && (
            <button
              type="button"
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 transition-colors self-start sm:self-auto"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Fill College &amp; Year Placeholders</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/40 transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/20">
                    {edu.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-600 dark:text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    Duration: {edu.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    Institution: <span className="font-mono text-amber-600 dark:text-amber-300">{edu.institution}</span>
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Score / CGPA: {edu.grade}</span>
                <span>Editable in src/data/profile.js</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
