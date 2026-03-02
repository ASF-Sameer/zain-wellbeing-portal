"use client";

import { Radio, Calendar, Tag } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";

const categoryStyles: Record<UpdatePost["category"], { bg: string; text: string; border: string }> = {
  Urgent: { bg: "bg-red-50", text: "text-[var(--bw-danger)]", border: "border-red-200" },
  Resource: { bg: "bg-teal-50", text: "text-[var(--bw-teal)]", border: "border-teal-200" },
  Announcement: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  Wellbeing: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function UpdateCard({ post }: { post: UpdatePost }) {
  const style = categoryStyles[post.category];
  return (
    <article className="card-glass overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-3 py-1 rounded-full border ${style.bg} ${style.text} ${style.border}`}
          >
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm text-[var(--bw-text-muted)]">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[var(--bw-navy)] mb-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-sm sm:text-base text-[var(--bw-text-secondary)] leading-relaxed">
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
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full mb-4 border border-purple-100">
            <Radio className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-600">Live Feed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--bw-navy)] mb-4 tracking-tight">
            Latest Updates
          </h2>
          <p className="text-base sm:text-lg text-[var(--bw-text-secondary)] max-w-lg mx-auto">
            Stay informed with the latest resources and support announcements.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {sortedUpdates.map((post) => (
            <UpdateCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
