import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Clock, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isPlaceholder = (val) => !val || val.includes('[ADD');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 shadow-2xl">
        {/* Top Banner Image */}
        <div className="relative h-60 sm:h-72 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-rose-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 border border-blue-400/30 text-cyan-300">
              {project.category}
            </span>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-white mt-2"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.detailedOverview || project.shortDescription}
            </p>
          </div>

          {/* Features Breakdown (Implemented vs Planned) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Feature Breakdown (Editable in src/data/projects.js)
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => {
                const isPlanned =
                  feat.status && feat.status.toLowerCase().includes('planned');
                return (
                  <div
                    key={feat.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2"
                  >
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      {isPlanned ? (
                        <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {feat.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        isPlanned
                          ? 'bg-amber-500/10 text-amber-500 dark:text-amber-300 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20'
                      }`}
                    >
                      {feat.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono bg-blue-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.technologyNote && (
              <p className="text-[11px] font-mono text-slate-400 mt-2">
                {project.technologyNote}
              </p>
            )}
          </div>

          {/* Repository & Live Demo Links */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {isPlaceholder(project.githubUrl) ? (
                <span className="px-4 py-2.5 rounded-xl text-xs font-mono border border-dashed border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-300">
                  GitHub: {project.githubUrl}
                </span>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                </a>
              )}

              {isPlaceholder(project.liveUrl) ? (
                <span className="px-4 py-2.5 rounded-xl text-xs font-mono border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                  Live Demo: {project.liveUrl}
                </span>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
