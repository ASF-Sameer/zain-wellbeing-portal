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
import ScrollReveal from "@/components/scroll-reveal";

const managerIcons = [HandHeart, Users, Newspaper, Shield, Brain, Phone];
const individualIcons = [AlertTriangle, Newspaper, Dog];

const borderColors = [
  "var(--zn-magenta)",
  "var(--zn-cyan)",
  "var(--zn-yellow)",
  "var(--zn-magenta)",
  "var(--zn-cyan)",
  "var(--zn-yellow)",
];

function SwipeableCards({
  items,
  icons,
  colors,
}: {
  items: ToolkitItem[];
  icons: React.ComponentType<{ className?: string }>[];
  colors: string[];
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
    const cardWidth = el.querySelector("article")?.offsetWidth || 320;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 20 : cardWidth + 20, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="hidden sm:flex absolute -top-14 right-0 gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-xl border border-[var(--zn-border)] bg-white flex items-center justify-center text-[var(--zn-text-secondary)] hover:text-[var(--zn-navy)] hover:border-[var(--zn-navy)]/20 disabled:opacity-25 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-xl border border-[var(--zn-border)] bg-white flex items-center justify-center text-[var(--zn-text-secondary)] hover:text-[var(--zn-navy)] hover:border-[var(--zn-navy)]/20 disabled:opacity-25 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 -mx-5 px-5 sm:-mx-8 sm:px-8"
      >
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          const color = colors[index % colors.length];
          return (
            <ToolkitCard key={item.id} item={item} icon={Icon} color={color} />
          );
        })}
      </div>
    </div>
  );
}

function ToolkitCard({
  item,
  icon: Icon,
  color,
}: {
  item: ToolkitItem;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start bg-white rounded-2xl border border-[var(--zn-border)] flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="h-1.5 w-full" style={{ background: color }} />
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <Icon className="w-6 h-6 mb-4" style={{ color }} />

        <h4 className="font-bold text-[var(--zn-navy)] text-lg leading-snug mb-3">
          {item.title}
        </h4>

        <div
          className={`text-[16px] leading-relaxed text-[var(--zn-text-secondary)] whitespace-pre-line flex-1 ${
            !expanded ? "line-clamp-3" : ""
          }`}
        >
          {item.content}
        </div>

        <button
          className="mt-5 text-[15px] font-bold transition-colors"
          style={{ color }}
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
    <section id="resources" className="section-white py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16">
            <p className="text-[15px] font-bold text-[var(--zn-magenta)] uppercase tracking-wider mb-2">
              Toolkits
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-[var(--zn-navy)] tracking-tight leading-tight">
              Resource Guides
            </h2>
          </div>
        </ScrollReveal>

        <div className="mb-14 sm:mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-7">
              <Briefcase className="w-6 h-6 text-[var(--zn-magenta)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--zn-navy)]">
                Manager Swipe File
              </h3>
              <span className="text-[var(--zn-text-muted)] text-base">
                6 guides
              </span>
            </div>
          </ScrollReveal>
          <SwipeableCards items={managerToolkit} icons={managerIcons} colors={borderColors} />
        </div>

        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-7">
              <Heart className="w-6 h-6 text-[var(--zn-cyan)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--zn-navy)]">
                Individual Resilience
              </h3>
              <span className="text-[var(--zn-text-muted)] text-base">
                3 guides
              </span>
            </div>
          </ScrollReveal>
          <SwipeableCards
            items={individualToolkit}
            icons={individualIcons}
            colors={["var(--zn-cyan)", "var(--zn-yellow)", "var(--zn-magenta)"]}
          />
        </div>
      </div>
    </section>
  );
}
