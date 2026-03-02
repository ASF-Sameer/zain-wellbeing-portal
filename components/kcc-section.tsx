"use client";

import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function KCCSection() {
  return (
    <section id="kcc" className="relative py-16 sm:py-24 px-4">
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--bw-teal-muted)] px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 text-[var(--bw-teal)]" />
            <span className="text-sm font-bold text-[var(--bw-teal)]">
              Professional Support
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--bw-navy)] mb-4 tracking-tight">
            Kuwait Counselling Centre
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-lg mx-auto">
            {KCC_INFO.supportNote}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          <div className="card-glass p-6 sm:p-7">
            <div className="flex items-start gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[var(--bw-teal-muted)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[var(--bw-teal)]" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--bw-navy)] text-base sm:text-lg mb-1">
                  {KCC_INFO.headOffice.name}
                </h3>
                <p className="text-sm sm:text-base text-[var(--bw-text-secondary)] leading-relaxed">
                  {KCC_INFO.headOffice.address}
                </p>
              </div>
            </div>
            <div className="space-y-2 pl-[54px]">
              <a
                href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--bw-teal)] hover:text-[var(--bw-teal-light)] text-base font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{KCC_INFO.headOffice.tel}</span>
              </a>
              <p className="flex items-center gap-2 text-[var(--bw-text-muted)] text-sm">
                <span>Fax: {KCC_INFO.headOffice.fax}</span>
              </p>
            </div>
          </div>

          <div className="card-glass p-6 sm:p-7">
            <div className="flex items-start gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[var(--bw-teal-muted)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[var(--bw-teal)]" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--bw-navy)] text-base sm:text-lg mb-1">
                  {KCC_INFO.jabriyaOffice.name}
                </h3>
                <p className="text-sm sm:text-base text-[var(--bw-text-secondary)] leading-relaxed">
                  {KCC_INFO.jabriyaOffice.address}
                </p>
              </div>
            </div>
            <div className="pl-[54px]">
              <a
                href={`tel:${KCC_INFO.jabriyaOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--bw-teal)] hover:text-[var(--bw-teal-light)] text-base font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{KCC_INFO.jabriyaOffice.tel}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 card-glass p-5 sm:p-6 flex items-center gap-4">
          <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm sm:text-base text-[var(--bw-text-secondary)]">
            All conversations with KCC are strictly confidential. Support available via WhatsApp, Email, and Phone with guaranteed 24-hour resolution.
          </p>
        </div>
      </div>
    </section>
  );
}
