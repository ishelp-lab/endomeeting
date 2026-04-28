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
    <section id="patrocinadores" className="w-full py-32 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-50/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
          >
            Patrocinadores
          </motion.h2>
          <p className="text-neutral-500 max-w-2xl text-xl font-medium">
            Parceiros que tornam o <span className="text-brand-900">Endomeeting</span> uma realidade.
          </p>
        </div>

        <div className="flex flex-col gap-20 max-w-6xl mx-auto">
          {/* Ouro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-sm font-bold text-amber-500 tracking-[0.3em] uppercase mb-10 bg-amber-50 px-6 py-2 rounded-full">Cota Ouro</h3>
            <div className="flex flex-wrap justify-center gap-10">
              {sponsors.ouro.map((src, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="w-48 h-24 md:w-56 md:h-28 bg-white rounded-[2rem] border border-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-xl hover:border-amber-200 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-50/0 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-neutral-400 font-bold text-sm tracking-tight">Logo Ouro</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prata */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-sm font-bold text-slate-400 tracking-[0.3em] uppercase mb-10 bg-slate-50 px-6 py-2 rounded-full">Cota Prata</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {sponsors.prata.map((src, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="w-36 h-20 md:w-44 md:h-24 bg-white rounded-2xl border border-neutral-100 shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-lg hover:border-slate-200 group"
                >
                  <span className="text-neutral-400 font-bold text-xs tracking-tight">Logo Prata</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bronze & Apoiadores */}
          <div className="grid md:grid-cols-2 gap-16 mt-4">
            {/* Bronze */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xs font-bold text-amber-800/60 tracking-[0.3em] uppercase mb-8">Cota Bronze</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {sponsors.bronze.map((src, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="w-28 h-14 md:w-32 md:h-16 bg-white rounded-xl border border-neutral-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 shadow-sm"
                  >
                    <span className="text-neutral-400 text-[10px] font-bold">Logo Bronze</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Apoiadores */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <h3 className="text-xs font-bold text-neutral-400 tracking-[0.3em] uppercase mb-8">Apoiadores</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {sponsors.apoiadores.map((src, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-12 bg-neutral-50/50 rounded-lg border border-neutral-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
                  >
                    <span className="text-neutral-400 text-[9px] font-bold">Apoio</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
