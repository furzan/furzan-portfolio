"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { skillGroups } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="skills" className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="glass-panel max-w-2xl p-6 sm:p-8">
            <span className="section-tag-light">Expertise</span>
            <h2 className="mt-3 font-display text-heading-md sm:text-heading font-medium text-paper">
              Tech Stack &amp; Toolkit
            </h2>
            <p className="mt-3 font-body text-body-sm leading-relaxed text-[#e6d8c3]">
              A working stack spanning core CS fundamentals, ML frameworks, and
              the full-stack tooling needed to ship an AI product end to end.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <ScrollReveal
              key={group.title}
              delay={i * 100}
              className="glass-panel p-5 sm:p-6"
            >
              <h3 className="font-display text-heading-2xs italic text-paper">
                {group.title}
              </h3>
              <p className="mt-1 font-body text-caption text-[#d4b483]">
                {group.blurb}
              </p>
              <p className="mt-4 sm:mt-5 font-body text-body-sm leading-relaxed text-paper">
                {group.skills.join("  ·  ")}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
