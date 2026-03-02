# Zain Be Well | Crisis Support Portal

## Overview

Crisis support portal for Zain employees. Editorial / Swiss Architecture design language with cinematic loader, flat editorial card grid, slide-over drawers, and deliberate cinematic animations. No gradients, no glassmorphism, no bouncy physics.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (cinematic easing: cubic-bezier(0.85, 0, 0.15, 1))
- **Font**: Inter (Google Fonts CDN)
- **Icons**: Lucide React

## Design System

**"Editorial / Swiss Architecture"** - Stark, clean lines. Strict grid. 1px borders. No AI-generated aesthetic patterns.

Color palette:
- **Navy** (#0B101E): Loader background
- **Dark** (#0F172A): Text, dark card, CTA buttons
- **Magenta** (#E40068): Be Well brand accent, progress bar, divider line
- **Cyan** (#00B5E2): Power Buddy urgency, hover borders
- **Background** (#F8FAFC): Ultra-soft off-white
- **Cards**: Solid white, 1px border-slate-200
- **Borders**: #E2E8F0

Typography: Inter font. Headers tracking-tight. Labels 11px uppercase with wide tracking (0.15em).

## Page Architecture

1. **Cinematic Loader** (2.5s): Navy screen, stagger-fade "ZAIN | BE WELL", 2px magenta progress bar at bottom, curtain-slide-up reveal
2. **Header**: Zain logo + "BE WELL" text, no navigation
3. **Hero**: "Standing Together." headline, 4rem magenta divider, subtext
4. **Editorial Grid**: 5 cards in responsive grid with gap-px borders
   - Resilience Toolkit (span 2 cols)
   - For Managers
   - For Parents & Elderly
   - Power Buddy (span 2 cols, 4px cyan left border)
   - Daily BE WELL (span 3 cols, dark card)
5. **Slide-Over Drawer**: Square corners, architectural feel, checklist UIs and form wireframes
6. **Sticky Footer**: White, top border, dark CTA button for KCC phone

## Project Structure

```
app/
  layout.tsx          - Root layout with Inter font
  page.tsx            - Single-page entry with editorial grid
  globals.css         - Global styles, editorial palette
components/
  loader.tsx          - Cinematic curtain loader with progress bar
  bento-card.tsx      - Editorial card component (flat, 1px borders)
  slide-drawer.tsx    - Architectural slide-over drawer
  sticky-footer.tsx   - KCC contact footer
  ui/button.tsx       - Base button component
data/
  content.ts          - Static data, KCC info, form URLs
lib/
  utils.ts            - cn() utility
  github.ts           - GitHub API integration
public/images/
  zain-logo.png       - Official Zain logo (white)
```

## Configuration

- **Dev server**: `npm run dev` on port 5000, host 0.0.0.0
- **Build**: `npm run build`
- **MS Forms**: Update `POWER_BUDDY_FORM_URL` and `BEWELL_SUBSCRIBE_FORM_URL` in `data/content.ts`
- **Emergency numbers**: Update `EMERGENCY_HOTLINE` and `KCC_PHONE` in `data/content.ts`
- **GitHub**: https://github.com/ASF-Sameer/zain-wellbeing-portal
