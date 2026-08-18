# Design Tokens - Figma Design Extract

## Layout

### Page Structure
- **Page Width:** 1254px (full), 1168px (content)
- **Header Height:** 82.75px
- **Footer Height:** 25.5px
- **Section Divider:** 1px solid #e4e4e7

### Spacing
- **Section Gap:** Vertical dividers between sections
- **Card Gap:** Grid layout with consistent spacing
- **Item Spacing:** Used in flex layouts

## Border Radius

| Element | Radius | Usage |
|---------|--------|-------|
| **Pill** | 9999px | Buttons, badges, nav items, social icons |
| **Card** | 17px | Project cards, article cards, experience cards |
| **Small Card** | 12.75px | Education project cards |
| **Tag** | 6.38px | Tech stack tags, skill badges |
| **Inner Card** | 8.5px | Education info cards |

## Borders

| Element | Style | Color | Width |
|---------|-------|-------|-------|
| **Card Border** | Solid | #e4e4e7 | 1px |
| **Divider** | Solid | #e4e4e7 | 1px |
| **Button Border** | Solid | #e4e4e7 | 1px |
| **Tag Border** | Solid | #e4e4e7 | 1px |
| **Nav Border** | Solid | #e4e4e7 | 1px |
| **Accent Border** | Solid | #b45309 | 2px |

## Shadows

### Card Shadow
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

### Overlay Shadow (Experience Timeline)
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

### Scroll to Top Button
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
```

## Component Specs

### Header (Sticky)
- **Background:** #fafafa
- **Height:** 82.75px
- **Border Bottom:** 1px solid #e4e4e7
- **Position:** Sticky top

### Navigation Pills
- **Background:** Transparent
- **Border:** 1px solid #e4e4e7
- **Border Radius:** 9999px
- **Padding:** 8px 16px
- **Active State:** Accent color underline

### Toggle Buttons (Language, Theme, Dark Mode)
- **Size:** 42.5px × 42.5px
- **Background:** #ffffff
- **Border:** 1px solid #e4e4e7
- **Border Radius:** 9999px
- **Icon Color:** #5f5f68

### Primary Button (View Projects)
- **Background:** #b45309
- **Text Color:** #ffffff
- **Border Radius:** 9999px
- **Padding:** 12px 24px
- **Font:** Inter 600 14.9px

### Secondary Button (Preview CV)
- **Background:** transparent
- **Border:** 1px solid #e4e4e7
- **Text Color:** #09090b
- **Border Radius:** 9999px

### Social Icons
- **Size:** 25.5px × 25.5px
- **Color:** #5f5f68
- **Hover:** #b45309

### Skill Cards
- **Width:** 375px
- **Height:** 220-288px
- **Border Radius:** 17px
- **Border:** 1px solid #e4e4e7
- **Background:** Gradient (#f8f8f8 → #fafafa)
- **Icon:** 15px × 15px, accent color
- **Divider:** 34px wide, accent color

### Experience Cards
- **Width:** 1134px
- **Border Radius:** 17px
- **Border:** 1px solid #e4e4e7
- **Timeline Dot:** 23px × 23px, accent background

### Project Cards
- **Width:** 372px
- **Height:** 531-565px
- **Border Radius:** 17px
- **Border:** 1px solid #e4e4e7
- **Image Height:** 272px
- **Tag Border Radius:** 6.38px

### Article Cards
- **Width:** 1168px (full width)
- **Height:** 233.63px
- **Border Radius:** 17px
- **Background:** #ffffff
- **Border:** 1px solid #e4e4e7

### Contact Cards
- **Width:** 558.5px
- **Height:** 82.75px
- **Border Radius:** 17px
- **Border:** 1px solid #e4e4e7
- **Icon Size:** 19px × 19px

## Animations

### Scroll to Top
- **Position:** Fixed bottom-right
- **Size:** 42.5px × 42.5px
- **Border Radius:** 9999px
- **Shadow:** Elevated

### Tech Stack Marquee
- **Height:** 30px
- **Speed:** Continuous scroll
- **Direction:** Left to right

## Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Desktop | >1280px | 3 columns (projects), 3 columns (skills) |
| Tablet | 768-1280px | 2 columns |
| Mobile | <768px | 1 column |

## Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base | 0 | Default content |
| Sticky | 100 | Header |
| Scroll Top | 1000 | Scroll to top button |
| Overlay | 1000 | Modals, dropdowns |
