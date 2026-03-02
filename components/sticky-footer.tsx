"use client";

import { Phone } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-3">
        <p className="text-sm text-[#64748B] min-w-0">
          <span className="hidden md:inline">
            Kuwait Counselling Centre -- Confidential 24hr support for Zainers
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
          className="flex items-center gap-2 bg-[#00B5E2] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:brightness-110 transition-all flex-shrink-0"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{KCC_INFO.headOffice.tel}</span>
          <span className="sm:hidden">Call KCC</span>
        </a>
      </div>
    </div>
  );
}
