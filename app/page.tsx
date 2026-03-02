"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Home,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import Loader from "@/components/loader";
import EditorialCard, { type CardData } from "@/components/bento-card";
import ExpandedCard from "@/components/expanded-card";
import StickyFooter from "@/components/sticky-footer";

const SPRING = { type: "spring" as const, stiffness: 350, damping: 35 };

const cards: CardData[] = [
  {
    id: "resilience",
    title: "For You",
    subtitle:
      "Regulate, ground, and protect your wellbeing with practical guidance for uncertain times.",
    icon: HeartPulse,
    iconColor: "#0D9488",
    span: 2,
  },
  {
    id: "manager",
    title: "For Managers",
    subtitle:
      "Acknowledge, validate, and lead your team with empathy during difficult times.",
    icon: ShieldCheck,
    iconColor: "#4F46E5",
  },
  {
    id: "parents",
    title: "For Parents",
    subtitle:
      "Your calm is their best protection. Practical guidance for supporting your children.",
    icon: Home,
    iconColor: "#EA580C",
  },
  {
    id: "buddy",
    title: "Power Buddy System",
    subtitle:
      "Instantly connect with a Zain colleague to talk, listen, or share a distraction. Available now.",
    icon: Users,
    iconColor: "#00B5E2",
    span: 2,
    leftBorder: "#00B5E2",
    label: "Urgent",
  },
  {
    id: "kcc",
    title: "Kuwait Counselling Centre (KCC)",
    subtitle:
      "Free confidential counselling sessions for all Zainers. WhatsApp to book.",
    icon: Phone,
    iconColor: "#E40068",
    leftBorder: "#E40068",
    label: "Emergency",
  },
  {
    id: "bewell",
    title: "Daily BE WELL Support Emails",
    subtitle:
      "Subscribe to receive a daily email with comforting words, connection, and practical wellbeing support.",
    icon: Mail,
    iconColor: "#94A3B8",
    span: 2,
    dark: true,
  },
];

const EASE = [0.85, 0, 0.15, 1] as const;

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

  const isExpanded = !!activeCard;

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const handleLoaderComplete = useCallback(() => {
    setReady(true);
    setShowLoader(false);
  }, []);

  return (
    <LayoutGroup>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}

      <motion.div
        id="app-wrapper"
        className={`bg-white min-h-screen relative origin-top ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        animate={
          isExpanded
            ? {
                scale: 0.94,
                y: "2vh",
                filter: "blur(4px) brightness(0.75)",
                borderRadius: "24px",
              }
            : {
                scale: 1,
                y: "0vh",
                filter: "blur(0px) brightness(1)",
                borderRadius: "0px",
              }
        }
        transition={SPRING}
        style={{ pointerEvents: isExpanded ? "none" : "auto" }}
      >
        <section className="px-4 sm:px-8 pt-8 sm:pt-16 pb-10 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            >
              <img
                src="/images/zain-logo.png"
                alt="Zain"
                className="h-7 sm:h-9 w-auto invert"
              />
              <div className="w-px h-6 sm:h-7 bg-slate-200" />
              <span
                className="text-base sm:text-lg font-bold tracking-[0.2em] text-[#E40068] uppercase"
                style={{ fontFamily: "'Zain', sans-serif" }}
              >
                BE WELL
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(1.8rem,7vw,4rem)] font-bold text-[#0F172A] leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Zain', sans-serif" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              Standing Together.
            </motion.h1>

            <motion.div
              className="w-12 sm:w-16 h-[3px] sm:h-[4px] bg-[#E40068] mt-4 sm:mt-6 mb-4 sm:mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: ready ? 1 : 0, scaleX: ready ? 1 : 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
            >
              A definitive support structure for our Zain family across Kuwait
              and the region. Select a category below.
            </motion.p>
          </div>
        </section>

        <section className="px-4 sm:px-8 pb-24 sm:pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
            {cards.map((card, index) => (
              <EditorialCard
                key={card.id}
                card={card}
                index={index}
                isSelected={activeCard?.id === card.id}
                onClick={() => setActiveCard(card)}
              />
            ))}
          </div>
        </section>
      </motion.div>

      <ExpandedCard
        card={activeCard}
        onClose={() => setActiveCard(null)}
      />

      <AnimatePresence>
        {ready && !isExpanded && <StickyFooter />}
      </AnimatePresence>
    </LayoutGroup>
  );
}
