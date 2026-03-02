"use client";

import { KCC_INFO } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-3">
        <p className="text-sm text-slate-500 min-w-0">
          <span className="hidden md:inline">
            Kuwait Counselling Centre -- Confidential 24hr support
          </span>
          <span className="hidden sm:inline md:hidden">
            KCC -- Confidential 24hr support
          </span>
          <span className="sm:hidden text-xs">
            KCC -- 24hr support
          </span>
        </p>
        <a
          href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
          className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 text-sm font-semibold tracking-tight hover:bg-[#1E293B] transition-colors flex-shrink-0"
        >
          {KCC_INFO.headOffice.tel}
        </a>
      </div>
    </div>
  );
}
