"use client";

import { Mail } from "lucide-react";
import { BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";
import ScrollReveal from "@/components/scroll-reveal";

export default function DailyWellbeingSection() {
  return (
    <section id="bewell" className="section-magenta py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <ScrollReveal animation="fade-right">
              <p className="text-white/50 text-[15px] font-bold uppercase tracking-wider mb-2">
                Daily Support
              </p>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight leading-tight mb-5">
                Be Well Daily Emails
              </h2>
              <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-8">
                A moment of calm in your inbox every morning. Quick tips, grounding exercises, and supportive messages that take less than 2 minutes.
              </p>
              <div className="flex gap-8 sm:gap-10">
                {[
                  { value: "2 min", label: "Quick read" },
                  { value: "Daily", label: "Every morning" },
                  { value: "Free", label: "Always" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl sm:text-4xl font-black">{stat.value}</div>
                    <div className="text-white/50 text-sm mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal animation="fade-left">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-[var(--zn-navy)] px-6 sm:px-8 py-5 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--zn-magenta-light)]" />
                  <span className="text-white font-bold text-lg">Subscribe to Be Well Emails</span>
                </div>
                <div className="p-3 sm:p-4">
                  <iframe
                    src={BEWELL_SUBSCRIBE_FORM_URL}
                    width="100%"
                    height="340"
                    style={{ border: "none", minHeight: "280px" }}
                    title="Be Well Email Subscription Form"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
