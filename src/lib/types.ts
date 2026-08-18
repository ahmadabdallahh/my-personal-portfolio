export type Social = { platform: string; url: string };

export type Profile = {
  name: string;
  title: string;
  location: string;
  status?: string;
  bio: string;
  avatar?: string;
  cvUrl?: string;
  socials: Social[];
};

export type SkillCategory = {
  _id: string;
  title: string;
  icon?: string;
  items: string[];
};

export type ExperienceRole = {
  title: string;
  startDate: string;
  endDate?: string;
  bullets: string[];
};

export type Experience = {
  _id: string;
  company: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  location?: string;
  roles: ExperienceRole[];
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  cover?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type GraduationProject = {
  title: string;
  status?: string;
  description: string;
  highlights: string[];
  note?: string;
};

export type Education = {
  institution: string;
  degree: string;
  gpaLabel?: string;
  gpaValue?: string;
  startYear: string;
  endYear: string;
  coursework: string[];
  graduationProject?: GraduationProject;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  externalUrl?: string;
};

export type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
};
