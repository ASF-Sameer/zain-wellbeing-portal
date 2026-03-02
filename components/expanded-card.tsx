"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { POWER_BUDDY_FORM_URL, BEWELL_SUBSCRIBE_FORM_URL, KCC_INFO } from "@/data/content";
import type { CardData } from "@/components/bento-card";

const EASE = [0.85, 0, 0.15, 1] as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.5,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

interface ExpandedCardProps {
  card: CardData | null;
  onClose: () => void;
}

export default function ExpandedCard({ card, onClose }: ExpandedCardProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (card) {
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => modalRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [card, handleKeyDown]);

  return (
    <AnimatePresence>
      {card && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 sm:py-12 px-4">
            <motion.div
              ref={modalRef}
              layoutId={card.id}
              role="dialog"
              aria-modal="true"
              aria-label={card.title}
              tabIndex={-1}
              className="relative w-full max-w-2xl bg-white border border-[#E2E8F0] outline-none"
              transition={{ duration: 0.7, ease: EASE }}
              style={{
                borderLeft: card.leftBorder ? `4px solid ${card.leftBorder}` : undefined,
              }}
            >
              <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-3">
                  <card.icon className="w-5 h-5" style={{ color: card.iconColor }} strokeWidth={1.5} />
                  <h2 className="text-lg font-semibold text-[#0F172A] tracking-tight">{card.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              <motion.div
                className="px-6 sm:px-8 py-6"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <CardContent type={card.id} />
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function CardContent({ type }: { type: string }) {
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
    case "kcc":
      return <KCCContent />;
    default:
      return null;
  }
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
      {text}
    </span>
  );
}

function CheckItem({ text, defaultChecked = false }: { text: string; defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  const id = useRef(`chk-${Math.random().toString(36).slice(2, 9)}`).current;
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-4 w-full text-left p-4 bg-slate-50 cursor-pointer group transition-colors hover:bg-slate-100"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="peer sr-only"
      />
      <div
        className={`w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center border-2 transition-all duration-200 ${
          checked
            ? "bg-[#00B5E2] border-[#00B5E2]"
            : "border-slate-300 group-hover:border-slate-400"
        }`}
      >
        {checked && (
          <div className="w-2 h-3 border-r-2 border-b-2 border-white rotate-45 -translate-y-px" />
        )}
      </div>
      <span
        className={`text-sm leading-relaxed transition-colors ${
          checked ? "text-slate-400 line-through" : "text-slate-600"
        }`}
      >
        {text}
      </span>
    </label>
  );
}

function IframeEmbed({ src, label }: { src: string; label: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-white border border-slate-200">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white">
          <div className="w-8 h-8 border-2 border-slate-200 border-t-[#00B5E2] animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Loading {label}
          </span>
        </div>
      )}
      <iframe
        src={src}
        className="w-full h-full border-0 transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        title={label}
        allow="clipboard-write"
      />
    </div>
  );
}

function FormPlaceholder({ label }: { label: string }) {
  return (
    <div className="border border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="border-b border-[#E2E8F0] px-5 py-3">
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
          {label}
        </span>
      </div>
      <div className="p-5 space-y-5">
        <div>
          <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Full Name</label>
          <div className="h-10 border-b-2 border-slate-200 bg-transparent" />
        </div>
        <div>
          <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Phone Number</label>
          <div className="h-10 border-b-2 border-slate-200 bg-transparent" />
        </div>
        <div>
          <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-2">Preference</label>
          <div className="h-10 border-b-2 border-slate-200 bg-transparent" />
        </div>
        <div className="pt-2">
          <div className="h-10 bg-[#121626] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Submit</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E2E8F0] px-5 py-3">
        <span className="text-[10px] text-slate-400 tracking-wide">Microsoft Forms -- Secure Embed</span>
      </div>
    </div>
  );
}

function ResilienceContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Breathing Exercises" />
        <div className="space-y-px">
          <CheckItem text="4-7-8 breathing: Inhale 4s, hold 7s, exhale 8s" />
          <CheckItem text="Box breathing: 4s inhale, 4s hold, 4s exhale, 4s hold" />
          <CheckItem text="Practice the 5-4-3-2-1 grounding technique" />
          <CheckItem text="2-minute body scan before bed" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Media Diet" />
        <div className="space-y-px">
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
        <div className="space-y-px">
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
  const isRealForm = !POWER_BUDDY_FORM_URL.includes("REPLACE_WITH");
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
              <span className="w-6 h-6 flex items-center justify-center border border-slate-200 text-[10px] font-bold text-slate-400 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem}>
        {isRealForm ? (
          <IframeEmbed src={POWER_BUDDY_FORM_URL} label="Power Buddy Form" />
        ) : (
          <FormPlaceholder label="Power Buddy -- Sign-Up Form" />
        )}
      </motion.div>
    </div>
  );
}

function ManagerContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Swipe File: Opening Lines" />
        <div className="space-y-3">
          {[
            "How are you managing today?",
            "I wanted to check in -- how are things at home?",
            "I've been feeling [X] this week too. How about you?",
            "Is there anything I can take off your plate right now?",
          ].map((line, i) => (
            <div
              key={i}
              className="border-l-2 border-[#00B5E2] pl-4 py-2"
            >
              <p className="text-sm text-slate-600 italic">&ldquo;{line}&rdquo;</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Empathy Guidelines" />
        <div className="space-y-px">
          <CheckItem text="Use open questions -- avoid yes/no framing" />
          <CheckItem text="Share your own feelings briefly to normalize" />
          <CheckItem text="Listen actively -- avoid rushing to solutions" />
          <CheckItem text="Encourage Power Buddy sign-ups in your team" />
          <CheckItem text="Lead by example -- sign up yourself first" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Team Wellness Actions" />
        <div className="space-y-px">
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
        <div className="space-y-px">
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
        <div className="space-y-px">
          <CheckItem text="Maintain routines -- especially for children and elderly" />
          <CheckItem text="Limit news exposure for the whole family" />
          <CheckItem text="Talk openly but age-appropriately with children" />
          <CheckItem text="Reassure elderly family members with regular check-ins" />
          <CheckItem text="Practice breathing exercises together as a family" />
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="How to Take Care of Your Children" />
        <p className="text-sm text-slate-500 leading-relaxed mb-4 italic">
          Put your own oxygen mask on first. Your children watch you to see if they are safe, so your calm is their best protection.
        </p>
        <div className="space-y-px">
          <CheckItem text="Stay Calm: Children copy your feelings. Speak quietly, stay calm, and offer them your presence in your home." />
          <CheckItem text="Mute the News: Turn off the TV and social media when your children are around. Limit their consumption of media to protect their mental wellbeing." />
          <CheckItem text="Validate Them: Avoid dismissing their feelings and asking them to be brave, but reassure them that you are with them and that they are safe with you." />
          <CheckItem text="Reassure them of their safety: Tell them that many brave people and strong systems are working 24/7 to keep everyone safe. There's sirens outside, but there are people and systems protecting us." />
          <CheckItem text="Keep Moving & Assign No-Phone Quality Time: For 20 minutes, offer them your undivided attention. Let them play, jump, or dance inside the house. This helps them release their nervous energy." />
          <CheckItem text="Relax Before Bed: Spend 15 minutes reading or talking about happy things. Remind them that they are in a safe, peaceful place. Utilize white noise during sleep time to minimize interrupted sleep." />
        </div>
        <div className="mt-5 border border-[#E2E8F0] bg-[#F8FAFC] p-5">
          <p className="text-right text-lg leading-relaxed text-[#0F172A] mb-2" dir="rtl">
            ﴿ الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
          </p>
          <p className="text-sm text-slate-500 leading-relaxed italic">
            &ldquo;Those who believe, and whose hearts find comfort in the remembrance of Allah. Surely in the remembrance of Allah do hearts find comfort.&rdquo;
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-3">
            Surah Ar-Ra&rsquo;d (13:28)
          </p>
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Pet Care" />
        <div className="space-y-px">
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
  const isRealForm = !BEWELL_SUBSCRIBE_FORM_URL.includes("REPLACE_WITH");
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
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={staggerItem}>
        {isRealForm ? (
          <IframeEmbed src={BEWELL_SUBSCRIBE_FORM_URL} label="Be Well Subscription" />
        ) : (
          <FormPlaceholder label="Be Well -- Email Subscription" />
        )}
      </motion.div>
    </div>
  );
}

function KCCContent() {
  return (
    <div className="space-y-8">
      <motion.div variants={staggerItem}>
        <SectionLabel text="Professional Support" />
        <p className="text-sm text-slate-500 leading-relaxed mb-5">
          {KCC_INFO.supportNote}
        </p>
        <div className="border-l-2 border-[#E40068] pl-4 py-2 mb-6">
          <p className="text-sm text-slate-600 italic">
            &ldquo;Reaching out is a sign of strength, not weakness. All conversations are strictly confidential.&rdquo;
          </p>
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Head Office" />
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-slate-600">{KCC_INFO.headOffice.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" strokeWidth={1.5} />
            <a href={`tel:${KCC_INFO.headOffice.tel.replace(/\s/g, "")}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors">
              {KCC_INFO.headOffice.tel}
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="Jabriya Office" />
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-5 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-slate-600">{KCC_INFO.jabriyaOffice.address}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" strokeWidth={1.5} />
            <a href={`tel:${KCC_INFO.jabriyaOffice.tel.replace(/\s/g, "")}`} className="text-sm font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors">
              {KCC_INFO.jabriyaOffice.tel}
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div variants={staggerItem} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={staggerItem}>
        <SectionLabel text="When to Reach Out" />
        <div className="space-y-px">
          <CheckItem text="Persistent sleep disruption lasting more than a few days" />
          <CheckItem text="Inability to focus or complete daily tasks" />
          <CheckItem text="Withdrawal from social interaction or team activities" />
          <CheckItem text="Feelings of hopelessness or overwhelming anxiety" />
          <CheckItem text="Physical symptoms: headaches, chest tightness, fatigue" />
          <CheckItem text="Increased reliance on substances to cope" />
        </div>
      </motion.div>
    </div>
  );
}
