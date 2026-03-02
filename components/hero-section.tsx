"use client";

import { Phone, Shield, Users, Mail, HeartHandshake } from "lucide-react";
import { KCC_INFO } from "@/data/content";
import ScrollReveal, { ScrollRevealGroup } from "@/components/scroll-reveal";

const quickLinks = [
  {
    label: "Resource Toolkits",
    desc: "Guides for managers and individuals",
    href: "#resources",
    color: "var(--zn-magenta)",
    bg: "var(--zn-magenta-soft)",
    icon: Shield,
  },
  {
    label: "Power Buddy",
    desc: "Connect with a colleague now",
    href: "#buddy",
    color: "var(--zn-cyan)",
    bg: "var(--zn-cyan-soft)",
    icon: Users,
  },
  {
    label: "Be Well Emails",
    desc: "Daily wellbeing in your inbox",
    href: "#bewell",
    color: "var(--zn-magenta)",
    bg: "var(--zn-magenta-soft)",
    icon: Mail,
  },
  {
    label: "KCC Support",
    desc: "Professional confidential help",
    href: "#support",
    color: "var(--zn-cyan)",
    bg: "var(--zn-cyan-soft)",
    icon: HeartHandshake,
  },
];

export default function HeroSection() {
  return (
    <section className="pt-16 sm:pt-[72px]">
      <div className="section-navy relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-20 sm:py-28 md:py-36 relative z-10">
          <div className="max-w-2xl">
            <p className="text-[var(--zn-magenta-light)] text-base sm:text-lg font-bold tracking-wide uppercase mb-5">
              Zain Wellbeing
            </p>

            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-[1.02] mb-6 tracking-tight">
              You Are<br />
              <span className="bg-gradient-to-r from-[var(--zn-magenta)] to-[var(--zn-magenta-light)] bg-clip-text text-transparent">
                Not Alone.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 max-w-lg mb-10 leading-relaxed">
              Immediate support for every Zain colleague. Access resources, connect with a buddy, find professional help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#resources"
                className="inline-flex items-center justify-center bg-[var(--zn-magenta)] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[var(--zn-magenta-light)] transition-colors"
              >
                Access Resources
              </a>
              <a
                href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/15 transition-colors border border-white/10"
              >
                <Phone className="w-5 h-5" />
                Call KCC
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
          <div className="absolute top-[12%] right-[8%] w-[280px] h-[280px] border-[35px] border-white/[0.04] rounded-full" />
          <div className="absolute bottom-[18%] right-[22%] w-[140px] h-[140px] border-[20px] border-white/[0.04] rounded-full" />
          <div className="absolute top-[50%] right-[3%] w-[80px] h-[80px] bg-[var(--zn-cyan)]/10 rounded-full" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-10 sm:-mt-12 relative z-20">
        <ScrollRevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickLinks.map((item) => (
            <ScrollReveal key={item.label} animation="fade-up">
              <a
                href={item.href}
                className="block bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[var(--zn-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.bg }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div className="text-base sm:text-lg font-bold text-[var(--zn-navy)] group-hover:text-[var(--zn-magenta)] transition-colors leading-snug">
                  {item.label}
                </div>
                <div className="text-sm text-[var(--zn-text-muted)] mt-1">
                  {item.desc}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
