"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative z-10 py-section overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-[1800px] grid-cols-1 gap-8 sm:gap-12 px-4 sm:px-10 md:grid-cols-2 md:gap-10 lg:px-16">
        {/* Left: heading + socials */}
        <ScrollReveal variant="slide-right" className="glass-panel flex flex-col justify-center p-6 sm:p-8">
          <div>
            <span className="section-tag-light">Get In Touch</span>
            <h2 className="mt-4 font-display text-heading font-medium leading-tight text-paper sm:text-heading-xl">
              Let&apos;s build something intelligent together.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-md font-body text-body-sm leading-relaxed text-[#e6d8c3]">
              I&apos;m actively looking for AI Engineer roles and always up for
              talking agentic systems, RAG pipelines, or CS research. Drop a
              line and I&apos;ll get back to you within a day or two.
            </p>

            <div className="mt-6 sm:mt-9 flex flex-wrap gap-4 sm:gap-6">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4 text-[#d4b483]" />
                  <span className="ghost-link-light text-caption">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: form */}
        <ScrollReveal variant="slide-left" delay={120} className="glass-panel flex flex-col justify-center p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-body text-caption uppercase tracking-label text-[#d4b483]"
              >
                Your name
              </label>
              <input
                id="name"
                required
                suppressHydrationWarning
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full border-b border-[#d4b483]/40 bg-transparent py-2 font-body text-body-sm text-paper placeholder:text-[#a08a6e] transition-colors duration-300 focus:border-paper focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-body text-caption uppercase tracking-label text-[#d4b483]"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                suppressHydrationWarning
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full border-b border-[#d4b483]/40 bg-transparent py-2 font-body text-body-sm text-paper placeholder:text-[#a08a6e] transition-colors duration-300 focus:border-paper focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-body text-caption uppercase tracking-label text-[#d4b483]"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                suppressHydrationWarning
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none border-b border-[#d4b483]/40 bg-transparent py-2 font-body text-body-sm text-paper placeholder:text-[#a08a6e] transition-colors duration-300 focus:border-paper focus:outline-none"
              />
            </div>

            <button type="submit" suppressHydrationWarning className="pill-light mt-2 self-start">
              {sent ? "Opening your email app…" : "Send Message"}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
