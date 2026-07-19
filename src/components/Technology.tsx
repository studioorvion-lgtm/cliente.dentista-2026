import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { techItems } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { EASE as ease } from "@/lib/config";

/** Glass 3D Tilt Card */
function TechCard({ item, i, isLeft }: { item: (typeof techItems)[0]; i: number; isLeft: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const springRotX = useSpring(rotX, { stiffness: 200, damping: 30 });
  const springRotY = useSpring(rotY, { stiffness: 200, damping: 30 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    rotX.set(((y - rect.height / 2) / rect.height) * -3);
    rotY.set(((x - rect.width  / 2) / rect.width)  *  5);
    glowX.set((x / rect.width)  * 100);
    glowY.set((y / rect.height) * 100);
  }, [rotX, rotY, glowX, glowY]);

  const onLeave = useCallback(() => {
    rotX.set(0);
    rotY.set(0);
  }, [rotX, rotY]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: i * 0.1, ease }}
      className="relative lg:grid lg:grid-cols-2 items-center"
    >
      <div className={isLeft ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"}>
        <div className="tilt-root">
          <motion.div
            ref={cardRef}
            style={{ rotateX: springRotX, rotateY: springRotY }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="tilt-inner group card-premium p-7 sm:p-9 relative overflow-hidden"
          >
            {/* Dynamic glass shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-[inherit]"
              style={{
                background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.06), transparent 40%)`,
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Inner content wrapper (preventing 3D distortion on text) */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gold/8 border border-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/14 group-hover:border-gold/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[10px] font-medium text-neutral-600 tabular-nums tracking-widest">
                  {String(i + 1).padStart(2, "0")} / {String(techItems.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-white mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-[1.75] font-light">
                {item.description}
              </p>
              {item.image && (
                <div className="mt-8 rounded-xl overflow-hidden aspect-[4/3] border border-white/[0.04]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center dot for timeline */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 + 0.25, type: "spring", stiffness: 300 }}
          className="w-3 h-3 rounded-full bg-gradient-to-br from-gold-light to-gold ring-4 ring-obsidian shadow-[0_0_16px_rgba(197,160,89,0.4)]"
        >
          {/* Subtle pulse */}
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            style={{ background: "rgba(197,160,89,0.4)" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <section id="tecnologia" className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="ambient-glow-blue w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Tecnologia"
          title={<>Engenharia de precisão a serviço <span className="font-serif italic gold-gradient-text">do seu sorriso</span></>}
          description="Investimos continuamente nas tecnologias mais avançadas do mundo para oferecer tratamentos mais rápidos, seguros e previsíveis."
        />

        <div ref={containerRef} className="mt-16 relative">
          {/* Vertical line timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden lg:block overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.03]" />
            <motion.div
              style={{ scaleY: lineScaleY, originY: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
            />
          </div>

          <div className="space-y-4 lg:space-y-12">
            {techItems.map((item, i) => (
              <TechCard key={item.title} item={item} i={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
