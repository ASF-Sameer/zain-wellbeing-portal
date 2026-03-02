"use client";

import { Mail, Send, Sparkles } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="daily-wellbeing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-wellbeing-magenta)]/10 text-[var(--color-wellbeing-magenta)] rounded-full px-4 py-2 mb-4">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold">Zone 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-wellbeing-navy)] mb-4">
            Get Daily Support
          </h2>
          <p className="text-lg text-[var(--color-wellbeing-text-muted)] max-w-2xl mx-auto">
            Receive daily wellbeing tips, grounding exercises, and supportive messages.
            Each email takes less than 2 minutes to read.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--color-wellbeing-magenta)] to-[#FF4DA6] px-6 py-4">
              <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Subscribe to &lsquo;Be Well&rsquo; Daily Emails
              </h3>
              <p className="text-white/80 text-sm mt-1">
                A moment of calm delivered to your inbox every morning.
              </p>
            </div>
            <div className="p-2 sm:p-4">
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
            <div className="p-4">
              <div className="text-2xl font-bold text-[var(--color-wellbeing-teal)]">2 min</div>
              <div className="text-sm text-[var(--color-wellbeing-text-muted)] mt-1">Quick read</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[var(--color-wellbeing-teal)]">Daily</div>
              <div className="text-sm text-[var(--color-wellbeing-text-muted)] mt-1">Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-[var(--color-wellbeing-teal)]">Free</div>
              <div className="text-sm text-[var(--color-wellbeing-text-muted)] mt-1">Always</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
