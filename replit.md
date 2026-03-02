# Zain Be Well | Crisis Support Portal

## Overview

Crisis support portal for Zain employees. Bento Box single-page design with a morphing loader, premium card grid overlapping the hero, slide-over drawers for content, and Framer Motion animations. Built with empathetic, grounded tone for crisis context.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Font**: Zain (Google Fonts CDN, weights 300-900)
- **Icons**: Lucide React

## Design System

**"Bento Box Aesthetics"** - Premium Apple Health-style card tiles on an ultra-soft background. Cards overlap the deep navy hero section creating physical depth.

Color palette:
- **Navy** (#12192A): Hero background, card headers
- **Magenta** (#E40068): Be Well brand, accent
- **Cyan** (#00B5E2): Action CTAs, KCC button, interactive elements
- **Background** (#F8FAFC): Ultra-soft page background
- **Cards**: White, rounded-3xl, premium shadows

Interaction model: No page navigation. All content opens in a slide-over drawer from the right with blurred backdrop.

## Page Architecture

1. **Morphing Loader** (1.5s): Full-screen navy with "ZAIN | BE WELL" centered, fades out
2. **Header**: Zain logo + "BE WELL" mark, no navigation links
3. **Hero**: Deep navy, "Standing Together." headline with cyan accent
4. **Bento Grid** (overlaps hero at -mt-32): 5 cards in responsive grid
   - For You: Resilience Toolkit (span 2 cols)
   - Power Buddy System
   - For Managers
   - For Parents & Elderly
   - Daily BE WELL Updates (span 2 cols)
5. **Slide-Over Drawer**: Opens from right on card click, contains checklist UIs and form embeds
6. **Sticky Footer**: KCC 24hr support with cyan call button

## Project Structure

```
app/
  layout.tsx          - Root layout with Zain font
  page.tsx            - Single-page entry with Bento grid
  globals.css         - Global styles, color palette
components/
  loader.tsx          - Morphing loader animation
  bento-card.tsx      - Reusable Bento grid card (Framer Motion)
  slide-drawer.tsx    - Slide-over drawer with content panels
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
