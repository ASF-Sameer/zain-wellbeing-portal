"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { KCC_INFO } from "@/data/content";
import ScrollReveal, { ScrollRevealGroup } from "@/components/scroll-reveal";

export default function KCCSection() {
  return (
    <section id="support" className="section-navy py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="mb-10 sm:mb-14">
            <p className="text-[var(--zn-cyan)] text-[15px] font-bold uppercase tracking-wider mb-2">
              Professional Support
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight leading-tight mb-4">
              Kuwait Counselling Centre
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl">
              {KCC_INFO.supportNote}
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal animation="fade-up">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 sm:p-7 h-full">
              <MapPin className="w-6 h-6 text-[var(--zn-cyan)] mb-4" />
              <h3 className="font-bold text-lg mb-2">
                {KCC_INFO.headOffice.name}
              </h3>
              <p className="text-white/75 leading-relaxed mb-4">
                {KCC_INFO.headOffice.address}
              </p>
              <a
                href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--zn-cyan)] text-lg font-bold"
              >
                <Phone className="w-4 h-4" />
                {KCC_INFO.headOffice.tel}
              </a>
              <p className="text-white/30 text-sm mt-1.5">
                Fax: {KCC_INFO.headOffice.fax}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 sm:p-7 h-full">
              <MapPin className="w-6 h-6 text-[var(--zn-cyan)] mb-4" />
              <h3 className="font-bold text-lg mb-2">
                {KCC_INFO.jabriyaOffice.name}
              </h3>
              <p className="text-white/75 leading-relaxed mb-4">
                {KCC_INFO.jabriyaOffice.address}
              </p>
              <a
                href={`tel:${KCC_INFO.jabriyaOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--zn-cyan)] text-lg font-bold"
              >
                <Phone className="w-4 h-4" />
                {KCC_INFO.jabriyaOffice.tel}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 sm:p-7 sm:col-span-2 lg:col-span-1 h-full">
              <Clock className="w-6 h-6 text-[var(--zn-yellow)] mb-4" />
              <h3 className="font-bold text-lg mb-2">
                <span className="text-[var(--zn-yellow)]">24-Hour</span> Resolution
              </h3>
              <p className="text-white/75 leading-relaxed">
                All conversations are strictly confidential. Support available via WhatsApp, Email, and Phone. We guarantee any issue resolved within 24 hours.
              </p>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
