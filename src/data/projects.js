// ============================================================================
// FEATURED PROJECTS CONFIGURATION
// Every project description, feature status ('Core Feature' | 'Implemented' | 'Planned'),
// technology list, and repository/live link is cleanly structured and editable.
// ============================================================================

export const PROJECTS_DATA = [
  {
    id: 'civic-connect',
    title: 'CivicConnect',
    category: 'Civic Issue Reporting and Resolution System',
    shortDescription:
      'A web-based platform that enables citizens to report civic issues and helps administrators manage and track complaints.',
    detailedOverview:
      'CivicConnect bridges the communication gap between citizens and municipal administrators. Citizens can log local infrastructure or civic complaints, track status transitions transparently, and view resolution progress, while administrators manage incoming reports through a centralized operational dashboard.',
    image: '/images/civicconnect.jpg',
    technologies: ['Java', 'React', 'JavaScript', 'MySQL', 'REST APIs', 'Tailwind CSS'],
    technologyNote: 'Editable tech tags — customize in src/data/projects.js to match your exact repo stack.',
    features: [
      { name: 'User authentication', status: 'Core Module' },
      { name: 'Civic issue reporting', status: 'Core Module' },
      { name: 'Complaint tracking', status: 'Core Module' },
      { name: 'Admin dashboard', status: 'Core Module' },
      { name: 'Status management', status: 'Core Module' },
    ],
    githubUrl: '[ADD PROJECT REPOSITORY LINK]',
    liveUrl: '[ADD DEPLOYED LINK]',
    isGithubVerified: false,
    isLiveVerified: false,
  },
  {
    id: 'scam-shield',
    title: 'ScamShield',
    category: 'AI-Powered Online Scam Detection Platform',
    shortDescription:
      'A cybersecurity platform designed to analyze suspicious online content and help users identify potential scams.',
    detailedOverview:
      'ScamShield is designed to help everyday internet users and administrators evaluate suspicious URLs, phishing attempts, and fraudulent text messages. Note: Features below are explicitly separated into Implemented vs. Planned modules so project scope is communicated transparently—update the `status` field in `src/data/projects.js` as each module reaches completion.',
    image: '/images/scamshield.jpg',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    technologyNote: 'Verified stack: React, JavaScript, Node.js, Express.js, MySQL.',
    features: [
      { name: 'Suspicious URL analysis', status: 'Implemented / Core' },
      { name: 'Phishing detection', status: 'Implemented / Core' },
      { name: 'Fraudulent message analysis', status: 'Implemented / Core' },
      { name: 'User dashboard', status: 'Implemented / Core' },
      { name: 'Scan history', status: 'Planned / In Progress' },
      { name: 'Admin dashboard', status: 'Planned / In Progress' },
      { name: 'Security analytics', status: 'Planned / In Progress' },
    ],
    githubUrl: '[ADD PROJECT REPOSITORY LINK]',
    liveUrl: '[ADD DEPLOYED LINK]',
    isGithubVerified: false,
    isLiveVerified: false,
  },
  {
    id: 'dev-journey',
    title: 'DevJourney',
    category: 'Developer Learning Journey Tracker',
    shortDescription:
      'A React-based application designed to help developers organize their learning journey, monitor progress, manage goals, and track achievements.',
    detailedOverview:
      'DevJourney empowers self-taught and academic developers to structure their technical study plans, visualize skill roadmaps, set actionable coding milestones, and persist their learning metrics directly in the browser.',
    image: '/images/devjourney.jpg',
    technologies: ['React', 'JavaScript', 'Vite', 'CSS'],
    technologyNote: 'Verified stack: React, JavaScript, Vite, CSS.',
    features: [
      { name: 'Learning dashboard', status: 'Implemented' },
      { name: 'Roadmaps', status: 'Implemented' },
      { name: 'Goal tracking', status: 'Implemented' },
      { name: 'Progress analytics', status: 'Implemented' },
      { name: 'Achievement tracking', status: 'Implemented' },
      { name: 'Local data persistence', status: 'Implemented' },
    ],
    githubUrl: 'https://github.com/vikasm8746-rgb/DevJourney',
    liveUrl: '[ADD DEPLOYED LINK]',
    isGithubVerified: true,
    isLiveVerified: false,
  },
];
