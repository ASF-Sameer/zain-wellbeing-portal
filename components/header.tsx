"use client";

import { Phone, Menu, X } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#power-buddy", label: "Power Buddy" },
  { href: "#daily-wellbeing", label: "Be Well Emails" },
  { href: "#live-updates", label: "Updates" },
  { href: "#toolkits", label: "Toolkits" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/images/zain-logo-white.svg"
              alt="Zain"
              width={100}
              height={36}
              className="h-8 sm:h-9 w-auto"
              priority
            />
            <div className="h-6 w-px bg-white/20" />
            <span className="text-sm sm:text-base font-medium text-white/70">
              Wellbeing
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-[var(--color-turquoise)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-2 bg-[var(--color-quartz)] text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-quartz)]/80 transition-colors shadow-lg shadow-[var(--color-quartz)]/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency Hotline</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              className="md:hidden p-2 text-white/60"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/60 hover:text-[var(--color-turquoise)] hover:bg-white/5 px-4 py-3 rounded-lg transition-colors"
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
