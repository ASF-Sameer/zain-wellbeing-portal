"use client";

import { useRef, useState, useEffect } from "react";
import {
  Briefcase,
  Heart,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Newspaper,
  Dog,
  HandHeart,
  Users,
  Shield,
  Brain,
  Phone,
  ArrowRight,
} from "lucide-react";
import { managerToolkit, individualToolkit, type ToolkitItem } from "@/data/content";

const managerIcons = [HandHeart, Users, Newspaper, Shield, Brain, Phone];
const individualIcons = [AlertTriangle, Newspaper, Dog];

function SwipeableCards({
  items,
  icons,
  accentColor,
  accentBg,
}: {
  items: ToolkitItem[];
  icons: React.ComponentType<{ className?: string }>[];
  accentColor: string;
  accentBg: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth || 300;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="hidden sm:flex absolute -top-14 right-0 gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--bw-text-secondary)] hover:text-[var(--bw-navy)] disabled:opacity-30 transition-all border border-black/5"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--bw-text-secondary)] hover:text-[var(--bw-navy)] disabled:opacity-30 transition-all border border-black/5"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4"
      >
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <SwipeCard
              key={item.id}
              item={item}
              icon={Icon}
              accentColor={accentColor}
              accentBg={accentBg}
            />
          );
        })}
      </div>
    </div>
  );
}

function SwipeCard({
  item,
  icon: Icon,
  accentColor,
  accentBg,
}: {
  item: ToolkitItem;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start card-glass flex flex-col">
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: accentBg }}
        >
          <Icon className="w-6 h-6" style={{ color: accentColor }} />
        </div>

        <h4 className="font-bold text-[var(--bw-navy)] text-base sm:text-lg leading-snug mb-3">
          {item.title}
        </h4>

        <div
          className={`text-sm sm:text-[15px] text-[var(--bw-text-secondary)] leading-relaxed whitespace-pre-line flex-1 ${
            !expanded ? "line-clamp-4" : ""
          }`}
        >
          {item.content}
        </div>

        <button
          className="mt-5 flex items-center gap-2 text-sm sm:text-base font-bold transition-colors group"
          style={{ color: accentColor }}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "Show less" : "Read more"}</span>
          <ArrowRight
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default function ResourceToolkitsSection() {
  return (
    <section id="toolkits" className="relative py-16 sm:py-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--bw-navy)] mb-4 tracking-tight">
            Resource Toolkits
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-lg mx-auto">
            Practical guides to help you and your team navigate through difficult times.
          </p>
        </div>

        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-3 mb-7 sm:mb-9 px-4 sm:px-0">
            <div className="w-11 h-11 rounded-2xl bg-[var(--bw-pink-muted)] flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[var(--bw-pink)]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--bw-navy)]">
                Manager Swipe File
              </h3>
              <p className="text-sm text-[var(--bw-text-muted)]">
                6 ready-to-use guides for team leaders
              </p>
            </div>
          </div>

          <SwipeableCards
            items={managerToolkit}
            icons={managerIcons}
            accentColor="var(--bw-pink)"
            accentBg="var(--bw-pink-muted)"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-7 sm:mb-9 px-4 sm:px-0">
            <div className="w-11 h-11 rounded-2xl bg-[var(--bw-teal-muted)] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[var(--bw-teal)]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--bw-navy)]">
                Individual Resilience
              </h3>
              <p className="text-sm text-[var(--bw-text-muted)]">
                Personal wellbeing and crisis readiness
              </p>
            </div>
          </div>

          <SwipeableCards
            items={individualToolkit}
            icons={individualIcons}
            accentColor="var(--bw-teal)"
            accentBg="var(--bw-teal-muted)"
          />
        </div>
      </div>
    </section>
  );
}
