"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export interface BentoCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  span2?: boolean;
}

interface BentoCardProps {
  card: BentoCardData;
  onClick: () => void;
  index: number;
}

export default function BentoCard({ card, onClick, index }: BentoCardProps) {
  const Icon = card.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`relative text-left bg-white rounded-3xl p-7 sm:p-8 cursor-pointer group overflow-hidden ${
        card.span2 ? "md:col-span-2" : ""
      }`}
      style={{
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: card.iconBg }}
      >
        <Icon className="w-7 h-7" style={{ color: card.iconColor }} />
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-[#12192A] mb-2 leading-tight">
        {card.title}
      </h3>

      <p className="text-[15px] sm:text-base text-[#64748B] leading-relaxed pr-10">
        {card.subtitle}
      </p>

      <div className="absolute bottom-7 right-7 sm:bottom-8 sm:right-8">
        <motion.div
          className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center"
          whileHover={{ x: 0 }}
        >
          <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#12192A] group-hover:translate-x-0.5 transition-all duration-300" />
        </motion.div>
      </div>
    </motion.button>
  );
}
