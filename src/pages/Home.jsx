import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ProjectModal from '../components/ProjectModal';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { PROFILE_DATA } from '../data/profile';
import { SKILL_CATEGORIES } from '../data/skills';
import { PROJECTS_DATA } from '../data/projects';

export default function Home({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [profile, setProfile] = useState(PROFILE_DATA);
  const [projects] = useState(PROJECTS_DATA);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'education',
      'contact',
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060A12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        resumeUrl={profile.resumeUrl}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      <main>
        <Hero
          profile={profile}
          onSelectPlaceholderAlert={() => setCustomizerOpen(true)}
        />
        <About profile={profile} />
        <Skills skillCategories={SKILL_CATEGORIES} />
        <Projects
          projects={projects}
          onSelectProject={setSelectedProject}
          onSelectPlaceholderAlert={() => setCustomizerOpen(true)}
        />
        <Experience profile={profile} />
        <Education
          educationList={profile.education}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
        <Certifications
          items={profile.certificationsAndAchievements}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
        <CodingProfiles
          profiles={profile.codingProfiles}
          onSelectPlaceholderAlert={() => setCustomizerOpen(true)}
        />
        <Contact
          profile={profile}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
      </main>

      <Footer
        profile={profile}
        onSelectPlaceholderAlert={() => setCustomizerOpen(true)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Quick In-Browser Placeholder Customizer Drawer */}
      {customizerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/70 backdrop-blur-sm">
          <div className="w-full max-w-md h-full overflow-y-auto bg-white dark:bg-[#0B1120] border-l border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Edit Placeholders Live
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Preview your details here or save permanently in src/data/profile.js
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCustomizerOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  Email Address
                </label>
                <input
                  type="text"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={profile.linkedin}
                  onChange={(e) =>
                    setProfile({ ...profile, linkedin: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  MCA College Name
                </label>
                <input
                  type="text"
                  value={profile.education[0].institution}
                  onChange={(e) => {
                    const nextEdu = [...profile.education];
                    nextEdu[0] = { ...nextEdu[0], institution: e.target.value };
                    setProfile({ ...profile, education: nextEdu });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  MCA Duration / Year
                </label>
                <input
                  type="text"
                  value={profile.education[0].duration}
                  onChange={(e) => {
                    const nextEdu = [...profile.education];
                    nextEdu[0] = { ...nextEdu[0], duration: e.target.value };
                    setProfile({ ...profile, education: nextEdu });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
