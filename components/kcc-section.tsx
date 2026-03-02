"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function KCCSection() {
  return (
    <section id="support" className="py-16 sm:py-24 bg-[var(--bw-teal-soft)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="text-sm font-bold text-[var(--bw-teal)] uppercase tracking-wide mb-2">
            Professional Support
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--bw-navy)] tracking-tight mb-3">
            Kuwait Counselling Centre
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-xl">
            {KCC_INFO.supportNote}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl border border-[var(--bw-border)] p-5 sm:p-6">
            <MapPin className="w-5 h-5 text-[var(--bw-teal)] mb-3" />
            <h3 className="font-bold text-[var(--bw-navy)] text-base mb-1">
              {KCC_INFO.headOffice.name}
            </h3>
            <p className="text-sm text-[var(--bw-text-secondary)] leading-relaxed mb-3">
              {KCC_INFO.headOffice.address}
            </p>
            <a
              href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[var(--bw-teal)] text-sm font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              {KCC_INFO.headOffice.tel}
            </a>
            <p className="text-xs text-[var(--bw-text-muted)] mt-1">
              Fax: {KCC_INFO.headOffice.fax}
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[var(--bw-border)] p-5 sm:p-6">
            <MapPin className="w-5 h-5 text-[var(--bw-teal)] mb-3" />
            <h3 className="font-bold text-[var(--bw-navy)] text-base mb-1">
              {KCC_INFO.jabriyaOffice.name}
            </h3>
            <p className="text-sm text-[var(--bw-text-secondary)] leading-relaxed mb-3">
              {KCC_INFO.jabriyaOffice.address}
            </p>
            <a
              href={`tel:${KCC_INFO.jabriyaOffice.tel.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[var(--bw-teal)] text-sm font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              {KCC_INFO.jabriyaOffice.tel}
            </a>
          </div>

          <div className="bg-white rounded-xl border border-[var(--bw-border)] p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
            <Clock className="w-5 h-5 text-[var(--bw-teal)] mb-3" />
            <h3 className="font-bold text-[var(--bw-navy)] text-base mb-1">
              Confidential Support
            </h3>
            <p className="text-sm text-[var(--bw-text-secondary)] leading-relaxed">
              All conversations with KCC are strictly confidential. Support available via WhatsApp, Email, and Phone with guaranteed 24-hour resolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
