"use client";

import { Mail, Sparkles } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="daily-wellbeing" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-lime)] rounded-full blur-[200px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Mail className="w-4 h-4 text-[var(--color-lime)]" />
            <span className="text-sm font-semibold text-[var(--color-lime)]">Daily Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Daily <span className="gradient-text-warm">Wellbeing Support</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Receive daily wellbeing tips, grounding exercises, and supportive messages.
            Each email takes less than 2 minutes to read.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="glass-card-enhanced overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--color-lime)]/80 to-[var(--color-yellow)]/80 px-6 py-4">
              <h3 className="text-[var(--color-navy-dark)] font-semibold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Subscribe to &lsquo;Be Well&rsquo; Daily Emails
              </h3>
              <p className="text-[var(--color-navy-dark)]/70 text-sm mt-1">
                A moment of calm delivered to your inbox every morning.
              </p>
            </div>
            <div className="p-2 sm:p-4 bg-white/[0.03]">
              <iframe
                src={BEWELL_SUBSCRIBE_FORM_URL}
                width="100%"
                height="350"
                style={{ border: "none" }}
                title="Be Well Email Subscription Form"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { value: "2 min", label: "Quick read" },
              { value: "Daily", label: "Delivered" },
              { value: "Free", label: "Always" },
            ].map((stat) => (
              <div key={stat.label} className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
