@AGENTS.md

# Claude Instructions

## Project

Personal portfolio — single-page app (Next.js 16, React 19, Tailwind CSS 4, Sanity CMS 6).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — lint with ESLint (run after changes)

## Conventions

- All source code lives under `src/` — never modify root `app/` (dead scaffold).
- Server components by default; add `"use client"` only when needed (animations, interactivity).
- Data fetching happens in `src/lib/data.ts` — always import from there, not directly from Sanity.
- Components are in `src/components/`, one per file, PascalCase.
- Types are defined in `src/lib/types.ts` — extend here when adding new content models.
- Sanity schemas live in `sanity/schemaTypes/` — keep in sync with TypeScript types.
- Tailwind classes only — no inline styles, no CSS modules.
- Use Framer Motion for animations, Lucide React for icons.

## Sanity CMS

The app fetches content from Sanity and falls back to placeholder data in `src/lib/placeholder-data.ts` when the CMS is unavailable. When adding new content types:
1. Add TypeScript type to `src/lib/types.ts`
2. Add Sanity schema to `sanity/schemaTypes/`
3. Add GROQ query to `src/sanity/queries.ts`
4. Add fetch function to `src/lib/data.ts` with placeholder fallback
5. Add placeholder data to `src/lib/placeholder-data.ts`

## Known Issues

- Root `app/` directory conflicts with `src/app/` — can be safely deleted.
- `tailwind.config.ts` may need migration to Tailwind CSS v4's `@theme` CSS-based config.
