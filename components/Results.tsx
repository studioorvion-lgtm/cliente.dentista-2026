"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { galleryImages } from "@/lib/data";

export default function Results() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Resultados"
          title="Transformações que falam por si"
          description="Cada sorriso é único. Cada resultado, uma obra de precisão, arte e tecnologia combinadas."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl overflow-hidden ${img.span ?? ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
