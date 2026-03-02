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
} from "lucide-react";
import { managerToolkit, individualToolkit, type ToolkitItem } from "@/data/content";

const managerIcons = [HandHeart, Users, Newspaper, Shield, Brain, Phone];
const individualIcons = [AlertTriangle, Newspaper, Dog];

function SwipeableCards({
  items,
  icons,
  accent,
}: {
  items: ToolkitItem[];
  icons: React.ComponentType<{ className?: string }>[];
  accent: string;
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
    const cardWidth = el.querySelector("article")?.offsetWidth || 300;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="hidden sm:flex absolute -top-12 right-0 gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-9 h-9 rounded-lg border border-[var(--bw-border)] bg-white flex items-center justify-center text-[var(--bw-text-secondary)] hover:text-[var(--bw-navy)] disabled:opacity-25 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-9 h-9 rounded-lg border border-[var(--bw-border)] bg-white flex items-center justify-center text-[var(--bw-text-secondary)] hover:text-[var(--bw-navy)] disabled:opacity-25 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8"
      >
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <ToolkitCard key={item.id} item={item} icon={Icon} accent={accent} />
          );
        })}
      </div>
    </div>
  );
}

function ToolkitCard({
  item,
  icon: Icon,
  accent,
}: {
  item: ToolkitItem;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start bg-white rounded-xl border border-[var(--bw-border)] flex flex-col hover:shadow-sm transition-shadow">
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{ background: accent === "pink" ? "var(--bw-pink-soft)" : "var(--bw-teal-soft)" }}
        >
          <Icon
            className="w-5 h-5"
            style={{ color: accent === "pink" ? "var(--bw-pink)" : "var(--bw-teal)" }}
          />
        </div>

        <h4 className="font-bold text-[var(--bw-navy)] text-[15px] sm:text-base leading-snug mb-2.5">
          {item.title}
        </h4>

        <div
          className={`text-sm text-[var(--bw-text-secondary)] leading-relaxed whitespace-pre-line flex-1 ${
            !expanded ? "line-clamp-3" : ""
          }`}
        >
          {item.content}
        </div>

        <button
          className="mt-4 text-sm font-bold transition-colors"
          style={{ color: accent === "pink" ? "var(--bw-pink)" : "var(--bw-teal)" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </article>
  );
}

export default function ResourceToolkitsSection() {
  return (
    <section id="resources" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-14">
          <p className="text-sm font-bold text-[var(--bw-pink)] uppercase tracking-wide mb-2">
            Toolkits
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--bw-navy)] tracking-tight">
            Resource Guides
          </h2>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-[var(--bw-pink)]" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--bw-navy)]">
              Manager Swipe File
            </h3>
            <span className="text-sm text-[var(--bw-text-muted)]">
              6 guides
            </span>
          </div>
          <SwipeableCards items={managerToolkit} icons={managerIcons} accent="pink" />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-5 h-5 text-[var(--bw-teal)]" />
            <h3 className="text-lg sm:text-xl font-bold text-[var(--bw-navy)]">
              Individual Resilience
            </h3>
            <span className="text-sm text-[var(--bw-text-muted)]">
              3 guides
            </span>
          </div>
          <SwipeableCards items={individualToolkit} icons={individualIcons} accent="teal" />
        </div>
      </div>
    </section>
  );
}
