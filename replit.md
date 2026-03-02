# Zain Be Well | Crisis Support Portal

## Overview

Premium crisis support hub for Zain employees. Grid-card architecture with slide-over drawers, following "Premium Cognitive Easing" design philosophy -- Apple Health meets modern fintech dashboard. Users self-select from 5 category cards, each opening a smooth slide-over drawer with relevant content.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Font**: Inter (Google Fonts CDN, weights 300-900)
- **Icons**: Lucide React
- **Animations**: Framer Motion (logo entrance, card hover/tap, drawer slide-in)

## Design System

**"Premium Cognitive Easing"** - Calming off-white background, premium gradient cards with centered icons, smooth Framer Motion interactions.

Colors:
- **Navy** (#1A1A24): Manager cards, text, dark accents
- **Cyan** (#00B5E2): For You cards, Power Buddy, primary action
- **Magenta** (#E40084): For Parents cards, Daily BE WELL, Be Well brand
- **Background** (#F8FAFC): Calming off-white page background
- **Card Shadow**: `0 8px 30px rgb(0 0 0 / 0.06)` diffused premium shadow

Typography: Inter font, modern geometric sans-serif. Deep navy for text.

Animation flow: BE WELL logo centers on screen -> glides up into header -> header fades in -> hero text fades in -> cards stagger in from bottom.

## Page Architecture

1. **Logo Intro** (1.2s centered BE WELL logo, then animates to header)
2. **Header** (sticky, backdrop-blur, Zain + BE WELL logos, Emergency button)
3. **Hero** (centered headline + subtitle)
4. **Grid Hub** (5 category cards, 1/2/3 column responsive grid)
5. **Sticky Footer** (KCC phone CTA)

## 5 Hub Categories

| Card | Content Type | Drawer Contents |
|------|-------------|-----------------|
| For You | Checklist | Grounding checklist + individual resilience toolkit |
| For Managers | Toolkit | 6 manager leadership guide cards |
| For Parents & Elderly | Checklist | Family & care checklist |
| Power Buddy System | Form | How-it-works + MS Forms iframe |
| Daily BE WELL | Form | Stats + MS Forms iframe |

## Project Structure

```
app/
  layout.tsx          - Root layout with Inter font
  page.tsx            - Hub page with drawer state management
  globals.css         - Global styles, premium design system
components/
  header.tsx          - Animated header with logo entrance
  bewell-logo.tsx     - SVG Be Well logo (pink gradient badge)
  hero-section.tsx    - Centered welcome text
  grid-card.tsx       - Premium gradient card with Framer Motion
  slide-drawer.tsx    - Right-sliding drawer with overlay
  drawer-content.tsx  - Content router for 5 category drawers
  checklist-item.tsx  - Interactive checkbox component
  sticky-footer.tsx   - KCC contact footer
data/
  content.ts          - All data: categories, checklists, toolkits, KCC, form URLs
lib/
  utils.ts            - cn() utility
  github.ts           - GitHub API integration
public/images/
  zain-logo.png       - Official Zain logo (white)
  bewell-logo.png     - Be Well banner image
  bewell-hero.png     - Be Well hero image
```

## Configuration

- **Dev server**: `npm run dev` on port 5000, host 0.0.0.0
- **Build**: `npm run build`
- **MS Forms**: Update `POWER_BUDDY_FORM_URL` and `BEWELL_SUBSCRIBE_FORM_URL` in `data/content.ts`
- **Emergency numbers**: Update `EMERGENCY_HOTLINE` and `KCC_PHONE` in `data/content.ts`
- **GitHub**: https://github.com/ASF-Sameer/zain-wellbeing-portal
