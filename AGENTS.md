# 🤖 AGENTS.md — Okamura Barbers AI Developer Guidelines

Welcome! This file provides essential guidelines and context for AI agents working on the **岡村理容美容館 (Okamura Barbers)** codebase.

---

## 📌 Project Overview & Brand Identity

- **App Name**: 岡村理容美容館 (Okamura Barbers)
- **Location**: 福岡県豊前市千束256 (Buzen City, Fukuoka Prefecture, Japan)
- **Phone**: `0979-82-5007`
- **Hours**: 08:30 - 19:00 (Last call 18:00) | Open almost every day (ほぼ年中無休)
- **Established**: 1950 (75 years of heritage, currently operated by 2nd and 3rd generation barbers)

---

## 🏗️ Architecture & Core Stack

1. **Framework**: React 19 + TypeScript + Vite 6
2. **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` in `src/index.css`)
3. **Animations**: Motion (`motion/react`)
4. **Icons**: Lucide React (`lucide-react`)
5. **Types**: Centralized in `src/types.ts`
6. **Components**: Modular React components inside `src/components/`

---

## 🚨 Strict Engineering & Coding Directives

### 1. Styling & Theme Tokens
- Do **NOT** use random arbitrary color values if a gold token exists. Use `gold-400`, `gold-300`, `gold-500`, `neutral-900`, `neutral-850`, `neutral-800`.
- Maintain dark retro-modern barber aesthetic. Do not break the dark canvas (`neutral-950`).
- Ensure all text passes WCAG legibility requirements against dark backgrounds.

### 2. Component Modularity & File Boundaries
- Keep code clean and modular.
- Do not put all logic in `App.tsx`. Use component files:
  - `src/components/Navbar.tsx`: Header navigation and mobile drawer.
  - `src/components/ServicesSection.tsx`: Service menu cards & customer reviews grid.
  - `src/components/StorySection.tsx`: 75-year timeline section.
  - `src/components/CouponSection.tsx`: Special offer coupon card.
  - `src/components/AccessSection.tsx`: Google Maps, store details, and FAQ.
  - `src/components/BookingModal.tsx`: Web reservation form modal.
  - `src/components/Logo.tsx`: Barber pole sign logo.

### 3. Asset & Image Management
- **Directory**: Store all local images and SVGs in `src/assets/images/` (mirrored in `public/assets/images/`).
- **Import Standard**: Always use Vite ES module imports for images in TypeScript/React files instead of hardcoding absolute string paths (`"/assets/images/..."`):
  ```tsx
  // ✅ Correct: Vite handles base paths automatically across environments
  import heroImg from './assets/images/hero_barber_cut_1783583051614-new01.jpg';
  <img src={heroImg} alt="..." />

  // ❌ Forbidden: Breaks when repository subpath /Okamura-Barbers/ is active
  <img src="/assets/images/hero_barber_cut_1783583051614-new01.jpg" alt="..." />
  ```
- **Type Declarations**: Module declarations for image extensions (`.jpg`, `.jpeg`, `.png`, `.svg`, `.webp`) are maintained in `src/vite-env.d.ts`.

### 4. Icon Imports
- Always import icons directly from `lucide-react`:
  ```tsx
  import { Scissors, Phone, MapPin, Clock } from 'lucide-react';
  ```

### 5. Build, GitHub Pages & CI/CD
- **Base Path**: `vite.config.ts` must maintain `base: '/Okamura-Barbers/'` for GitHub Pages hosting compatibility.
- **Workflow**: Automated deployment workflow is configured in `.github/workflows/deploy.yml` (triggers on `main` and `master`).
- **Lockfile**: Always keep `package-lock.json` in sync for GitHub Actions CI runner reliability.

### 6. Verification & Build
- Before finishing any task, run `npm run lint` (or call `lint_applet` / `compile_applet`) to ensure no TypeScript compilation or missing import errors.

---

## 🎯 Domain Content Consistency

- **初代**: 岡村一郎 (1950年創業)
- **二代目**: 岡村二郎 (1985年継承)
- **三代目**: 親子営業中 (2025年リニューアル)
- **名物メニュー**: 大人総合カット (¥3,800), プレミアムフェードカット (¥4,500), マイルドシェービング
- **Web限定特典**: 500円OFFクーポン (クーポンコード: `OKAMURA500`)

---

© Okamura Barbers AI Studio Guidelines.
