"use client";

import { Users, ArrowRight, RefreshCw, UserPlus } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="power-buddy" className="relative py-16 sm:py-24 px-4">
      <div className="absolute top-0 left-[20%] w-[300px] h-[300px] bg-[var(--wellbeing-sage)] rounded-full blur-[200px] opacity-[0.04]" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full mb-4">
            <Users className="w-3.5 h-3.5 text-[var(--wellbeing-sage)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-sage)]">Peer Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Power Buddy System
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-secondary)] max-w-lg mx-auto">
            Get matched with a colleague for a grounding conversation. No judgment, just human connection when you need it most.
          </p>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--wellbeing-sage)] to-[#5B9A7F] px-5 sm:px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                <UserPlus className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  Request a Power Buddy
                </h3>
                <p className="text-white/60 text-xs sm:text-sm">
                  We will match you within minutes
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-3">
            <iframe
              src={POWER_BUDDY_FORM_URL}
              width="100%"
              height="480"
              style={{ border: "none", minHeight: "400px" }}
              title="Power Buddy Sign-Up Form"
              className="rounded-lg"
            />
          </div>

          <div className="px-5 sm:px-6 py-3 border-t border-white/5">
            <a
              href={POWER_BUDDY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--wellbeing-sage)] hover:text-[#8BC4A8] text-xs sm:text-sm transition-colors group"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Having trouble? Open form in a new tab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
