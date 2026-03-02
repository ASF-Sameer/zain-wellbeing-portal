"use client";

import { Users, ArrowUpRight, RefreshCw } from "lucide-react";
import { POWER_BUDDY_FORM_URL } from "@/data/content";
import ScrollReveal from "@/components/scroll-reveal";

export default function PowerBuddySection() {
  return (
    <section id="buddy" className="section-cyan py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <ScrollReveal animation="fade-right">
              <p className="text-white/60 text-[15px] font-bold uppercase tracking-wider mb-2">
                Peer Support
              </p>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight leading-tight mb-5">
                Power Buddy System
              </h2>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8">
                Get matched with a colleague for a grounding conversation. No judgment, just human connection when you need it most.
              </p>
              <div className="space-y-4">
                {[
                  "Fill in the form with your details",
                  "We match you with a buddy within minutes",
                  "Have a grounding conversation together",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-black">{i + 1}</span>
                    </div>
                    <p className="text-lg text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal animation="fade-left">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="bg-[var(--zn-navy)] px-6 sm:px-8 py-5 flex items-center gap-3">
                  <Users className="w-5 h-5 text-[var(--zn-cyan)]" />
                  <span className="text-white font-bold text-lg">Request a Power Buddy</span>
                </div>
                <div className="p-3 sm:p-4">
                  <iframe
                    src={POWER_BUDDY_FORM_URL}
                    width="100%"
                    height="480"
                    style={{ border: "none", minHeight: "400px" }}
                    title="Power Buddy Sign-Up Form"
                    className="rounded-xl"
                  />
                </div>
                <div className="px-6 sm:px-8 py-4 border-t border-[var(--zn-border)]">
                  <a
                    href={POWER_BUDDY_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--zn-cyan)] text-[15px] font-bold hover:underline"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Open in new tab
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
