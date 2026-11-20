"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const NAV_ITEMS = [
    { key: "navAbout", href: "#about" },
    { key: "navSkills", href: "#skills" },
    { key: "navExperience", href: "#experience" },
    { key: "navProjects", href: "#projects" },
    { key: "navEducation", href: "#education" },
    { key: "navContact", href: "#contact" },
] as const;

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { t, lang, toggleLang } = useI18n();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-surface/90 backdrop-blur-md border-b border-surface-border shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="section-container flex items-center justify-between h-20 gap-4">
                <div className="flex items-center gap-2">
                    <button
                        className="md:hidden p-2 -ms-2"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? t("closeMenu") : t("openMenu")}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>

                    <a href="#about" className="font-bold tracking-tight text-ink text-sm whitespace-nowrap">
                        {t("brand")}
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-ink-soft hover:text-ink px-4 py-2 rounded-full border border-transparent hover:border-surface-border transition-all"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleLang}
                        aria-label={t("switchLanguage")}
                        title={t("switchLanguage")}
                        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-surface-border text-xs font-semibold text-ink-soft hover:text-ink hover:border-ink transition-colors"
                    >
                        <Languages size={14} />
                        {lang === "en" ? "AR" : "EN"}
                    </button>

                    <button
                        onClick={toggleTheme}
                        aria-label={t("toggleTheme")}
                        title={t("toggleTheme")}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-surface-border text-ink-soft hover:text-ink hover:border-ink transition-colors"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </div>
            </div>

            {open && (
                <nav className="md:hidden section-container pb-4 flex flex-col gap-3">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-ink-soft py-2"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
