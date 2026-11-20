export type Social = { platform: string; url: string };

export type Profile = {
  name: string;
  title: string;
  titleAr?: string;
  location: string;
  locationAr?: string;
  status?: string;
  statusAr?: string;
  bio: string;
  bioAr?: string;
  avatar?: string;
  cvUrl?: string;
  socials: Social[];
};

export type SkillCategory = {
  _id: string;
  title: string;
  titleAr?: string;
  icon?: string;
  items: string[];
  itemsAr?: string[];
};

export type ExperienceRole = {
  title: string;
  titleAr?: string;
  startDate: string;
  endDate?: string;
  bullets: string[];
  bulletsAr?: string[];
};

export type Experience = {
  _id: string;
  company: string;
  companyAr?: string;
  employmentType?: string;
  employmentTypeAr?: string;
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
  location?: string;
  locationAr?: string;
  roles: ExperienceRole[];
};

export type Project = {
  _id: string;
  title: string;
  titleAr?: string;
  slug: string;
  summary: string;
  summaryAr?: string;
  cover?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type GraduationProject = {
  title: string;
  titleAr?: string;
  status?: string;
  statusAr?: string;
  description: string;
  descriptionAr?: string;
  highlights: string[];
  highlightsAr?: string[];
  note?: string;
  noteAr?: string;
};

export type Education = {
  institution: string;
  institutionAr?: string;
  degree: string;
  degreeAr?: string;
  gpaLabel?: string;
  gpaValue?: string;
  startYear: string;
  startYearAr?: string;
  endYear: string;
  endYearAr?: string;
  coursework: string[];
  courseworkAr?: string[];
  graduationProject?: GraduationProject;
};

export type Article = {
  _id: string;
  title: string;
  titleAr?: string;
  slug: string;
  excerpt: string;
  excerptAr?: string;
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
