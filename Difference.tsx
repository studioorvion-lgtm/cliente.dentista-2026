"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-obsidian/70 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-gold/60 group-hover:border-gold transition-colors" />
              <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-125 transition-transform" />
            </div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/90">
              Premium
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-neutral-300 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center px-6 py-3 rounded-full bg-gold text-obsidian text-sm font-medium hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-300 min-h-[48px]"
            >
              Agendar Consulta
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-white/90">
                Premium
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                  className="text-2xl font-medium text-white/80 hover:text-gold transition-colors py-3 border-b border-white/[0.04]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="p-6">
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-gold text-obsidian font-medium hover:scale-[1.02] transition-transform"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
