"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { KCC_PHONE } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-wellbeing-navy)] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
          <ShieldCheck className="w-5 h-5 text-[var(--color-wellbeing-teal)] flex-shrink-0" />
          <span className="hidden sm:inline">
            Feeling Overwhelmed? Professional support is strictly confidential.
          </span>
          <span className="sm:hidden">
            Need help? Support is confidential.
          </span>
        </div>
        <a
          href={`tel:${KCC_PHONE}`}
          className="flex items-center gap-2 bg-white text-[var(--color-wellbeing-navy)] px-4 sm:px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0 shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Contact Kuwait Counseling Center (KCC)</span>
          <span className="sm:hidden">Contact KCC</span>
        </a>
      </div>
    </div>
  );
}
