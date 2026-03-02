"use client";

import { ArrowDown, Shield, Phone } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--wellbeing-deep)] via-[var(--wellbeing-dark)] to-[var(--wellbeing-deep)]" />
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[var(--wellbeing-teal)] rounded-full blur-[160px] sm:blur-[220px] opacity-[0.06]" />
        <div className="absolute bottom-[15%] right-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[var(--wellbeing-warm)] rounded-full blur-[140px] sm:blur-[200px] opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center pt-20 sm:pt-24">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 sm:mb-10">
          <span className="w-2 h-2 bg-[var(--wellbeing-teal)] rounded-full animate-soft-pulse" />
          <span className="text-[var(--wellbeing-text-secondary)] text-xs sm:text-sm font-medium tracking-wide">
            Zain Wellbeing Crisis Portal
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white mb-5 sm:mb-6 text-balance leading-[1.1] tracking-tight">
          You Are Not Alone
        </h1>

        <p className="text-base sm:text-lg text-[var(--wellbeing-text-secondary)] max-w-md mx-auto mb-10 sm:mb-12 text-balance leading-relaxed">
          Immediate support for every Zain colleague. Access resources, connect with a buddy, and find professional help when you need it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#toolkits"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[var(--wellbeing-teal)] hover:bg-[var(--wellbeing-teal-light)] text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-colors"
          >
            <Shield className="w-4 h-4" />
            Access Resources
          </a>
          <a
            href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass text-white px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-white/[0.08] transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call KCC Now
          </a>
        </div>

        <div className="mt-16 sm:mt-20">
          <a href="#toolkits" aria-label="Scroll to resources" className="inline-block">
            <ArrowDown className="w-5 h-5 text-[var(--wellbeing-text-muted)] animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}
