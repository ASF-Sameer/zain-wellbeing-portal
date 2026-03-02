"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { EMERGENCY_HOTLINE } from "@/data/content";
import Image from "next/image";
import BeWellLogo from "@/components/bewell-logo";

export default function Header() {
  const [showIntro, setShowIntro] = useState(true);
  const [headerReady, setHeaderReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowIntro(false), 1200);
    const t2 = setTimeout(() => setHeaderReady(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[var(--zn-bg)] flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ y: -200, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <BeWellLogo className="h-16 sm:h-20 w-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100"
        initial={{ y: -80, opacity: 0 }}
        animate={headerReady ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/zain-logo.png"
                alt="Zain"
                width={80}
                height={28}
                className="h-5 sm:h-6 w-auto invert opacity-60"
                priority
              />
              <div className="w-px h-6 bg-slate-200" />
              <BeWellLogo className="h-9 sm:h-10 w-auto" />
            </div>

            <a
              href={`tel:${EMERGENCY_HOTLINE}`}
              className="flex items-center gap-2 bg-[var(--zn-danger)] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[15px] font-semibold hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Emergency</span>
              <span className="sm:hidden">SOS</span>
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
