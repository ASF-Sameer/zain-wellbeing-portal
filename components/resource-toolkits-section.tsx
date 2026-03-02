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
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--color-wellbeing-teal)]/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-[var(--color-wellbeing-teal)]" />
        </div>
        <span className="flex-1 font-medium text-[var(--color-wellbeing-navy)] text-sm sm:text-base">
          {item.title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--color-wellbeing-text-muted)] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0">
          <div className="pl-12 text-[var(--color-wellbeing-text-muted)] text-sm leading-relaxed whitespace-pre-line">
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
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-wellbeing-magenta)]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[var(--color-wellbeing-magenta)]" />
          </div>
          <h4 className="font-semibold text-[var(--color-wellbeing-navy)] pt-2">
            {item.title}
          </h4>
        </div>
        <div
          className={`text-sm text-[var(--color-wellbeing-text-muted)] leading-relaxed whitespace-pre-line ${
            !isOpen ? "line-clamp-3" : ""
          }`}
        >
          {item.content}
        </div>
        <button
          className="mt-3 text-sm font-medium text-[var(--color-wellbeing-teal)] hover:text-[var(--color-wellbeing-teal-dark)] transition-colors"
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
    <section id="toolkits" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[var(--color-wellbeing-navy)]/5 text-[var(--color-wellbeing-navy)] rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-semibold">Zone 4</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-wellbeing-navy)] mb-4">
            Resource Toolkits
          </h2>
          <p className="text-lg text-[var(--color-wellbeing-text-muted)] max-w-2xl mx-auto">
            Practical guides and ready-to-use resources for managers and individuals.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-wellbeing-teal)] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-wellbeing-navy)]">
                  Manager&rsquo;s Swipe File
                </h3>
                <p className="text-sm text-[var(--color-wellbeing-text-muted)]">
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
              <div className="w-10 h-10 rounded-xl bg-[var(--color-wellbeing-magenta)] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-wellbeing-navy)]">
                  Individual Resilience
                </h3>
                <p className="text-sm text-[var(--color-wellbeing-text-muted)]">
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
