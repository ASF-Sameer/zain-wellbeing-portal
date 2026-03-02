"use client";

import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/5">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[var(--wellbeing-text-secondary)] text-xs sm:text-sm min-w-0">
          <ShieldCheck className="w-4 h-4 text-[var(--wellbeing-teal)] flex-shrink-0" />
          <span className="hidden md:inline truncate">
            Kuwait Counselling Centre -- Confidential 24hr Support
          </span>
          <span className="hidden sm:inline md:hidden truncate">
            KCC -- Confidential Support
          </span>
          <span className="sm:hidden truncate">
            Confidential Support
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 bg-[var(--wellbeing-teal)] text-white px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[var(--wellbeing-teal-light)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{KCC_INFO.headOffice.tel}</span>
            <span className="sm:hidden">Call KCC</span>
          </a>
        </div>
      </div>
    </div>
  );
}
