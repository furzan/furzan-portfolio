"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`navbar-entrance sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#160e09]/90 backdrop-blur-md border-b border-[#d4b483]/30 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <LogoMark light={true} />
          <span className="font-body text-caption font-semibold uppercase tracking-wider text-[#d4b483] group-hover:text-paper transition-colors">
            Furzan Ahmed
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-caption font-medium text-[#e6d8c3] hover:text-paper hover:underline decoration-[#d4b483] underline-offset-6 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d4b483]/40 bg-[#1e150d]/80 text-[#d4b483] sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="border-t border-[#d4b483]/30 bg-[#160e09]/95 backdrop-blur-xl flex flex-col gap-2 px-6 py-4 sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-body text-body-sm font-medium text-[#e6d8c3] hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
