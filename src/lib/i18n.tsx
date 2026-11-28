"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
    getDirection,
    translate,
    type Direction,
    type Lang,
    type TranslationKey,
} from "./i18n-dictionaries";

export type { Lang, TranslationKey } from "./i18n-dictionaries";

type I18nValue = {
    lang: Lang;
    dir: Direction;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: Lang;
}) {
    const router = useRouter();
    const pathname = usePathname();

    const setLang = useCallback(
        (next: Lang) => {
            if (next === lang) return;
            const segments = pathname.split("/");
            segments[1] = next;
            router.push(segments.join("/") || `/${next}`);
        },
        [lang, pathname, router],
    );

    const value = useMemo<I18nValue>(
        () => ({
            lang,
            dir: getDirection(lang),
            setLang,
            toggleLang: () => setLang(lang === "en" ? "ar" : "en"),
            t: (key) => translate(lang, key),
        }),
        [lang, setLang],
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
