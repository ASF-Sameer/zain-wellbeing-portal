# Zain Be Well | Crisis Support Portal

## Overview

Crisis support portal for Zain employees during regional crisis. Swiss Editorial / International Typographic Style design language with cinematic loader, in-place Framer Motion layoutId card expansion, real MS Forms integration, and full accessibility support. No gradients, no glassmorphism, no bouncy physics.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (cinematic easing: cubic-bezier(0.85, 0, 0.15, 1))
- **Fonts**: Inter (body) + Zain (branding/headings) via Google Fonts CDN
- **Icons**: Lucide React

## Design System

**"Swiss Editorial / International Typographic Style"** - Stark, clean lines. Strict grid. 1px borders. Flat white cards.

Color palette:
- **Navy** (#0B101E): Loader background, authority
- **Dark** (#0F172A / #121626): Text, dark card, CTA buttons
- **Magenta** (#E40068): Brand accent, progress bar, divider, KCC border
- **Cyan** (#00B5E2): Power Buddy urgency, hover borders
- **Background** (#F8FAFC): Ultra-soft off-white for calm
- **Cards**: Solid white, 1px border-slate-200
- **Borders**: #E2E8F0

Typography: Inter body (neutral legibility), Zain font for branding/headings. Labels 10px bold uppercase tracking-widest. Headers tracking-tight.

## Page Architecture

1. **Cinematic Loader** (2.5s): Navy screen, Zain logo image + "BE WELL" in Zain font, 2px magenta progress bar with ARIA progressbar role. Waits for font loading. Skipped entirely for `prefers-reduced-motion`.
2. **Logo Lockup**: Zain logo image (inverted for dark-on-light) + 1px divider + "BE WELL" (Zain font, tracked uppercase magenta)
3. **Hero**: "Standing Together." headline in Zain font, 4px magenta divider, subtext
4. **Editorial Grid**: 6 cards in responsive 3-col grid with gap-px borders (3x2 rectangle)
   - Row 1: For You (span 2) + For Managers (span 1)
   - Row 2: For Parents (span 1) + Power Buddy (span 2, cyan left border)
   - Row 3: KCC (span 1, magenta left border) + Daily BE WELL (span 2, dark card)
5. **In-Place Card Expansion**: layoutId morph into centered modal. Focus-trapped. App scales to 0.95, blurs, darkens. Content stagger-fades in.
6. **Sticky Footer**: Fade-in animation, bewell@zain.com + KCC WhatsApp CTA + Design link
7. **Design Rationale Page** (`/design`): Comprehensive explanation of all architectural/design decisions

## Accessibility

- All decorative icons have `aria-hidden="true"`
- Modal has `role="dialog"`, `aria-modal="true"`, `aria-label`
- Focus trap in expanded card modal (Tab/Shift+Tab cycle)
- Close button meets 44x44px minimum touch target
- Progress bar has `role="progressbar"` with aria-valuenow/min/max
- `prefers-reduced-motion` fully supported: loader skipped, animations disabled
- Iframe has 15s timeout fallback with "Open in new tab" link

## SEO & Performance

- Open Graph and Twitter Card meta tags configured
- Favicon and apple-touch-icon set
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Font loading check before loader animation starts

## Project Structure

```
app/
  layout.tsx          - Root layout with fonts, OG/Twitter meta, icons
  page.tsx            - Main page: loader, editorial grid, card expansion
  globals.css         - Tailwind v4 config, editorial palette variables
  design/page.tsx     - Design rationale documentation page
components/
  loader.tsx          - Cinematic loader with font-ready check, reduced motion support
  bento-card.tsx      - Editorial card with ARIA, reduced motion support
  expanded-card.tsx   - Focus-trapped modal with iframe timeout fallback
  sticky-footer.tsx   - Animated contact footer with design page link
  ui/button.tsx       - Base button component
data/
  content.ts          - KCC info, form URLs, contact details
lib/
  utils.ts            - cn() utility
public/images/
  zain-logo.png       - Official Zain logo (white)
  bewell-logo.png     - BE WELL logo (favicon)
```

## Configuration

- **Dev server**: `npm run dev` on port 5000, host 0.0.0.0
- **Build**: `npm run build`
- **MS Forms**: Update `POWER_BUDDY_FORM_URL` and `BEWELL_SUBSCRIBE_FORM_URL` in `data/content.ts`
- **KCC WhatsApp**: +965 9721 0070 (configured in `data/content.ts`)
- **Email**: bewell@zain.com
- **GitHub**: https://github.com/ASF-Sameer/zain-wellbeing-portal
