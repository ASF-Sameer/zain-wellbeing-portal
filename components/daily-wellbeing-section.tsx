"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

export default function DailyWellbeingSection() {
  return (
    <section id="bewell" className="py-16 sm:py-24 bg-[var(--bw-pink-soft)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-[var(--bw-pink)] uppercase tracking-wide mb-2">
              Daily Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--bw-navy)] tracking-tight mb-4">
              Be Well Daily Emails
            </h2>
            <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] leading-relaxed mb-6">
              A moment of calm in your inbox every morning. Quick tips, grounding exercises, and supportive messages that take less than 2 minutes.
            </p>
            <div className="flex gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[var(--bw-navy)]">2 min</div>
                <div className="text-sm text-[var(--bw-text-muted)]">Quick read</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[var(--bw-navy)]">Daily</div>
                <div className="text-sm text-[var(--bw-text-muted)]">Every morning</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[var(--bw-navy)]">Free</div>
                <div className="text-sm text-[var(--bw-text-muted)]">Always</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-[var(--bw-border)] overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--bw-pink)] to-[var(--bw-pink-light)] px-5 sm:px-6 py-4 flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-base">Subscribe to Be Well Emails</span>
              </div>
              <div className="p-2 sm:p-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}
