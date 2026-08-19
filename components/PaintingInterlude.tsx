"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { pullQuote } from "@/lib/data";

export default function PaintingInterlude() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex min-h-[380px] w-full items-center justify-center py-16 sm:py-24 overflow-hidden"
    >
      {/* Dynamic Responsive Glass Quote Card */}
      <ScrollReveal
        variant="scale-up"
        className="relative mx-auto flex w-[90vw] max-w-[680px] flex-col justify-between glass-panel p-6 sm:p-10 shadow-2xl"
        delay={150}
      >
        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between border-b border-[#d4b483]/30 pb-3">
            <span className="section-tag-light text-micro sm:text-caption">
              Fig. 01 — On Engineering
            </span>
            <span className="font-body text-micro uppercase tracking-label text-[#d4b483]">
              Quote
            </span>
          </div>

          <blockquote className="font-display text-heading-xs italic leading-relaxed text-paper sm:text-heading-sm md:text-heading-md">
            &ldquo;{pullQuote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between border-t border-[#d4b483]/30 pt-3">
            <span className="font-body text-micro uppercase tracking-label text-[#d4b483]">
              Scroll to Journey
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#d4b483] animate-pulse" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
