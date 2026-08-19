"use client";

import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[85vh] flex-col justify-between overflow-hidden pb-12 pt-4 sm:pt-10"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col items-center px-4 sm:px-8 lg:px-16 text-center">
        {/* ---- VERY TOP: Monumental Name Display ---- */}
        <div className="hero-wordmark-entrance w-full max-w-full overflow-hidden">
          <h1
            className="select-none font-display font-medium leading-[0.9] tracking-[-0.03em] text-paper uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] break-words"
            style={{ fontSize: "clamp(2.1rem, 9.5vw, 190px)" }}
          >
            {profile.fullName}
          </h1>
        </div>

        {/* Medieval Hairline Divider with Center Glyph */}
        <div className="my-5 sm:my-6 flex w-full max-w-2xl items-center justify-center gap-3 sm:gap-4">
          <span className="h-px flex-1 bg-[#d4b483]/50" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#d4b483]" aria-hidden>
            <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="currentColor" />
          </svg>
          <span className="h-px flex-1 bg-[#d4b483]/50" />
        </div>

        {/* ---- Hero Content Glass Panel ---- */}
        <div className="hero-entrance glass-panel w-full max-w-2xl p-5 sm:p-8 flex flex-col items-center">
          <span className="section-tag text-caption sm:text-body-sm">
            {profile.role} · {profile.location}
          </span>

          <p className="mt-4 sm:mt-5 font-display text-heading-xs italic leading-snug text-paper sm:text-heading-sm">
            {profile.heroSubhead}
          </p>

          {/* Stats Row */}
          <dl className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 border-y border-[#d4b483]/30 py-3 sm:py-3.5 w-full">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <dt className="font-body text-micro sm:text-caption uppercase tracking-label text-[#d4b483]">
                  {stat.label}:
                </dt>
                <dd className="font-body text-sm sm:text-base font-medium text-paper">
                  {stat.value}
                </dd>
                {i < stats.length - 1 && (
                  <span className="ml-3 sm:ml-4 hidden h-3 w-px bg-[#d4b483]/40 sm:inline-block" />
                )}
              </div>
            ))}
          </dl>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="#projects" className="pill-light">
              View Projects
            </a>
            <a href="#contact" className="pill-dark">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
