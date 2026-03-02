"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { POWER_BUDDY_FORM_URL, BEWELL_SUBSCRIBE_FORM_URL, KCC_INFO, BEWELL_EMAIL } from "@/data/content";
import type { CardData } from "@/components/bento-card";

const EASE = [0.85, 0, 0.15, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 350, damping: 35 };

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const staggerContainerReduced = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const staggerItemReduced = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

interface ExpandedCardProps {
  card: CardData | null;
  onClose: () => void;
}

export default function ExpandedCard({ card, onClose }: ExpandedCardProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
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
    <AnimatePresence mode="sync">
      {card && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-start sm:items-start justify-center overflow-y-auto py-0 sm:py-12 px-0 sm:px-4">
            <motion.div
              ref={modalRef}
              layoutId={card.id}
              role="dialog"
              aria-modal="true"
              aria-label={card.title}
              tabIndex={-1}
              className="relative w-full sm:max-w-2xl min-h-screen sm:min-h-0 bg-white border-0 sm:border border-[#E2E8F0] outline-none"
              transition={prefersReducedMotion ? { duration: 0 } : SPRING}
              style={{
                borderLeft: card.leftBorder ? `4px solid ${card.leftBorder}` : undefined,
              }}
            >
              <motion.div
                className="sticky top-0 z-10 bg-white flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-[#E2E8F0]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                transition={{ duration: 0.3, delay: prefersReducedMotion ? 0 : 0.2 }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <card.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: card.iconColor }} strokeWidth={1.5} aria-hidden="true" />
                  <h2 className="text-base sm:text-lg font-semibold text-[#0F172A] tracking-tight truncate">{card.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="min-w-[44px] min-h-[44px] w-11 h-11 sm:w-11 sm:h-11 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors flex-shrink-0 -mr-1"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 sm:w-4 sm:h-4" strokeWidth={1.5} aria-hidden="true" />
                </button>
              </motion.div>

              <motion.div
                className="px-4 sm:px-8 py-5 sm:py-6 pb-20 sm:pb-6"
                variants={prefersReducedMotion ? staggerContainerReduced : staggerContainer}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <CardContent type={card.id} prefersReducedMotion={prefersReducedMotion} />
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function CardContent({ type, prefersReducedMotion }: { type: string; prefersReducedMotion: boolean }) {
  switch (type) {
    case "resilience":
      return <ResilienceContent prefersReducedMotion={prefersReducedMotion} />;
    case "buddy":
      return <BuddyContent prefersReducedMotion={prefersReducedMotion} />;
    case "manager":
      return <ManagerContent prefersReducedMotion={prefersReducedMotion} />;
    case "parents":
      return <ParentsContent prefersReducedMotion={prefersReducedMotion} />;
    case "bewell":
      return <BeWellContent prefersReducedMotion={prefersReducedMotion} />;
    case "kcc":
      return <KCCContent prefersReducedMotion={prefersReducedMotion} />;
    default:
      return null;
  }
}

function useStaggerItem(prefersReducedMotion: boolean) {
  return prefersReducedMotion ? staggerItemReduced : staggerItem;
}

function SectionLabel({ text }: { text: string }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
      {text}
    </span>
  );
}

function GuidanceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-b border-[#E2E8F0] pb-4 sm:pb-5 last:border-0 last:pb-0">
      <h4 className="text-[13px] sm:text-sm font-semibold text-[#0F172A] mb-1 sm:mb-1.5">{title}</h4>
      <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">{text}</p>
    </div>
  );
}

function IframeEmbed({ src, label }: { src: string; label: string }) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setTimedOut(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [loaded]);

  if (timedOut && !loaded) {
    return (
      <div className="relative w-full h-[200px] overflow-hidden bg-white border border-slate-200 flex flex-col items-center justify-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Unable to load {label}
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2.5 text-[13px] sm:text-sm font-semibold tracking-tight hover:bg-[#1E293B] transition-colors"
        >
          Open in new tab
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[600px] overflow-hidden bg-white border border-slate-200">
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
      <div className="border-b border-[#E2E8F0] px-4 sm:px-5 py-3">
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
          {label}
        </span>
      </div>
      <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
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
      <div className="border-t border-[#E2E8F0] px-4 sm:px-5 py-3">
        <span className="text-[10px] text-slate-400 tracking-wide">Microsoft Forms -- Secure Embed</span>
      </div>
    </div>
  );
}

function ResilienceContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <SectionLabel text="Wellbeing Guidance" />
        <div className="space-y-4 sm:space-y-5">
          <GuidanceCard
            title="Regulate Before You React"
            text="When you feel your body tense or your thoughts racing, pause. Take one slow breath in through your nose and a longer breath out through your mouth. A longer exhale signals safety to your nervous system."
          />
          <GuidanceCard
            title="Try Box Breathing"
            text="Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. Repeat for one minute. This helps slow your heart rate and calm your body."
          />
          <GuidanceCard
            title="Ground Yourself in the Present"
            text="Look around and name five things you can see, four things you can feel, three things you can hear. This brings your brain out of future worry and back into the present moment."
          />
          <GuidanceCard
            title="Release Physical Tension"
            text="Notice your jaw, shoulders, and hands. Gently unclench, drop your shoulders, and press your feet firmly into the floor. Your body often holds stress before your mind processes it."
          />
        </div>
      </motion.div>
      <motion.div variants={item} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={item}>
        <SectionLabel text="Daily Practices" />
        <div className="space-y-4 sm:space-y-5">
          <GuidanceCard
            title="Reset Through Temperature"
            text="Wash your hands with cool water or hold something cold for 30 seconds. Sudden temperature shifts can help regulate your nervous system quickly."
          />
          <GuidanceCard
            title="Create Small Anchors in Your Day"
            text="Keep simple routines such as making your bed, stepping outside for fresh air, or going for a short walk. Small actions restore a sense of control when the world feels uncertain."
          />
          <GuidanceCard
            title="Protect Your Mental Space"
            text="Choose specific times to check the news instead of constant scrolling. If you notice your heart rate increasing, step away and reset."
          />
          <GuidanceCard
            title="Stay Connected"
            text="Reach out to someone you trust. A short conversation can calm your nervous system and remind you that you are not navigating this alone."
          />
        </div>
      </motion.div>
    </div>
  );
}

function ManagerContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <SectionLabel text="Supporting Your Team" />
        <div className="space-y-4 sm:space-y-5">
          <GuidanceCard
            title="Acknowledge and Validate"
            text='Start conversations by recognizing that global events are heavy. A simple, "I know there is a lot happening right now, and I want to check in on how you are feeling," goes a long way.'
          />
          <GuidanceCard
            title="Share Existing Wellbeing Resources"
            text="Remind your team that free Kuwait Counselling Centre (KCC) sessions are available and free to all Zainers. Encourage them to use these sessions as a dedicated space for their wellbeing."
          />
          <GuidanceCard
            title="Normalize Brief Check-ins"
            text='Carve out five to ten minutes in one-on-ones specifically for a "pulse check" that is not about tasks. Ask, "What kind of support can I offer today?"'
          />
        </div>
      </motion.div>
      <motion.div variants={item} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={item}>
        <SectionLabel text="Leadership Actions" />
        <div className="space-y-4 sm:space-y-5">
          <GuidanceCard
            title="Honor Personal Space"
            text="Support your team members' choice in how much they wish to share. Ensure they know you are available for them whenever they are ready to talk, without any pressure to do so."
          />
          <GuidanceCard
            title="Adjust Workload Expectations"
            text="Be proactive in asking if deadlines need to be shifted. If someone is struggling to focus due to external stress, offer to help them prioritize their most essential tasks."
          />
          <GuidanceCard
            title="Lead by Example"
            text="Share when you are taking a break to disconnect from the news or clear your head. When you acknowledge your own need for a mental break, it gives the team the confidence to do the same."
          />
        </div>
      </motion.div>
    </div>
  );
}

function BuddyContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  const isRealForm = !POWER_BUDDY_FORM_URL.includes("REPLACE_WITH");
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <SectionLabel text="How It Works" />
        <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-5">
          Get matched with a Zain colleague for a grounding conversation. No judgment, just human connection.
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
              <p className="text-[13px] sm:text-sm text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={item}>
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Status</p>
          <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed">
            The Buddy System automation is currently being set up. Check back soon for the sign-up form.
          </p>
        </div>
      </motion.div>
      <motion.div variants={item}>
        {isRealForm ? (
          <IframeEmbed src={POWER_BUDDY_FORM_URL} label="Power Buddy Form" />
        ) : (
          <FormPlaceholder label="Power Buddy -- Sign-Up Form (Coming Soon)" />
        )}
      </motion.div>
    </div>
  );
}

function ParentsContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <div className="border-l-2 border-[#EA580C] pl-3 sm:pl-4 py-2 mb-5 sm:mb-6">
          <p className="text-[13px] sm:text-sm text-slate-600 italic">
            &ldquo;Put on your own oxygen mask first. Your children watch you to see if they are safe, so your calm is their best protection.&rdquo;
          </p>
        </div>
      </motion.div>
      <motion.div variants={item}>
        <SectionLabel text="How to Take Care of Your Children" />
        <div className="space-y-4 sm:space-y-5">
          <GuidanceCard
            title="Stay Calm"
            text="Children copy your feelings. Speak quietly, stay calm, and offer them your presence in your home."
          />
          <GuidanceCard
            title="Mute the News"
            text="Turn off the TV and social media when your children are around. Limit their consumption of media to protect their mental wellbeing."
          />
          <GuidanceCard
            title="Validate Them"
            text="Avoid dismissing their feelings and asking them to be brave, but reassure them that you are with them and that they are safe with you."
          />
          <GuidanceCard
            title="Reassure Them of Their Safety"
            text="Tell them that many brave people and strong systems are working 24/7 to keep everyone safe. There are sirens outside, but there are people and systems protecting us."
          />
          <GuidanceCard
            title="Keep Moving & No-Phone Quality Time"
            text="For 20 minutes, offer them your undivided attention. Let them play, jump, or dance inside the house. This helps them release their nervous energy."
          />
          <GuidanceCard
            title="Relax Before Bed"
            text="Spend 15 minutes reading or talking about happy things. Remind them that they are in a safe, peaceful place. Utilize white noise during sleep time to minimize interrupted sleep."
          />
        </div>
      </motion.div>
      <motion.div variants={item} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={item}>
        <SectionLabel text="Anchor Them in Faith" />
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5">
          <p className="text-right text-base sm:text-lg leading-relaxed text-[#0F172A] mb-2" dir="rtl">
            ﴿ الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
          </p>
          <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed italic">
            &ldquo;Those who believe, and whose hearts find comfort in the remembrance of Allah. Truly, in the remembrance of Allah do hearts find comfort.&rdquo;
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-3">
            Surah Ar-Ra&rsquo;d (13:28)
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function BeWellContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  const isRealForm = !BEWELL_SUBSCRIBE_FORM_URL.includes("REPLACE_WITH");
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <SectionLabel text="Daily Support Emails" />
        <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-5">
          Subscribe to receive a daily BE WELL email with comforting words, connection, and practical wellbeing support during these difficult times.
        </p>
      </motion.div>
      <motion.div variants={item}>
        {isRealForm ? (
          <IframeEmbed src={BEWELL_SUBSCRIBE_FORM_URL} label="BE WELL Subscription" />
        ) : (
          <FormPlaceholder label="Be Well -- Email Subscription" />
        )}
      </motion.div>
    </div>
  );
}

function KCCContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const item = useStaggerItem(prefersReducedMotion);
  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div variants={item}>
        <SectionLabel text="Free Counselling Sessions" />
        <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-4 sm:mb-5">
          {KCC_INFO.supportNote}
        </p>
        <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 space-y-4">
          <div className="flex items-start gap-3">
            <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" strokeWidth={1.5} aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">
                {KCC_INFO.bookingNote}
              </p>
              <a
                href={`https://wa.me/${KCC_INFO.whatsapp.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-[#0F172A] text-white px-4 py-2.5 text-[13px] sm:text-sm font-semibold tracking-tight hover:bg-[#1E293B] transition-colors active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                WhatsApp {KCC_INFO.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={item}>
        <SectionLabel text="Mental Health First Aid (MHFA)" />
        <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-4">
          Your Mental Health First Aiders (MHFAs), Zain employees certified to support you, are also here for you. These conversations are confidential.
        </p>
        <div className="space-y-3">
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-3.5 sm:p-4">
            <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">
              You can find your MHFAs&rsquo; contact details by visiting the <strong>BE WELL</strong> tab on the Zainers App and selecting <strong>&ldquo;MHFAs at Zain.&rdquo;</strong>
            </p>
          </div>
          <div className="border border-[#E2E8F0] bg-[#F8FAFC] p-3.5 sm:p-4">
            <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed">
              If you don&rsquo;t have access to Zainers or need any additional support, please email{" "}
              <a href={`mailto:${BEWELL_EMAIL}`} className="font-semibold text-[#0F172A] hover:text-[#00B5E2] transition-colors underline underline-offset-2">
                {BEWELL_EMAIL}
              </a>{" "}
              and we&rsquo;ll share the information with you directly.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="h-px bg-[#E2E8F0]" />
      <motion.div variants={item}>
        <div className="border-l-2 border-[#E40068] pl-3 sm:pl-4 py-2">
          <p className="text-[13px] sm:text-sm text-slate-600 italic">
            &ldquo;Reaching out is a sign of strength, not weakness. All conversations are strictly confidential.&rdquo;
          </p>
        </div>
      </motion.div>
    </div>
  );
}
