"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, type LucideIcon } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { POWER_BUDDY_FORM_URL, BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  contentType: "resilience" | "buddy" | "manager" | "parents" | "bewell";
}

export default function SlideDrawer({
  isOpen,
  onClose,
  title,
  icon: Icon,
  iconBg,
  iconColor,
  contentType,
}: SlideDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      drawerRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[520px] md:w-[580px] bg-white shadow-2xl flex flex-col overflow-hidden outline-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex items-center gap-4 px-6 sm:px-8 py-5 border-b border-[#E2E8F0]">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: iconBg }}
              >
                <Icon className="w-5 h-5" style={{ color: iconColor }} />
              </div>
              <h2 className="text-xl font-black text-[#12192A] flex-1">{title}</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-[#64748B]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
              <DrawerContent type={contentType} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function DrawerContent({ type }: { type: string }) {
  switch (type) {
    case "resilience":
      return <ResilienceContent />;
    case "buddy":
      return <BuddyContent />;
    case "manager":
      return <ManagerContent />;
    case "parents":
      return <ParentsContent />;
    case "bewell":
      return <BeWellContent />;
    default:
      return null;
  }
}

function ChecklistItem({ text, defaultChecked = false }: { text: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-start gap-3 w-full text-left py-2.5 group"
    >
      <div
        className={`w-6 h-6 rounded-lg flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all duration-200 ${
          checked
            ? "bg-[#00B5E2] border-[#00B5E2]"
            : "border-[#CBD5E1] group-hover:border-[#94A3B8]"
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      <span
        className={`text-[15px] leading-relaxed transition-colors ${
          checked ? "text-[#94A3B8] line-through" : "text-[#334155]"
        }`}
      >
        {text}
      </span>
    </button>
  );
}

function FormEmbed({ url, label }: { url: string; label: string }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center">
      <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center mx-auto mb-4">
        <div className="w-6 h-6 rounded bg-[#00B5E2]/20" />
      </div>
      <p className="text-sm font-bold text-[#64748B] mb-1">{label}</p>
      <p className="text-xs text-[#94A3B8] mb-4">Microsoft Forms embed placeholder</p>
      <iframe
        src={url}
        width="100%"
        height="400"
        style={{ border: "none", borderRadius: "12px", minHeight: "350px" }}
        title={label}
      />
    </div>
  );
}

function ResilienceContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Breathing Exercises</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Practice these daily to build your resilience foundation.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="4-7-8 breathing: Inhale 4s, hold 7s, exhale 8s" />
          <ChecklistItem text="Box breathing: 4s inhale, 4s hold, 4s exhale, 4s hold" />
          <ChecklistItem text="Practice the 5-4-3-2-1 grounding technique" />
          <ChecklistItem text="2-minute body scan before bed" />
        </div>
      </div>

      <div className="h-px bg-[#E2E8F0]" />

      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Media Diet Rules</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Stay informed without spiraling.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Set 2 specific times per day for news (morning & evening)" />
          <ChecklistItem text="Use only 2-3 trusted, factual news sources" />
          <ChecklistItem text="Turn off push notifications for news apps" />
          <ChecklistItem text="Avoid social media as a primary news source" />
          <ChecklistItem text="If heart rate rises, stop and do breathing exercise" />
          <ChecklistItem text="Share facts, not fear -- verify before forwarding" />
        </div>
      </div>

      <div className="h-px bg-[#E2E8F0]" />

      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Crisis Readiness</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Practical preparation reduces anxiety.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Keep emergency numbers saved and accessible" />
          <ChecklistItem text="Prepare a go-bag with 3 days of essentials" />
          <ChecklistItem text="Know building emergency exits and meeting points" />
          <ChecklistItem text="Keep phone charged -- carry a power bank" />
          <ChecklistItem text="Identify 3-5 people in your support network" />
          <ChecklistItem text="Maintain 72-hour supply of any medications" />
        </div>
      </div>
    </div>
  );
}

function BuddyContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">How It Works</h3>
        <p className="text-sm text-[#64748B] mb-5">
          Get matched with a colleague for a grounding conversation. No judgment, just human connection.
        </p>

        <div className="space-y-3 mb-6">
          {[
            "Fill in the form with your details",
            "We match you with a buddy within minutes",
            "Have a grounding conversation together",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-black text-[#00B5E2]">{i + 1}</span>
              </div>
              <p className="text-[15px] text-[#334155]">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <FormEmbed url={POWER_BUDDY_FORM_URL} label="Power Buddy Sign-Up" />
    </div>
  );
}

function ManagerContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Empathy Guidelines</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Lead with care. These swipe files help you check in without causing alarm.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Use open questions: 'How are you managing today?'" />
          <ChecklistItem text="Share your own feelings briefly to normalize" />
          <ChecklistItem text="Listen actively -- avoid rushing to solutions" />
          <ChecklistItem text="Encourage Power Buddy sign-ups in your team" />
          <ChecklistItem text="Lead by example -- sign up yourself first" />
        </div>
      </div>

      <div className="h-px bg-[#E2E8F0]" />

      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Team Wellness Actions</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Practical steps for maintaining team stability.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Set boundaries around news consumption during work" />
          <ChecklistItem text="Maintain normal work rhythms where possible" />
          <ChecklistItem text="Encourage regular breaks and physical movement" />
          <ChecklistItem text="Small acts of normalcy: team coffee, brief standup" />
          <ChecklistItem text="Watch for signs someone needs professional help" />
          <ChecklistItem text="Have KCC number readily available for your team" />
        </div>
      </div>
    </div>
  );
}

function ParentsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Home Safety Preparation</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Practical steps for protecting your family.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Prepare go-bags with essentials for each family member" />
          <ChecklistItem text="Keep important documents in one accessible location" />
          <ChecklistItem text="Create a family communication plan" />
          <ChecklistItem text="Know building emergency exits" />
          <ChecklistItem text="Keep a 72-hour supply of essential medications" />
        </div>
      </div>

      <div className="h-px bg-[#E2E8F0]" />

      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Managing Family Anxiety</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Support your loved ones with calm, clear communication.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Maintain routines -- especially for children and elderly" />
          <ChecklistItem text="Limit news exposure for the whole family" />
          <ChecklistItem text="Talk openly but age-appropriately with children" />
          <ChecklistItem text="Reassure elderly family members with regular check-ins" />
          <ChecklistItem text="Practice breathing exercises together as a family" />
        </div>
      </div>

      <div className="h-px bg-[#E2E8F0]" />

      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">Pet Care During Crisis</h3>
        <p className="text-sm text-[#64748B] mb-4">
          Keep your pets safe and calm.
        </p>
        <div className="space-y-0.5">
          <ChecklistItem text="Prepare pet emergency kit (food, water, meds, carrier)" />
          <ChecklistItem text="Keep pets in a secure, quiet room during disturbances" />
          <ChecklistItem text="Maintain feeding schedules as much as possible" />
          <ChecklistItem text="Watch for stress signs: panting, hiding, aggression" />
          <ChecklistItem text="Identify pet-friendly emergency shelters in advance" />
        </div>
      </div>
    </div>
  );
}

function BeWellContent() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#12192A] mb-1">What You Get</h3>
        <p className="text-sm text-[#64748B] mb-5">
          A moment of calm in your inbox every morning. Quick tips, grounding exercises, and supportive messages.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { value: "2 min", label: "Quick read" },
            { value: "Daily", label: "Every morning" },
            { value: "Free", label: "Always" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FFF1F2] rounded-2xl p-4 text-center"
            >
              <div className="text-xl font-black text-[#E40068]">{stat.value}</div>
              <div className="text-xs text-[#64748B] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <FormEmbed url={BEWELL_SUBSCRIBE_FORM_URL} label="Subscribe to Be Well Emails" />
    </div>
  );
}
