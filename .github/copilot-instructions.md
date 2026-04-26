# Portfolio M.L — Copilot Instructions

## Project

Static portfolio site for M.L, UI/UX Designer. Deployed on GitHub Pages via GitHub Actions. Built with Astro, Tailwind CSS, and GSAP. Dark mode by default.

## Stack

- Astro 4.x — `output: 'static'`
- Tailwind CSS 3.x — utility-first, no component libraries
- GSAP 3.x + ScrollTrigger — all animations
- Astro View Transitions — page transition (curtain effect)
- Formspree — contact form, no backend
- Astro Content Collections — projects in `src/content/projects/` (Markdown)
- Google Fonts self-hosted in `public/fonts/` — Space Grotesk + Space Mono

## File structure

```
.github/
  copilot-instructions.md
  workflows/
    deploy.yml
src/
  content/
    projects/
      config.ts
      *.md
  pages/
    fr/
      index.astro
      projets/
        index.astro
        [slug].astro
      contact.astro
      mentions-legales.astro
    en/
      index.astro
      projects/
        index.astro
        [slug].astro
      contact.astro
  components/
    Nav.astro
    NavOverlay.astro
    ProjectCard.astro
    ProjectTemplate.astro
    CursorFollower.astro
    CurtainTransition.astro
    Footer.astro
    SwitchAtmosphere.astro
    ImageSlices.astro
  layouts/
    BaseLayout.astro
  i18n/
    fr.ts
    en.ts
  styles/
    global.css
    fonts.css
public/
  fonts/
    SpaceGrotesk-Light.woff2
    SpaceGrotesk-Regular.woff2
    SpaceGrotesk-Medium.woff2
    SpaceGrotesk-Bold.woff2
    SpaceMono-Regular.woff2
    SpaceMono-Bold.woff2
  cv.pdf
```

---

## Design system

### Default theme

Dark mode is the default. `<html>` carries `data-theme="dark"` on load. The SwitchAtmosphere button toggles to `data-theme="light"`.

### CSS custom properties

Defined on `[data-theme="dark"]` (default) and `[data-theme="light"]` in `global.css`.

```css
[data-theme="dark"] {
  --color-ink: #ffffff;
  --color-paper: #0a0a0a;
  --color-paper-warm: #111111;
  --color-cream: #1a1a1a;
  --color-muted: #666666;
  --color-border: rgba(255, 255, 255, 0.1);
}

[data-theme="light"] {
  --color-ink: #0a0a0a;
  --color-paper: #ffffff;
  --color-paper-warm: #f2f2f2;
  --color-cream: #e8e4dc;
  --color-muted: #888888;
  --color-border: rgba(0, 0, 0, 0.1);
}

:root {
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'Space Mono', monospace;
  --transition-base: 0.25s ease;
  --transition-reveal: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-theme: 0.4s ease;
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 120px;
  --spacing-2xl: 200px;
  --grid-gutter: 24px;
}
```

### Typography scale

All `font-size` values use `clamp()` for fluid responsive scaling. No `border-radius` on display text containers.

```css
/* Display — hero title */
.text-display {
  font-family: var(--font-display);
  font-size: clamp(56px, 12vw, 180px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

/* Heading — section titles */
.text-heading {
  font-family: var(--font-display);
  font-size: clamp(32px, 5vw, 72px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.015em;
  color: var(--color-ink);
}

/* Subheading */
.text-subheading {
  font-family: var(--font-display);
  font-size: clamp(20px, 2.5vw, 36px);
  font-weight: 500;
  line-height: 1.2;
  color: var(--color-ink);
}

/* Body */
.text-body {
  font-family: var(--font-display);
  font-size: clamp(15px, 1.2vw, 18px);
  font-weight: 300;
  line-height: 1.75;
  color: var(--color-muted);
}

/* Label / meta — Space Mono */
.text-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
}
```

### Grid

12-column grid. Columns 1 and 12 are always empty (act as margins). Visible column lines at `var(--color-border)` 0.5px.

```css
.grid-main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--grid-gutter);
  padding: 0 var(--spacing-md);
}

/* Content spans columns 2–11 */
.col-content { grid-column: 2 / 12; }
.col-full    { grid-column: 1 / -1; }
.col-left    { grid-column: 2 / 7; }
.col-right   { grid-column: 7 / 12; }
```

Breakpoints:

```
mobile:  < 768px  → 4-col grid, col-content = 1/-1, padding 16px
tablet:  768–1024px → 8-col grid, col-content = 1/-1, padding 24px
desktop: > 1024px → 12-col grid as above
```

### Border radius

- Cards, buttons, inputs, images: `border-radius: 0` — strictly square
- Tags and category pills only: `border-radius: 2px`
- No exceptions

---

## Components

### BaseLayout.astro

- Sets `data-theme="dark"` on `<html>` by default
- Includes `<CursorFollower />` (desktop only, hidden on touch)
- Includes `<CurtainTransition />` for page transitions
- Includes `<SwitchAtmosphere />` fixed button
- `<html lang>` matches current locale (`fr` or `en`)
- Self-hosted fonts loaded in `<head>` via `fonts.css`
- No Google Fonts CDN calls

### Nav.astro

- Fixed top, full width, `z-index: 100`
- Background: transparent, transitions to `var(--color-paper)` on scroll (after 80px)
- Left: logotype `M.L` — Space Grotesk Bold 18px
- Right: `MENU` label — Space Mono 11px uppercase, letter-spacing 0.12em
- On click: mounts `<NavOverlay />`

### NavOverlay.astro

- Full viewport overlay, `background: var(--color-paper)`
- Animation in: `scaleY` from 0 to 1, `transform-origin: top`, 0.5s `cubic-bezier(0.16, 1, 0.3, 1)`
- Links: Projets / Projects · About · Contact — Space Grotesk Bold, `clamp(48px, 8vw, 120px)`
- Locale toggle FR/EN — Space Mono 12px, bottom left
- Close button top right — `×` — Space Mono 24px
- Links animate in with stagger 0.08s after overlay opens

### CurtainTransition.astro

- Full-screen `div` with `background: var(--color-ink)`, `position: fixed`, `z-index: 9999`
- On navigation start: `scaleY` 0→1 from bottom, 0.4s ease-in
- On navigation end: `scaleY` 1→0 from top, 0.4s ease-out, then hidden
- Uses Astro `astro:before-preparation` and `astro:page-load` events

### SwitchAtmosphere.astro

- Fixed, bottom-right, `z-index: 200`
- Label: `SWITCH ATMOSPHERE` — Space Mono 10px uppercase
- On click: toggles `data-theme` on `<html>` between `dark` and `light`
- Theme persisted in `localStorage` key `portfolio-theme`
- On load: reads `localStorage`, falls back to `dark`

### CursorFollower.astro

- Single `div`, `position: fixed`, `pointer-events: none`, `z-index: 9998`
- Default: `width: 12px`, `height: 12px`, `border-radius: 50%`, `background: var(--color-ink)`
- Follows mouse with GSAP `quickTo`, lag `0.08s`
- On hover over `a, button, [data-cursor="expand"]`: scales to `width: 28px; height: 28px`
- Hidden on touch devices: `@media (hover: none) { display: none }`

### ProjectCard.astro

Props: `title`, `slug`, `year`, `category`, `cover`, `index`, `locale`

```
┌─────────────────────────────┐
│  [grayscale image, 4:3]     │  ← filter: grayscale(1) contrast(1.05)
│                             │    hover: filter removed (0.4s ease)
├─────────────────────────────┤
│  [01]          BRANDING     │  ← Space Mono 11px uppercase, --color-muted
│  Project Title              │  ← Space Grotesk 500 20px, --color-ink
│  2024                       │  ← Space Mono 11px, --color-muted
└─────────────────────────────┘
```

- `border-radius: 0`, `border: 0.5px solid var(--color-border)`
- Hover: `border-color: var(--color-ink)` transition 0.25s
- Image wrapper: `overflow: hidden` — image `scale(1)` → `scale(1.04)` on hover, 0.5s ease

### ImageSlices.astro

Props: `src`, `alt`, `slices` (default 10)

- Renders `n` divs side by side, each with `background-image` positioned to show its slice
- On scroll (GSAP ScrollTrigger scrub): each slice offset by a staggered `translateY` amount
- Odd slices move up, even slices move down — amplitude ±40px
- `prefers-reduced-motion`: static, no movement

### Footer.astro

- White/dark background matching theme (`var(--color-paper)`)
- Single row: copyright left `© 2024 M.L` — Space Mono 11px — `var(--color-muted)`
- Right: `LinkedIn · GitHub · Mentions légales` — Space Mono 11px — `var(--color-muted)`
- `border-top: 0.5px solid var(--color-border)`
- Padding: `var(--spacing-md)` vertical

---

## Pages

### Landing page (`/fr/` and `/en/`)

**Hero section** — full viewport height

- Background: `var(--color-paper)` (no image — user has no photo)
- Title: name or tagline in `.text-display`, position bottom-left, padding `var(--spacing-md)`
- Subtitle: `UI/UX Designer` in `.text-label`, above the title, `var(--color-muted)`
- Bottom right: scroll indicator — `SCROLL` Space Mono 10px + animated arrow down
- Grid lines visible behind content

**Featured projects** — 3 projects with `featured: true`, displayed as `col-content` with alternating layout (large left / small right, then reversed)

**About strip** — single full-width section: one line of bio text centered, `.text-subheading`

### Projects page (`/fr/projets/` and `/en/projects/`)

- `<h1>` in `.text-heading`: `PROJETS` / `PROJECTS`
- Project count label: `[ 15 projets ]` — `.text-label`
- Category filter bar: All · Branding · UI/UX · Motion · Print · Illustration — Space Mono 11px pills, `border-radius: 2px`
- Grid: alternating layout — row 1: 1 large (col 2–8) + 1 small (col 8–12), row 2: 1 small (col 2–6) + 1 large (col 6–12)
- Mobile: 1 column, full width

### Project page (`/fr/projets/[slug]` and `/en/projects/[slug]`)

```
[CATEGORY · YEAR]           ← .text-label
Project Title               ← .text-heading col-content
                            ← spacing-xl
[cover image full width]    ← col-full, grayscale, 16:9
                            ← spacing-xl
[col-left]                  [col-right]
Description text            Role / Tools / Year
body weight 300             .text-label + value pairs
                            ← spacing-xl
[additional images]         ← alternating col-left / col-right, 4:3
                            ← spacing-xl
← PREV PROJECT              NEXT PROJECT →   ← .text-label, border-top
```

- Index label top of page: `[ 01 / 15 ]` — Space Mono, `var(--color-muted)`
- No sidebar, no sticky elements on project page

### Contact page (`/fr/contact/` and `/en/contact/`)

- Title: `CONTACT` — `.text-heading`
- Email as large clickable link — `.text-subheading`, `color: var(--color-ink)`
- Formspree form: name + email + message — inputs `border-radius: 0`, `border: 0.5px solid var(--color-border)`, focus `border-color: var(--color-ink)`
- Social links: LinkedIn · GitHub — `.text-label`
- CV download button — Space Mono 11px, `border: 0.5px solid var(--color-ink)`, no fill, `border-radius: 0`

---

## Animations

All GSAP code is wrapped in:

```js
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // GSAP code
}
```

### Scroll reveal

Applied to: section titles, project cards, body paragraphs.

```js
gsap.from(el, {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  stagger: 0.12,
  scrollTrigger: {
    trigger: el,
    start: 'top 85%',
    once: true
  }
})
```

### Display title reveal

Hero title animates on page load (not scroll):

```js
gsap.from('.text-display', {
  y: '100%',
  opacity: 0,
  duration: 1.0,
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  delay: 0.2
})
```

### Image slice parallax

See `ImageSlices.astro`. Scrub-based, amplitude ±40px per slice with stagger.

---

## Accessibility

- `lang` attribute on `<html>` matches current locale
- All `<img>` have `alt` — empty `alt=""` only for decorative images
- All icon-only links and buttons have `aria-label`
- Focus ring: `outline: 2px solid var(--color-ink); outline-offset: 4px` — never `outline: none`
- `prefers-reduced-motion` respected for all GSAP animations
- Custom cursor disabled on touch: `@media (hover: none)`
- Color contrast ≥ 4.5:1 — verified for `var(--color-ink)` on `var(--color-paper)` in both themes
- No information conveyed by color alone (category tags use text labels, not color only)
- Skip-to-content link as first focusable element in `BaseLayout.astro`

---

## GDPR

- No analytics, no tracking scripts
- No external CDN calls in production (fonts self-hosted)
- Formspree processes form data — no cookies set by the site itself
- `/fr/mentions-legales` page required — link in Footer
- No cookie banner needed (no non-essential cookies)

---

## i18n

All UI strings are in `src/i18n/fr.ts` and `src/i18n/en.ts`. No hardcoded strings in `.astro` files.

```ts
// src/i18n/fr.ts
export const t = {
  nav: { projects: 'Projets', contact: 'Contact' },
  hero: { title: 'M.L', role: 'UI/UX Designer', scroll: 'Défiler' },
  projects: { title: 'Projets', all: 'Tous', count: (n: number) => `[ ${n} projets ]` },
  contact: { title: 'Contact', cv: 'Télécharger le CV', send: 'Envoyer' },
  footer: { copyright: '© 2024 M.L', legal: 'Mentions légales' },
  transition: { label: 'Switch Atmosphere' }
}
```

Locale is determined by URL prefix `/fr/` or `/en/`. No automatic browser detection — user switches manually via nav toggle.

---

## Content schema

```ts
// src/content/projects/config.ts
import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    category: z.enum(['Branding', 'UI/UX', 'Motion', 'Print', 'Illustration']),
    tags: z.array(z.string()),
    cover: z.string(),
    images: z.array(z.string()).optional(),
    description_fr: z.string(),
    description_en: z.string(),
    role_fr: z.string().optional(),
    role_en: z.string().optional(),
    tools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number()
  })
})

export const collections = { projects }
```

---

## Code conventions

- Astro components only — no React/Vue islands unless strictly required for client interactivity
- Tailwind for layout and spacing utilities; CSS custom properties for all theme values
- No inline `style` attributes — use Tailwind classes or `global.css`
- TypeScript in all `.ts` files and `<script lang="ts">` blocks
- All i18n strings via `src/i18n/[locale].ts` — no hardcoded FR/EN text in components
- GSAP imported as ES module: `import gsap from 'gsap'`, `import ScrollTrigger from 'gsap/ScrollTrigger'`
- Images served via Astro `<Image />` component from `@astrojs/image`

---

## Build and deploy

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/',
  output: 'static',
  integrations: [tailwind(), image()],
})
```

GitHub Actions deploys `dist/` to `gh-pages` branch on push to `main`.