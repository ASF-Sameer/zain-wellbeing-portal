"use client";

import { Radio, Calendar, Tag } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";

const categoryColors: Record<UpdatePost["category"], string> = {
  Urgent: "bg-red-100 text-red-700 border-red-200",
  Resource: "bg-blue-100 text-blue-700 border-blue-200",
  Announcement: "bg-purple-100 text-purple-700 border-purple-200",
  Wellbeing: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function UpdateCard({ post }: { post: UpdatePost }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm shadow-black/5 border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {post.imageUrl && (
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-wellbeing-teal)]/10 to-[var(--color-wellbeing-navy)]/10 flex items-center justify-center">
            <Radio className="w-8 h-8 text-[var(--color-wellbeing-teal)]/30" />
          </div>
        </div>
      )}
      {post.videoUrl && (
        <div className="aspect-video bg-gray-100">
          <iframe
            src={post.videoUrl}
            className="w-full h-full"
            title={post.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category]}`}
          >
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-[var(--color-wellbeing-text-muted)]">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-wellbeing-navy)] mb-2">
          {post.title}
        </h3>
        <p className="text-[var(--color-wellbeing-text-muted)] leading-relaxed">
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
    <section id="live-updates" className="py-20 sm:py-28 bg-[var(--color-wellbeing-bg)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[var(--color-wellbeing-teal)]/10 text-[var(--color-wellbeing-teal)] rounded-full px-4 py-2 mb-4">
            <Radio className="w-4 h-4" />
            <span className="text-sm font-semibold">Zone 3</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-wellbeing-navy)] mb-4">
            Latest Wellbeing Updates
          </h2>
          <p className="text-lg text-[var(--color-wellbeing-text-muted)] max-w-2xl mx-auto">
            Stay informed with the latest resources, announcements, and support updates.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sortedUpdates.map((post) => (
            <UpdateCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
