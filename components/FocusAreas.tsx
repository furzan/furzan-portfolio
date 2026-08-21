"use client";

import { Bot, FileSearch, Layers, Sparkles, Cpu, Database } from "lucide-react";
import Hexagon from "@/components/Hexagon";
import ScrollReveal from "@/components/ScrollReveal";
import { focusAreas } from "@/lib/data";

// Fallback/index-based icon list to ensure icons ALWAYS render regardless of title strings
const defaultIcons = [
  <Bot key="bot" className="h-10 w-10 text-[#d4b483] transition-transform duration-300 group-hover:scale-110" />,
  <FileSearch key="search" className="h-10 w-10 text-[#d4b483] transition-transform duration-300 group-hover:scale-110" />,
  <Layers key="layers" className="h-10 w-10 text-[#d4b483] transition-transform duration-300 group-hover:scale-110" />,
];

const titleIconMap: Record<string, JSX.Element> = {
  "Agentic AI & Voice Pipelines": (
    <Bot className="h-10 w-10 text-[#d4b483]" />
  ),
  "Agentic AI": (
    <Bot className="h-10 w-10 text-[#d4b483]" />
  ),
  "Multimodal RAG Systems": (
    <FileSearch className="h-10 w-10 text-[#d4b483]" />
  ),
  "Retrieval & RAG": (
    <FileSearch className="h-10 w-10 text-[#d4b483]" />
  ),
  "Full-Stack AI Architecture": (
    <Layers className="h-10 w-10 text-[#d4b483]" />
  ),
  "Full-Stack Systems": (
    <Layers className="h-10 w-10 text-[#d4b483]" />
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
          {focusAreas.map((area, i) => {
            const icon = titleIconMap[area.title] || defaultIcons[i % defaultIcons.length];
            return (
              <ScrollReveal
                key={area.title}
                delay={i * 150}
                className="group glass-panel flex flex-col items-center text-center p-8 hover:border-[#d4b483]/80 transition-all duration-300"
              >
                <p className="font-display text-subheading italic text-paper">
                  {area.title}
                </p>
                <div className="mt-6 flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[#d4b483]/50 bg-[#160f0a]/80 backdrop-blur-sm shadow-xl transition-all duration-500 group-hover:border-paper group-hover:scale-105 group-hover:bg-[#261b12]">
                  {icon}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
