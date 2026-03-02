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
  Lightbulb,
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
    <div className="glass-card overflow-hidden transition-all duration-300">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-white/[0.05] transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--color-turquoise)]/15 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[var(--color-turquoise)]" />
        </div>
        <span className="flex-1 font-medium text-white text-sm sm:text-base">
          {item.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-white/40 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0">
          <div className="pl-12 text-white/50 text-sm leading-relaxed whitespace-pre-line">
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
    <div className="glass-card-enhanced overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-lime)]/15 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[var(--color-lime)]" />
          </div>
          <h4 className="font-semibold text-white pt-2">
            {item.title}
          </h4>
        </div>
        <div
          className={`text-sm text-white/50 leading-relaxed whitespace-pre-line ${
            !isOpen ? "line-clamp-3" : ""
          }`}
        >
          {item.content}
        </div>
        <button
          className="mt-3 text-sm font-medium text-[var(--color-turquoise)] hover:text-[var(--color-lime)] transition-colors"
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
    <section id="toolkits" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-purple)] rounded-full blur-[200px] opacity-[0.05]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-[var(--color-yellow)]" />
            <span className="text-sm font-semibold text-[var(--color-yellow)]">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Resource <span className="gradient-text">Toolkits</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Practical guides and ready-to-use resources for managers and individuals.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-turquoise)] to-[var(--color-blue)] flex items-center justify-center shadow-lg shadow-[var(--color-turquoise)]/20">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Manager&rsquo;s Swipe File
                </h3>
                <p className="text-sm text-white/40">
                  6 ready-to-use internal posts
                </p>
              </div>
            </div>
            <div className="space-y-3">
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-lime)] to-[var(--color-yellow)] flex items-center justify-center shadow-lg shadow-[var(--color-lime)]/20">
                <Heart className="w-5 h-5 text-[var(--color-navy-dark)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Individual Resilience
                </h3>
                <p className="text-sm text-white/40">
                  Personal wellbeing guides
                </p>
              </div>
            </div>
            <div className="space-y-4">
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
