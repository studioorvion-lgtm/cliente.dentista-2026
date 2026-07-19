import { motion } from "framer-motion";
import { EASE } from "@/lib/config";

interface Props {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  once?: boolean;
  inView?: boolean;
  animate?: boolean;
}

/**
 * Splits a string into words and reveals each word by sliding it up
 * from a clipped container — the signature "clip reveal" seen on
 * award-winning editorial sites.
 *
 * Usage:
 *   <RevealText as="h2" delay={0.1}>Your headline here</RevealText>
 */
export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "span",
  once = true,
  animate = false,
}: Props) {
  const words = children.split(" ");

  const inner = words.map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden"
      style={{ verticalAlign: "bottom", paddingBottom: "0.08em" }}
    >
      {animate ? (
        <motion.span
          className="inline-block"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.055,
            ease: EASE,
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ) : (
        <motion.span
          className="inline-block"
          initial={{ y: "105%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.055,
            ease: EASE,
          }}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      )}
    </span>
  ));

  return (
    <Tag className={className} aria-label={children}>
      {inner}
    </Tag>
  );
}
