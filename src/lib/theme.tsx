"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "light" | "dark";

type ThemeValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("light");
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const stored = window.localStorage.getItem("theme");
        const initial: Theme =
            stored === "light" || stored === "dark"
                ? stored
                : root.classList.contains("dark")
                  ? "dark"
                  : "light";
        setThemeState(initial);
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme, ready]);

    const value = useMemo<ThemeValue>(
        () => ({
            theme,
            setTheme: setThemeState,
            toggleTheme: () => setThemeState((v) => (v === "light" ? "dark" : "light")),
        }),
        [theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
}
