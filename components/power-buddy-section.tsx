"use client";

import { Users, ArrowRight, RefreshCw } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="power-buddy" className="py-20 sm:py-28 bg-[var(--color-wellbeing-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-wellbeing-teal)]/10 text-[var(--color-wellbeing-teal)] rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">Zone 1</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-wellbeing-navy)] mb-4">
            Find Your Power Buddy
          </h2>
          <p className="text-lg text-[var(--color-wellbeing-text-muted)] max-w-2xl mx-auto">
            Get instantly matched with a colleague for a quick grounding conversation.
            No judgment, just connection.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[var(--color-wellbeing-teal)] to-[var(--color-wellbeing-teal-dark)] px-6 py-4">
            <h3 className="text-white font-semibold text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Connect with a Buddy
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Fill in your details and we will match you with a colleague within minutes.
            </p>
          </div>
          <div className="p-2 sm:p-4">
            <iframe
              src={POWER_BUDDY_FORM_URL}
              width="100%"
              height="500"
              style={{ border: "none" }}
              title="Power Buddy Sign-Up Form"
              className="rounded-lg"
            />
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <button className="flex items-center gap-2 text-[var(--color-wellbeing-teal)] hover:text-[var(--color-wellbeing-teal-dark)] font-medium text-sm transition-colors group">
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Buddy unavailable? Click here to redirect to another member
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
