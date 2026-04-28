"use client";

import { useState } from "react";
import { PaymentPopup } from "@/components/PaymentPopup";
import { Sponsors } from "@/components/Sponsors";
import { speakers } from "@/data/speakers";
import { MapPin, Calendar, CheckCircle2, ChevronRight, User, Stethoscope, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // O link do Kiwify atualizado (pode ser ajustado conforme a necessidade)
  const kiwifyCheckoutUrl = "https://pay.kiwify.com.br/xxxxx";

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <PaymentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        checkoutUrl={kiwifyCheckoutUrl} 
      />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 bg-white overflow-visible">
        {/* Abstract Background Element - Lighting */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-500/10 rounded-full -z-10 blur-[100px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-yellow-500/5 rounded-full -z-10 blur-[80px] -translate-x-1/4 translate-y-1/4" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 backdrop-blur-sm text-brand-700 font-medium text-sm mb-6 border border-brand-100 shadow-sm shadow-brand-100/50">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              O Maior Evento de Endodontia do Triângulo Mineiro
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-tight mb-6 relative">
              4º Endomeeting<br/>
              <span className="text-brand-900 relative">
                TM 2027
                {/* Text Glow */}
                <span className="absolute inset-0 text-brand-900 blur-2xl opacity-30 select-none">TM 2027</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
              Vivencie a endodontia com sucesso e excelência. Renove conhecimentos, conecte-se com especialistas e acesse as últimas inovações da tecnologia endodôntica.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/60 p-2 pr-4 rounded-2xl backdrop-blur-md border border-neutral-100 shadow-sm">
                <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">1 e 2 de Maio</p>
                  <p className="text-xs text-neutral-500">2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-2 pr-4 rounded-2xl backdrop-blur-md border border-neutral-100 shadow-sm">
                <div className="p-2.5 bg-brand-50 rounded-xl text-brand-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Center Convention</p>
                  <p className="text-xs text-neutral-500">Uberlândia - MG</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsPopupOpen(true)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-900 to-brand-700 text-white rounded-2xl text-lg font-bold overflow-hidden shadow-[0_0_30px_rgba(153,27,27,0.3)] hover:shadow-[0_0_40px_rgba(153,27,27,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto border border-brand-600/30"
            >
              <span className="relative z-10 flex items-center gap-2">Garantir Minha Vaga <Sparkles className="w-4 h-4 text-brand-200" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </button>
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 via-brand-600 to-brand-400 rounded-[3rem] rotate-3 opacity-15 blur-lg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white to-neutral-50 rounded-[3rem] overflow-hidden shadow-2xl border border-white flex items-center justify-center relative group">
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              <Stethoscope className="w-32 h-32 text-neutral-200 drop-shadow-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="relative w-full py-24 bg-neutral-50 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[100px] opacity-60" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6">Excelência em Foco</h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Organizado pela <strong>Equipe Rodrigo Faria de Endodontia</strong>, o Endomeeting é uma oportunidade única para você aprimorar os conhecimentos e técnicas com os melhores e mais renomados palestrantes do Brasil.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Alta Tecnologia", desc: "Acesso às mais recentes inovações tecnológicas da área." },
              { title: "Networking", desc: "Conexões valiosas com outros profissionais e feira comercial." },
              { title: "Hands-on", desc: "Vivencie na prática equipamentos e protocolos clínicos." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.15 } }
                }}
                className="group bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-neutral-200/60 hover:shadow-xl hover:shadow-brand-900/5 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                <CheckCircle2 className="w-10 h-10 text-brand-600 mb-6 relative z-10 drop-shadow-md" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-neutral-600 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section id="palestrantes" className="relative w-full py-32 bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[120px] opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col items-center mb-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6">Palestrantes Renomados</h2>
            <p className="text-neutral-600 max-w-2xl text-lg">Aprenda com professores experientes que aliam alta tecnologia e resultados de excelência na prática clínica.</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: (index % 4) * 0.1 } }
                }}
                className="group bg-neutral-50/50 rounded-[2rem] p-8 border border-neutral-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-100 to-white mb-6 overflow-hidden flex items-center justify-center relative shadow-inner p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-neutral-200 flex items-center justify-center border-4 border-white shadow-sm">
                    <User className="w-10 h-10 text-neutral-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 relative z-10">{speaker.name}</h3>
                <h4 className="text-sm font-semibold text-brand-600 mb-4 relative z-10">{speaker.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed relative z-10">{speaker.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS SECTION */}
      <section id="ingressos" className="w-full py-32 bg-neutral-950 relative overflow-hidden">
        {/* Decorator Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square rounded-full bg-brand-900/30 blur-[150px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Garanta sua Vaga</h2>
            <p className="text-brand-200/80 max-w-2xl mx-auto text-lg">Lotes limitados. Quanto antes você garantir, mais você economiza!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Categoria 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="mb-4 text-xs font-bold text-brand-400 tracking-wider uppercase">Pré-venda</div>
              <h3 className="text-xl font-bold text-white mb-2">Graduação e Pós</h3>
              <p className="text-neutral-400 text-sm mb-6 pb-6 border-b border-white/10">Alunos matriculados</p>
              
              <div className="mb-8">
                <span className="text-sm text-neutral-400 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-4xl font-black text-white">102,07</span>
                </div>
                <span className="text-sm text-brand-400/80 font-medium block mt-2">À vista R$ 375,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-brand-900 bg-white hover:scale-[1.02] transition-all duration-300"
              >
                Comprar Agora
              </button>
            </motion.div>

            {/* Categoria 2 - Destaque */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-brand-900/80 to-brand-950 backdrop-blur-xl rounded-[2rem] p-8 border border-brand-500/30 flex flex-col transform md:-translate-y-8 relative overflow-hidden shadow-[0_0_50px_rgba(153,27,27,0.4)] group"
            >
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-md">MAIS POPULAR</div>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
              
              <div className="mb-4 text-xs font-bold text-brand-300 tracking-wider uppercase relative z-10">Pré-venda</div>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Ex-Alunos & Parceiros</h3>
              <p className="text-brand-200/60 text-sm mb-6 pb-6 border-b border-brand-700/50 relative z-10">Cooperados e grupos de estudo</p>
              
              <div className="mb-8 relative z-10">
                <span className="text-sm text-brand-200/80 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-5xl font-black text-white drop-shadow-md">122,49</span>
                </div>
                <span className="text-sm text-brand-300 font-medium block mt-2">À vista R$ 450,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-brand-950 bg-gradient-to-r from-white to-brand-50 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 relative z-10"
              >
                Comprar Agora
              </button>
            </motion.div>

            {/* Categoria 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="mb-4 text-xs font-bold text-brand-400 tracking-wider uppercase">Pré-venda</div>
              <h3 className="text-xl font-bold text-white mb-2">Cirurgiões Dentistas</h3>
              <p className="text-neutral-400 text-sm mb-6 pb-6 border-b border-white/10">Profissionais formados</p>
              
              <div className="mb-8">
                <span className="text-sm text-neutral-400 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-4xl font-black text-white">176,92</span>
                </div>
                <span className="text-sm text-brand-400/80 font-medium block mt-2">À vista R$ 650,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-brand-900 bg-white hover:scale-[1.02] transition-all duration-300"
              >
                Comprar Agora
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section id="localizacao" className="relative w-full py-32 bg-white overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-brand-50 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-8">Local do Evento</h2>
              <div className="flex items-start gap-5 mb-10 p-6 bg-white rounded-3xl shadow-lg shadow-neutral-200/40 border border-neutral-100">
                <div className="p-4 bg-brand-50 rounded-2xl text-brand-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Center Convention Uberlândia</h3>
                  <p className="text-neutral-500 leading-relaxed text-lg">
                    Center Shopping - Av. João Naves de Ávila, 1331<br/>
                    Piso L4 - Tibery, Uberlândia/MG<br/>
                    CEP 38408-902
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 mt-12 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                Hospedagem Recomendada
              </h3>
              <div className="space-y-4">
                <div className="p-5 border border-brand-100 bg-brand-50/30 rounded-2xl hover:bg-brand-50 transition-colors">
                  <h4 className="font-bold text-brand-900 text-lg">Mercure Uberlândia Plaza Shopping</h4>
                  <p className="text-brand-700/80 mt-1">Opção oficial do evento (anexo ao Center Convention).</p>
                </div>
                <div className="p-5 border border-neutral-100 rounded-2xl hover:bg-neutral-50 transition-colors">
                  <h4 className="font-bold text-neutral-900 text-lg">Ibis Uberlândia</h4>
                  <p className="text-neutral-500 mt-1">Avenida João Naves de Ávila, 1590 A</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-100 rounded-[3rem] overflow-hidden aspect-square md:aspect-video lg:aspect-square relative shadow-2xl border-4 border-white"
            >
              {/* Placeholder for Map / Local Photo */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 flex-col gap-4 bg-gradient-to-br from-neutral-100 to-neutral-200">
                <MapPin className="w-16 h-16 opacity-30" />
                <span className="font-medium text-lg opacity-60">Mapa Interativo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SPONSORS SECTION */}
      <Sponsors />
    </div>
  );
}
