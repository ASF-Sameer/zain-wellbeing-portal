"use client";

import { ArrowDown, Users, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--wellbeing-deep)] via-[var(--wellbeing-dark)] to-[var(--wellbeing-deep)]" />

      <div className="absolute inset-0 animate-drift">
        <div className="absolute top-[20%] left-[15%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-[var(--wellbeing-teal)] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.08]" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-[var(--wellbeing-sage)] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.06]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[var(--wellbeing-warm)] rounded-full blur-[120px] sm:blur-[140px] opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center pt-16 sm:pt-20">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 bg-[var(--wellbeing-teal)] rounded-full animate-soft-pulse" />
          <span className="text-[var(--wellbeing-text-muted)] text-xs sm:text-sm">Zain Wellbeing</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--wellbeing-text)] mb-4 sm:mb-6 text-balance leading-[1.15]">
          You Are Not Alone
        </h1>

        <p className="text-base sm:text-lg text-[var(--wellbeing-text-muted)] max-w-xl mx-auto mb-8 sm:mb-10 text-balance leading-relaxed px-2">
          Immediate crisis support for every Zain colleague. Connect with a buddy, access resources, and find help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#power-buddy"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[var(--wellbeing-teal)] hover:bg-[var(--wellbeing-teal-light)] text-white px-6 py-3.5 rounded-full text-base font-semibold transition-colors"
          >
            <Users className="w-4 h-4" />
            Connect with a Power Buddy
          </a>
          <a
            href="#daily-wellbeing"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 glass text-[var(--wellbeing-text)] px-6 py-3.5 rounded-full text-base font-semibold hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Subscribe to Be Well Emails
          </a>
        </div>

        <div className="mt-14 sm:mt-20">
          <a href="#power-buddy" aria-label="Scroll down" className="inline-block">
            <ArrowDown className="w-5 h-5 text-[var(--wellbeing-text-muted)] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
