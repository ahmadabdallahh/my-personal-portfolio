import type {
  Article,
  Education,
  Experience,
  Profile,
  Project,
  SkillCategory,
} from "./types";

/**
 * Placeholder content. Everything here is a stand-in so the site runs
 * out of the box. Replace it by editing content in Sanity Studio
 * (run `npm run dev` then open /studio), it will automatically
 * override these fallbacks once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
 */

export const placeholderProfile: Profile = {
  name: "Your Name",
  title: "Front-End Developer",
  location: "City, Country",
  status: "Open to Work",
  bio: "Write 2–4 sentences about your experience, the stack you specialize in, and the kind of products you build. This is the first thing recruiters read — make it specific and outcome-focused rather than generic.",
  socials: [
    { platform: "email", url: "mailto:you@example.com" },
    { platform: "linkedin", url: "https://linkedin.com/in/your-handle" },
    { platform: "github", url: "https://github.com/your-handle" },
    { platform: "whatsapp", url: "https://wa.me/000000000" },
    { platform: "cv", url: "#" },
  ],
};

export const placeholderSkillCategories: SkillCategory[] = [
  { _id: "1", title: "Core Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { _id: "2", title: "Frameworks & Libraries", items: ["React", "Next.js", "Redux Toolkit", "Zustand"] },
  { _id: "3", title: "Styling", items: ["Tailwind CSS", "CSS Modules", "Sass"] },
  { _id: "4", title: "GraphQL & API", items: ["GraphQL", "Apollo Client", "REST API", "Axios"] },
  { _id: "5", title: "Routing & i18n", items: ["React Router", "next-intl"] },
  { _id: "6", title: "E-commerce & CMS", items: ["Sanity", "Shopify", "Contentful"] },
  { _id: "7", title: "Animation & UI", items: ["Framer Motion"] },
  { _id: "8", title: "Data & Charts", items: ["Recharts", "GTM"] },
  { _id: "9", title: "Tooling", items: ["Vite", "Git", "GitHub", "Figma"] },
  { _id: "10", title: "Soft Skills", items: ["Responsive Design", "Problem Solving", "Agile Methodologies", "Collaboration"] },
];

export const placeholderExperience: Experience[] = [
  {
    _id: "exp-1",
    company: "Company Name",
    employmentType: "Full-time",
    startDate: "2025-04",
    isCurrent: true,
    location: "City, Country",
    roles: [
      {
        title: "Frontend Developer",
        startDate: "2025-04",
        bullets: [
          "Replace with a real, measurable achievement (what you built, tech used, impact).",
          "Replace with another concrete contribution — prefer numbers (%, ms, users) where you have them.",
          "Replace with a third bullet describing scope or ownership.",
        ],
      },
    ],
  },
  {
    _id: "exp-2",
    company: "Previous Company",
    employmentType: "Trainee",
    startDate: "2024-11",
    endDate: "2025-03",
    location: "City, Country",
    roles: [
      {
        title: "Frontend Developer Trainee",
        startDate: "2024-11",
        endDate: "2025-03",
        bullets: [
          "Replace with what the training program covered.",
          "Replace with a project you shipped during the program.",
        ],
      },
    ],
  },
];

export const placeholderProjects: Project[] = Array.from({ length: 6 }).map((_, i) => ({
  _id: `proj-${i + 1}`,
  title: `Project Name ${i + 1}`,
  slug: `project-${i + 1}`,
  summary: "One or two sentences describing what this project does and who it's for.",
  tags: ["React", "Next.js", "Tailwind"],
  featured: i < 3,
}));

export const placeholderEducation: Education = {
  institution: "University Name, Faculty",
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
    title: "Graduation Project Title",
    status: "Excellent",
    description: "One short paragraph describing the graduation project and its purpose.",
    highlights: [
      "Key feature or capability #1",
      "Key feature or capability #2",
      "Key feature or capability #3",
    ],
    note: "Optional note: what the project demonstrated (skills, practices, tools).",
  },
};

export const placeholderArticles: Article[] = [
  {
    _id: "art-1",
    title: "Article Title Goes Here",
    slug: "article-title-goes-here",
    excerpt: "A one-sentence summary of what the article covers and why it's useful.",
    tags: ["React", "Next.js"],
    publishedAt: new Date().toISOString(),
  },
  {
    _id: "art-2",
    title: "Second Article Title",
    slug: "second-article-title",
    excerpt: "A one-sentence summary of what the article covers and why it's useful.",
    tags: ["Performance", "Web Vitals"],
    publishedAt: new Date().toISOString(),
  },
];
