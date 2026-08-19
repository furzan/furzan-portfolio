"use client";

import Hexagon from "@/components/Hexagon";
import ScrollReveal from "@/components/ScrollReveal";
import { focusAreas } from "@/lib/data";

const icons: Record<string, JSX.Element> = {
  "Agentic AI": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <circle cx="22" cy="10" r="4" stroke="#ffffff" strokeWidth="1" />
      <circle cx="10" cy="32" r="4" stroke="#ffffff" strokeWidth="1" />
      <circle cx="34" cy="32" r="4" stroke="#ffffff" strokeWidth="1" />
      <path d="M19 13.5L12.5 28.5M25 13.5L31.5 28.5M14 32H30" stroke="#ffffff" strokeWidth="1" />
    </svg>
  ),
  "Retrieval & RAG": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="10" y="7" width="18" height="24" stroke="#ffffff" strokeWidth="1" />
      <path d="M14 14H24M14 19H24M14 24H20" stroke="#ffffff" strokeWidth="1" />
      <circle cx="29" cy="30" r="6" stroke="#ffffff" strokeWidth="1" />
      <path d="M33.2 34.2L38 39" stroke="#ffffff" strokeWidth="1" />
    </svg>
  ),
  "Full-Stack Systems": (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
      <rect x="9" y="9" width="26" height="9" stroke="#ffffff" strokeWidth="1" />
      <rect x="9" y="18" width="26" height="9" stroke="#ffffff" strokeWidth="1" />
      <rect x="9" y="27" width="26" height="8" stroke="#ffffff" strokeWidth="1" />
    </svg>
  ),
};

export default function FocusAreas() {
  return (
    <section className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <ScrollReveal className="text-center">
          <span className="section-tag-light">Core Domains</span>
          <h2 className="mt-3 font-display text-heading-lg font-medium text-paper sm:text-heading-xl">
            Areas of Focus
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {focusAreas.map((area, i) => (
            <ScrollReveal
              key={area.title}
              delay={i * 150}
              className="glass-panel flex flex-col items-center text-center p-8"
            >
              <p className="font-display text-subheading italic text-paper">
                {area.title}
              </p>
              <div className="mt-6 flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[#d4b483]/50 bg-[#160f0a]/60 backdrop-blur-sm transition-all duration-500 hover:border-paper hover:scale-105">
                {icons[area.title]}
              </div>
              <p className="mt-6 max-w-[260px] font-body text-body-sm leading-relaxed text-[#e6d8c3]">
                {area.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Hexagon light filled className="hex-pulse" />
                <Hexagon light />
                <Hexagon light />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
