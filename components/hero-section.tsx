"use client";

import { Phone, ChevronDown } from "lucide-react";
import { KCC_INFO } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="pt-[72px]">
      <div className="bg-gradient-to-br from-[#1A2744] via-[#2A3B5E] to-[#1A2744] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[var(--bw-pink-light)] text-sm sm:text-base font-bold tracking-wide uppercase mb-4 sm:mb-5">
              Zain Wellbeing Crisis Portal
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5 sm:mb-7">
              You Are<br />
              <span className="bg-gradient-to-r from-[var(--bw-pink)] to-[var(--bw-pink-light)] bg-clip-text text-transparent">
                Not Alone.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-md mb-8 sm:mb-10 leading-relaxed">
              Immediate support for every Zain colleague. Access resources, connect with a buddy, find professional help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#resources"
                className="inline-flex items-center justify-center bg-[var(--bw-pink)] text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-[var(--bw-pink-light)] transition-colors"
              >
                Access Resources
              </a>
              <a
                href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-lg text-base font-bold hover:bg-white/15 transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4" />
                Call KCC Now
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07] hidden md:block">
          <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] border-[40px] border-white rounded-full" />
          <div className="absolute bottom-[20%] right-[25%] w-[150px] h-[150px] border-[25px] border-white rounded-full" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 -mt-8 sm:-mt-10 relative z-20 gap-3 sm:gap-4">
          {[
            { label: "Power Buddy", desc: "Peer support system", href: "#buddy", color: "var(--bw-teal)" },
            { label: "Be Well Emails", desc: "Daily wellbeing tips", href: "#bewell", color: "var(--bw-pink)" },
            { label: "Resource Toolkits", desc: "Guides for teams", href: "#resources", color: "var(--bw-navy)" },
            { label: "KCC Support", desc: "Professional help", href: "#support", color: "var(--bw-teal)" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[var(--bw-border)] hover:shadow-md transition-shadow group"
            >
              <div
                className="w-2 h-2 rounded-full mb-3"
                style={{ background: item.color }}
              />
              <div className="text-sm sm:text-base font-bold text-[var(--bw-navy)] group-hover:text-[var(--bw-pink)] transition-colors">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-[var(--bw-text-muted)] mt-0.5">
                {item.desc}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
