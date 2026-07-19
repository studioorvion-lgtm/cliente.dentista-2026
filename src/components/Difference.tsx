import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { differences } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { EASE as ease } from "@/lib/config";

function TiltFeatureCard({ item, i }: { item: (typeof differences)[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const springRotX = useSpring(rotX, { stiffness: 200, damping: 26 });
  const springRotY = useSpring(rotY, { stiffness: 200, damping: 26 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotX.set(((y - rect.height / 2) / rect.height) * -5);
    rotY.set(((x - rect.width  / 2) / rect.width)  *  7);
    glowX.set((x / rect.width)  * 100);
    glowY.set((y / rect.height) * 100);
  }, [rotX, rotY, glowX, glowY]);

  const onLeave = useCallback(() => {
    rotX.set(0);
    rotY.set(0);
  }, [rotX, rotY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.pow(i % 3, 0.7) * 0.1, ease }}
      className={`${i === 3 ? "lg:col-start-1" : ""} ${i === 4 ? "lg:col-start-2" : ""}`}
    >
      <div className="tilt-root h-full">
        <motion.div
          ref={cardRef}
          style={{ rotateX: springRotX, rotateY: springRotY }}
          className="tilt-inner group flex flex-col h-full relative"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {/* Specular shimmer */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(197,160,89,0.07) 0%, transparent 55%)`,
              opacity: 0,
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />

          <div className="border-t border-white/[0.04] pt-6 mb-6 flex justify-between items-start group-hover:border-gold/10 transition-colors duration-500 relative z-10">
            <span className="text-[10px] font-medium text-neutral-700 tracking-widest tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <motion.div
              className="text-gold/40"
              whileHover={{ color: "rgba(197,160,89,0.9)", scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </motion.div>
          </div>

          <h3 className="text-[17px] font-medium text-white mb-3 leading-snug group-hover:text-white/90 transition-colors relative z-10">
            {item.title}
          </h3>
          <p className="text-[14px] text-neutral-500 leading-[1.8] font-light relative z-10">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Difference() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Nossa Diferença"
          title={<>O que nos torna <span className="font-serif italic gold-gradient-text">excepcionais</span></>}
          description="Não é apenas o que fazemos, mas como fazemos. Cada detalhe foi pensado para entregar uma experiência irrepetível."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {differences.map((item, i) => (
            <TiltFeatureCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
