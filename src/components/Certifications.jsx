import React, { useState } from 'react';
import { Award, Eye, EyeOff, Edit3 } from 'lucide-react';

export default function Certifications({ items, onOpenCustomizer }) {
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  return (
    <section className="py-20 bg-slate-100/60 dark:bg-[#080D1A]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications &amp; Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Certifications, Hackathons &amp; Achievements
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              No unverified credentials are fabricated. Populate these structured cards in{' '}
              <code className="font-mono text-cyan-500">src/data/profile.js</code> or hide placeholder cards until verified.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenCustomizer && (
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Customize</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowPlaceholders(!showPlaceholders)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 transition-colors"
            >
              {showPlaceholders ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hide Placeholder Slots</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Show Editable Placeholder Slots ({items.length})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {showPlaceholders ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-5 border border-dashed border-slate-300 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/20">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-amber-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 font-mono">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                    Issuer: {item.issuer}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Editable Placeholder</span>
                  <span>{item.credentialLink}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Placeholder achievement cards are currently hidden. Click &ldquo;Show Editable Placeholder Slots&rdquo; above or update{' '}
            <code className="font-mono text-cyan-400">src/data/profile.js</code> to display verified certifications.
          </div>
        )}
      </div>
    </section>
  );
}
