"use client";

import { Radio, Calendar, Tag } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";

const categoryStyles: Record<UpdatePost["category"], string> = {
  Urgent: "bg-[var(--wellbeing-rose)]/15 text-[var(--wellbeing-rose)] border-[var(--wellbeing-rose)]/20",
  Resource: "bg-[var(--wellbeing-teal)]/15 text-[var(--wellbeing-teal)] border-[var(--wellbeing-teal)]/20",
  Announcement: "bg-[var(--wellbeing-lavender)]/15 text-[var(--wellbeing-lavender)] border-[var(--wellbeing-lavender)]/20",
  Wellbeing: "bg-[var(--wellbeing-sage)]/15 text-[var(--wellbeing-sage)] border-[var(--wellbeing-sage)]/20",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function UpdateCard({ post }: { post: UpdatePost }) {
  return (
    <article className="glass-card overflow-hidden hover:bg-white/[0.08] transition-all duration-200">
      {post.imageUrl && (
        <div className="aspect-video bg-white/[0.03] flex items-center justify-center">
          <Radio className="w-6 h-6 text-white/10" />
        </div>
      )}
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryStyles[post.category]}`}>
            <Tag className="w-2.5 h-2.5" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-[var(--wellbeing-text-muted)]">
            <Calendar className="w-2.5 h-2.5" />
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="text-sm sm:text-base font-semibold text-[var(--wellbeing-text)] mb-1.5">
          {post.title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--wellbeing-text-muted)] leading-relaxed">
          {post.body}
        </p>
      </div>
    </article>
  );
}

export default function LiveUpdatesSection() {
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="live-updates" className="relative py-16 sm:py-24 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--wellbeing-lavender)] rounded-full blur-[200px] opacity-[0.04]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            <Radio className="w-3.5 h-3.5 text-[var(--wellbeing-lavender)]" />
            <span className="text-xs font-medium text-[var(--wellbeing-lavender)]">Live Feed</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--wellbeing-text)] mb-3">
            Latest Wellbeing Updates
          </h2>
          <p className="text-sm sm:text-base text-[var(--wellbeing-text-muted)] max-w-lg mx-auto">
            Stay informed with the latest resources and support updates.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {sortedUpdates.map((post) => (
            <UpdateCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
