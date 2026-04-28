import { Star, Shield, Trophy, HeartHandshake } from "lucide-react";

export function Sponsors() {
  const sponsors = {
    ouro: [1, 2, 3], // placeholders for logos
    prata: [1, 2, 3, 4],
    bronze: [1, 2, 3, 4, 5],
    apoiadores: [1, 2, 3, 4, 5, 6],
  };

  return (
    <section id="patrocinadores" className="w-full py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4">Patrocinadores & Apoiadores</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Agradecemos imensamente aos parceiros que acreditam e tornam este evento possível.
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          
          {/* Categoria OURO */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-yellow-200" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-bold uppercase tracking-wider">
                <Star className="w-4 h-4" />
                Ouro
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-yellow-200" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sponsors.ouro.map((item) => (
                <div key={`ouro-${item}`} className="aspect-[3/2] bg-white rounded-2xl border border-yellow-100/50 shadow-sm flex items-center justify-center p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-neutral-300 font-medium">Logo Ouro</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categoria PRATA */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                Prata
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {sponsors.prata.map((item) => (
                <div key={`prata-${item}`} className="aspect-[3/2] bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center p-5 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 opacity-95">
                  <span className="text-neutral-300 font-medium text-sm">Logo Prata</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categoria BRONZE */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-200" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                Bronze
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-200" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {sponsors.bronze.map((item) => (
                <div key={`bronze-${item}`} className="aspect-[3/2] bg-white rounded-2xl border border-orange-50/50 shadow-sm flex items-center justify-center p-4 hover:shadow-sm transition-all duration-300 opacity-90">
                  <span className="text-neutral-300 font-medium text-xs">Logo Bronze</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categoria APOIADORES */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neutral-200" />
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-sm font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4" />
                Apoiadores
              </div>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neutral-200" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {sponsors.apoiadores.map((item) => (
                <div key={`apoiador-${item}`} className="aspect-[3/2] bg-white rounded-xl border border-neutral-100 flex items-center justify-center p-3 opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <span className="text-neutral-300 font-medium text-[10px]">Apoiador</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
