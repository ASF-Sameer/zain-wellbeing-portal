"use client";

import { useState } from "react";
import {
  Briefcase,
  Shield,
  ChevronDown,
  Newspaper,
  Dog,
  Heart,
  AlertTriangle,
  Users,
  Brain,
  Phone,
  HandHeart,
  BookOpen,
} from "lucide-react";
import { managerToolkit, individualToolkit, type ToolkitItem } from "@/data/content";

const managerIcons = [HandHeart, Users, Newspaper, Shield, Brain, Phone];
const individualIcons = [AlertTriangle, Newspaper, Dog];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  icon: Icon,
}: {
  item: ToolkitItem;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        className="w-full flex items-center gap-2.5 px-3.5 sm:px-4 py-3 sm:py-3.5 text-left hover:bg-white/[0.04] transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--wellbeing-teal-muted)] flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--wellbeing-teal)]" />
        </div>
        <span className="flex-1 font-medium text-[var(--wellbeing-text)] text-xs sm:text-sm leading-tight">
          {item.title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--wellbeing-text-muted)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4">
          <div className="pl-[38px] sm:pl-[42px] text-[var(--wellbeing-text-muted)] text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
}

function IndividualCard({
  item,
  icon: Icon,
}: {
  item: ToolkitItem;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <div className="p-3.5 sm:p-4">
        <div className="flex items-start gap-2.5 mb-2">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--wellbeing-warm)]/15 flex items-center justify-center">
            <Icon className="w-4 h-4 text-[var(--wellbeing-warm)]" />
          </div>
          <h4 className="font-semibold text-[var(--wellbeing-text)] text-sm pt-1.5">
            {item.title}
          </h4>
        </div>
        <div
          className={`text-xs sm:text-sm text-[var(--wellbeing-text-muted)] leading-relaxed whitespace-pre-line ${
            !isOpen ? "line-clamp-3" : ""
          }`}
        >
          {item.content}
        </div>
        <button
          className="mt-2 text-xs sm:text-sm font-medium text-[var(--wellbeing-teal)] hover:text-[var(--wellbeing-teal-light)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
}

export default function ResourceToolkitsSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <section id="toolkits" className="relative py-16 sm:py-24 px-4">
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[var(--wellbeing-sage)] rounded-full blur-[180px] opacity-[0.04]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[var(--wellbeing-sage)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-sage)]">Resources</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wellbeing-text)] mb-3">
            Resource Toolkits
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-muted)] max-w-lg mx-auto">
            Practical guides for managers and individuals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--wellbeing-teal)] flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--wellbeing-text)]">
                  Manager's Swipe File
                </h3>
                <p className="text-[10px] sm:text-xs text-[var(--wellbeing-text-muted)]">
                  6 ready-to-use internal posts
                </p>
              </div>
            </div>
            <div className="space-y-2.5">
              {managerToolkit.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openAccordion === item.id}
                  onToggle={() =>
                    setOpenAccordion(openAccordion === item.id ? null : item.id)
                  }
                  icon={managerIcons[index]}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[var(--wellbeing-warm)] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--wellbeing-text)]">
                  Individual Resilience
                </h3>
                <p className="text-[10px] sm:text-xs text-[var(--wellbeing-text-muted)]">
                  Personal wellbeing guides
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {individualToolkit.map((item, index) => (
                <IndividualCard
                  key={item.id}
                  item={item}
                  icon={individualIcons[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
