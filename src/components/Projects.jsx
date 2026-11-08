import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Eye,
  CheckCircle2,
  Clock,
  Filter,
} from 'lucide-react';

export default function Projects({
  projects,
  onSelectProject,
  onSelectPlaceholderAlert,
}) {
  const [selectedTech, setSelectedTech] = useState('All');

  const allTechnologies = useMemo(() => {
    const set = new Set(['All']);
    projects.forEach((p) => {
      (p.technologies || []).forEach((t) => set.add(t));
    });
    return Array.from(set);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return projects;
    return projects.filter((p) => (p.technologies || []).includes(selectedTech));
  }, [projects, selectedTech]);

  const isPlaceholder = (val) => !val || val.includes('[ADD');

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Software Projects
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              Real-world applications spanning civic issue management, AI-assisted cybersecurity analysis, and developer learning analytics.
            </p>
          </div>

          {/* Technology Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </span>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTech === tech
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Project Screenshot Header */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#060A12]/25 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/85 text-cyan-300 border border-cyan-500/30 backdrop-blur-md truncate">
                      {project.category}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/85 hover:bg-blue-600 text-white text-xs font-medium border border-slate-700 backdrop-blur-md transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Features</span>
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Feature Preview List with Implemented vs Planned Distinction */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Features &amp; Scope:
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 5).map((feat) => {
                        const isPlanned =
                          feat.status && feat.status.toLowerCase().includes('planned');
                        return (
                          <li
                            key={feat.name}
                            className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-slate-300"
                          >
                            <span className="inline-flex items-center gap-1.5 truncate">
                              {isPlanned ? (
                                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              ) : (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              )}
                              <span className="truncate">{feat.name}</span>
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono shrink-0 ${
                                isPlanned
                                  ? 'bg-amber-500/10 text-amber-500 dark:text-amber-300 border border-amber-500/20'
                                  : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20'
                              }`}
                            >
                              {feat.status}
                            </span>
                          </li>
                        );
                      })}
                      {project.features.length > 5 && (
                        <li className="text-[11px] font-mono text-cyan-500 pt-1">
                          + {project.features.length - 5} more modules (click Inspect Features)
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-200/70 dark:border-slate-800/70 flex flex-wrap items-center gap-2.5">
                {isPlaceholder(project.githubUrl) ? (
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPlaceholderAlert &&
                      onSelectPlaceholderAlert(
                        `${project.title} GitHub Link`,
                        'projects'
                      )
                    }
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono border border-dashed border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10 text-amber-600 dark:text-amber-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">[ADD REPO LINK]</span>
                  </button>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                )}

                {isPlaceholder(project.liveUrl) ? (
                  <button
                    type="button"
                    onClick={() =>
                      onSelectPlaceholderAlert &&
                      onSelectPlaceholderAlert(
                        `${project.title} Live Demo Link`,
                        'projects'
                      )
                    }
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono border border-dashed border-slate-300 dark:border-slate-700 hover:border-cyan-400 text-slate-600 dark:text-slate-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">[ADD LIVE LINK]</span>
                  </button>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
