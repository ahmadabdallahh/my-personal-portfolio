"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "ar";

const dict = {
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
        code: "Code",
        present: "Present",
        copy: "Copy",
        copied: "Copied",
        contactLead:
            "Reach out for details on any project, or to stay updated on what I\u2019m building next.",
        rights: "All rights reserved.",
        toggleTheme: "Toggle theme",
        switchLanguage: "Switch language",
        languageName: "العربية",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        brand: "Portfolio",
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
    },
} as const;

export type TranslationKey = keyof (typeof dict)["en"];

type I18nValue = {
    lang: Lang;
    dir: "ltr" | "rtl";
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem("lang");
        if (stored === "ar" || stored === "en") setLangState(stored);
        setMounted(true);
    }, []);

    const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        root.lang = lang;
        root.dir = dir;
        window.localStorage.setItem("lang", lang);
    }, [lang, dir, mounted]);

    const value = useMemo<I18nValue>(
        () => ({
            lang,
            dir,
            setLang: setLangState,
            toggleLang: () => setLangState((v) => (v === "en" ? "ar" : "en")),
            t: (key) => dict[lang][key],
        }),
        [lang, dir],
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
    return ctx;
}

/**
 * Returns a picker for localized content fields:
 * `pick(enValue, arValue)` — falls back to English when no translation exists.
 */
export function useLocalized() {
    const { lang } = useI18n();
    return useMemo(
        () =>
            (en?: string, ar?: string) =>
                lang === "ar" ? ar || en || "" : en || ar || "",
        [lang],
    );
}
