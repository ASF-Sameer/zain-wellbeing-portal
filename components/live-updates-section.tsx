"use client";

import { Radio, Calendar, Tag } from "lucide-react";
import { updates, type UpdatePost } from "@/data/content";

const categoryColors: Record<UpdatePost["category"], string> = {
  Urgent: "bg-[var(--color-quartz)]/20 text-[var(--color-quartz)] border-[var(--color-quartz)]/30",
  Resource: "bg-[var(--color-light-blue)]/20 text-[var(--color-light-blue)] border-[var(--color-light-blue)]/30",
  Announcement: "bg-[var(--color-purple)]/20 text-[var(--color-purple)] border-[var(--color-purple)]/30",
  Wellbeing: "bg-[var(--color-lime)]/20 text-[var(--color-lime)] border-[var(--color-lime)]/30",
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
    <article className="glass-card overflow-hidden hover:bg-white/[0.12] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-turquoise)]/10">
      {post.imageUrl && (
        <div className="aspect-video bg-white/5 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-turquoise)]/10 to-[var(--color-blue)]/10 flex items-center justify-center">
            <Radio className="w-8 h-8 text-[var(--color-turquoise)]/30" />
          </div>
        </div>
      )}
      {post.videoUrl && (
        <div className="aspect-video bg-white/5">
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
          <span className="flex items-center gap-1 text-xs text-white/40">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {post.title}
        </h3>
        <p className="text-white/50 leading-relaxed text-sm">
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
    <section id="live-updates" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-blue)] rounded-full blur-[250px] opacity-[0.08]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Radio className="w-4 h-4 text-[var(--color-light-blue)]" />
            <span className="text-sm font-semibold text-[var(--color-light-blue)]">Live Feed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest Wellbeing <span className="gradient-text-purple">Updates</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
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
