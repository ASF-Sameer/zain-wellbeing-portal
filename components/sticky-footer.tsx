"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { KCC_INFO, BEWELL_EMAIL } from "@/data/content";

const EASE = [0.85, 0, 0.15, 1] as const;

export default function StickyFooter() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
        <div className="min-w-0 flex items-center gap-3">
          <p className="text-slate-500">
            <span className="hidden sm:inline text-sm">
              Need support? Email{" "}
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors underline underline-offset-2">
                {BEWELL_EMAIL}
              </a>
            </span>
            <span className="sm:hidden text-xs">
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A] underline underline-offset-2">
                {BEWELL_EMAIL}
              </a>
            </span>
          </p>
          <Link
            href="/design"
            className="hidden sm:inline-block text-[10px] uppercase tracking-[0.15em] text-slate-400 hover:text-slate-600 transition-colors"
          >
            Design
          </Link>
        </div>
        <a
          href={`https://wa.me/${KCC_INFO.whatsapp.replace(/\s/g, "").replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-[#0F172A] text-white px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-tight hover:bg-[#1E293B] transition-colors flex-shrink-0 active:scale-[0.98]"
        >
          <span className="hidden sm:inline">KCC WhatsApp</span>
          <span className="sm:hidden">KCC</span>
          <span>{KCC_INFO.whatsapp}</span>
        </a>
      </div>
    </motion.div>
  );
}
