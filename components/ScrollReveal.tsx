"use client";

import { type ReactNode, type ElementType } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Variant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up";

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation style. Default: "fade-up". */
  variant?: Variant;
  /** Extra delay in ms (added on top of any CSS stagger). */
  delay?: number;
  /** IntersectionObserver threshold (0–1). */
  threshold?: number;
  /** Additional class names forwarded to the wrapper div. */
  className?: string;
  /** HTML tag to render. Default: "div". */
  as?: ElementType;
}

const variantClass: Record<Variant, string> = {
  "fade-up": "",
  "fade-in": "scroll-reveal--fade-in",
  "slide-left": "scroll-reveal--slide-left",
  "slide-right": "scroll-reveal--slide-right",
  "scale-up": "scroll-reveal--scale",
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Component = "div",
}: ScrollRevealProps) {
  const [ref, isRevealed] = useScrollReveal<HTMLDivElement>({ threshold });

  const classes = [
    "scroll-reveal",
    variantClass[variant],
    isRevealed ? "revealed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName = Component as any;

  return (
    <TagName
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </TagName>
  );
}
