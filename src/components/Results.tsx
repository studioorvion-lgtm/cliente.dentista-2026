import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "@/lib/data";
import { EASE as ease } from "@/lib/config";

export default function Results() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Resultados"
          title={<>Transformações que <span className="font-serif italic gold-gradient-text">falam por si</span></>}
          description="Cada sorriso é único. Cada resultado, uma obra de precisão, arte e tecnologia combinadas."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 auto-rows-[240px] sm:auto-rows-[300px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden ${img.span ?? ""}`}
              role="img"
              aria-label={img.alt}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                animate={{ scale: hovered === i ? 1.06 : 1 }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset transition-all duration-400 ${
                hovered === i ? "ring-gold/30" : "ring-white/[0.04]"
              }`} />
            </motion.figure>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-10 text-center"
        >
          <a href="#contato" className="btn-ghost">
            Agendar avaliação gratuita
          </a>
        </motion.div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
