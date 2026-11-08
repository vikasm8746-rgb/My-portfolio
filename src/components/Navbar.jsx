import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Terminal, SlidersHorizontal } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({
  activeSection,
  darkMode,
  setDarkMode,
  resumeUrl,
  onOpenCustomizer,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 dark:bg-[#060A12]/85 bg-white/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              VIKAS.M
            </span>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Java • React • Full Stack
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/70 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Actions: Placeholder Editor, Theme Toggle & Resume Download */}
        <div className="hidden md:flex items-center gap-2.5">
          {onOpenCustomizer && (
            <button
              type="button"
              onClick={onOpenCustomizer}
              title="Edit Placeholders Live"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Edit Placeholders</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-blue-500/50 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href={resumeUrl || '/resume.pdf'}
            download="Vikas_M_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <a
              href={resumeUrl || '/resume.pdf'}
              download="Vikas_M_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            {onOpenCustomizer && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Edit Placeholders</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
