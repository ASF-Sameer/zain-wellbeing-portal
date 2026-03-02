"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ChecklistItemProps {
  label: string;
}

export default function ChecklistItem({ label }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={() => setChecked(!checked)}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          setChecked(!checked);
        }
      }}
      className="flex items-start gap-4 w-full text-left group py-3 px-1 cursor-pointer select-none"
    >
      <div
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
          checked
            ? "bg-[#00B5E2] border-[#00B5E2]"
            : "border-slate-300 group-hover:border-[#00B5E2]/50"
        }`}
      >
        <motion.div
          initial={false}
          animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
        </motion.div>
      </div>
      <span
        className={`text-[16px] leading-relaxed transition-all duration-200 ${
          checked ? "text-slate-400 line-through" : "text-slate-700"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
