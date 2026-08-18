"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Education", href: "#education" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
            <div className="section-container flex items-center justify-between h-20">
                <nav className="hidden md:flex items-center gap-2">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-ink-soft hover:text-ink px-4 py-2 rounded-full border border-transparent hover:border-surface-border transition-all"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="md:hidden p-2 -ml-2"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>

                <a
                    href="#about"
                    className="font-bold tracking-tight text-ink text-sm"
                >
                    Portfolio
                </a>
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
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
