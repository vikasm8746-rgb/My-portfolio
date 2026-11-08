import React from 'react';
import { Github, Linkedin, Code2, Terminal, ExternalLink } from 'lucide-react';

export default function CodingProfiles({ profiles, onSelectPlaceholderAlert }) {
  const getIcon = (id) => {
    switch (id) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'leetcode':
        return Code2;
      default:
        return Terminal;
    }
  };

  const isPlaceholder = (val) => !val || val.includes('[ADD');

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GitHub &amp; Coding Profiles
          </h2>
          <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
            Direct links to source repositories, professional network, and algorithmic practice platforms (without fabricated statistics).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((prof) => {
            const IconComponent = getIcon(prof.id);
            const placeholder = isPlaceholder(prof.url);

            return (
              <div
                key={prof.id}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                         !placeholder
                          ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      }`}
                    >
                      {!placeholder ? 'Verified Link' : 'Editable Placeholder'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {prof.platform}
                  </h3>
                  <p className="text-xs font-mono text-blue-500 dark:text-cyan-400 mt-0.5 truncate">
                    {prof.handle}
                  </p>
                  <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prof.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800">
                  {placeholder ? (
                    <button
                      type="button"
                      onClick={() =>
                        onSelectPlaceholderAlert &&
                        onSelectPlaceholderAlert(`${prof.platform} URL`, prof.id)
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono border border-dashed border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 text-amber-600 dark:text-amber-300 transition-colors"
                    >
                      <span>{prof.url}</span>
                    </button>
                  ) : (
                    <a
                      href={prof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-95 transition-opacity"
                    >
                      <span>Visit {prof.platform}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
