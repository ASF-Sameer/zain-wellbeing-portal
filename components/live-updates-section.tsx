"use client";

import { Calendar, ChevronRight } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";

const categoryColor: Record<UpdatePost["category"], string> = {
  Urgent: "var(--bw-danger)",
  Resource: "var(--bw-teal)",
  Announcement: "#6366F1",
  Wellbeing: "#16A34A",
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
    <section id="updates" className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="mb-10 sm:mb-12">
          <p className="text-sm font-bold text-[#6366F1] uppercase tracking-wide mb-2">
            Live Feed
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--bw-navy)] tracking-tight">
            Latest Updates
          </h2>
        </div>

        <div className="space-y-3">
          {sorted.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-[var(--bw-border)] p-5 sm:p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0 self-stretch"
                  style={{ background: categoryColor[post.category] }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span
                      className="text-xs font-bold uppercase tracking-wide"
                      style={{ color: categoryColor[post.category] }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--bw-text-muted)]">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--bw-navy)] mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--bw-text-secondary)] leading-relaxed">
                    {post.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
