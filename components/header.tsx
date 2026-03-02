"use client";

import { Phone, Heart, Menu, X } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import { useState } from "react";

const navLinks = [
  { href: "#power-buddy", label: "Power Buddy" },
  { href: "#daily-wellbeing", label: "Be Well Emails" },
  { href: "#live-updates", label: "Updates" },
  { href: "#toolkits", label: "Toolkits" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Heart className="w-7 h-7 text-[var(--color-wellbeing-teal)]" fill="currentColor" />
              <div>
                <span className="text-lg sm:text-xl font-bold text-[var(--color-wellbeing-navy)]">
                  Zain Wellbeing
                </span>
                <span className="hidden sm:inline text-sm text-[var(--color-wellbeing-text-muted)] ml-2">
                  Be Well
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--color-wellbeing-text-muted)] hover:text-[var(--color-wellbeing-teal)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-2 bg-[var(--color-wellbeing-magenta)] text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-wellbeing-magenta)]/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency Hotline</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              className="md:hidden p-2 text-[var(--color-wellbeing-text-muted)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[var(--color-wellbeing-text-muted)] hover:text-[var(--color-wellbeing-teal)] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
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
