import { sanityFetch } from "@/sanity/client";
import {
  articlesQuery,
  educationQuery,
  experienceQuery,
  profileQuery,
  projectsQuery,
  siteSettingsQuery,
  skillCategoriesQuery,
} from "@/sanity/queries";
import type {
  Article,
  Education,
  Experience,
  Profile,
  Project,
  SiteSettings,
  SkillCategory,
} from "./types";
import {
  placeholderArticles,
  placeholderEducation,
  placeholderExperience,
  placeholderProfile,
  placeholderProjects,
  placeholderSkillCategories,
} from "./placeholder-data";

export async function getProfile(): Promise<Profile> {
  const data = await sanityFetch<Profile>(profileQuery);
  return data ?? placeholderProfile;
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const data = await sanityFetch<SkillCategory[]>(skillCategoriesQuery);
  return data && data.length ? data : placeholderSkillCategories;
}

export async function getExperience(): Promise<Experience[]> {
  const data = await sanityFetch<Experience[]>(experienceQuery);
  return data && data.length ? data : placeholderExperience;
}

export async function getProjects(): Promise<Project[]> {
  const data = await sanityFetch<Project[]>(projectsQuery);
  return data && data.length ? data : placeholderProjects;
}

export async function getEducation(): Promise<Education> {
  const data = await sanityFetch<Education>(educationQuery);
  return data ?? placeholderEducation;
}

export async function getArticles(): Promise<Article[]> {
  const data = await sanityFetch<Article[]>(articlesQuery);
  return data && data.length ? data : placeholderArticles;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityFetch<SiteSettings>(siteSettingsQuery);
}
