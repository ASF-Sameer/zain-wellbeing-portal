"use client";

import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function KCCSection() {
  return (
    <section id="kcc" className="relative py-16 sm:py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--wellbeing-teal)]/[0.02] to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3.5 py-1.5 rounded-full mb-4">
            <Shield className="w-3.5 h-3.5 text-[var(--wellbeing-teal)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-teal)]">
              Professional Support
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Kuwait Counselling Centre
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-secondary)] max-w-lg mx-auto">
            {KCC_INFO.supportNote}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--wellbeing-teal-muted)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[var(--wellbeing-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                  {KCC_INFO.headOffice.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--wellbeing-text-secondary)] leading-relaxed">
                  {KCC_INFO.headOffice.address}
                </p>
              </div>
            </div>
            <div className="space-y-2 pl-12">
              <a
                href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--wellbeing-teal)] hover:text-[var(--wellbeing-teal-light)] text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{KCC_INFO.headOffice.tel}</span>
              </a>
              <p className="flex items-center gap-2 text-[var(--wellbeing-text-muted)] text-sm">
                <span className="text-xs">Fax:</span>
                <span>{KCC_INFO.headOffice.fax}</span>
              </p>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[var(--wellbeing-teal-muted)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[var(--wellbeing-teal)]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">
                  {KCC_INFO.jabriyaOffice.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--wellbeing-text-secondary)] leading-relaxed">
                  {KCC_INFO.jabriyaOffice.address}
                </p>
              </div>
            </div>
            <div className="pl-12">
              <a
                href={`tel:${KCC_INFO.jabriyaOffice.tel.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[var(--wellbeing-teal)] hover:text-[var(--wellbeing-teal-light)] text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{KCC_INFO.jabriyaOffice.tel}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="w-9 h-9 rounded-xl bg-[var(--wellbeing-sage)]/15 flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-[var(--wellbeing-sage)]" />
          </div>
          <p className="text-xs sm:text-sm text-[var(--wellbeing-text-secondary)]">
            All conversations with KCC are strictly confidential. Support available via WhatsApp, Email, and Phone with guaranteed 24-hour resolution.
          </p>
        </div>
      </div>
    </section>
  );
}
