"use client";

import { Users, ArrowRight, RefreshCw } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="power-buddy" className="relative py-16 sm:py-24 px-4">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[var(--wellbeing-teal)] rounded-full blur-[180px] opacity-[0.04]" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            <Users className="w-3.5 h-3.5 text-[var(--wellbeing-teal)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-teal)]">Power Buddy System</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wellbeing-text)] mb-3">
            Find Your Power Buddy
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-muted)] max-w-lg mx-auto">
            Get instantly matched with a colleague for a grounding conversation. No judgment, just connection.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--wellbeing-teal)] to-[var(--wellbeing-sage)] px-4 sm:px-6 py-3 sm:py-4">
            <h3 className="text-white font-semibold text-sm sm:text-base flex items-center gap-2">
              <Users className="w-4 h-4" />
              Connect with a Buddy
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-0.5">
              Fill in your details and we will match you within minutes.
            </p>
          </div>
          <div className="p-1.5 sm:p-3">
            <iframe
              src={POWER_BUDDY_FORM_URL}
              width="100%"
              height="480"
              style={{ border: "none", minHeight: "400px" }}
              title="Power Buddy Sign-Up Form"
              className="rounded-lg"
            />
          </div>
          <div className="px-4 sm:px-6 py-3 border-t border-white/5">
            <a
              href={POWER_BUDDY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--wellbeing-teal)] hover:text-[var(--wellbeing-teal-light)] text-xs sm:text-sm transition-colors group"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Buddy unavailable? Click to redirect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
