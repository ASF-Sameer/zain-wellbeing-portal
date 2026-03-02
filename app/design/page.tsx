"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    label: "Philosophy",
    title: "Swiss Editorial / International Typographic Style",
    content: [
      "The Zain BE WELL portal serves as a crisis support resource — a tool people reach for during moments of stress, uncertainty, or emotional difficulty. Every design decision was filtered through one question: does this reduce cognitive load when someone is struggling?",
      "Swiss Editorial design — rooted in the International Typographic Style of the 1950s — was chosen precisely because it prioritizes clarity over decoration. Grid-based layouts, generous whitespace, and systematic typography create an environment of calm authority. There are no gradients fighting for attention, no illustrative flourishes adding visual noise. The interface communicates: this is serious, this is trustworthy, this will help you.",
      "The editorial metaphor (newspaper-like grid, section labels, typographic hierarchy) gives the content an implicit credibility. People trust editorial layouts because they associate them with journalism and institutional communication — exactly the tone a crisis support portal needs.",
    ],
  },
  {
    label: "Color System",
    title: "Psychological Color Architecture",
    content: [
      "Navy (#0B101E) — Authority & Stability: The primary text and accent color is near-black navy rather than pure black. This reduces harsh contrast against the light background while conveying institutional authority. Navy is universally associated with trust, professionalism, and security — critical emotional signals for a wellbeing resource.",
      "Magenta (#E40068) — Urgency & Brand Identity: Zain's brand magenta serves a dual purpose. As a brand element, it maintains corporate identity. As a design element, it signals urgency and importance — the progress bar, the accent line, the emergency labels. Magenta is warm enough to feel human but vivid enough to command attention when needed.",
      "Cyan (#00B5E2) — Hope & Action: The secondary accent creates visual relief from the magenta's intensity. Cyan is psychologically associated with openness, clarity, and forward movement. It's used for interactive elements and the Power Buddy system — things that represent connection and positive action.",
      "Off-White Background (#F8FAFC) — Calm & Comfort: The background is not pure white (#FFFFFF) but a carefully tuned cool off-white. Pure white can feel clinical and harsh; this warm-cool neutral creates a sense of calm space. It's the color of a clean page, a fresh start, a quiet room.",
    ],
  },
  {
    label: "Typography",
    title: "Typographic Decisions",
    content: [
      "Inter was selected as the primary typeface for its exceptional legibility at all sizes. Designed specifically for computer screens, Inter has open apertures, tall x-height, and careful spacing that makes it readable even at small sizes on mobile devices. For a crisis resource, readability is not a nice-to-have — it's essential.",
      "The Zain custom font is used sparingly — for the masthead and primary headline only. This creates brand recognition without sacrificing the reading experience. Zain's font has strong personality, but personality in body text creates friction during focused reading.",
      "The 10px uppercase tracking-widest label system (\"FOR YOU\", \"URGENT\", \"EMERGENCY\") borrows directly from editorial design. These micro-labels create scannable entry points — a user in distress can locate relevant content in seconds without reading full sentences. The uppercase treatment and wide letter-spacing make them function as visual anchors rather than readable text.",
      "Serif fonts were deliberately avoided. While serifs convey tradition and authority in print, they can reduce readability on screens — particularly on mobile devices at small sizes. The stakes are too high to trade legibility for aesthetic convention.",
    ],
  },
  {
    label: "Layout",
    title: "The 3×2 Editorial Grid",
    content: [
      "The grid architecture uses a 3-column layout on desktop that collapses to a single column on mobile. Content hierarchy is established through column spanning: span-2 cards are primary content (\"For You\", \"Power Buddy\", \"Daily Emails\"), while span-1 cards are secondary but equally accessible.",
      "The gap-px borders between cards create a newspaper-like reading flow. Rather than using card shadows or rounded corners (which signal \"click me, I'm a card\"), the flat grid borders signal \"read me, I'm content\". This is a deliberate shift from app-like UI to editorial UI — the content is the interface.",
      "The grid's visual rhythm creates natural reading paths. The eye moves from the large primary card (top-left, spanning two columns) across to the secondary cards, then down to the action-oriented bottom row. This Z-pattern reading flow is well-established in editorial design and maps perfectly to the content priority: learn first, then act.",
    ],
  },
  {
    label: "Interaction",
    title: "In-Place Card Expansion (layoutId)",
    content: [
      "When a user selects a card, it expands in place using Framer Motion's layoutId animation. This was chosen over three alternatives: page navigation (too slow, loses context), slide-out drawers (feels like a settings panel, not content), and modals (feels like an interruption).",
      "The in-place expansion maintains spatial continuity — the user sees the card grow from its original position, preserving their mental model of where they are in the interface. This is the same pattern Apple uses in the App Store for app previews: content expands from its origin, and collapses back to it.",
      "Spatial continuity is particularly important for users in distress. Disorienting transitions (page changes, slide-ins from unexpected directions) add cognitive load. The expansion animation is a form of wayfinding — it says \"you're still here, we just showed you more\".",
    ],
  },
  {
    label: "Depth",
    title: "The 3D Scale-Back Effect",
    content: [
      "When a card expands, the background grid scales down (to 95-96%), shifts down slightly, and applies a subtle blur with reduced brightness. This creates a depth-of-field effect borrowed from cinematography — the \"subject\" (expanded card) is in focus while the \"background\" recedes.",
      "This serves a functional purpose beyond aesthetics: it eliminates distraction. When a user is reading crisis support content, the rest of the interface shouldn't compete for attention. The scale-back effect creates a visual hierarchy that says \"focus here, everything else can wait\".",
      "The rounded corners that appear on the scaled-back container reinforce the depth illusion — objects further away appear to have softer edges. This subtle detail contributes to the overall feeling of spatial depth without requiring actual 3D rendering.",
    ],
  },
  {
    label: "Loader",
    title: "The Cinematic Entry Sequence",
    content: [
      "The 2.5-second branded loader is not a loading spinner — it's an emotional transition. Users arriving at a crisis support portal may be in a heightened emotional state. The loader serves as a decompression chamber: the dark background, the slowly revealing \"BE WELL\" text, and the magenta progress bar create a moment of pause before content appears.",
      "The magenta progress bar serves as a trust signal — it communicates that the system is working, that content is coming, that this is a polished and reliable resource. In crisis contexts, even small signals of competence and reliability matter.",
      "The fade-to-content transition (opacity animation with a smooth ease curve) prevents the jarring snap from dark loader to light content. The timing is calibrated to feel intentional without feeling slow — long enough to set emotional tone, short enough to respect urgency.",
    ],
  },
  {
    label: "Mobile",
    title: "Mobile-First Crisis Design",
    content: [
      "The majority of users will access this portal from their phones — likely while at home, commuting, or in a moment of private concern. Every element is designed mobile-first: touch targets exceed the 44×44px minimum, text is readable without zooming, and the single-column mobile layout eliminates horizontal scanning.",
      "The KCC WhatsApp button in the sticky footer is always accessible — on every screen, at every scroll position. For a crisis resource, the most important action (contacting professional support) must never be more than one tap away. The sticky footer pattern ensures this without cluttering the main content area.",
      "Content is structured for scanning, not reading. Bold titles, short subtitles, and visual labels allow a distressed user to find what they need in seconds. The grid cards function as a table of contents — scan, select, read. No scrolling through long pages, no hunting through navigation menus.",
    ],
  },
  {
    label: "Accessibility",
    title: "WCAG Compliance & Inclusive Design",
    content: [
      "All interactive elements include proper ARIA roles and labels. Decorative icons are marked with aria-hidden to prevent screen reader noise. The expanded card implements focus trapping so keyboard users can't tab behind the modal overlay.",
      "The prefers-reduced-motion media query is respected throughout. Users who have enabled reduced motion settings will see simplified transitions or no animations at all — including the option to skip the loader entirely. Animation is enhancement, not requirement.",
      "Color is never used as the only means of conveying information. Labels like \"Urgent\" and \"Emergency\" use text alongside their colored left borders. Contrast ratios meet WCAG AA standards for all text sizes, with the navy-on-off-white combination providing comfortable reading contrast without the harshness of pure black on white.",
    ],
  },
];

export default function DesignRationale() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 pt-8 sm:pt-16 pb-24 sm:pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#0F172A] transition-colors mb-10 sm:mb-14"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portal</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <img
            src="/images/zain-logo.png"
            alt="Zain"
            className="h-7 sm:h-9 w-auto invert"
          />
          <div className="w-px h-6 sm:h-7 bg-slate-200" />
          <span
            className="text-base sm:text-lg font-bold tracking-[0.2em] text-[#E40068] uppercase"
            style={{ fontFamily: "'Zain', sans-serif" }}
          >
            BE WELL
          </span>
        </div>

        <h1
          className="text-[clamp(1.6rem,5vw,3rem)] font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-4 sm:mb-5"
          style={{ fontFamily: "'Zain', sans-serif" }}
        >
          Design Rationale
        </h1>

        <div className="w-12 sm:w-16 h-[3px] sm:h-[4px] bg-[#E40068] mb-4 sm:mb-6" />

        <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed mb-16 sm:mb-24">
          A comprehensive explanation of the architectural and design decisions
          behind the Zain BE WELL crisis support portal.
        </p>

        <div className="space-y-16 sm:space-y-24">
          {sections.map((section, idx) => (
            <article key={idx}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
                {section.label}
              </p>
              <h2
                className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6"
                style={{ fontFamily: "'Zain', sans-serif" }}
              >
                {section.title}
              </h2>
              <div className="w-8 h-[2px] bg-[#E2E8F0] mb-6" />
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-[15px] sm:text-base text-slate-600 leading-[1.75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 sm:mt-28 pt-8 border-t border-[#E2E8F0]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-2">
            Zain Wellbeing
          </p>
          <p className="text-sm text-slate-500">
            Built with care for the Zain family.
          </p>
        </div>
      </div>
    </div>
  );
}
