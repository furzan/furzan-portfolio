"use client";

import { ArrowUpRight, Github } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, profile } from "@/lib/data";

const gridClasses: Record<string, string> = {
  a: "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1",
  b: "md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2",
  c: "md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1",
  d: "md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1",
  e: "md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1",
  github: "md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-1",
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="glass-panel max-w-2xl p-6 sm:p-8">
            <span className="section-tag-light">Selected Portfolio</span>
            <h2 className="mt-3 font-display text-heading-md sm:text-heading font-medium text-paper">
              Featured Projects
            </h2>
            <p className="mt-3 font-body text-body-sm leading-relaxed text-[#e6d8c3]">
              A selection of agentic AI systems, multimodal RAG tools, and full-stack builds — pulled straight from what&apos;s shipped and public on GitHub.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[14.5rem]">
          {projects.map((project, i) => {
            const isFeatured = project.area === "a" || project.area === "b";
            return (
              <ScrollReveal
                key={project.title}
                variant="scale-up"
                delay={i * 80}
                className={gridClasses[project.area] || ""}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex min-h-[12.5rem] md:min-h-0 h-full flex-col justify-between p-card transition-all duration-300 glass-panel ${
                    isFeatured
                      ? "border-2 border-[#d4b483]/60 bg-[#1e150d]/85"
                      : "hover:border-[#d4b483]/80"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-body text-micro uppercase tracking-label text-[#d4b483]">
                        {isFeatured ? "Flagship AI" : "Repo"}
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-paper" />
                    </div>

                    <h3
                      className={`mt-3 font-display italic ${
                        isFeatured ? "text-heading-xs text-paper" : "text-heading-2xs text-paper"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 font-body text-body-sm leading-relaxed text-[#e6d8c3]">
                      {project.description}
                    </p>
                  </div>

                  <p className="mt-4 font-body text-caption text-[#d4b483]">
                    {project.tags.slice(0, 5).join("  ·  ")}
                  </p>
                </a>
              </ScrollReveal>
            );
          })}

          {/* Bento filler: link out to the full repo list */}
          <ScrollReveal
            variant="scale-up"
            delay={projects.length * 80}
            className={gridClasses.github}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[10rem] md:min-h-0 h-full flex-row items-center justify-between glass-panel p-card border-dashed border-[#d4b483]/60 hover:border-paper hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#261b12] border border-[#d4b483]/40 text-paper">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-subheading italic text-paper">
                    22+ Repositories on GitHub
                  </p>
                  <p className="font-body text-caption text-[#e6d8c3]">
                    Explore open-source agentic pipelines, RAG tools, and full-stack experiments
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 font-body text-caption font-semibold text-[#d4b483] group-hover:text-paper transition-colors shrink-0">
                <span>github.com/furzan</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
