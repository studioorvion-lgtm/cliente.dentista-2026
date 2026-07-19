import { useCallback, useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Creates a magnetic attraction effect: the element follows the cursor
 * with spring physics, creating a premium "pull" sensation.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 22, mass: 0.7 });
  const y = useSpring(rawY, { stiffness: 280, damping: 22, mass: 0.7 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      rawX.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      rawY.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [strength, rawX, rawY]
  );

  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [onMove, onLeave]);

  return { ref, x, y };
}
