"use client";

import Image from "next/image";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import Hexagon from "@/components/Hexagon";
import ScrollReveal from "@/components/ScrollReveal";
import { profile, experiences, educationList } from "@/lib/data";

const facts = [
  { label: "Education", value: profile.education },
  { label: "Academics", value: profile.gpa },
  { label: "Experience", value: "Unikrew · 10Pearls · Planet01" },
  { label: "Location", value: profile.location },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-10 lg:px-16 space-y-12">
        {/* Top Row: Avatar vignette + Bio */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 md:gap-10">
          {/* Circular Feature Vignette in Glass Panel */}
          <ScrollReveal
            variant="scale-up"
            className="glass-panel flex flex-col items-center justify-center p-6 sm:p-8"
          >
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
                  <p
                    key={i}
                    className="font-body text-body-sm leading-relaxed text-[#e6d8c3]"
                  >
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
                    className="hairline-b flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-3"
                  >
                    <dt className="font-body text-caption uppercase tracking-label text-[#d4b483]">
                      {fact.label}
                    </dt>
                    <dd className="font-body text-body-sm text-paper">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#261b12] border border-[#d4b483]/40 text-[#d4b483]">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <span className="section-tag-light">Track Record</span>
                <h3 className="font-display text-heading-xs text-paper mt-1">
                  Work Experience
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <ScrollReveal
                key={`${exp.company}-${exp.role}`}
                delay={idx * 90}
                variant="scale-up"
              >
                <div className="glass-panel h-full p-6 sm:p-7 flex flex-col justify-between hover:border-[#d4b483]/80 transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between gap-2 border-b border-[#d4b483]/20 pb-3">
                      <div>
                        <h4 className="font-display text-subheading font-medium text-paper">
                          {exp.role}
                        </h4>
                        <p className="font-body text-caption font-semibold text-[#d4b483]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#261b12] px-3 py-1 font-body text-micro text-[#d4b483] border border-[#d4b483]/30 whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 font-body text-body-sm leading-relaxed text-[#e6d8c3]">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-body text-caption text-[#d8c8b0]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#d4b483] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#d4b483]/20">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-[#2a1d13] px-2.5 py-0.5 font-body text-[11px] text-[#e6d8c3] border border-[#d4b483]/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#261b12] border border-[#d4b483]/40 text-[#d4b483]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="section-tag-light">Academic Foundation</span>
                <h3 className="font-display text-heading-xs text-paper mt-1">
                  Education
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <ScrollReveal
                key={edu.institution}
                delay={idx * 100}
                variant="scale-up"
              >
                <div className="glass-panel h-full p-6 sm:p-7 flex flex-col justify-between hover:border-[#d4b483]/80 transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between gap-2 border-b border-[#d4b483]/20 pb-3">
                      <div>
                        <h4 className="font-display text-subheading font-medium text-paper">
                          {edu.degree}
                        </h4>
                        <p className="font-body text-caption font-semibold text-[#d4b483]">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#261b12] px-3 py-1 font-body text-micro text-[#d4b483] border border-[#d4b483]/30 whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-caption text-[#e6d8c3]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#d4b483]" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-[#d4b483]">
                        <Award className="h-3.5 w-3.5 text-[#d4b483]" />
                        <span>{edu.gpaOrGrade}</span>
                      </div>
                    </div>

                    {edu.honors && (
                      <p className="mt-3 inline-block rounded bg-[#2a1d13] px-3 py-1 font-body text-caption text-[#d4b483] border border-[#d4b483]/30">
                        {edu.honors}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
