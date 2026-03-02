"use client";

import { Calendar } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";
import ScrollReveal, { ScrollRevealGroup } from "@/components/scroll-reveal";

const categoryColor: Record<UpdatePost["category"], string> = {
  Urgent: "var(--zn-danger)",
  Resource: "var(--zn-cyan)",
  Announcement: "var(--zn-magenta)",
  Wellbeing: "var(--zn-yellow)",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function LiveUpdatesSection() {
  const sorted = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="updates" className="section-bg py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="mb-10 sm:mb-14">
            <p className="text-[15px] font-bold text-[var(--zn-yellow)] uppercase tracking-wider mb-2">
              Live Feed
            </p>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black text-[var(--zn-navy)] tracking-tight leading-tight">
              Latest Updates
            </h2>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="space-y-4">
          {sorted.map((post) => (
            <ScrollReveal key={post.id} animation="fade-up">
              <article className="bg-white rounded-2xl border border-[var(--zn-border)] overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="flex">
                  <div
                    className="w-1.5 flex-shrink-0"
                    style={{ background: categoryColor[post.category] }}
                  />
                  <div className="p-5 sm:p-7 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="text-xs font-black uppercase tracking-wider"
                        style={{ color: categoryColor[post.category] }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-[var(--zn-text-muted)]">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--zn-navy)] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-[16px] text-[var(--zn-text-secondary)] leading-relaxed">
                      {post.body}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
