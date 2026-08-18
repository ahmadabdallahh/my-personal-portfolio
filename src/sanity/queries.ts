import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  name,
  title,
  location,
  status,
  bio,
  avatar,
  cvFile{asset->{url}},
  socials[]{platform, url}
}`;

export const skillCategoriesQuery = groq`*[_type == "skillCategory"] | order(order asc){
  _id,
  title,
  icon,
  items
}`;

export const experienceQuery = groq`*[_type == "experience"] | order(order asc){
  _id,
  company,
  companyLogo,
  employmentType,
  startDate,
  endDate,
  isCurrent,
  location,
  roles[]{
    title,
    startDate,
    endDate,
    bullets
  }
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id,
  title,
  slug,
  summary,
  cover,
  tags,
  githubUrl,
  liveUrl,
  featured
}`;

export const educationQuery = groq`*[_type == "education"][0]{
  institution,
  degree,
  gpaLabel,
  gpaValue,
  startYear,
  endYear,
  coursework,
  graduationProject{
    title,
    status,
    description,
    highlights,
    note
  }
}`;

export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  slug,
  excerpt,
  tags,
  publishedAt,
  externalUrl
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  ogImage,
  email,
  phone,
  linkedin,
  github
}`;
