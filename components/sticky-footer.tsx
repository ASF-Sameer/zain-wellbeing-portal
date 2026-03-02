"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-t border-black/5 shadow-[0_-2px_20px_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-[var(--bw-text-secondary)] text-sm sm:text-base min-w-0">
          <ShieldCheck className="w-5 h-5 text-[var(--bw-teal)] flex-shrink-0" />
          <span className="hidden md:inline truncate font-medium">
            Kuwait Counselling Centre -- Confidential 24hr Support
          </span>
          <span className="hidden sm:inline md:hidden truncate font-medium">
            KCC -- Confidential Support
          </span>
          <span className="sm:hidden truncate font-medium">
            Confidential Support
          </span>
        </div>
        <a
          href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
          className="flex items-center gap-2 bg-[var(--bw-teal)] text-white px-4 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-bold hover:bg-[var(--bw-teal-light)] transition-colors flex-shrink-0 shadow-md shadow-[var(--bw-teal)]/20"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{KCC_INFO.headOffice.tel}</span>
          <span className="sm:hidden">Call KCC</span>
        </a>
      </div>
    </div>
  );
}
