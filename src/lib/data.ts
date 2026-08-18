import type {
    Article,
    Education,
    Experience,
    Profile,
    Project,
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

export function getProfile(): Profile {
    return placeholderProfile;
}

export function getSkillCategories(): SkillCategory[] {
    return placeholderSkillCategories;
}

export function getExperience(): Experience[] {
    return placeholderExperience;
}

export function getProjects(): Project[] {
    return placeholderProjects;
}

export function getEducation(): Education {
    return placeholderEducation;
}

export function getArticles(): Article[] {
    return placeholderArticles;
}
