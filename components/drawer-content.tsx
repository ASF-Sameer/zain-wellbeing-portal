"use client";

import ChecklistItem from "@/components/checklist-item";
import {
  forYouChecklist,
  forParentsChecklist,
  managerToolkit,
  individualToolkit,
  POWER_BUDDY_FORM_URL,
  BEWELL_SUBSCRIBE_FORM_URL,
  KCC_INFO,
} from "@/data/content";
import { Phone, Users, Mail, ArrowUpRight, Shield } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
      {children}
    </p>
  );
}

function ToolkitCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5 mb-3">
      <h4 className="font-semibold text-[var(--zn-navy)] text-[15px] mb-2">
        {title}
      </h4>
      <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}

function ForYouContent() {
  return (
    <div>
      <SectionLabel>Daily Grounding Checklist</SectionLabel>
      <div className="divide-y divide-slate-100">
        {forYouChecklist.map((item) => (
          <ChecklistItem key={item.id} label={item.label} />
        ))}
      </div>

      <div className="mt-8">
        <SectionLabel>Resilience Toolkit</SectionLabel>
        {individualToolkit.map((item) => (
          <ToolkitCard key={item.id} title={item.title} content={item.content} />
        ))}
      </div>

      <KCCBanner />
    </div>
  );
}

function ForManagersContent() {
  return (
    <div>
      <SectionLabel>Manager Leadership Guides</SectionLabel>
      {managerToolkit.map((item) => (
        <ToolkitCard key={item.id} title={item.title} content={item.content} />
      ))}
      <KCCBanner />
    </div>
  );
}

function ForParentsContent() {
  return (
    <div>
      <SectionLabel>Family & Care Checklist</SectionLabel>
      <div className="divide-y divide-slate-100">
        {forParentsChecklist.map((item) => (
          <ChecklistItem key={item.id} label={item.label} />
        ))}
      </div>
      <KCCBanner />
    </div>
  );
}

function PowerBuddyContent() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#00B5E2]/10 to-[#00D4AA]/10 rounded-2xl p-6 mb-6">
        <Users className="w-8 h-8 text-[#00B5E2] mb-3" />
        <h3 className="font-bold text-[var(--zn-navy)] text-lg mb-2">
          How It Works
        </h3>
        <div className="space-y-3">
          {[
            "Fill in the form below with your name and contact",
            "We match you with a colleague within minutes",
            "Have a grounding conversation together",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-[#00B5E2] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <p className="text-sm text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionLabel>Sign Up Form</SectionLabel>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <iframe
          src={POWER_BUDDY_FORM_URL}
          width="100%"
          height="480"
          style={{ border: "none", minHeight: "400px" }}
          title="Power Buddy Sign-Up Form"
        />
      </div>
      <a
        href={POWER_BUDDY_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[#00B5E2] text-sm font-semibold mt-3 hover:underline"
      >
        Open in new tab
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function DailyBewellContent() {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#E40084]/10 to-[#FF6B35]/10 rounded-2xl p-6 mb-6">
        <Mail className="w-8 h-8 text-[#E40084] mb-3" />
        <h3 className="font-bold text-[var(--zn-navy)] text-lg mb-2">
          Daily Wellbeing in Your Inbox
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Quick tips, grounding exercises, and supportive messages that take less than 2 minutes. Delivered every morning.
        </p>
        <div className="flex gap-6">
          {[
            { value: "2 min", label: "Quick read" },
            { value: "Daily", label: "Every morning" },
            { value: "Free", label: "Always" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-bold text-[var(--zn-navy)]">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <SectionLabel>Subscribe</SectionLabel>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <iframe
          src={BEWELL_SUBSCRIBE_FORM_URL}
          width="100%"
          height="340"
          style={{ border: "none", minHeight: "280px" }}
          title="Be Well Email Subscription Form"
        />
      </div>
    </div>
  );
}

function KCCBanner() {
  return (
    <div className="mt-8 bg-[var(--zn-navy)] rounded-2xl p-5 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="w-5 h-5 text-[#00B5E2]" />
        <span className="text-xs font-semibold text-[#00B5E2] uppercase tracking-wider">
          Professional Support
        </span>
      </div>
      <p className="text-sm text-white/70 mb-3">
        All conversations are strictly confidential.
      </p>
      <a
        href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`}
        className="flex items-center gap-2 text-[#00B5E2] font-semibold"
      >
        <Phone className="w-4 h-4" />
        {KCC_INFO.headOffice.tel}
      </a>
    </div>
  );
}

export default function DrawerContent({
  categoryId,
}: {
  categoryId: string;
}) {
  switch (categoryId) {
    case "for-you":
      return <ForYouContent />;
    case "for-managers":
      return <ForManagersContent />;
    case "for-parents":
      return <ForParentsContent />;
    case "power-buddy":
      return <PowerBuddyContent />;
    case "daily-bewell":
      return <DailyBewellContent />;
    default:
      return null;
  }
}
