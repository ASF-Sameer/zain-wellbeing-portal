"use client";

import { Mail, Clock, CalendarCheck } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="daily-wellbeing" className="relative py-16 sm:py-24 px-4">
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[var(--bw-pink-muted)] px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4 text-[var(--bw-pink)]" />
            <span className="text-sm font-bold text-[var(--bw-pink)]">Daily Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--bw-navy)] mb-4 tracking-tight">
            Be Well Daily Emails
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-lg mx-auto">
            A moment of calm in your inbox every morning. Quick tips, grounding exercises, and supportive messages.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-3 mb-8 sm:mb-10">
          {[
            { icon: Clock, value: "2 min", label: "Quick read", color: "var(--bw-pink)" },
            { icon: CalendarCheck, value: "Daily", label: "Every morning", color: "var(--bw-teal)" },
            { icon: Mail, value: "Free", label: "Always", color: "var(--bw-navy)" },
          ].map((stat) => (
            <div key={stat.label} className="card-glass p-4 sm:p-5 text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-xl sm:text-2xl font-black text-[var(--bw-navy)]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[var(--bw-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <div className="card-glass overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--bw-pink)] to-[var(--bw-pink-light)] px-6 sm:px-8 py-5">
              <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Subscribe to Be Well Emails
              </h3>
            </div>
            <div className="p-2 sm:p-4">
              <iframe
                src={BEWELL_SUBSCRIBE_FORM_URL}
                width="100%"
                height="300"
                style={{ border: "none", minHeight: "260px" }}
                title="Be Well Email Subscription Form"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
