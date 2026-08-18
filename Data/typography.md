# Typography System - Figma Design Extract

## Font Family

**Primary Font:** Inter

## Type Scale

### Headings

| Level | Font | Weight | Size | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| **H1** | Inter | 700 (Bold) | 63.8px | 63.75px | Hero name |
| **H2** | Inter | 700 (Bold) | 51px | 51px | Section titles (Skills, Experience, etc.) |
| **H2 Alt** | Inter | 700 (Bold) | 29.8px | 34px | Article titles |
| **H3** | Inter | 700 (Bold) | 25.5px | 34px | Project titles, sub-sections |
| **H3 Alt** | Inter | 700 (Bold) | 21.3px | 29.75px | Experience job titles |
| **H4** | Inter | 600 (Semi Bold) | 21.3px | 29.75px | Graduation project title |

### Body Text

| Style | Font | Weight | Size | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| **Subtitle** | Inter | 500 (Medium) | 25.5px | 34px | Hero subtitle (Front-End Developer) |
| **Body Large** | Inter | 400 (Regular) | 21.3px | 38.25px | Hero description paragraph |
| **Body** | Inter | 400 (Regular) | 17px | 25.5px | Skill items, list items |
| **Body Small** | Inter | 400 (Regular) | 14.9px | 21.25px | Dates, descriptions |
| **Caption** | Inter | 400 (Regular) | 12.8px | 17px | Skill category labels, tags |

### Labels & Badges

| Style | Font | Weight | Size | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| **Button Text** | Inter | 600 (Semi Bold) | 14.9px | 21.25px | CTA buttons |
| **Badge** | Inter | 500 (Medium) | 12.8px | 17px | Skill count badges, tech tags |
| **Tag** | Inter | 600 (Semi Bold) | 11px | 17.6px | Article category tags |
| **Nav Link** | Inter | 500 (Medium) | 14px | 21px | Navigation links |
| **Footer** | Inter | 400 (Regular) | 14px | 21.25px | Footer links, copyright |

## Text Colors

| Element | Color | Hex |
|---------|-------|-----|
| Headings | Black | `#09090b` |
| Body Text | Dark Gray | `#444444` |
| Muted Text | Gray | `#5f5f68` |
| Links (hover) | Accent | `#b45309` |
| White Text | White | `#ffffff` |

## Letter Spacing

- **Headings:** 0px (default)
- **Body Text:** 0px (default)
- **Tags/Badges:** Slight positive tracking

## Font Loading Strategy

```css
/* Google Fonts - Inter */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## Responsive Adjustments

| Breakpoint | H1 Size | H2 Size | Body Size |
|------------|---------|---------|-----------|
| Desktop (>1280px) | 63.8px | 51px | 17px |
| Tablet (768-1280px) | 48px | 38px | 16px |
| Mobile (<768px) | 32px | 28px | 14px |
