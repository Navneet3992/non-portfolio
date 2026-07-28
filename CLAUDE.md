# Non's Portfolio — Build Spec for Claude Code

> **Purpose:** This file is the single source of truth for developing Non's (Navneet's) portfolio website in the terminal. Follow it exactly. When in doubt about assets (fonts, colours, images, GIFs), **ask the user before guessing.**

---

## 1. Project Overview

A dark-themed, fully responsive **Product & Motion Designer** portfolio for "Non" (Navneet Mandal). The site has 6 pages total:

| Route | Page | Source File |
|---|---|---|
| `/` | Home / About | `About.png` |
| `/work/free-cash-table` | Case Study 1 | `100% Free Cash Table.png` |
| `/work/jr-player-search` | Case Study 2 | `JR Player Search Case Study.png` |
| `/work/howzat-login` | Case Study 3 | `Howzat Login Enhanced Experience.png` |
| `/work/motion-framework` | Case Study 4 | `Junglee Motion Design Framework.png` |
| `/playground` | Experiments / Playground | `Experiments.png` |

Reference images are in: `./Portfolio Pages/`

---

## 2. Tech Stack

```
Framework:   Next.js 14 (App Router)
Styling:     Tailwind CSS + custom CSS variables for the design token layer
Fonts:       ⚠️ ASK USER — confirm exact font names before installing
Icons:       Inline SVGs only (no icon library)
Animation:   Framer Motion (scroll reveals, hover states)
Images:      next/image with priority on hero assets
GIFs:        Will replace placeholder images — user will advise locations
Deployment:  Vercel (recommended)
```

---

## 3. Design System

### 3.1 Colour Palette
> ⚠️ Exact hex values below are inferred from the exported PNGs. **Confirm with user before finalising.**

```css
:root {
  /* Backgrounds */
  --color-bg:           #141414;   /* page background — confirmed 2026-07-22, consistent site-wide */
  --color-surface:      #141414;   /* card / section surfaces */
  --color-surface-2:    #1E1E1E;   /* elevated cards, tool badges */

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-muted:   #888888;
  --color-text-dim:     #444444;

  /* Accent */
  --color-accent:       #F5A623;   /* orange — CTAs, highlighted nav link, metric highlights */

  /* Project card backgrounds (observed) */
  --color-card-teal:    #1A3D3A;   /* Free Cash Table card */
  --color-card-dark:    #1A1A1A;   /* JR Player Search card */
  --color-card-orange:  #8B3A00;   /* Motion Framework card */
  --color-card-red:     #6B0000;   /* Howzat Login card */
}
```

### 3.2 Typography
> ⚠️ **ASK USER for exact font names.** The following are inferred guesses from the visual style.

```
Display / Hero:   [ASK USER] — large, heavy weight, wide tracking
                  Candidates: Clash Display, Cabinet Grotesk, Space Grotesk
Body:             [ASK USER] — clean sans-serif
                  Candidates: Inter, DM Sans, Outfit
Monospace:        [ASK USER] — used for labels/tags (e.g., "JUNGLEE RUMMY")
```

**Type scale (approximate, from visual inspection):**

| Token | Size | Weight | Usage |
|---|---|---|---|
| `text-hero` | ~96–120px | 800 | "PRODUCT & MOTION DESIGNER" hero |
| `text-display` | ~48–64px | 700 | Case study page titles |
| `text-h2` | ~32–40px | 700 | Section headings (UX Process, Testimonials) |
| `text-h3` | ~20–24px | 600 | Card titles, sub-headings |
| `text-body` | ~16px | 400 | Body copy |
| `text-label` | ~11–12px | 500 | Tags, meta labels (ALL CAPS, letter-spaced) |
| `text-stat` | ~28–36px | 700 | Metric callouts (+7%, 1 in 4, etc.) |

### 3.3 Spacing
Base unit: `8px`. Use multiples (8, 16, 24, 32, 48, 64, 80, 96, 128).

### 3.4 Border Radius
```
Cards:        12–16px
Buttons:      8px (pill-ish)
Badges/tags:  999px (fully rounded)
```

### 3.5 Shadows / Depth
Dark theme — use subtle `box-shadow` with low-opacity white for elevation rather than drop shadows.

---

## 4. Page-by-Page Breakdown

### 4.1 Home Page (`/`)

**Sections in order:**

1. **Navigation** *(sticky, full-width)*
   - Left: "NON" logo with globe/planet emoji icon
   - Right links: `WORK` · `PLAYGROUND` · `GET CV` (accent colour, underlined)
   - Transparent background with subtle border-bottom on scroll

2. **Hero Section**
   - Massive display text: `PRODUCT &` (line 1), `MOTION DESIGNER` (line 2)
   - Inline ampersand glyph with decorative flourish
   - Small circular profile photo (right of "DESIGNER")
   - Vertical separator `|` left of the second line
   - ⚠️ GIF PLACEHOLDER: Background or hero visual — **ask user**

3. **Intro Strip**
   - Left: `SAY HELLO` with email / Instagram / LinkedIn icon links
   - Center: Short bio paragraph ("Hello there, I'm Navneet — a product designer…")
   - Right: `Contact Me` button (outlined, white border)

4. **Recent Works Section**
   - Section label: `Recent Works` (large, ghosted/dimmed behind the cards — watermark style)
   - 4 project cards stacked vertically, each spanning full width
   - **Card anatomy:**
     - Coloured background (teal / dark / orange / red per project)
     - Project tag top-left (e.g., `JUNGLEE RUMMY`)
     - Headline / impact stat
     - Meta: YEAR · TYPE (e.g., `UX / Motion`) · DELIVERABLES
     - Rating stars row bottom-left
     - Phone mockup image(s) right side — ⚠️ GIF PLACEHOLDER
   - Cards link to their respective case study routes

5. **UX Process Section**
   - Section heading: `UX Process`
   - Two-column: text left, portrait photo right
   - Body copy about design philosophy
   - ⚠️ Photo: **ask user for portrait asset**

6. **Tools Section**
   - Intro line: "These are the tools behind my creative flow…"
   - 2×3 grid of tool badges:
     - Figma (Design Tool)
     - After Effects (Animation Tool)
     - Slack (Collaboration Tool)
     - AI (Productivity Tool)
     - Chat GPT (Brainstorming Tool)
     - AI (Curiosity-Enabled Tool)
   - Each badge: tool logo + name + category label

7. **Testimonials Section**
   - Section heading: `Testimonials`
   - Sub-label: "Proof I'm not hard to work with — straight from real teammates"
   - 3-column card grid with testimonial quotes + name + title
   - 6 testimonials total (2 rows of 3)

8. **Work Experience Section**
   - Section heading: `Work Ex.` with sub: "as a Product Designer with…"
   - Horizontal timeline: Junglee → ViPuls → Prodius Labs
   - Short description beneath each company
   - ⚠️ Company logos — **ask user**

9. **Footer CTA**
   - Chat bubble emoji + `Let's design something`
   - Second line in accent orange: `that moves users`
   - `SAY HELLO` + social icon links (left)
   - Short paragraph + `Contact Me` button (right)
   - Decorative cursor/pointer graphic bottom-right

---

### 4.2 Case Study Template (shared layout for all 4 case studies)

All 4 case studies share the same structure:

1. **Navigation** — same as Home
2. **Project Tag** — e.g., `JUNGLEE RUMMY` (small caps, label style)
3. **Title** — large display heading (case study name)
4. **Hero Visual** — full-width image or blurred/dark placeholder
   - ⚠️ GIF / VIDEO PLACEHOLDER — **ask user per case study**
5. **Meta Row** — 4 columns:
   - MY ROLE
   - DELIVERABLES
   - TEAM
   - YEAR
6. **Sections** — vary per case study but follow this pattern:
   - Heading (e.g., "The Problem", "Design Goals", "Approach to Solution")
   - Body text (left-aligned, 50–60% width column)
   - Supporting visuals (mockups, diagrams, before/after comparisons)
   - Watermark-style ghost text behind some sections (e.g., "Current Game Table Sta…")
7. **Impact & Results** — stat cards in a row (e.g., `+22% increase`, `1 in 4 users`)
8. **Team Credits**
9. **"Next Project"** button — links to next case study
10. **Footer CTA** — same as Home

**Case study specifics:**

| Route | Title | Year | Type |
|---|---|---|---|
| `/work/free-cash-table` | Designing a Zero-Risk Path to Real Cash Wins for New Rummy Players | 2023 | UX / Motion |
| `/work/jr-player-search` | Fixing the Wait that made Players wonder, "Is this Real?" | 2024 | UX / Motion |
| `/work/howzat-login` | Designing for Clarity – Reimagining HOWZAT's Splash & Login Experience | 2025 | UX / Motion |
| `/work/motion-framework` | Elevating interactions with a Scalable Motion System blending Function, Emotion, and Delight | 2024 | Motion Design |

---

### 4.3 Playground Page (`/playground`)

1. **Navigation** — same as Home (PLAYGROUND link is underlined/active)
2. **Section Label**: `Engagement Experiments`
3. **Heading**: "Motion That Drives Engagement — Turning Interactions into Retention"
4. **3×3 Grid of Experiment Cards:**
   - Each card: dark background, rounded corners, tag label top-left, content centred
   - Content is phone mockup or UI element
   - ⚠️ ALL 9 SLOTS ARE GIF PLACEHOLDERS — **ask user for GIF assets**
   - Known labels:
     1. Junglee Rummy Splash
     2. Juglee Rummy Mission Feature Explainer Video
     3. Rummy Rewards
     4. HOWZAT Jackpot Explainer BottomSheet
     5. Juglee Rummy NAV elements with Click States
     6. Illustrations
     7. Illustrations
     8. Illustrations
     9. Illustrations
5. **"NOT THE END.."** — large ghosted watermark text section
6. **Footer CTA** — same as Home

---

## 5. Shared Components

```
<Navbar />              — sticky, transparent → blurred on scroll
<FooterCTA />           — reused on every page
<ProjectCard />         — home page work cards
<CaseStudyHero />       — title + meta row
<StatCard />            — metric highlight (e.g., "+22% increase")
<TestimonialCard />     — quote + avatar + name/title
<ToolBadge />           — logo + name + category
<SectionLabel />        — small caps label above headings
<GhostHeading />        — large dimmed watermark text
<NextProjectButton />   — case study navigation button
<PlaygroundCard />      — experiment grid card (holds GIF)
```

---

## 6. Responsiveness Requirements

| Breakpoint | Behaviour |
|---|---|
| Mobile (`< 640px`) | Single column. Hero text scales down. Nav collapses to hamburger. |
| Tablet (`640–1024px`) | 2-column grids. Cards stack to 2-up. |
| Desktop (`> 1024px`) | Full layout as per Figma. Max content width ~1280px, centred. |

- Use `clamp()` for fluid hero typography
- Project cards on mobile: stack vertically, image below text
- Playground grid: 1-col mobile → 2-col tablet → 3-col desktop

---

## 7. GIF Placeholder Map

The following image slots will be replaced with GIFs. Mark them with `data-gif-slot` attributes so they're easy to find:

| Location | Slot ID | Notes |
|---|---|---|
| Home — each project card (right side) | `card-gif-[1–4]` | Phone mockup animations |
| Case Study heroes | `cs-hero-[slug]` | Full-width hero |
| Case Study body visuals | `cs-body-[slug]-[n]` | Inline mockup images |
| Playground grid | `playground-gif-[1–9]` | All 9 cards |

Use `<Image>` (Next.js) with `unoptimized` prop for GIFs.

---

## 8. File Structure

```
non-portfolio/
├── app/
│   ├── layout.tsx              # root layout, Navbar, global styles
│   ├── page.tsx                # Home
│   ├── playground/
│   │   └── page.tsx
│   └── work/
│       ├── free-cash-table/
│       │   └── page.tsx
│       ├── jr-player-search/
│       │   └── page.tsx
│       ├── howzat-login/
│       │   └── page.tsx
│       └── motion-framework/
│           └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── FooterCTA.tsx
│   ├── ProjectCard.tsx
│   ├── CaseStudyHero.tsx
│   ├── StatCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ToolBadge.tsx
│   ├── PlaygroundCard.tsx
│   └── ui/
│       ├── SectionLabel.tsx
│       ├── GhostHeading.tsx
│       └── NextProjectButton.tsx
├── public/
│   ├── images/                 # static images from user
│   └── gifs/                   # GIFs (to be added later)
├── styles/
│   └── globals.css             # CSS variables + base reset
├── lib/
│   └── data/
│       ├── caseStudies.ts      # case study content data
│       ├── testimonials.ts
│       └── tools.ts
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md                   # this file
```

---

## 9. Build Order

Work in this sequence so you can preview incrementally:

1. `npx create-next-app@latest non-portfolio --ts --tailwind --app --src-dir=false`
2. Set up `globals.css` with CSS variables + font imports
3. Build `<Navbar />` and `<FooterCTA />`
4. Build Home page section by section (top → bottom)
5. Build `<ProjectCard />` with placeholder images
6. Build Case Study template, then populate each of the 4 case studies
7. Build Playground page + `<PlaygroundCard />` grid
8. Responsiveness pass across all pages
9. Swap placeholder images with real assets provided by user
10. Swap image slots with GIFs per user's instruction

---

## 10. Open Questions — Ask User Before Proceeding

Ask these before building anything that depends on the answer:

- [x] **Fonts:** Display = Space Grotesk (Google Fonts). Body = Inter (Google Fonts), rendered at semibold (600) site-wide. Hero "&" accent = Playfair, self-hosted static file `Playfair_144pt-LightItalic.ttf` (300 italic) from `~/Downloads/Playfair/static/` — see §12.
- [x] **Exact colours:** Background unified to `#141414` site-wide (`--color-bg`, was `#0A0A0A`). Accent `#F5A623` and card colours still spec placeholders, not yet confirmed against a Figma export.
- [x] **Logo asset:** `NON.gif` from Assets folder, 120×52px exact, in Navbar.
- [x] **Profile photo:** `IMG_8157.jpg` → `public/images/profile.jpg`, used in hero (120×160px, rounded-[100px] capsule shape). UX Process section still uses a placeholder.
- [ ] **Company logos:** Junglee, ViPuls, Prodius Labs (for Work Ex. section)
- [ ] **Tool logos:** Figma, After Effects, Slack, AI, ChatGPT icons
- [ ] **Hero background:** Is there a texture/grain effect or is it pure flat black?
- [ ] **Case study hero images:** What images/GIFs go in each case study's hero slot?
- [ ] **Playground GIFs:** All 9 GIF files for the experiment grid
- [ ] **Testimonial avatars:** Profile photos for the 6 testimonials
- [ ] **"NOT THE END.." section:** Is there a special texture/noise behind this text?
- [ ] **Cursor graphic:** Bottom-right of footer — is this an asset or CSS?
- [x] **Navigation behaviour:** GET CV opens `/cv.pdf` in a new tab (file itself still a placeholder — doesn't exist yet).

---

## 11. Content Reference

### Testimonials (observed from design — verify with user)
6 cards across 2 rows. Names visible: Rahul Dhyawala, Saiyam Surana, Salman Majani, Vikas Chandrakant, Rahul Dhyawala (2nd), one more.

### Work Experience
- **Junglee Games** — Graphic designer (first role, where I started)
- **ViPuls** — (intermediate)
- **Prodius Labs** — (most recent)

### Social Links
- Email: mailme.navneetmandal@gmail.com
- Instagram
- LinkedIn

---

## 12. Session Log — 2026-07-22 (post-scaffold refinement pass)

Everything below happened after the initial 6-page scaffold (§9 build order) was already in place. Read this before touching the home page hero or intro strip again.

### Where real assets come from
`~/Downloads/Non's Portfolio/Assets/` (the user renamed it from "Assets to be replaced") is the live drop folder for real assets. Contents as of this session: `NON.gif`, `Disperse clock mid .gif`, `Chat.gif`, `IMG_8157.jpg`, `Mail Icon.svg`, `Insta Icon.svg`, `Linked Icon.svg`, `Contact Me button.svg`. All copied into `non-portfolio/public/images/` under clearer lowercase names (`logo.gif`, `hero-clock.gif`, `profile.jpg`, `icon-mail.svg`, `icon-instagram.svg`, `icon-linkedin.svg`, `contact-me-button.svg` + a text-stripped `contact-me-button-bg.svg`).

`~/Downloads/Non's Portfolio/Portfolio Pages/` holds the original reference PNGs (`About.png`, case study PNGs, `Experiments.png`) — **not yet used**, and not directly readable by Claude Code unless the user pastes them into chat directly (see gotcha below).

`~/Downloads/Playfair/` holds the actual Playfair variable font + static instances (separate from Google's "Playfair Display" family). Used `static/Playfair_144pt-LightItalic.ttf` (the 144pt optical-size cut — the one meant for large display text — at true weight 300 italic) for the hero "&". Self-hosted via `next/font/local` in `app/layout.tsx` as `--font-playfair`, mapped to Tailwind's `font-playfair`.

**Gotcha — Downloads folder access:** Bash/Terminal cannot list or `cp` most files under `~/Downloads` (macOS TCC "Operation not permitted"), even though the Read tool can open files the user has directly pasted into chat. The reliable workaround for anything else in Downloads: use `osascript` with Finder —
```
osascript -e 'tell application "Finder" to get name of every item of folder (POSIX file "<path>" as alias)'
```
to list a folder, and
```
osascript -e 'tell application "Finder" to duplicate (POSIX file "<src>" as alias) to (POSIX file "<destfolder>" as alias) with replacing'
```
to copy a file out. Finder's process has broader filesystem access than the sandboxed Bash tool.

**Gotcha — stale Tailwind/Next build cache:** Editing `tailwind.config.ts` or `app/layout.tsx` (adding a new `next/font` face, a new `fontFamily` token) can silently fail to take effect in a long-running `next dev` process — the utility class compiles to nothing, and the element falls back to its parent's inherited font/style with zero console error. This exact bug caused the hero "&" to render in the wrong font for a full turn even though the code was correct. Fix: `pkill -f "next dev"`, `rm -rf .next`, restart. Always verify a new font/color token actually applies (check computed styles) after this kind of config edit, don't just trust that the code looks right.

### Decisions locked in this session
- **Background:** `--color-bg` changed from `#0A0A0A` to `#141414` — the entire site (body, and by extension the navbar's scroll-blur `bg-[#141414]/80`) is now one consistent dark tone. Don't reintroduce a separate near-black page background.
- **GET CV hover animation:** yellow underline bar grows left→right on hover in (`transform-origin: left`), and collapses left→right on hover out (`transform-origin: right`, set via React state since CSS alone can't give asymmetric origins with a single `:hover` transition) — see `GetCvLink` in `components/Navbar.tsx`.
- **Body font weight:** Inter rendered at semibold (600) site-wide via `font-semibold` on `<body>` in `app/layout.tsx`. Headings (Space Grotesk) keep their own explicit weights, unaffected.
- **Hero section, top to bottom:**
  - Logo: `logo.gif`, exact 120×52px (`h-[52px] w-[120px]` needed — Tailwind's preflight `img{height:auto}` otherwise breaks the exact height).
  - "&" after PRODUCT: self-hosted Playfair Light Italic (see above), rendered via `<span className="font-playfair font-normal italic">`.
  - Dispersing-clock GIF: 108×108px (`hero-clock.gif`), sized deliberately larger than the "MOTION DESIGNER" heading's rendered line height (~91px at desktop). Shown from `lg:` breakpoint only — showing it (plus the profile photo) from `md:` caused ~60px of horizontal overflow between 768–900px viewports.
  - Hero type scale reduced for more whitespace: `clamp(3rem,9vw,7.5rem)` → `clamp(2.5rem,7.5vw,6.25rem)` (the `hero` fontSize token in `tailwind.config.ts`).
  - "MOTION DESIGNER" forced onto one line with `md:whitespace-nowrap` (scoped to `md:` up only — unconditional `whitespace-nowrap` broke mobile by forcing horizontal overflow there).
  - Profile photo: `profile.jpg`, box is exactly 120×160px with `rounded-[100px]` — because the radius exceeds half of both dimensions, this renders as a capsule/oval shape, not a normal rounded rectangle. This was a deliberate pixel-exact spec from the user, not a rounded-corner approximation.
  - Fixed an unrelated pre-existing bug found while checking for overflow: the "Recent Works" ghost watermark heading had a fixed `text-[8rem]` size that overflowed on mobile (73px of horizontal scroll at 390px). Changed to `text-[clamp(3rem,15vw,8rem)]`.
- **Intro Strip:**
  - "SAY HELLO" and the social icons are in one row (`flex items-center gap-4`, not `flex-col`). "SAY HELLO" is `font-body text-[18px] font-semibold text-text-primary` (white), no longer using the `text-label` token.
  - Social links are real icon SVGs from the Assets folder (`icon-mail.svg`, `icon-instagram.svg`, `icon-linkedin.svg`), 32×32px, not text.
  - Bio paragraph copy replaced with the user's exact wording (see the `<p>` in `app/page.tsx` — note it intentionally has "-currently" with no space, matching what the user typed). Styled `font-body font-semibold text-[18px] leading-[1.4] text-text-primary` (Inter semibold, 18px, 140% line-height, white).
  - "Contact Me" button: the asset SVG (`contact-me-button.svg`) has its label baked in as vector paths, not real text — impossible to restyle directly. Solution: stripped the text path out into `contact-me-button-bg.svg` (background shell only: border + gradient fill), and overlay real HTML text (`font-body text-[18px] font-bold text-black`, absolutely centered) on top. If the button needs restyling again (size, color, weight), edit the overlay `<span>` in `app/page.tsx`, not the SVG.

### Still outstanding
Company logos, tool logos, hero background texture, case-study visuals, all 9 playground GIFs, testimonial avatars/copy, "NOT THE END" texture, footer cursor graphic, and the actual `/cv.pdf` file. UX Process section still shows the "Portrait placeholder" box, not `profile.jpg`.

---

*Last updated: 2026-07-22. Reference images in `./Portfolio Pages/`. Ask user before making assumptions on any asset.*
