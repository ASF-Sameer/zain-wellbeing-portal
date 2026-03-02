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
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/zain-logo.png"
              alt="Zain"
              width={140}
              height={48}
              className="h-9 sm:h-11 w-auto"
              priority
            />
            <div className="h-6 w-px bg-white/10 hidden min-[420px]:block" />
            <span className="text-[var(--wellbeing-text-secondary)] text-sm font-medium tracking-wide hidden min-[420px]:inline">
              Wellbeing
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--wellbeing-text-secondary)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-1.5 bg-[var(--wellbeing-rose)] text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Emergency Line</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              className="md:hidden p-2 text-[var(--wellbeing-text-secondary)] hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--wellbeing-text-secondary)] hover:text-white px-3 py-3 rounded-lg transition-colors"
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
