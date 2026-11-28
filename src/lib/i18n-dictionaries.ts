export const dictionaries = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navExperience: "Experience",
        navProjects: "Projects",
        navEducation: "Education",
        navContact: "Contact",
        viewProjects: "View Projects",
        previewCv: "Preview CV",
        sectionSkills: "Skills",
        sectionExperience: "Experience",
        sectionProjects: "Projects",
        sectionEducation: "Education",
        sectionContact: "Get in Touch",
        viewDetails: "View details",
        hideDetails: "Hide details",
        liveDemo: "Live demo",
        viewCaseStudy: "Case study",
        code: "Code",
        present: "Present",
        copy: "Copy",
        copied: "Copied",
        contactLead:
            "Reach out for details on any project, or to stay updated on what I’m building next.",
        rights: "All rights reserved.",
        toggleTheme: "Toggle theme",
        switchLanguage: "Switch language",
        languageName: "العربية",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        brand: "Portfolio",
        caseStudy: "Case study",
        backToProjects: "Back to projects",
        problem: "The problem",
        solution: "The solution",
        technicalDecision: "Technical decision",
        techStack: "Tech stack",
        projectNotFound: "Project not found",
        exploreCode: "Explore the code",
        exploreLiveDemo: "Open live demo",
        allProjects: "All projects",
    },
    ar: {
        navAbout: "نبذة",
        navSkills: "المهارات",
        navExperience: "الخبرات",
        navProjects: "المشاريع",
        navEducation: "التعليم",
        navContact: "التواصل",
        viewProjects: "استعرض المشاريع",
        previewCv: "معاينة السيرة الذاتية",
        sectionSkills: "المهارات",
        sectionExperience: "الخبرات",
        sectionProjects: "المشاريع",
        sectionEducation: "التعليم",
        sectionContact: "تواصل معي",
        viewDetails: "عرض التفاصيل",
        hideDetails: "إخفاء التفاصيل",
        liveDemo: "عرض مباشر",
        viewCaseStudy: "دراسة حالة",
        code: "الكود",
        present: "حتى الآن",
        copy: "نسخ",
        copied: "تم النسخ",
        contactLead:
            "تواصل معي لمعرفة تفاصيل أي مشروع، أو لمتابعة ما أعمل عليه حاليًا.",
        rights: "جميع الحقوق محفوظة.",
        toggleTheme: "تبديل المظهر",
        switchLanguage: "تغيير اللغة",
        languageName: "English",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة",
        brand: "الملف الشخصي",
        caseStudy: "دراسة حالة",
        backToProjects: "العودة إلى المشاريع",
        problem: "المشكلة",
        solution: "الحل",
        technicalDecision: "القرار التقني",
        techStack: "التقنيات المستخدمة",
        projectNotFound: "المشروع غير موجود",
        exploreCode: "استعرض الكود",
        exploreLiveDemo: "افتح العرض المباشر",
        allProjects: "كل المشاريع",
    },
} as const;

export type Lang = keyof typeof dictionaries;
export type TranslationKey = keyof (typeof dictionaries)["en"];
export type Direction = "ltr" | "rtl";

export const locales = ["en", "ar"] as const satisfies readonly Lang[];

export function isLang(value: string): value is Lang {
    return value === "en" || value === "ar";
}

export function getDirection(lang: Lang): Direction {
    return lang === "ar" ? "rtl" : "ltr";
}

export function translate(lang: Lang, key: TranslationKey): string {
    return dictionaries[lang][key];
}
