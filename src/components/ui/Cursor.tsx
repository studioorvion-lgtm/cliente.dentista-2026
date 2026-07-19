import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Premium custom cursor with a fixed dot and a lagging ring.
 * The ring expands and turns gold when hovering interactive elements.
 * Renders nothing on touch devices.
 */
export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 110, damping: 17, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 110, damping: 17, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], [role='slider'], label, input")
      );
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0)
    return null;

  return (
    <div aria-hidden="true" className="pointer-events-none select-none">
      {/* Inner dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gold z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Outer ring — follows with spring lag, reacts to hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border z-[99998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          borderColor: hovering
            ? "rgba(197,160,89,0.55)"
            : "rgba(255,255,255,0.18)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
      />
    </div>
  );
}
