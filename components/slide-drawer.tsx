"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check, type LucideIcon } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { POWER_BUDDY_FORM_URL, BEWELL_SUBSCRIBE_FORM_URL } from "@/data/content";

const EASE = [0.85, 0, 0.15, 1] as const;
const STAGGER_EASE = [0.32, 0.72, 0, 1] as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  contentType: "resilience" | "buddy" | "manager" | "parents" | "bewell";
}

export default function SlideDrawer({
  isOpen,
  onClose,
  title,
  icon: Icon,
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
      setTimeout(() => drawerRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[500px] md:w-[560px] bg-white border-l border-[#E2E8F0] flex flex-col overflow-hidden outline-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: STAGGER_EASE }}
          >
            <motion.div
              className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.25 }}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4" style={{ color: iconColor }} strokeWidth={1.5} />
                <h2 className="text-base font-semibold text-[#0F172A] tracking-tight">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </motion.div>

            <motion.div
              className="flex-1 overflow-y-auto px-6 sm:px-8 py-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <DrawerContent type={contentType} />
            </motion.div>
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

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 block mb-3">
      {text}
    </span>
  );
}

function CheckItem({ text, defaultChecked = false }: { text: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-start gap-3 w-full text-left py-2 group"
    >
      <div
        className={`w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center border transition-all duration-200 ${
          checked
            ? "bg-[#0F172A] border-[#0F172A]"
            : "border-slate-300 group-hover:border-slate-400"
        }`}
      >
        {checked && <Check className="w-3 h-3 text-white" strokeWidth={2} />}
      </div>
      <span
        className={`text-sm leading-relaxed transition-colors ${
          checked ? "text-slate-400 line-through" : "text-slate-600"
        }`}
      >
        {text}
      </span>
    </button>
  );
}

function FormPlaceholder({ label }: { label: string }) {
  return (
    <div className="border border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="border-b border-[#E2E8F0] px-5 py-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
          {label}
        </span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Full Name</label>
          <div className="h-10 border border-slate-200 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Phone Number</label>
          <div className="h-10 border border-slate-200 bg-white" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Preference</label>
          <div className="h-10 border border-slate-200 bg-white" />
        </div>
        <div className="pt-2">
          <div className="h-10 bg-[#0F172A] flex items-center justify-center">
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Submit</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E2E8F0] px-5 py-3">
        <span className="text-[11px] text-slate-400">Microsoft Forms -- Secure Embed</span>
      </div>
    </div>
  );
}

function ResilienceContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Breathing Exercises" />
        <div className="space-y-0.5">
          <CheckItem text="4-7-8 breathing: Inhale 4s, hold 7s, exhale 8s" />
          <CheckItem text="Box breathing: 4s inhale, 4s hold, 4s exhale, 4s hold" />
          <CheckItem text="Practice the 5-4-3-2-1 grounding technique" />
          <CheckItem text="2-minute body scan before bed" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Media Diet" />
        <div className="space-y-0.5">
          <CheckItem text="Set 2 specific times per day for news (morning & evening)" />
          <CheckItem text="Use only 2-3 trusted, factual news sources" />
          <CheckItem text="Turn off push notifications for news apps" />
          <CheckItem text="Avoid social media as a primary news source" />
          <CheckItem text="If heart rate rises, stop and do breathing exercise" />
          <CheckItem text="Share facts, not fear -- verify before forwarding" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Crisis Readiness" />
        <div className="space-y-0.5">
          <CheckItem text="Keep emergency numbers saved and accessible" />
          <CheckItem text="Prepare a go-bag with 3 days of essentials" />
          <CheckItem text="Know building emergency exits and meeting points" />
          <CheckItem text="Keep phone charged -- carry a power bank" />
          <CheckItem text="Identify 3-5 people in your support network" />
          <CheckItem text="Maintain 72-hour supply of any medications" />
        </div>
      </motion.div>
    </div>
  );
}

function BuddyContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="How It Works" />
        <p className="text-sm text-slate-500 leading-relaxed mb-5">
          Get matched with a colleague for a grounding conversation. No judgment, just human connection.
        </p>
        <div className="space-y-3">
          {[
            "Fill in the form with your details",
            "We match you with a buddy within minutes",
            "Have a grounding conversation together",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-6 h-6 flex items-center justify-center border border-slate-200 text-[11px] font-semibold text-slate-400 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem}>
        <FormPlaceholder label="Power Buddy -- Sign-Up Form" />
      </motion.div>
    </div>
  );
}

function ManagerContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Empathy Guidelines" />
        <div className="space-y-0.5">
          <CheckItem text="Use open questions: 'How are you managing today?'" />
          <CheckItem text="Share your own feelings briefly to normalize" />
          <CheckItem text="Listen actively -- avoid rushing to solutions" />
          <CheckItem text="Encourage Power Buddy sign-ups in your team" />
          <CheckItem text="Lead by example -- sign up yourself first" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Team Wellness Actions" />
        <div className="space-y-0.5">
          <CheckItem text="Set boundaries around news consumption during work" />
          <CheckItem text="Maintain normal work rhythms where possible" />
          <CheckItem text="Encourage regular breaks and physical movement" />
          <CheckItem text="Small acts of normalcy: team coffee, brief standup" />
          <CheckItem text="Watch for signs someone needs professional help" />
          <CheckItem text="Have KCC number readily available for your team" />
        </div>
      </motion.div>
    </div>
  );
}

function ParentsContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Home Safety" />
        <div className="space-y-0.5">
          <CheckItem text="Prepare go-bags with essentials for each family member" />
          <CheckItem text="Keep important documents in one accessible location" />
          <CheckItem text="Create a family communication plan" />
          <CheckItem text="Know building emergency exits" />
          <CheckItem text="Keep a 72-hour supply of essential medications" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Managing Anxiety" />
        <div className="space-y-0.5">
          <CheckItem text="Maintain routines -- especially for children and elderly" />
          <CheckItem text="Limit news exposure for the whole family" />
          <CheckItem text="Talk openly but age-appropriately with children" />
          <CheckItem text="Reassure elderly family members with regular check-ins" />
          <CheckItem text="Practice breathing exercises together as a family" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Pet Care" />
        <div className="space-y-0.5">
          <CheckItem text="Prepare pet emergency kit (food, water, meds, carrier)" />
          <CheckItem text="Keep pets in a secure, quiet room during disturbances" />
          <CheckItem text="Maintain feeding schedules as much as possible" />
          <CheckItem text="Watch for stress signs: panting, hiding, aggression" />
          <CheckItem text="Identify pet-friendly emergency shelters in advance" />
        </div>
      </motion.div>
    </div>
  );
}

function BeWellContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Daily Updates" />
        <p className="text-sm text-slate-500 leading-relaxed mb-5">
          Receive daily grounding exercises and regional support updates directly in your inbox. Each email takes less than 2 minutes to read.
        </p>
        <div className="grid grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0] mb-6">
          {[
            { value: "2 min", label: "Read time" },
            { value: "Daily", label: "Frequency" },
            { value: "Free", label: "Cost" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-4 text-center">
              <div className="text-lg font-semibold text-[#0F172A] tracking-tight">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-[0.15em] text-slate-400 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem}>
        <FormPlaceholder label="Be Well -- Email Subscription" />
      </motion.div>
    </div>
  );
}
