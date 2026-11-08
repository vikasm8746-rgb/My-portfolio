import React from 'react';
import { Github, Linkedin, ArrowUp, Terminal } from 'lucide-react';

export default function Footer({ profile, onSelectPlaceholderAlert }) {
  const currentYear = new Date().getFullYear();
  const isPlaceholder = (val) => !val || val.includes('[ADD');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#050811] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg font-extrabold text-slate-900 dark:text-white">
                {profile.name}
              </p>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Full Stack Java Developer
              </p>
            </div>
          </div>

          {/* Social & Back to top */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-cyan-400 transition-colors"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border border-dashed border-amber-500/40 bg-amber-500/5 text-amber-600 dark:text-amber-300"
              >
                <Linkedin className="w-4 h-4" />
                <span>{profile.linkedin}</span>
              </button>
            ) : (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm hover:opacity-95 transition-opacity"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono">
            Built with React.js, Tailwind CSS, Framer Motion &amp; Lucide Icons
          </p>
        </div>
      </div>
    </footer>
  );
}
