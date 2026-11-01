"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

const DURATION_MS = 1200;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 2);

/**
 * Anima de 0 até `end` quando o elemento entra no ecrã (uma só vez).
 * O HTML do servidor já traz o valor final (SEO / sem JS); com "reduzir movimento" nada é animado.
 * O texto é atualizado diretamente no DOM, sem re-renderizações.
 */
export function CountUp({ end, suffix = "", durationMs = DURATION_MS }: { end: number; suffix?: string; durationMs?: number }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (textRef.current) textRef.current.textContent = `0${suffix}`;
  }, [suffix]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    if (!wrap || !text || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const show = (n: number) => {
      text.textContent = `${n}${suffix}`;
    };
    if (!("IntersectionObserver" in window)) {
      show(end);
      return;
    }

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        show(Math.round(end * easeOutCubic(t)));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(wrap);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, suffix, durationMs]);

  return (
    <span ref={wrapRef} role="img" aria-label={`${end}${suffix}`}>
      <span ref={textRef} aria-hidden="true">
        {end}
        {suffix}
      </span>
    </span>
  );
}
