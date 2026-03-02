"use client";

import { ArrowDown, Users, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-wellbeing-navy)] via-[var(--color-wellbeing-navy-light)] to-[#1E3A5F]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-wellbeing-teal)] rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-wellbeing-teal)] rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-wellbeing-magenta)] rounded-full blur-[200px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[var(--color-wellbeing-teal)] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">Zain Wellbeing Crisis Support</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          You Are{" "}
          <span className="text-[var(--color-wellbeing-teal)]">Not Alone</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
          Immediate, accessible crisis support for every Zain colleague.
          Connect with a buddy, access resources, and find the help you need — right now.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#power-buddy"
            className="group flex items-center gap-3 bg-[var(--color-wellbeing-teal)] hover:bg-[var(--color-wellbeing-teal-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-[var(--color-wellbeing-teal)]/25 hover:shadow-xl hover:shadow-[var(--color-wellbeing-teal)]/30 hover:-translate-y-0.5"
          >
            <Users className="w-5 h-5" />
            Connect with a Power Buddy Now
          </a>
          <a
            href="#daily-wellbeing"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            Subscribe to &lsquo;Be Well&rsquo; Emails
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#power-buddy" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-white/40 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
