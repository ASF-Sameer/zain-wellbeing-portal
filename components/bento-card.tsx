"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.85, 0, 0.15, 1] as const;

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
  isSelected: boolean;
}

function getLabel(card: CardData): string {
  if (card.label) return card.label;
  return "Resource";
}

export default function EditorialCard({ card, onClick, index, isSelected }: CardProps) {
  const Icon = card.icon;
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      layoutId={card.id}
      onClick={onClick}
      className={`relative text-left w-full border transition-colors duration-300 group overflow-hidden ${
        card.dark
          ? "bg-[#0F172A] border-[#1E293B] hover:border-[#334155]"
          : "bg-white border-[#E2E8F0] hover:border-[#00B5E2]"
      } ${card.span === 2 ? "sm:col-span-2" : ""} ${card.span === 3 ? "lg:col-span-3" : ""}`}
      style={{
        borderLeft: card.leftBorder ? `4px solid ${card.leftBorder}` : undefined,
        visibility: isSelected ? "hidden" : "visible",
      }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : {
        duration: 0.5,
        delay: 0.15 + index * 0.06,
        ease: EASE,
        layout: { duration: 0.7, ease: EASE },
      }}
      whileHover={prefersReducedMotion ? undefined : {
        y: -2,
        boxShadow: card.dark
          ? "0 2px 8px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(0,0,0,0.04)",
      }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      <div className="p-5 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Icon
                className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                style={{ color: card.iconColor }}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span
                className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] ${
                  card.dark ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {getLabel(card)}
              </span>
            </div>

            <h3
              className={`text-base sm:text-lg lg:text-xl font-semibold tracking-tight mb-1.5 sm:mb-2 leading-snug ${
                card.dark ? "text-white" : "text-[#0F172A]"
              }`}
            >
              {card.title}
            </h3>

            <p
              className={`text-[13px] sm:text-sm leading-relaxed ${
                card.dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {card.subtitle}
            </p>
          </div>

          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1 transition-all duration-300 ${
              card.dark
                ? "text-slate-600 group-hover:text-white"
                : "text-slate-300 group-hover:text-[#0F172A]"
            }`}
          >
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
          </div>
        </div>
      </div>
    </motion.button>
  );
}
