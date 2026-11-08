// ============================================================================
// TECHNICAL SKILLS CONFIGURATION
// Categorized skills without invented percentages.
// If you later wish to display verified proficiency badges, set `verifiedLevel`
// on any item (default is null so no unverified levels are shown).
// ============================================================================

export const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core languages for object-oriented, asynchronous, and relational programming',
    accent: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'Java', tag: 'Core & OOP', verifiedLevel: null },
      { name: 'JavaScript', tag: 'ES6+', verifiedLevel: null },
      { name: 'SQL', tag: 'Relational Queries', verifiedLevel: null },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Modern component architecture and responsive UI styling',
    accent: 'from-cyan-400 to-teal-400',
    skills: [
      { name: 'HTML5', tag: 'Semantic Markup', verifiedLevel: null },
      { name: 'CSS3', tag: 'Layouts & Animations', verifiedLevel: null },
      { name: 'React.js', tag: 'Hooks & SPA Architecture', verifiedLevel: null },
      { name: 'Tailwind CSS', tag: 'Utility-First Design', verifiedLevel: null },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Server-side logic, API design, and application middleware',
    accent: 'from-violet-500 to-indigo-400',
    skills: [
      { name: 'Java', tag: 'Backend Logic', verifiedLevel: null },
      { name: 'Node.js', tag: 'Runtime Environment', verifiedLevel: null },
      { name: 'Express.js', tag: 'Web Framework', verifiedLevel: null },
      { name: 'REST APIs', tag: 'API Design & Integration', verifiedLevel: null },
    ],
  },
  {
    id: 'database',
    title: 'Database Management',
    subtitle: 'Relational data modeling, indexing, and persistent storage',
    accent: 'from-emerald-400 to-cyan-500',
    skills: [
      { name: 'MySQL', tag: 'Relational DBMS', verifiedLevel: null },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & IDEs',
    subtitle: 'Version control, debugging, API testing, and development environments',
    accent: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'Git', tag: 'Version Control', verifiedLevel: null },
      { name: 'GitHub', tag: 'Code Hosting & Collaboration', verifiedLevel: null },
      { name: 'VS Code', tag: 'Primary Web IDE', verifiedLevel: null },
      { name: 'Eclipse', tag: 'Java IDE', verifiedLevel: null },
      { name: 'Postman', tag: 'API Testing', verifiedLevel: null },
    ],
  },
];
