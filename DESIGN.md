---
design_system:
  name: "Okamura Barbers Retro-Modern Design System"
  version: "1.0.0"
  brand: "オシャレヘアーオカムラ"
  established: 1950
  archetype: "Retro-Modern Japanese Luxury Barber"
  color_palette:
    canvas_dark: "#0a0a0a"
    surface_dark: "#171717"
    surface_card: "#262626"
    border_subtle: "#333333"
    gold_primary: "#d4a753"
    gold_light: "#eedcaf"
    gold_dark: "#6d461e"
    accent_red: "#dc2626"
    accent_blue: "#2563eb"
  typography:
    serif_headings: "Playfair Display, Noto Serif JP, serif"
    sans_body: "Inter, Noto Sans JP, sans-serif"
    mono_accents: "monospace"
---

# 💈 DESIGN.md — Okamura Barbers Design System

This document specifies the visual identity, token architecture, component patterns, and UI design rules for **オシャレヘアーオカムラ (Okamura Barbers)**.

---

## 🎨 1. Color System & Design Tokens

Okamura Barbers uses a rich, dark retro-modern palette balanced with brushed gold accents, warm charcoal neutrals, and classic barber pole stripes.

### Gold Spectrum (Brand Core)
Defined in `@theme` inside `src/index.css`:

| Token | Hex Value | Primary Usage |
| :--- | :--- | :--- |
| `--color-gold-50` | `#fdfaf2` | Bright highlight text & badges |
| `--color-gold-100` | `#f7eed7` | Light gold subtle fills |
| `--color-gold-200` | `#eedcaf` | Subtle gold borders & text hover |
| `--color-gold-300` | `#e2c480` | Secondary CTA text & links |
| `--color-gold-400` | `#d4a753` | **Primary Brand Gold Accent** (Icons, Primary Headings, Active Borders) |
| `--color-gold-500` | `#c18e38` | Button hover states & shimmer gradients |
| `--color-gold-600` | `#a7742a` | Darker gold borders |
| `--color-gold-700` | `#885922` | Muted gold section sub-elements |
| `--color-gold-800` | `#6d461e` | Deep antique gold timeline accents |
| `--color-gold-900` | `#5a391a` | Subtle dark gold backdrops |
| `--color-gold-950` | `#341e0d` | Deepest gold shadows |

### Dark Canvas & Neutrals
- **Background Root**: `bg-neutral-950` (`#0a0a0a`)
- **Card Containers**: `bg-neutral-900` (`#171717`)
- **Input Fields & Sub-surfaces**: `bg-neutral-850` (`#202020`)
- **Borders**: `border-neutral-800` / `border-neutral-850`
- **Body Text**: `text-neutral-300` / `text-neutral-400`
- **Headings**: `text-white` / `text-gold-400`

---

## 🖋️ 2. Typography & Hierarchy

### Font Families
1. **Display Serif (Headings & Brand Titles)**:
   - Primary: `Playfair Display` (English titles)
   - Secondary: `Noto Serif JP` (Japanese section titles & quotes)
2. **Body Sans (UI & Descriptions)**:
   - Primary: `Inter`
   - Secondary: `Noto Sans JP`
3. **Monospace (Prices, Timestamps & Badges)**:
   - Standard browser system monospace

### Scale & Hierarchy Rules
- **Hero Title**: `text-3xl sm:text-5xl lg:text-6xl`, `font-serif`, `font-bold`
- **Section Titles**: `text-2xl md:text-4xl`, `font-serif`, `font-bold`
- **Card Headings**: `text-xl`, `font-serif`, `font-bold`
- **Body Text**: `text-xs md:text-sm`, `leading-relaxed`
- **Sub-labels & Badges**: `text-[10px] sm:text-xs`, `font-mono`, `uppercase`, `tracking-widest`

---

## 📐 3. Component Design Patterns

### Cards (Service & Review Cards)
- **Background**: `bg-neutral-900`
- **Border**: `border border-neutral-850 hover:border-gold-400/30`
- **Radius**: `rounded-2xl`
- **Padding**: `p-5 md:p-6`
- **Shadow**: `shadow-lg`
- **Transitions**: `transition-all duration-300`

### Buttons & Interactive Controls
- **Primary CTA (Gold Button)**:
  - Background: `bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400`
  - Text: `text-neutral-950 font-bold`
  - Radius: `rounded-xl`
  - Shadow: `shadow-md hover:shadow-gold-400/20`
- **Secondary CTA (Outline Button)**:
  - Background: `bg-neutral-900/80 hover:bg-neutral-850`
  - Border: `border border-gold-400/30 hover:border-gold-400/60`
  - Text: `text-gold-300`

### Barber Pole Animation & Accent
- Continuous moving diagonal stripes (`shimmypole` CSS keyframe).
- Barber pole stripes: Red (`#dc2626`), White (`#ffffff`), Blue (`#2563eb`).

---

## 📱 4. Responsive Layout Principles

- **Mobile First**: Single column layout for screens `< 768px`.
- **Desktop Grid**: 2-column grid (`md:grid-cols-2`) for service cards to maximize horizontal space and legibility.
- **Max Width**: Contained within `max-w-6xl` or `max-w-7xl` with `mx-auto px-4 md:px-6`.

---

## ⚙️ 5. Key Animations & Effects

- **Scroll Reveal**: `motion.div` with initial `opacity: 0, y: 20` animated to `opacity: 1, y: 0`.
- **Gold Shimmer Effect**: Custom `.shimmer-bg` class for highlighted coupon cards.
- **Hover Scale**: Micro scale transformations (`hover:scale-[1.02]`) on cards and buttons.

---

## 📸 6. Imagery & Photography Guidelines

- **Asset Storage**: Store all primary media in `src/assets/images/`.
- **Hero Image**: Aspect ratio `3:4` (mobile) to `4:5` / `3:4` (desktop), subtle brightness reduction (`brightness-[0.85]`) with focus on precision cutting techniques.
- **Service Cards**: Aspect ratio `16:9` or `4:3`, subtle zoom on hover (`group-hover:scale-105 transition-transform duration-700`).
- **Timeline Historical Photos**: Antique tones, sepia / monochrome vintage filter effects matching the 1950s heritage narrative.
- **Instagram Gallery**: Square `1:1` grid items with dark gradient overlay caption reveal on hover.
