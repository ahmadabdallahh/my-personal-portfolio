import type {
    Article,
    Education,
    Experience,
    Profile,
    Project,
    SkillCategory,
} from "./types";

/**
 * Portfolio content — edit here to update site data.
 */

export const placeholderProfile: Profile = {
    name: "Ahmad Abdallah",
    title: "Front-End Developer",
    location: "Cairo, Egypt",
    status: "Open to Work",
    bio: "Motivated Front-End Developer with strong fundamentals in HTML, CSS, JavaScript, React.js, and hands-on experience building real-world projects. Passionate about creating responsive, user-friendly, and accessible web interfaces.",
    socials: [
        { platform: "email", url: "mailto:ahmadabhossen@gmail.com" },
        { platform: "linkedin", url: "https://www.linkedin.com/in/ahmad-abdalllah/" },
        { platform: "github", url: "https://github.com/ahmadabdallahh" },
        { platform: "whatsapp", url: "https://wa.me/201006429525" },
        { platform: "cv", url: "https://drive.google.com/file/d/1loJoDfyn4ZsavnO0Ni-CkfjDuqURLXtV/view?usp=drive_link" },
    ],
};

export const placeholderSkillCategories: SkillCategory[] = [
    { _id: "1", title: "Core Languages", items: ["JavaScript", "HTML5", "CSS3"] },
    { _id: "2", title: "Frameworks & Libraries", items: ["React", "Next.js", "Redux Toolkit", "Redux Persist", "Zustand", "Context API"] },
    { _id: "3", title: "Styling", items: ["Tailwind CSS", "Tailwind CSS 4", "Bootstrap"] },
    { _id: "4", title: "GraphQL & API", items: ["GraphQL", "REST API", "Axios"] },
    { _id: "5", title: "Routing & i18n", items: ["React Router DOM", "i18next", "React-Intl", "PostCSS RTL"] },
    { _id: "7", title: "Animation & UI", items: ["Framer Motion"] },
    { _id: "9", title: "Tooling", items: ["Vite", "Git", "GitHub", "Figma"] },
    { _id: "10", title: "Soft Skills", items: ["Responsive Design", "Problem-Solving", "Agile Methodologies", "Collaboration"] },
];

export const placeholderExperience: Experience[] = [
    {
        _id: "exp-3",
        company: "BATU ICPC Community",
        employmentType: "Season 2027",
        startDate: "2026-11",
        isCurrent: true,
        roles: [
            {
                title: "Software Development & Cybersecurity Committee Member",
                startDate: "2026-11",
                bullets: [
                    "Joined the Software Development & Cybersecurity Committee to contribute to the community's technical initiatives and digital infrastructure",
                    "Collaborate with fellow developers to explore, develop, and maintain web-based solutions for the community",
                    "Participate in technical discussions, problem-solving, and collaborative development activities",
                    "Contribute to building a secure, reliable, and user-friendly digital environment while strengthening software engineering practices",
                ],
            },
        ],
    },
    {
        _id: "exp-4",
        company: "GRV Team",
        employmentType: "Volunteer",
        startDate: "2026-10",
        isCurrent: true,
        roles: [
            {
                title: "Front-End Developer",
                startDate: "2026-10",
                bullets: [
                    "Collaborated with a multidisciplinary team to contribute to web development initiatives and digital projects",
                    "Contributed to planning and shaping the GRV Team platform, focusing on its user interface, design system, and overall user experience",
                    "Worked on defining consistent UI components, color schemes, typography, and responsive design guidelines",
                    "Participated in technical discussions, project planning, and collaborative problem-solving to improve the team's digital products",
                    "Worked alongside team members to transform ideas into practical solutions while maintaining clean, consistent, and maintainable interfaces",
                ],
            },
        ],
    },
    {
        _id: "exp-1",
        company: "GDG Damanhour",
        employmentType: "Volunteer",
        startDate: "2026-02",
        isCurrent: true,
        roles: [
            {
                title: "Front End Developer",
                startDate: "2026-02",
                bullets: [
                    "Collaborated with a cross-functional team of Frontend, Backend, and Mobile developers to build a professional community website",
                    "Contributed to the development and implementation of key features to enhance user experience and platform functionality",
                    "Participated in team planning, technical discussions, and problem-solving throughout the development lifecycle",
                    "Worked in a collaborative development environment to deliver a high-quality, scalable web solution",
                ],
            },
        ],
    },
    {
        _id: "exp-2",
        company: "Here Code Initiative",
        employmentType: "Training",
        startDate: "2025-09",
        endDate: "2026-11",
        roles: [
            {
                title: "Front-End Developer",
                startDate: "2025-09",
                endDate: "2026-11",
                bullets: [
                    "Implemented modern UI, animations, and interactive elements",
                    "Designed mobile-first layouts supporting 3+ screen sizes",
                    "Collaborated with a team of 4 developers to deliver project features on time",
                    "Optimized performance, reducing load time by approximately 25%",
                    "Practiced effective communication and version control within the team",
                ],
            },
        ],
    },
];

export const placeholderProjects: Project[] = [
    {
        _id: "proj-9",
        title: "AI Code & Resume Reviewer",
        slug: "ai-code-resume-reviewer",
        summary: "An AI-powered tool that analyzes resumes and GitHub repositories, providing structured evaluations, ATS compatibility scores, code quality assessments, and actionable recommendations to help developers improve their professional profiles.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration"],
        githubUrl: "https://github.com/ahmadabdallahh/flyrank-capstone-project",
        cover: "/screen-shots/ai-resume-reviewer.png",
        liveUrl: "https://ai-code-resume-reviewer.vercel.app/",
        featured: true,
    },
    {
        _id: "proj-10",
        title: "Food Order App",
        slug: "food-order-app",
        summary: "Full-stack meal ordering app — browse a menu of 20 meals, manage a cart with quantity controls, and check out through validated forms, backed by an Express API.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Express"],
        githubUrl: "https://github.com/ahmadabdallahh/food-order-app",
        featured: true,
    },
    {
        _id: "proj-11",
        title: "EventHub Auth",
        slug: "eventhub-authorization",
        summary: "Full-stack event manager with JWT cookie authentication — guest browsing, per-field validated signup and login, and a dashboard with event stats.",
        tags: ["React", "Express", "JWT Auth", "Tailwind CSS"],
        cover: "/screen-shots/Event-Hub.png",
        githubUrl: "https://github.com/ahmadabdallahh/Event-Hub-Authorization",
        liveUrl: "https://eventt-hub-plum.vercel.app/",
        featured: true,
    },
    {
        _id: "proj-12",
        title: "Memory Card Game",
        slug: "memory-game",
        summary: "A sleek, animated memory card game — 16 cards shuffled with Fisher–Yates, live match detection, score and move counters, and a dark glassmorphism UI.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        githubUrl: "https://github.com/ahmadabdallahh/memory-game",
        liveUrl: "https://memorry-games.vercel.app",
        featured: true,
    },
    {
        _id: "proj-1",
        title: "Tansiq Simulator",
        slug: "tansiq-simulator",
        summary: "Full-stack Egyptian Tansiq placement simulator — students fill 75-slot choice grids with instant autosave; admins manage cutoff datasets via a dashboard panel.",
        tags: ["Next.js", "NextAuth", "Prisma", "PostgreSQL"],
        cover: "/screen-shots/tansqie-simulator.png",
        liveUrl: "https://tansiq-simulator.vercel.app/",
        featured: true,
    },
    {
        _id: "proj-2",
        title: "Health Tech",
        slug: "health-tech",
        summary: "A modern health-tech web application — designed to deliver a clean, accessible interface for health-related services and information.",
        tags: ["React", "JavaScript", "CSS"],
        cover: "/screen-shots/health-tecj.png",
        githubUrl: "https://github.com/ahmadabdallahh/my-health-tech-production",
        liveUrl: "https://health-tech.wasmer.app/",
        featured: true,
    },
    {
        _id: "proj-3",
        title: "E-Commerce",
        slug: "e-commerce",
        summary: "A full-featured tech e-commerce storefront — product browsing, cart management, and a streamlined checkout experience with a modern UI.",
        tags: ["React", "Redux", "JavaScript", "CSS"],
        cover: "/screen-shots/shop.png",
        liveUrl: "https://tech-commerce-app.vercel.app/",
        githubUrl: "https://github.com/ahmadabdallahh/final-project",
        featured: true,
    },
    {
        _id: "proj-5",
        title: "Quiz App",
        slug: "quiz-app",
        summary: "A fun and interactive quiz app — multiple-choice questions with four options, immediate correct/incorrect highlighting, score tracking, and a restart option.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        cover: "/screen-shots/Quiz-app.png",
        liveUrl: "https://quiiz-appp.vercel.app/",
        githubUrl: "https://github.com/ahmadabdallahh/quiz-app",
        featured: true,
    },
    {
        _id: "proj-6",
        title: "Tic Tac Toe",
        slug: "tic-tac-toe",
        summary: "A classic Tic Tac Toe game with a clean interface — two-player mode, win/draw detection, and a reset option for endless rounds.",
        tags: ["HTML", "CSS", "JavaScript"],
        cover: "/screen-shots/Tic-Tac-Toe.png",
        githubUrl: "https://github.com/ahmadabdallahh/tic-tac-toe-game",
        liveUrl: "https://tiic-tac-toe-game.vercel.app/",
        featured: true,
    },
    {
        _id: "proj-7",
        title: "Simple Weather App",
        slug: "simple-weather-app",
        summary: "A simple, modern weather app — search any city to get real-time temperature, humidity, wind speed, and dynamic weather icons that match current conditions.",
        tags: ["HTML", "CSS", "JavaScript", "API"],
        cover: "/screen-shots/weather.png",
        githubUrl: "https://github.com/ahmadabdallahh/simple-weather-app",
        liveUrl: "https://simple-weather-appp.vercel.app/",
        featured: true,
    },
    {
        _id: "proj-8",
        title: "Simple Image Gallery",
        slug: "simple-image-gallery",
        summary: "A clean, responsive image gallery — browse through a curated collection of images with smooth layout and easy navigation.",
        tags: ["HTML", "CSS", "JavaScript"],
        cover: "/screen-shots/image-gallery.png",
        githubUrl: "https://github.com/ahmadabdallahh/simple-image-gallery",
        liveUrl: "https://simplle-image-gallery.vercel.app/",
        featured: true,
    },
];

export const placeholderEducation: Education[] = [
    {
        institution: "Borg El-Arab Technological University (BATU)",
        degree: "Bachelor's Degree in Information Technology (IT)",
        startYear: "Sep 2026",
        endYear: "Sep 2030 (Expected)",
        coursework: [],
    },
    {
        institution: "WE School for Applied Technology – El Beheira",
        degree: "Diploma in Applied Technology",
        startYear: "2023",
        endYear: "2026",
        coursework: [],
    },
];

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
