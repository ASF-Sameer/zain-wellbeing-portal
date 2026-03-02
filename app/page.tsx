"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Users,
  ShieldCheck,
  Home,
  Mail,
} from "lucide-react";
import Loader from "@/components/loader";
import BentoCard, { type BentoCardData } from "@/components/bento-card";
import SlideDrawer from "@/components/slide-drawer";
import StickyFooter from "@/components/sticky-footer";
import Image from "next/image";

const cards: BentoCardData[] = [
  {
    id: "resilience",
    title: "For You: Resilience Toolkit",
    subtitle:
      "Breathing exercises, somatic tools, and media diet rules.",
    icon: HeartPulse,
    iconBg: "#CCFBF1",
    iconColor: "#0D9488",
    span2: true,
  },
  {
    id: "buddy",
    title: "Power Buddy System",
    subtitle:
      "Instantly connect with a Zain colleague to talk or share a distraction.",
    icon: Users,
    iconBg: "#E0F2FE",
    iconColor: "#0284C7",
  },
  {
    id: "manager",
    title: "For Managers",
    subtitle:
      "Swipe files and empathy guidelines for leading regional teams.",
    icon: ShieldCheck,
    iconBg: "#E0E7FF",
    iconColor: "#4F46E5",
  },
  {
    id: "parents",
    title: "For Parents & Elderly",
    subtitle:
      "Home safety preparation and managing family anxiety.",
    icon: Home,
    iconBg: "#FFEDD5",
    iconColor: "#EA580C",
  },
  {
    id: "bewell",
    title: "Daily BE WELL Updates",
    subtitle:
      "Subscribe to receive daily grounding exercises and regional support updates directly to your inbox.",
    icon: Mail,
    iconBg: "#FCE7F3",
    iconColor: "#DB2777",
    span2: true,
  },
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<BentoCardData | null>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Loader show={loading} />

      <div className={`min-h-screen pb-20 ${loading ? "opacity-0" : "opacity-100"}`} style={{ transition: "opacity 0.3s ease 0.5s" }}>
          <header className="relative z-10 bg-[#12192A] px-5 sm:px-8 pt-6 sm:pt-8 pb-0">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Image
                  src="/images/zain-logo.png"
                  alt="Zain"
                  width={80}
                  height={28}
                  className="h-5 sm:h-6 w-auto"
                  priority
                />
                <div className="w-px h-5 bg-white/20" />
                <span className="text-[#E40068] text-lg sm:text-xl font-black tracking-tight">
                  BE WELL
                </span>
              </motion.div>
            </div>
          </header>

          <section className="relative z-10 bg-[#12192A] px-5 sm:px-8 pt-14 sm:pt-20 pb-40 sm:pb-48">
            <div className="max-w-6xl mx-auto">
              <motion.h1
                className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white leading-[1.05] tracking-tight mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Standing{" "}
                <span className="text-[#00B5E2]">Together.</span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                Immediate support for our Zain family across Kuwait and the
                region. Select a category below to access grounded resources.
              </motion.p>
            </div>
          </section>

          <section className="relative z-20 -mt-32 sm:-mt-36 px-5 sm:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {cards.map((card, index) => (
                <BentoCard
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
            iconBg={activeCard?.iconBg || ""}
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

      <StickyFooter />
    </>
  );
}
