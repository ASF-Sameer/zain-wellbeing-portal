"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { KCC_PHONE } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/5">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[var(--wellbeing-text-muted)] text-xs sm:text-sm min-w-0">
          <ShieldCheck className="w-4 h-4 text-[var(--wellbeing-teal)] flex-shrink-0" />
          <span className="hidden sm:inline truncate">
            Feeling Overwhelmed? Professional support is strictly confidential.
          </span>
          <span className="sm:hidden truncate">
            Need help? Confidential support available.
          </span>
        </div>
        <a
          href={`tel:${KCC_PHONE}`}
          className="flex items-center gap-1.5 bg-[var(--wellbeing-teal)] text-white px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[var(--wellbeing-teal-light)] transition-colors flex-shrink-0"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Contact KCC</span>
          <span className="sm:hidden">KCC</span>
        </a>
      </div>
    </div>
  );
}
