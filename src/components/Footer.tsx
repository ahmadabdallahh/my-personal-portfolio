"use client";

import type { Profile } from "@/lib/types";
import { useI18n } from "@/lib/i18n";

const NAV_ITEMS = [
    { key: "navAbout", href: "#about" },
    { key: "navSkills", href: "#skills" },
    { key: "navProjects", href: "#projects" },
    { key: "navContact", href: "#contact" },
] as const;

export default function Footer({ profile }: { profile: Profile }) {
    const { t } = useI18n();

    return (
        <footer className="border-t border-surface-border">
            <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-ink-faint">
                    © {new Date().getFullYear()} {profile.name}. {t("rights")}
                </p>
                <nav className="flex items-center gap-6">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-ink-faint hover:text-accent transition-colors"
                        >
                            {t(item.key)}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
