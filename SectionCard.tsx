"use client";
import * as React from "react";

interface SectionCardProps {
  icon: React.ReactNode;      // allows emoji or SVG/component icons
  title: string;
  description: string;
}

export default function SectionCard({ icon, title, description }: SectionCardProps) {
  const titleId = React.useId();

  return (
    <article
      role="article"
      aria-labelledby={titleId}
      tabIndex={0}
      className="p-6 rounded-xl bg-[#111827] border border-gray-700 shadow-md
                 transition transform hover:shadow-xl hover:scale-[1.02]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FE4FF]
                 select-none"
    >
      <div className="text-4xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 id={titleId} className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </article>
  );
}
