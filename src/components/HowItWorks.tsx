import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "@/lib/data";

const ease = [0.25, 1, 0.5, 1] as const;

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="ambient-glow-blue w-[600px] h-[400px] bottom-0 left-1/3 opacity-20" />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Como Funciona"
          title={<>Uma jornada clara, <span className="font-serif italic gold-gradient-text">do início ao fim</span></>}
          description="Cada etapa foi desenhada para que você se sinta seguro, informado e confiante em todo o processo."
        />

        <div ref={ref} className="mt-20 relative">
          {/* Connecting line desktop */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px hidden lg:block overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.03]" />
            <motion.div
              style={{ width: lineProgress }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/30 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group relative flex flex-col items-center text-center py-6"
              >
                {/* Background Number */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <span className="font-serif italic text-[120px] lg:text-[140px] leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Node dot */}
                <div className="w-2 h-2 rounded-full bg-white/[0.08] group-hover:bg-gold/60 transition-colors duration-400 mb-6 lg:mb-8 z-10" />

                <div className="relative z-10">
                  <h3 className="text-[15px] font-medium text-white mb-2 group-hover:text-white/90">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 leading-[1.65] max-w-[180px] font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
