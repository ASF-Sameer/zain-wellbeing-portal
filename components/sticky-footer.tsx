"use client";

import { KCC_INFO, BEWELL_EMAIL } from "@/data/content";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">
            <span className="hidden md:inline">
              Need support? Email{" "}
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors underline underline-offset-2">
                {BEWELL_EMAIL}
              </a>
            </span>
            <span className="hidden sm:inline md:hidden">
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors underline underline-offset-2">
                {BEWELL_EMAIL}
              </a>
            </span>
            <span className="sm:hidden text-xs">
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A]">
                {BEWELL_EMAIL}
              </a>
            </span>
          </p>
        </div>
        <a
          href={`https://wa.me/${KCC_INFO.whatsapp.replace(/\s/g, "").replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 text-sm font-semibold tracking-tight hover:bg-[#1E293B] transition-colors flex-shrink-0"
        >
          <span className="hidden sm:inline">KCC WhatsApp</span>
          <span className="sm:hidden">KCC</span>
          <span>{KCC_INFO.whatsapp}</span>
        </a>
      </div>
    </div>
  );
}
