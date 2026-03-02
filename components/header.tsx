"use client";

import { Phone, Menu, X } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#power-buddy", label: "Power Buddy" },
  { href: "#daily-wellbeing", label: "Be Well" },
  { href: "#live-updates", label: "Updates" },
  { href: "#toolkits", label: "Toolkits" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/images/zain-logo.png"
              alt="Zain"
              width={80}
              height={28}
              className="h-6 sm:h-7 w-auto"
              priority
            />
            <span className="text-[var(--wellbeing-text-muted)] text-xs sm:text-sm font-medium hidden min-[400px]:inline">
              Wellbeing
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--wellbeing-text-muted)] hover:text-[var(--wellbeing-teal)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-1.5 bg-[var(--wellbeing-rose)] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              className="md:hidden p-1.5 text-[var(--wellbeing-text-muted)]"
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
          <nav className="flex flex-col px-4 py-3 gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--wellbeing-text-muted)] hover:text-[var(--wellbeing-teal)] px-3 py-2.5 rounded-lg transition-colors"
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
