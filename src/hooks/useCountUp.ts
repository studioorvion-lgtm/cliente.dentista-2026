import { useCallback, useEffect, useRef, useState } from "react";

interface Options {
  to: number;
  duration?: number;
  delay?: number;
}

/**
 * Animates a number from 0 to `to` using easeOutExpo.
 * Triggers once when the returned ref element enters the viewport.
 */
export function useCountUp({ to, duration = 1600, delay = 0 }: Options) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    let rafId: number;
    let startTime: number | null = null;

    const timeout = setTimeout(() => {
      const tick = (now: number) => {
        if (!startTime) startTime = now;
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.round(eased * to));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [triggered, to, duration, delay]);

  return { value, ref };
}
