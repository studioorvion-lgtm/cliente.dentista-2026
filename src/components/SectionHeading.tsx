import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string | ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, centered = true, className = "" }: Props) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`eyebrow-label mb-5 ${centered ? "justify-center" : ""}`}
      >
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
        className={`text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] font-medium text-white leading-[1.08] tracking-[-0.035em] text-balance ${
          centered ? "mx-auto max-w-[90%] md:max-w-2xl lg:max-w-4xl" : "max-w-[90%] md:max-w-xl lg:max-w-2xl"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.25, 1, 0.5, 1] }}
          className={`mt-5 text-[15px] text-neutral-500 leading-[1.75] ${
            centered ? "mx-auto max-w-xl" : "max-w-md"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
