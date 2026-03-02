"use client";

import { Users, ArrowRight, RefreshCw, UserPlus } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="power-buddy" className="relative py-16 sm:py-24 px-4">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[var(--bw-teal-muted)] px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-[var(--bw-teal)]" />
            <span className="text-sm font-bold text-[var(--bw-teal)]">Peer Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--bw-navy)] mb-4 tracking-tight">
            Power Buddy System
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-lg mx-auto">
            Get matched with a colleague for a grounding conversation. No judgment, just human connection when you need it most.
          </p>
        </div>

        <div className="card-glass overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--bw-teal)] to-[#00BFC2] px-6 sm:px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  Request a Power Buddy
                </h3>
                <p className="text-white/70 text-sm">
                  We will match you within minutes
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-4">
            <iframe
              src={POWER_BUDDY_FORM_URL}
              width="100%"
              height="480"
              style={{ border: "none", minHeight: "400px" }}
              title="Power Buddy Sign-Up Form"
              className="rounded-xl"
            />
          </div>

          <div className="px-6 sm:px-8 py-4 border-t border-black/5">
            <a
              href={POWER_BUDDY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--bw-teal)] hover:text-[var(--bw-teal-light)] text-sm sm:text-base transition-colors group font-medium"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Having trouble? Open form in a new tab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
