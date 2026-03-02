"use client";

import { Users, ArrowRight, RefreshCw } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="power-buddy" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-turquoise)] rounded-full blur-[200px] opacity-[0.06]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-[var(--color-turquoise)]" />
            <span className="text-sm font-semibold text-[var(--color-turquoise)]">Power Buddy System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Find Your <span className="gradient-text">Power Buddy</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Get instantly matched with a colleague for a quick grounding conversation.
            No judgment, just connection.
          </p>
        </div>

        <div className="glass-card-enhanced overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--color-turquoise)] to-[var(--color-blue)] px-6 py-4">
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Connect with a Buddy
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Fill in your details and we will match you with a colleague within minutes.
            </p>
          </div>
          <div className="p-2 sm:p-4 bg-white/[0.03]">
            <iframe
              src={POWER_BUDDY_FORM_URL}
              width="100%"
              height="500"
              style={{ border: "none" }}
              title="Power Buddy Sign-Up Form"
              className="rounded-lg"
            />
          </div>
          <div className="px-6 py-4 border-t border-white/10">
            <a
              href={POWER_BUDDY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-turquoise)] hover:text-[var(--color-lime)] font-medium text-sm transition-colors group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Buddy unavailable? Click here to redirect to another member
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
