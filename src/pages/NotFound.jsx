import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060A12] text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full glass-card rounded-3xl p-8 text-center space-y-6 border border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 mx-auto flex items-center justify-center text-white shadow-glow">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            HTTP 404 • Route Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The route you requested does not exist on Vikas M&apos;s developer portfolio.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-400"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
