"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

const EASE = [0.85, 0, 0.15, 1] as const;

export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  span?: number;
  dark?: boolean;
  leftBorder?: string;
  label?: string;
}

interface CardProps {
  card: CardData;
  onClick: () => void;
  index: number;
}

function getLabel(card: CardData): string {
  if (card.label) return card.label;
  if (card.id === "buddy") return "Urgent";
  if (card.id === "kcc") return "Emergency";
  return "Resource";
}

export default function EditorialCard({ card, onClick, index }: CardProps) {
  const Icon = card.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`relative text-left w-full border transition-all duration-300 group overflow-hidden ${
        card.dark
          ? "bg-[#0F172A] border-[#1E293B] hover:border-[#334155]"
          : "bg-white border-[#E2E8F0] hover:border-[#00B5E2]"
      } ${card.span === 2 ? "md:col-span-2" : ""} ${card.span === 3 ? "lg:col-span-3" : ""}`}
      style={{
        borderLeft: card.leftBorder ? `4px solid ${card.leftBorder}` : undefined,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.06,
        ease: EASE,
      }}
      whileHover={{
        y: -2,
        boxShadow: card.dark
          ? "0 2px 8px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      whileTap={{ scale: 0.995 }}
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Icon
                className="w-5 h-5 flex-shrink-0"
                style={{ color: card.iconColor }}
                strokeWidth={1.5}
              />
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${
                  card.dark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {getLabel(card)}
              </span>
            </div>

            <h3
              className={`text-lg sm:text-xl font-semibold tracking-tight mb-2 leading-snug ${
                card.dark ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {card.title}
            </h3>

            <p
              className={`text-sm leading-relaxed ${
                card.dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {card.subtitle}
            </p>
          </div>

          <div
            className={`w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 ${
              card.dark
                ? "text-slate-600 group-hover:text-white"
                : "text-slate-300 group-hover:text-[#0F172A]"
            }`}
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
