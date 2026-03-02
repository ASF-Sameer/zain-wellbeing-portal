"use client";

import { ArrowDown, Shield, Phone } from "lucide-react";
import { KCC_INFO } from "@/data/content";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bw-sky)] via-[var(--bw-sky-light)] to-[var(--bw-sky-pale)]" />
      <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[var(--bw-teal)] rounded-full blur-[180px] sm:blur-[250px] opacity-[0.12]" />
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[var(--bw-pink)] rounded-full blur-[160px] sm:blur-[220px] opacity-[0.06]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center pt-24 sm:pt-28">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 sm:mb-10 border border-white/80">
          <span className="w-2 h-2 bg-[var(--bw-teal)] rounded-full animate-soft-pulse" />
          <span className="text-[var(--bw-text-secondary)] text-sm sm:text-base font-medium">
            Zain Wellbeing Crisis Portal
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--bw-navy)] mb-5 sm:mb-7 text-balance leading-[1.05] tracking-tight">
          You Are{" "}
          <span className="text-[var(--bw-pink)]">Not Alone</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[var(--bw-text-secondary)] max-w-xl mx-auto mb-10 sm:mb-12 text-balance leading-relaxed">
          Immediate support for every Zain colleague. Access resources, connect with a buddy, and find professional help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#toolkits"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[var(--bw-pink)] hover:bg-[var(--bw-pink-light)] text-white px-8 py-4 rounded-full text-base sm:text-lg font-bold transition-colors shadow-lg shadow-[var(--bw-pink)]/20"
          >
            <Shield className="w-5 h-5" />
            Access Resources
          </a>
          <a
            href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/80 backdrop-blur-sm text-[var(--bw-navy)] px-8 py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white transition-colors border border-white/90 shadow-lg shadow-black/5"
          >
            <Phone className="w-5 h-5" />
            Call KCC Now
          </a>
        </div>

        <div className="mt-14 sm:mt-16">
          <a href="#toolkits" aria-label="Scroll to resources" className="inline-block">
            <ArrowDown className="w-6 h-6 text-[var(--bw-text-muted)] animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}
