"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Home,
  Users,
  Mail,
} from "lucide-react";
import Loader from "@/components/loader";
import EditorialCard, { type CardData } from "@/components/bento-card";
import SlideDrawer from "@/components/slide-drawer";
import StickyFooter from "@/components/sticky-footer";
import Image from "next/image";

const EASE = [0.85, 0, 0.15, 1] as const;

const cards: CardData[] = [
  {
    id: "resilience",
    title: "For You: Resilience Toolkit",
    subtitle:
      "Breathing exercises, somatic tools, and media diet rules to build daily resilience.",
    icon: HeartPulse,
    iconColor: "#0D9488",
    span: 2,
  },
  {
    id: "manager",
    title: "For Managers",
    subtitle:
      "Swipe files and empathy guidelines for leading regional teams through uncertainty.",
    icon: ShieldCheck,
    iconColor: "#4F46E5",
  },
  {
    id: "parents",
    title: "For Parents & Elderly",
    subtitle:
      "Home safety preparation and managing family anxiety during crisis.",
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
  },
  {
    id: "bewell",
    title: "Daily BE WELL Updates",
    subtitle:
      "Subscribe to receive daily grounding exercises and regional support updates directly to your inbox.",
    icon: Mail,
    iconColor: "#94A3B8",
    span: 3,
    dark: true,
  },
];

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setReady(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {!ready && <Loader onComplete={handleLoaderComplete} />}

      <div
        className={`min-h-screen pb-16 transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <header className="px-5 sm:px-8 pt-8 pb-0">
          <div className="max-w-6xl mx-auto flex items-center gap-3">
            <Image
              src="/images/zain-logo.png"
              alt="Zain"
              width={80}
              height={28}
              className="h-5 w-auto invert"
              priority
            />
            <div className="w-px h-4 bg-slate-300" />
            <span className="text-[#E40068] text-sm font-bold tracking-tight">
              BE WELL
            </span>
          </div>
        </header>

        <section className="px-5 sm:px-8 pt-16 sm:pt-24 pb-14 sm:pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.h1
              className="text-[clamp(2.2rem,6vw,4rem)] font-bold text-[#0F172A] leading-[1.08] tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 16 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              Standing Together.
            </motion.h1>

            <motion.div
              className="w-16 h-[4px] bg-[#E40068] mt-6 mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: ready ? 1 : 0, scaleX: ready ? 1 : 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-lg text-slate-500 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
            >
              A definitive support structure for our Zain family across Kuwait
              and the region. Select a category below.
            </motion.p>
          </div>
        </section>

        <section className="px-5 sm:px-8 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
            {cards.map((card, index) => (
              <EditorialCard
                key={card.id}
                card={card}
                index={index}
                onClick={() => setActiveCard(card)}
              />
            ))}
          </div>
        </section>

        <SlideDrawer
          isOpen={!!activeCard}
          onClose={() => setActiveCard(null)}
          title={activeCard?.title || ""}
          icon={activeCard?.icon || HeartPulse}
          iconColor={activeCard?.iconColor || ""}
          contentType={
            (activeCard?.id as
              | "resilience"
              | "buddy"
              | "manager"
              | "parents"
              | "bewell") || "resilience"
          }
        />
      </div>

      {ready && <StickyFooter />}
    </>
  );
}
