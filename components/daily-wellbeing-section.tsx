"use client";

import { Mail, Clock, CalendarCheck } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="daily-wellbeing" className="relative py-16 sm:py-24 px-4">
      <div className="absolute bottom-0 right-[10%] w-[250px] h-[250px] bg-[var(--wellbeing-lavender)] rounded-full blur-[180px] opacity-[0.04]" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full mb-4">
            <Mail className="w-3.5 h-3.5 text-[var(--wellbeing-warm)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-warm)]">Daily Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Be Well Daily Emails
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-secondary)] max-w-lg mx-auto">
            A moment of calm in your inbox every morning. Quick tips, grounding exercises, and supportive messages.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-3 mb-8">
          {[
            { icon: Clock, value: "2 min", label: "Quick read", color: "var(--wellbeing-teal)" },
            { icon: CalendarCheck, value: "Daily", label: "Every morning", color: "var(--wellbeing-warm)" },
            { icon: Mail, value: "Free", label: "Always", color: "var(--wellbeing-sage)" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-3 sm:p-4 text-center">
              <stat.icon className="w-4 h-4 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-base sm:text-lg font-bold text-white">{stat.value}</div>
              <div className="text-[11px] sm:text-xs text-[var(--wellbeing-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--wellbeing-warm)] to-[var(--wellbeing-warm-light)] px-5 sm:px-6 py-4">
              <h3 className="text-[var(--wellbeing-deep)] font-semibold text-sm sm:text-base flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe to Be Well Emails
              </h3>
            </div>
            <div className="p-2 sm:p-3">
              <iframe
                src={BEWELL_SUBSCRIBE_FORM_URL}
                width="100%"
                height="300"
                style={{ border: "none", minHeight: "260px" }}
                title="Be Well Email Subscription Form"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
