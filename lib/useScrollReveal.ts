"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollRevealOptions {
  /** Fraction of the element that must be visible before triggering (0–1). */
  threshold?: number;
  /** CSS-style root margin, e.g. "0px 0px -60px 0px". */
  rootMargin?: string;
  /** If true the element can re-hide when leaving the viewport. */
  repeat?: boolean;
}

/**
 * Observes a single element and flips `isRevealed` to true the
 * first time it enters the viewport (one-shot by default).
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", repeat = false } = options;
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, repeat]);

  return [ref, isRevealed];
}
