import type {
  Article,
  Education,
  Experience,
  Profile,
  Project,
  SkillCategory,
} from "./types";

/**
 * Real content from CV + Figma design.
 * Replace by editing content in Sanity Studio once configured.
 */

export const placeholderProfile: Profile = {
  name: "Ahmad Abdallah",
  title: "Front-End Developer",
  location: "Cairo, Egypt",
  status: "Open to Work",
  bio: "Motivated Front-End Developer with strong fundamentals in HTML, CSS, JavaScript, React.js, and hands-on experience building real-world projects. Passionate about creating responsive, user-friendly, and accessible web interfaces.",
  socials: [
    { platform: "email", url: "mailto:ahmad.ab.hossen@gmail.com" },
    { platform: "linkedin", url: "https://linkedin.com/in/ahmad-abdallah-h" },
    { platform: "github", url: "https://github.com/ahmadabdallahh" },
    { platform: "whatsapp", url: "https://wa.me/20100642925" },
    { platform: "cv", url: "#" },
  ],
};

export const placeholderSkillCategories: SkillCategory[] = [
  { _id: "1", title: "Core Languages", items: ["JavaScript", "HTML5", "CSS3"] },
  { _id: "2", title: "Frameworks & Libraries", items: ["React", "Next.js", "Redux Toolkit", "Redux Persist", "Zustand", "Context API"] },
  { _id: "3", title: "Styling", items: ["Tailwind CSS", "Tailwind CSS 4", "Bootstrap"] },
  { _id: "4", title: "GraphQL & API", items: ["GraphQL", "Apollo Client", "REST API", "Axios"] },
  { _id: "5", title: "Routing & i18n", items: ["React Router DOM", "i18next", "React-Intl", "PostCSS RTL"] },
  { _id: "6", title: "E-Commerce & CMS", items: ["Magento 2", "Magento PWA Studio", "Layout XML", "PHTML", "RequireJS"] },
  { _id: "7", title: "Animation & UI", items: ["Framer Motion"] },
  { _id: "8", title: "Data & Charts", items: ["Recharts", "GTM (Google Tag Manager)"] },
  { _id: "9", title: "Tooling", items: ["Vite", "Git", "GitHub", "Figma"] },
  { _id: "10", title: "Soft Skills", items: ["Responsive Design", "Problem-Solving", "Agile Methodologies", "Collaboration"] },
];

export const placeholderExperience: Experience[] = [
  {
    _id: "exp-1",
    company: "CROCOIT",
    employmentType: "Full-time",
    startDate: "2025-04",
    isCurrent: true,
    location: "Cairo",
    roles: [
      {
        title: "Frontend Developer",
        startDate: "2025-04",
        bullets: [
          "Built responsive medical booking platform with modern UI and interactive elements",
          "Implemented patient registration, login, and profile management with secure authentication",
          "Developed hospital, clinic, and doctor management interfaces with dynamic scheduling",
          "Optimized performance and Core Web Vitals for production applications",
        ],
      },
    ],
  },
  {
    _id: "exp-2",
    company: "CROCOIT",
    employmentType: "Trainee",
    startDate: "2024-11",
    endDate: "2025-03",
    location: "Cairo",
    roles: [
      {
        title: "Frontend Developer Trainee",
        startDate: "2024-11",
        endDate: "2025-03",
        bullets: [
          "Completed practical training focused on modern Magento 2 frontend development",
          "Worked with Page Builder, widgets, layout XML, PHTML templates, and static assets",
          "Gained experience with RequireJS, Git workflows, and converting Figma designs to UI",
        ],
      },
    ],
  },
  {
    _id: "exp-3",
    company: "ITI",
    employmentType: "Training",
    startDate: "2023-09",
    endDate: "2023-09",
    roles: [
      {
        title: "React.js Summer Training",
        startDate: "2023-09",
        endDate: "2023-09",
        bullets: [
          "Built responsive web applications using React.js, Bootstrap, and ES6 JavaScript",
          "Focused on clean, modular code architecture",
        ],
      },
    ],
  },
];

export const placeholderProjects: Project[] = [
  {
    _id: "proj-1",
    title: "Tansiq Simulator",
    slug: "tansiq-simulator",
    summary: "Full-stack Egyptian Tansiq placement simulator — students fill 75-slot choice grids with instant autosave; admins manage cutoff datasets via a panel. Built with Next.js 16, NextAuth, Prisma and PostgreSQL.",
    tags: ["Next.js 16", "NextAuth", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/ahmadabdallahh/tansiq-simulator",
    featured: true,
  },
  {
    _id: "proj-2",
    title: "Weather App",
    slug: "weather-app",
    summary: "A simple, modern weather app — search any city to get real-time temperature, humidity, wind speed, and dynamic weather icons that match current conditions.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/ahmadabdallahh/30-Day-30-Projects-for-Begginers-Great_Stack/tree/main/%5B1%5D%20Weather%20App",
    featured: true,
  },
  {
    _id: "proj-3",
    title: "Notes App",
    slug: "notes-app",
    summary: "A sleek, colourful notes-taking app — type a thought, click Add Note, and it is instantly saved even after you refresh the page (localStorage persistence).",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    githubUrl: "https://github.com/ahmadabdallahh/30-Day-30-Projects-for-Begginers-Great_Stack/tree/main/%5B5%5D%20Notes%20App",
    featured: true,
  },
  {
    _id: "proj-4",
    title: "Quiz App",
    slug: "quiz-app",
    summary: "A fun and interactive quiz app — multiple-choice questions with four options, immediate correct/incorrect highlighting, score tracking, and a restart option.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ahmadabdallahh/30-Day-30-Projects-for-Begginers-Great_Stack/tree/main/%5B3%5D%20Quiz%20App",
    featured: false,
  },
  {
    _id: "proj-5",
    title: "Image Search Engine",
    slug: "image-search-engine",
    summary: "Search any topic and get a responsive grid of images fetched live via an image API.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/ahmadabdallahh/30-Day-30-Projects-for-Begginers-Great_Stack/tree/main/%5B30%5D%20Image%20Search%20Engine",
    featured: false,
  },
  {
    _id: "proj-6",
    title: "Simple Calculator",
    slug: "simple-calculator",
    summary: "A minimal yet stylish web calculator — addition, subtraction, multiplication, division, AC/DE controls, decimals, and keyboard-friendly input.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ahmadabdallahh/30-Day-30-Projects-for-Begginers-Great_Stack/tree/main/%5B12%5D%20Simple%20Calculator",
    featured: false,
  },
];

export const placeholderEducation: Education = {
  institution: "Faculty of Engineering, Zagazig University",
  degree: "Bachelor of Science in Computer Science",
  gpaLabel: "Grade",
  gpaValue: "Very Good",
  startYear: "2019",
  endYear: "2024",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Web Development",
    "Software Engineering",
    "Computer Networks",
  ],
  graduationProject: {
    title: "Website Builder Platform",
    status: "Excellent",
    description: "Developed a comprehensive website builder platform that enables users to create and customize websites with ease.",
    highlights: [
      "Built with modern web development practices",
      "Implemented multilingual support (AR/EN)",
      "Advanced user interface design principles",
      "Drag-and-drop functionality",
      "Template management system",
    ],
    note: "This project demonstrated proficiency in full-stack development, UI/UX design, and multilingual application architecture.",
  },
};

export const placeholderArticles: Article[] = [
  {
    _id: "art-1",
    title: "RTL/LTR Handling in React — The Complete Guide",
    slug: "rtl-ltr-handling-react",
    excerpt: "A practical guide to building fully bidirectional (AR/EN) React apps with proper RTL/LTR support using CSS logical properties and i18next.",
    tags: ["React", "i18n", "RTL", "CSS"],
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "art-2",
    title: "Core Web Vitals Optimization: LCP & CLS in Real Projects",
    slug: "core-web-vitals-optimization",
    excerpt: "Real-world techniques I used to improve LCP and CLS scores in a Magento PWA and Next.js app — not just theory.",
    tags: ["Performance", "Core Web Vitals", "Next.js", "PWA"],
    publishedAt: new Date().toISOString(),
  },
];
