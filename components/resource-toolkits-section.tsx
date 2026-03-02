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
  accentMuted,
}: {
  items: ToolkitItem[];
  icons: React.ComponentType<{ className?: string }>[];
  accentColor: string;
  accentMuted: string;
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
      <div className="hidden sm:flex absolute -top-12 right-0 gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--wellbeing-text-secondary)] hover:text-white disabled:opacity-30 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--wellbeing-text-secondary)] hover:text-white disabled:opacity-30 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4"
      >
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <SwipeCard
              key={item.id}
              item={item}
              icon={Icon}
              accentColor={accentColor}
              accentMuted={accentMuted}
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
  accentMuted,
}: {
  item: ToolkitItem;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentMuted: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start glass-card flex flex-col"
    >
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: accentMuted }}
        >
          <Icon className="w-5 h-5" style={{ color: accentColor }} />
        </div>

        <h4 className="font-semibold text-white text-sm sm:text-[15px] leading-snug mb-3">
          {item.title}
        </h4>

        <div
          className={`text-[13px] sm:text-sm text-[var(--wellbeing-text-secondary)] leading-relaxed whitespace-pre-line flex-1 ${
            !expanded ? "line-clamp-4" : ""
          }`}
        >
          {item.content}
        </div>

        <button
          className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors group"
          style={{ color: accentColor }}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "Show less" : "Read more"}</span>
          <ArrowRight
            className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-90" : "group-hover:translate-x-0.5"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default function ResourceToolkitsSection() {
  return (
    <section id="toolkits" className="relative py-16 sm:py-24">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--wellbeing-teal)] rounded-full blur-[200px] opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[var(--wellbeing-warm)] rounded-full blur-[180px] opacity-[0.03]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Resource Toolkits
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-secondary)] max-w-md mx-auto">
            Practical guides to help you and your team navigate through difficult times.
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="w-9 h-9 rounded-xl bg-[var(--wellbeing-teal-muted)] flex items-center justify-center">
              <Briefcase className="w-4.5 h-4.5 text-[var(--wellbeing-teal)]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Manager Swipe File
              </h3>
              <p className="text-xs text-[var(--wellbeing-text-muted)]">
                6 ready-to-use guides for team leaders
              </p>
            </div>
          </div>

          <SwipeableCards
            items={managerToolkit}
            icons={managerIcons}
            accentColor="var(--wellbeing-teal)"
            accentMuted="var(--wellbeing-teal-muted)"
          />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="w-9 h-9 rounded-xl bg-[var(--wellbeing-warm-muted)] flex items-center justify-center">
              <Heart className="w-4.5 h-4.5 text-[var(--wellbeing-warm)]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Individual Resilience
              </h3>
              <p className="text-xs text-[var(--wellbeing-text-muted)]">
                Personal wellbeing and crisis readiness
              </p>
            </div>
          </div>

          <SwipeableCards
            items={individualToolkit}
            icons={individualIcons}
            accentColor="var(--wellbeing-warm)"
            accentMuted="var(--wellbeing-warm-muted)"
          />
        </div>
      </div>
    </section>
  );
}
