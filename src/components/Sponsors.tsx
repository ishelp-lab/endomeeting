"use client";

import { motion } from "framer-motion";

const sponsors = {
  ouro: ["/placeholder-sponsor.webp", "/placeholder-sponsor.webp"],
  prata: ["/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp"],
  bronze: ["/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp"],
  apoiadores: ["/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp", "/placeholder-sponsor.webp"]
};

export function Sponsors() {
  return (
    <section id="patrocinadores" className="w-full py-24 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Patrocinadores</h2>
          <p className="text-neutral-500 max-w-2xl text-lg">
            Agradecemos imensamente a todos que acreditam e tornam este evento possível.
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {/* Ouro */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-amber-500 tracking-[0.2em] uppercase mb-8">Cota Ouro</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {sponsors.ouro.map((src, i) => (
                <div key={i} className="w-40 h-20 md:w-48 md:h-24 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-amber-200">
                  <span className="text-neutral-400 font-medium text-sm">Logo Ouro</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prata */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase mb-8">Cota Prata</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {sponsors.prata.map((src, i) => (
                <div key={i} className="w-32 h-16 md:w-36 md:h-20 bg-neutral-50 rounded-2xl border border-neutral-100 shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md hover:border-slate-300">
                  <span className="text-neutral-400 font-medium text-xs">Logo Prata</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze & Apoiadores combinados na mesma linha visual ou blocos próximos */}
          <div className="grid md:grid-cols-2 gap-12 mt-4">
            {/* Bronze */}
            <div className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-amber-700/60 tracking-[0.2em] uppercase mb-6">Cota Bronze</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.bronze.map((src, i) => (
                  <div key={i} className="w-24 h-12 md:w-28 md:h-14 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <span className="text-neutral-400 text-[10px] font-medium">Logo Bronze</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Apoiadores */}
            <div className="flex flex-col items-center">
              <h3 className="text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase mb-6">Apoiadores</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.apoiadores.map((src, i) => (
                  <div key={i} className="w-20 h-10 md:w-24 md:h-12 bg-neutral-50/50 rounded-lg border border-neutral-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <span className="text-neutral-400 text-[9px] font-medium">Apoio</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
