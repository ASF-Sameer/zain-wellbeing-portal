"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="pt-12 sm:pt-16 pb-8 sm:pb-10 px-5 sm:px-8 max-w-[1200px] mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-[var(--zn-navy)] tracking-tight leading-tight mb-4">
        Supporting You and Your Loved Ones.
      </h1>
      <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed">
        Select a category below to access dedicated tools, checklists, and instant support.
      </p>
    </motion.section>
  );
}
