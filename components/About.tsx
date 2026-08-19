"use client";

import Image from "next/image";
import Hexagon from "@/components/Hexagon";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/lib/data";

const facts = [
  { label: "Education", value: profile.education },
  { label: "Experience", value: "10Pearls · Planet01" },
  { label: "Location", value: profile.location },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-[1800px] grid-cols-1 gap-8 sm:gap-12 px-4 sm:px-10 md:grid-cols-2 md:gap-10 lg:px-16">
        {/* Circular Feature Vignette in Glass Panel */}
        <ScrollReveal variant="scale-up" className="glass-panel flex flex-col items-center justify-center p-6 sm:p-8">
          <p className="font-display text-subheading italic text-paper text-center">
            {profile.fullName}
          </p>
          <div className="mt-6 h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] overflow-hidden rounded-full border-2 border-[#d4b483]/60 shadow-2xl">
            <Image
              src={profile.avatar}
              alt={`${profile.fullName} — AI Engineer`}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Hexagon filled light className="hex-pulse" />
            <Hexagon light />
            <Hexagon light />
          </div>
        </ScrollReveal>

        {/* Copy in Glass Panel */}
        <div className="glass-panel flex flex-col justify-center p-6 sm:p-8">
          <ScrollReveal>
            <span className="section-tag-light">Background</span>
            <h2 className="mt-4 font-display text-heading-md sm:text-heading font-medium text-paper">
              Engineering Intelligence
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="mt-6 space-y-4 sm:space-y-5">
              {profile.bioParagraphs.map((para, i) => (
                <p key={i} className="font-body text-body-sm leading-relaxed text-[#e6d8c3]">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <dl className="mt-8 hairline-t">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="hairline-b flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3.5"
                >
                  <dt className="font-body text-caption uppercase tracking-label text-[#d4b483]">
                    {fact.label}
                  </dt>
                  <dd className="font-body text-body-sm text-paper">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
