import { useRef, useCallback, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const BEFORE_IMG = "/images/antes.jpg";
const AFTER_IMG = "/images/depois.jpg";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeImgRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Manipulação de performance máxima sem re-renders do React
  const setPositionPercent = useCallback((percent: number) => {
    const p = Math.max(0, Math.min(percent, 100));
    if (sliderRef.current && beforeImgRef.current) {
      sliderRef.current.style.left = `${p}%`;
      beforeImgRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    }
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPositionPercent(percent);
  }, [setPositionPercent]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        // Previne seleção de texto acidental enquanto arrasta
        e.preventDefault();
        updatePosition(e.clientX);
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current) {
        updatePosition(e.touches[0].clientX);
      }
    };
    
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [updatePosition]);

  // Acessibilidade via teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!sliderRef.current) return;
    const currentLeft = parseFloat(sliderRef.current.style.left || "50");
    if (e.key === "ArrowLeft") setPositionPercent(currentLeft - 5);
    if (e.key === "ArrowRight") setPositionPercent(currentLeft + 5);
  };

  // Estado inicial
  useEffect(() => {
    setPositionPercent(50);
  }, [setPositionPercent]);

  return (
    <section className="relative py-24 sm:py-32 lg:py-44 overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Transformação"
          title={<>O poder da <span className="font-serif italic gold-gradient-text">precisão odontológica</span></>}
          description="Arraste para comparar. Um planejamento minucioso que transforma a saúde e a estética do seu sorriso."
        />

        <div className="mt-14 max-w-5xl mx-auto">
          {/* Labels */}
          <div className="flex justify-between mb-4 px-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500">Antes</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold/80">Depois</span>
          </div>

          {/* Container Principal */}
          <div
            ref={containerRef}
            role="slider"
            aria-label="Comparação interativa do antes e depois do tratamento"
            tabIndex={0}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onKeyDown={handleKeyDown}
            className="relative aspect-[4/5] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-2xl"
          >
            {/* Imagem de Fundo (Depois - Dentes Perfeitos) */}
            <img 
              src={AFTER_IMG} 
              alt="Sorriso perfeito após o tratamento" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
              draggable={false} 
            />

            {/* Imagem Sobreposta (Antes - Dentes com Cáries/Problemas) */}
            <div
              ref={beforeImgRef}
              className="absolute inset-0 overflow-hidden will-change-transform"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <img 
                src={BEFORE_IMG} 
                alt="Situação inicial do paciente antes do tratamento" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
                draggable={false} 
              />
            </div>

            {/* Slider / Barra Divisória */}
            <div 
              ref={sliderRef}
              className="absolute inset-y-0 -translate-x-1/2 pointer-events-none will-change-transform z-10" 
              style={{ left: "50%" }}
            >
              {/* Lens Flare Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-gold/20 rounded-full blur-[40px] mix-blend-screen pointer-events-none" />
              
              {/* Linha Dourada */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(197,160,89,0.8)]" />

              {/* Botão Circular Premium */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold/40 bg-obsidian/70 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(197,160,89,0.5)] transition-transform duration-200">
                <div className="w-0.5 h-3 bg-gold/80 rounded-full" />
                <div className="w-0.5 h-3 bg-gold/80 rounded-full" />
              </div>
            </div>

            {/* Sombra de profundidade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none mix-blend-multiply" />
          </div>

          <p className="mt-5 text-center text-[12px] text-neutral-600 tracking-wider uppercase select-none font-light">
            Deslize para ver o resultado
          </p>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
