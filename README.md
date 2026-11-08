# Vikas M — Full Stack Java Developer Portfolio

A modern, responsive, production-ready developer portfolio built for **Vikas M** (*Master of Computer Applications (MCA) | Full Stack Java Developer | Software Developer*).

---

## 1. Project Overview

This portfolio is engineered with a clean, reusable, component-based React + Vite architecture styled with Tailwind CSS, Framer Motion animations, and Lucide icons. It showcases technical skills across Java, JavaScript (ES6+), React.js, Node.js, Express.js, and MySQL, alongside featured projects (**CivicConnect**, **ScamShield**, and **DevJourney**).

All missing personal/academic details use transparent, clearly labeled editable placeholders (`[ADD ...]`) centralized in `src/data/profile.js` and `src/data/projects.js`—never fabricated credentials or fake work experience.

---

## 2. Key Features

- **Dark / Light Theme Toggle**: Defaults to a deep navy/charcoal developer theme with electric blue, cyan, and violet accents, plus full light-mode support persisted in `localStorage`.
- **Sticky Responsive Navigation**: Smooth section scrolling, active scroll-spy indicator, mobile hamburger drawer, and direct Resume download button.
- **Interactive Hero Section**: Animated typewriter role cycling (*Full Stack Java Developer*, *React Developer*, *Software Developer*, *Problem Solver*), custom isometric developer workspace illustration, and quick social links.
- **Categorized Technical Skills**: Interactive category filters (*Programming Languages*, *Frontend*, *Backend*, *Database*, *Tools*) without arbitrary/invented skill percentages.
- **Featured Projects with Tech Filter & Detail Modal**:
  - **CivicConnect** (*Civic Issue Reporting and Resolution System*)
  - **ScamShield** (*AI-Powered Online Scam Detection Platform* — clearly distinguishing implemented vs. planned modules)
  - **DevJourney** (*Developer Learning Journey Tracker* — linked to `https://github.com/vikasm8746-rgb/DevJourney`)
- **Live Placeholder Customizer**: Test filling in `[ADD ...]` placeholders right in the browser or edit `src/data/profile.js` and `src/data/projects.js` directly.
- **Validated Contact Form with Transparent `mailto:` Fallback**: Full client-side validation that prepares a pre-populated `mailto:` link and one-click clipboard copy when no backend mail server is configured.
- **Custom 404 Route**: Handled via React Router v6 (`src/pages/NotFound.jsx`) with Vercel SPA rewrite support (`vercel.json`).

---

## 3. Technology Stack

- **Frontend**: React.js 18, JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6 (`react-router-dom`)
- **Animations**: Framer Motion (`framer-motion`)
- **Icons**: Lucide React (`lucide-react`)
- **Build Tool**: Vite 5

---

## 4. Project Structure

```text
vikas-m-portfolio/
├── public/
│   ├── images/
│   │   ├── hero-illustration.jpg
│   │   ├── civicconnect.jpg
│   │   ├── scamshield.jpg
│   │   └── devjourney.jpg
│   └── resume.pdf
├── src/
│   ├── assets/
│   │   └── index.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
└── README.md
```

---

## 5. Getting Started in VS Code (Installation & Development)

1. **Extract the ZIP archive** and open the `vikas-m-portfolio` folder in **VS Code**.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 6. Production Build & Local Preview

1. **Create an optimized production build**:
   ```bash
   npm run build
   ```
2. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 7. Where to Update Your Placeholders

- **Personal Links, Email, MCA College Name, Undergraduate Details & Certifications**: Edit `src/data/profile.js`
- **Project Repo Links, Live Demo Links & Feature Statuses**: Edit `src/data/projects.js`
- **Resume PDF**: Replace `public/resume.pdf` with your final PDF resume.

---

## 8. Deploying to Vercel

1. Push this project folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. `vercel.json` is already pre-configured for Single Page Application (SPA) routing.
"# My-portfolio" 
