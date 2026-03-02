"use client";

import { Phone, Menu, X } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#toolkits", label: "Resources" },
  { href: "#power-buddy", label: "Power Buddy" },
  { href: "#daily-wellbeing", label: "Be Well" },
  { href: "#live-updates", label: "Updates" },
  { href: "#kcc", label: "KCC" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-[var(--bw-navy)] rounded-xl px-3 py-1.5 sm:px-4 sm:py-2">
              <Image
                src="/images/zain-logo.png"
                alt="Zain"
                width={160}
                height={56}
                className="h-8 sm:h-10 w-auto"
                priority
              />
            </div>
            <div className="hidden min-[420px]:flex flex-col">
              <span className="text-[var(--bw-navy)] text-base sm:text-lg font-bold leading-tight">
                Be Well
              </span>
              <span className="text-[var(--bw-text-muted)] text-[11px] sm:text-xs leading-tight">
                Wellbeing Portal
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-[var(--bw-text-secondary)] hover:text-[var(--bw-pink)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-2 bg-[var(--bw-danger)] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              className="lg:hidden p-2 text-[var(--bw-text-secondary)] hover:text-[var(--bw-navy)] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-black/5">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-[var(--bw-text-secondary)] hover:text-[var(--bw-pink)] px-3 py-3.5 rounded-xl transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
