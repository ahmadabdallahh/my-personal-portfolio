# Portfolio — Next.js + Sanity CMS

Rebuild of the reference design with a real content-management layer, so every
section (Skills, Experience, Projects, Education, Articles, Contact) can be
edited from a CMS without touching code.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for scroll/entry animations
- **Sanity.io** (free tier) as the headless CMS, embedded at `/studio`
- Built-in **SEO**: `generateMetadata`, `sitemap.ts`, `robots.ts`, `manifest.ts`, JSON-LD Person schema

## 1. Install

```bash
npm install
```

## 2. Run without a CMS (placeholder content)

```bash
npm run dev
```

The site works immediately with realistic placeholder content
(`src/lib/placeholder-data.ts`) so you can see the layout before connecting
any CMS.

## 3. Connect Sanity (recommended, free)

1. Create a project at https://www.sanity.io/manage (2 min, no credit card).
2. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. Run `npm run dev` and open **http://localhost:3000/studio**.
4. You'll see 7 content types in the Studio sidebar:
   - **Profile (Hero)** — name, title, bio, avatar, CV file, social links
   - **Skill Category** — one document per card (Core Languages, Frameworks…)
   - **Experience** — one document per company; each can hold multiple
     "roles" (for promotions within the same company), each role has its
     own bullet list
   - **Project** — title, cover image, tags, GitHub/live links
   - **Education** — institution, coursework, graduation project
   - **Article** — title, excerpt, tags, and a link to where it's published
   - **Site Settings** — SEO title/description, contact details

   Fill these in and the live site updates automatically (the site always
   prefers Sanity data over placeholders once a document exists).

## 4. Deploy

Works on Vercel out of the box:

```bash
vercel
```

Set the same environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`,
`NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SITE_URL`) in the Vercel project
settings. `/studio` deploys alongside the site — you can also deploy Sanity
Studio separately with `npx sanity deploy` if you'd rather manage content
from `yourproject.sanity.studio`.

## Project images

Project cover images and the avatar are uploaded directly inside Sanity
Studio (drag-and-drop, with hotspot cropping) — no code changes needed.

## Folder map

```
sanity/schemaTypes/   → CMS content models
src/sanity/           → Sanity client, image URL builder, GROQ queries
src/lib/               → shared types, data-fetching layer, placeholder data
src/components/        → one file per page section
src/app/                → routes, layout/SEO, sitemap/robots/manifest
```
