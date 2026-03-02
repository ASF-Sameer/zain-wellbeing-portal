"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Briefcase,
  Home,
  Users,
  Mail,
} from "lucide-react";
import type { HubCategory } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Briefcase,
  Home,
  Users,
  Mail,
};

interface GridCardProps {
  category: HubCategory;
  onClick: () => void;
  index: number;
}

export default function GridCard({ category, onClick, index }: GridCardProps) {
  const Icon = iconMap[category.icon] || Heart;

  return (
    <motion.button
      onClick={onClick}
      className="relative group w-full text-left rounded-3xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: "0 8px 30px rgb(0 0 0 / 0.06)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 * index, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgb(0 0 0 / 0.1)" }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className="p-8 sm:p-10 flex flex-col items-center text-center min-h-[220px] sm:min-h-[260px] justify-center"
        style={{
          background: `linear-gradient(135deg, ${category.gradient[0]} 0%, ${category.gradient[1]} 100%)`,
        }}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors duration-300">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
          {category.title}
        </h3>

        <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed max-w-[240px]">
          {category.subtitle}
        </p>
      </div>
    </motion.button>
  );
}
