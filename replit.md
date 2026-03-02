# Zain Be Well | Crisis Support Portal

## Overview

Crisis support portal for Zain employees. Single-page design following "Calm Wayfinding" principles: color-blocked sections using the full Zain brand palette, scroll-triggered animations, massive typography, and clear Be Well identity throughout.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Font**: Zain (Google Fonts CDN, weights 300-900)
- **Icons**: Lucide React
- **Animations**: Intersection Observer (no libraries)

## Design System

**"Calm Wayfinding"** - Color-coded sections like a well-designed emergency department. Each section has a distinct full-bleed background color from the Zain brand palette.

Color palette (CSS variables with `--zn-` prefix):
- **Navy** (#1A2744): Hero, KCC section -- authority and grounding
- **Cyan/Teal** (#00A5A8): Power Buddy -- connection and trust
- **Magenta/Pink** (#D4267E): Be Well identity, CTAs -- warmth and care
- **Yellow** (#F5A623): Urgency indicators, accents
- **White** (#FFFFFF): Resource and update sections -- clean readability
- **Background** (#F5F7FA): Default page background

Typography: Body 18px minimum, headings 48-80px using clamp() for responsive scaling.

Logos:
- Zain: `public/images/zain-logo.png` (white PNG, CSS inverted for light backgrounds)
- Be Well: SVG component at `components/bewell-logo.tsx` (pink gradient badge, primary brand mark)

Scroll animations: `components/scroll-reveal.tsx` wraps elements with Intersection Observer. Supports fade-up, fade-left, fade-right, fade-in. `ScrollRevealGroup` for staggered children. CSS classes in globals.css with `sr-` prefix.

## Page Layout

1. Header (Zain logo + Be Well logo + nav + Emergency button) -- white, fixed
2. Hero (navy full-bleed, 60-80px headline, "Not Alone" in pink gradient, 4 wayfinding cards)
3. Resource Toolkits (white section, swipable card carousels with colored top borders)
4. Power Buddy (teal full-bleed, 2-col: info + MS Forms embed)
5. Be Well Daily Emails (magenta gradient full-bleed, 2-col: stats + MS Forms embed)
6. Live Updates (gray bg, list cards with colored left borders by category)
7. KCC Section (navy full-bleed, 3-col: 2 offices + 24hr guarantee)
8. Sticky Footer (white, KCC phone with teal CTA) with h-20 spacer

## Project Structure

```
app/
  layout.tsx          - Root layout with Zain font
  page.tsx            - Single-page entry
  globals.css         - Global styles, Zain palette, scroll animations
components/
  scroll-reveal.tsx   - Intersection Observer animation wrapper
  header.tsx          - Fixed header with both logos
  bewell-logo.tsx     - SVG Be Well logo (pink gradient)
  hero-section.tsx    - Navy hero with wayfinding cards
  resource-toolkits-section.tsx - Swipable card carousels
  power-buddy-section.tsx  - Teal section, 2-col MS Form layout
  daily-wellbeing-section.tsx  - Magenta section, email subscription
  live-updates-section.tsx     - Category-colored update cards
  kcc-section.tsx     - Navy section, 3-col office details
  sticky-footer.tsx   - KCC contact footer
data/
  content.ts          - Static data, KCC info, form URLs
lib/
  utils.ts            - cn() utility
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
