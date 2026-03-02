"use client";

import { Phone } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[var(--bw-border)] shadow-[0_-1px_10px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        <p className="text-sm text-[var(--bw-text-secondary)] min-w-0">
          <span className="hidden md:inline">
            Kuwait Counselling Centre -- Confidential 24hr support available now.
          </span>
          <span className="hidden sm:inline md:hidden">
            KCC -- Confidential 24hr support
          </span>
          <span className="sm:hidden">
            Confidential support
          </span>
        </p>
        <a
          href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
          className="flex items-center gap-2 bg-[var(--bw-teal)] text-white px-4 sm:px-5 py-2 rounded-lg text-sm font-bold hover:bg-[var(--bw-teal-light)] transition-colors flex-shrink-0"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{KCC_INFO.headOffice.tel}</span>
          <span className="sm:hidden">Call KCC</span>
        </a>
      </div>
    </div>
  );
}
