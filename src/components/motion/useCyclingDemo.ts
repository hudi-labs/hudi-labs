"use client";

import { useCallback, useEffect, useState } from "react";

type CyclingDemoOptions = {
  length: number;
  intervalMs: number;
};

export function useCyclingDemo({ length, intervalMs }: CyclingDemoOptions) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion || length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, isPaused, length, reduceMotion]);

  return {
    index,
    pause: useCallback(() => setIsPaused(true), []),
    resume: useCallback(() => setIsPaused(false), []),
  };
}
