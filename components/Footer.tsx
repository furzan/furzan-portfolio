"use client";

import LogoMark from "@/components/LogoMark";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 py-10 overflow-hidden border-t border-[#d4b483]/30 bg-[#160f0a]/80 backdrop-blur-md">
      <div className="relative z-10 mx-auto flex max-w-[1800px] flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10 lg:px-16">
        <ScrollReveal variant="fade-in" className="w-full flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-70">
            <LogoMark />
            <span className="font-body text-caption uppercase tracking-label text-paper">
              Furzan Ahmed
            </span>
          </a>

          <p suppressHydrationWarning className="font-body text-caption text-[#e6d8c3] text-center sm:text-left">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <p className="font-body text-micro uppercase tracking-label text-[#d4b483]">
              Built with precision
            </p>
            <p className="font-body text-[10px] text-[#a08a6e]">
              Art: AssetSmithy · ansimuz · Sismodyn · Admurin (CC-BY 4.0)
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
