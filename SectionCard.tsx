"use client";

interface SectionCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function SectionCard({ icon, title, description }: SectionCardProps) {
  return (
    <div className="p-6 rounded-xl bg-[#111827] border border-gray-700 shadow-md hover:shadow-xl transition hover:scale-105">
      <p className="text-4xl mb-4">{icon}</p>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
