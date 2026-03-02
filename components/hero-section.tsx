"use client";

import { ArrowDown, Users, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)] via-[var(--color-navy-light)] to-[var(--color-blue)]/30" />

      <div className="absolute inset-0 animate-aurora">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-turquoise)] rounded-full blur-[180px] opacity-15" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-blue)] rounded-full blur-[200px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-lime)] rounded-full blur-[160px] opacity-[0.07]" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-[var(--color-turquoise)] rounded-full opacity-20 animate-bubble-float" />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-[var(--color-lime)] rounded-full opacity-15 animate-bubble-drift" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-40 left-[20%] w-4 h-4 bg-[var(--color-turquoise)] rounded-full opacity-10 animate-bubble-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-60 right-[30%] w-2 h-2 bg-[var(--color-yellow)] rounded-full opacity-15 animate-bubble-drift" style={{ animationDelay: "6s" }} />
        <div className="absolute bottom-60 left-[40%] w-3 h-3 bg-[var(--color-lime)] rounded-full opacity-10 animate-bubble-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-32 left-[60%] w-2 h-2 bg-[var(--color-turquoise)] rounded-full opacity-20 animate-bubble-drift" style={{ animationDelay: "5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 glass-card-enhanced px-5 py-2.5 mb-8">
          <span className="w-2 h-2 bg-[var(--color-lime)] rounded-full animate-pulse-glow" />
          <span className="text-white/80 text-sm font-medium">Zain Wellbeing &mdash; Crisis Support</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
          You Are{" "}
          <span className="gradient-text">Not Alone</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          Immediate, accessible crisis support for every Zain colleague.
          Connect with a buddy, access resources, and find the help you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#power-buddy"
            className="group flex items-center gap-3 bg-[var(--color-turquoise)] hover:bg-[var(--color-turquoise-dark)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg shadow-[var(--color-turquoise)]/25 hover:shadow-xl hover:shadow-[var(--color-turquoise)]/35 hover:-translate-y-0.5"
          >
            <Users className="w-5 h-5" />
            Connect with a Power Buddy
          </a>
          <a
            href="#daily-wellbeing"
            className="group flex items-center gap-3 glass-button text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            Subscribe to &lsquo;Be Well&rsquo; Emails
          </a>
        </div>

        <div className="mt-20 animate-float">
          <a href="#power-buddy" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 text-white/30 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
