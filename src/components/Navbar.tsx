import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";

const ease = [0.25, 1, 0.5, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("section[id], footer[id]");
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { threshold: 0.35 }
    );
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? "py-3 bg-obsidian/85 backdrop-blur-2xl border-b border-white/[0.04]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group" aria-label="Ir para o início">
            <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 rounded-full border border-gold/40 group-hover:border-gold/70 transition-colors duration-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            </div>
            <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/70 group-hover:text-white/90 transition-colors duration-300">
              Clínica Premium
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-[13px] transition-colors duration-200 ${
                    isActive ? "text-white" : "text-neutral-500 hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg glass-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contato" className="hidden sm:inline-flex btn-gold text-[13px]">
              Agendar Consulta
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <Menu className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[59] bg-obsidian/50 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 z-[60] w-[min(320px,100vw)] bg-charcoal border-l border-white/[0.06] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.05]">
                <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/50">Navegação</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, ease }}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-medium text-neutral-400 hover:text-white hover:bg-white/[0.03] transition-all duration-200 mb-0.5"
                  >
                    <span className="text-[10px] text-gold/40 font-mono w-4 flex-shrink-0">{String(i+1).padStart(2,"0")}</span>
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-5 py-6 border-t border-white/[0.05]">
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold w-full justify-center"
                >
                  Agendar Consulta Gratuita
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
