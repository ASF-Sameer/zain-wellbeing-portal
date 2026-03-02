"use client";

import { Phone, Menu, X } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import { useState } from "react";
import Image from "next/image";
import BeWellLogo from "@/components/bewell-logo";

const navLinks = [
  { href: "#resources", label: "Resources" },
  { href: "#buddy", label: "Power Buddy" },
  { href: "#bewell", label: "Be Well" },
  { href: "#updates", label: "Updates" },
  { href: "#support", label: "KCC" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--zn-border)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <a href="#" className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <Image
              src="/images/zain-logo.png"
              alt="Zain"
              width={80}
              height={28}
              className="h-5 sm:h-6 w-auto invert opacity-70"
              priority
            />
            <div className="w-px h-6 bg-[var(--zn-border)]" />
            <BeWellLogo className="h-9 sm:h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-[var(--zn-text-secondary)] hover:text-[var(--zn-magenta)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-2 bg-[var(--zn-danger)] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-[15px] font-bold hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              className="lg:hidden p-2 text-[var(--zn-text-secondary)]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--zn-border)]">
          <nav className="flex flex-col px-5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-[var(--zn-text-secondary)] hover:text-[var(--zn-magenta)] px-2 py-3 transition-colors"
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
