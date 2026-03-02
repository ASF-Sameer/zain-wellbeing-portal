"use client";

import { Mail, Heart } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="daily-wellbeing" className="relative py-16 sm:py-24 px-4">
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[var(--wellbeing-warm)] rounded-full blur-[180px] opacity-[0.04]" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            <Heart className="w-3.5 h-3.5 text-[var(--wellbeing-warm)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-warm)]">Daily Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wellbeing-text)] mb-3">
            Get Daily Wellbeing Support
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-muted)] max-w-lg mx-auto">
            Receive daily tips, grounding exercises, and supportive messages. Each email takes less than 2 minutes.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--wellbeing-warm)] to-[var(--wellbeing-warm-light)] px-4 sm:px-6 py-3 sm:py-4">
              <h3 className="text-[var(--wellbeing-deep)] font-semibold text-sm sm:text-base flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe to Be Well Daily Emails
              </h3>
              <p className="text-[var(--wellbeing-deep)]/60 text-xs sm:text-sm mt-0.5">
                A moment of calm, delivered every morning.
              </p>
            </div>
            <div className="p-1.5 sm:p-3">
              <iframe
                src={BEWELL_SUBSCRIBE_FORM_URL}
                width="100%"
                height="320"
                style={{ border: "none", minHeight: "280px" }}
                title="Be Well Email Subscription Form"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { value: "2 min", label: "Quick read" },
              { value: "Daily", label: "Delivered" },
              { value: "Free", label: "Always" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-3 sm:p-4">
                <div className="text-lg sm:text-xl font-bold text-[var(--wellbeing-teal)]">{stat.value}</div>
                <div className="text-xs text-[var(--wellbeing-text-muted)] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
