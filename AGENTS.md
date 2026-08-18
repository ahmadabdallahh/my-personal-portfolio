<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Overview

Personal portfolio website — a single-page app with sections for hero, skills, experience, projects, education, articles, and contact.

## Tech Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.3.1 | App Router, Server Components |
| React | 19.2.8 | React 19 — new APIs, `use()` hook, Server Actions |
| TypeScript | 7.0.2 | |
| Tailwind CSS | 4.3.3 | v4 — CSS-based config (`@theme`), no runtime config |
| Sanity CMS | 6.9.2 | Content backend, `next-sanity` v13.3.3 |
| Framer Motion | 13.1.0 | Animations |
| Lucide React | 1.31.0 | Icons |

## Project Structure

```
├── app/                    # Root Next.js scaffold (default template — may be stale)
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── app/                # Actual portfolio app
│   │   ├── layout.tsx      # Root layout (Manrope + Inter fonts)
│   │   ├── page.tsx        # Home page (server component, fetches from Sanity)
│   │   ├── globals.css
│   │   ├── manifest.ts
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── studio/         # Sanity Studio route
│   ├── components/         # All UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Articles.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SectionHeading.tsx
│   ├── lib/
│   │   ├── data.ts         # Sanity data fetching (with placeholder fallbacks)
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── placeholder-data.ts
│   └── sanity/
│       ├── client.ts       # Sanity client config
│       ├── env.ts          # Environment variables
│       ├── image.ts        # Image URL builder
│       └── queries.ts      # GROQ queries
├── sanity/
│   └── schemaTypes/        # Sanity schema definitions
└── sanity.config.ts        # Sanity Studio config (mounted at /studio)
```

## Key Patterns

- **Data fetching**: Server components call `src/lib/data.ts` functions which query Sanity with fallback to placeholder data.
- **Styling**: Tailwind CSS 4 + custom theme tokens defined in `tailwind.config.ts` (accent orange `#EA6A2E`, ink/surface color system).
- **Fonts**: Manrope (display) + Inter (body) via `next/font/google`.
- **SEO**: Dynamic metadata in `src/app/layout.tsx` via `generateMetadata()`, JSON-LD structured data in `page.tsx`.
- **Sanity Studio**: Mounted at `/studio` route via `src/app/studio/`.

## Important Notes

- **Two `app/` directories** exist: root `app/` is the default Next.js scaffold; `src/app/` is the real app. Next.js resolves `src/app/` first when it exists, so `app/` is dead code.
- **Tailwind CSS 4** uses a new configuration approach. The existing `tailwind.config.ts` may need migration to CSS-based `@theme` configuration.
- **No lint/typecheck scripts** beyond `next lint`. Run `npm run lint` to verify changes.
- **Sanity env vars** (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`) are required for CMS — the app falls back to placeholder data if not set.
