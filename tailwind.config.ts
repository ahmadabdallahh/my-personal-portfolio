import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#EA6A2E", // primary orange
          light: "#FDEFE5",
          dark: "#C9531B",
        },
        ink: {
          DEFAULT: "#16181D",
          soft: "#4B5563",
          faint: "#8A8F98",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F7F9",
          card: "#FBFAF8",
          border: "#ECECEF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
