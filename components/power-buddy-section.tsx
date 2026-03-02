"use client";

import { Users, ArrowUpRight, RefreshCw } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";

export default function PowerBuddySection() {
  return (
    <section id="buddy" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <p className="text-sm font-bold text-[var(--bw-teal)] uppercase tracking-wide mb-2">
              Peer Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--bw-navy)] tracking-tight mb-4">
              Power Buddy System
            </h2>
            <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] leading-relaxed mb-6">
              Get matched with a colleague for a grounding conversation. No judgment, just human connection when you need it most.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[var(--bw-teal-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--bw-teal)]">1</span>
                </div>
                <p className="text-sm text-[var(--bw-text-secondary)]">Fill in the form with your details</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[var(--bw-teal-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--bw-teal)]">2</span>
                </div>
                <p className="text-sm text-[var(--bw-text-secondary)]">We match you with a buddy within minutes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-[var(--bw-teal-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--bw-teal)]">3</span>
                </div>
                <p className="text-sm text-[var(--bw-text-secondary)]">Have a grounding conversation together</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-[var(--bw-border)] overflow-hidden">
              <div className="bg-[var(--bw-teal)] px-5 sm:px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-base">Request a Power Buddy</span>
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
              <div className="px-5 sm:px-6 py-3 border-t border-[var(--bw-border)] flex items-center justify-between">
                <a
                  href={POWER_BUDDY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--bw-teal)] text-sm font-medium hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Open in new tab
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
