"use client";

import { useState } from "react";
import Image from "next/image";
import { PaymentPopup } from "@/components/PaymentPopup";
import { speakers } from "@/data/speakers";
import { MapPin, Calendar, CheckCircle2, ChevronRight, User, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // O link do Kiwify atualizado (pode ser ajustado conforme a necessidade)
  const kiwifyCheckoutUrl = "https://pay.kiwify.com.br/xxxxx";

  return (
    <div className="flex flex-col items-center">
      <PaymentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        checkoutUrl={kiwifyCheckoutUrl} 
      />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-50 rounded-bl-full -z-10 opacity-60 blur-3xl" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6 border border-brand-100">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              O Maior Evento de Endodontia do Triângulo Mineiro
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-tight mb-6">
              4º Endomeeting<br/>
              <span className="text-brand-900">TM 2027</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl leading-relaxed">
              Vivencie a endodontia com sucesso e excelência. Renove conhecimentos, conecte-se com especialistas e acesse as últimas inovações da tecnologia endodôntica.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-neutral-100 rounded-xl text-brand-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">1 e 2 de Maio</p>
                  <p className="text-sm text-neutral-500">2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-neutral-100 rounded-xl text-brand-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Center Convention</p>
                  <p className="text-sm text-neutral-500">Uberlândia - MG</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsPopupOpen(true)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-brand-900 text-white rounded-2xl text-lg font-bold overflow-hidden shadow-xl shadow-brand-900/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">Garantir Minha Vaga</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-brand-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </button>
          </motion.div>

          {/* Hero Image/Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 to-brand-600 rounded-[3rem] rotate-3 opacity-10" />
            <div className="absolute inset-0 bg-neutral-100 rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 flex items-center justify-center">
              <Stethoscope className="w-32 h-32 text-neutral-300" />
              {/* NOTE: Add event photo here later */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="w-full py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Excelência em Foco</h2>
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Organizado pela <strong>Equipe Rodrigo Faria de Endodontia</strong>, o Endomeeting é uma oportunidade única para você aprimorar os conhecimentos e técnicas com os melhores e mais renomados palestrantes do Brasil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Alta Tecnologia", desc: "Acesso às mais recentes inovações tecnológicas da área." },
              { title: "Networking", desc: "Conexões valiosas com outros profissionais e feira comercial." },
              { title: "Hands-on", desc: "Vivencie na prática equipamentos e protocolos clínicos." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-10 h-10 text-brand-600 mb-6" />
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section id="palestrantes" className="w-full py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-4 tracking-tight">Palestrantes Renomados</h2>
            <p className="text-neutral-600 max-w-2xl text-lg">Aprenda com professores experientes que aliam alta tecnologia e resultados de excelência na prática clínica.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="group bg-neutral-50 rounded-3xl p-6 border border-neutral-100 hover:border-brand-200 transition-colors flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-neutral-200 mb-5 overflow-hidden flex items-center justify-center relative">
                  <User className="w-10 h-10 text-neutral-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{speaker.name}</h3>
                <h4 className="text-sm font-semibold text-brand-700 mb-3">{speaker.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{speaker.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETS SECTION */}
      <section id="ingressos" className="w-full py-24 bg-brand-900 relative overflow-hidden">
        {/* Decorator */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-white blur-3xl" />
          <div className="absolute top-[60%] -right-[10%] w-[50%] aspect-square rounded-full bg-black blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Garanta sua Vaga</h2>
            <p className="text-brand-100 max-w-2xl mx-auto text-lg">Lotes limitados. Quanto antes você garantir, mais você economiza!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Categoria 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col">
              <div className="mb-4 text-sm font-bold text-brand-600 tracking-wider uppercase">Pré-venda</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Graduação e Pós</h3>
              <p className="text-neutral-500 text-sm mb-6 pb-6 border-b border-neutral-100">Alunos matriculados</p>
              
              <div className="mb-8">
                <span className="text-sm text-neutral-500 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-neutral-900">R$</span>
                  <span className="text-4xl font-black text-neutral-900">102,07</span>
                </div>
                <span className="text-sm text-brand-600 font-medium block mt-2">À vista R$ 375,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 transition-colors"
              >
                Comprar Agora
              </button>
            </div>

            {/* Categoria 2 - Destaque */}
            <div className="bg-neutral-950 rounded-3xl p-8 shadow-2xl flex flex-col transform md:-translate-y-4 border border-neutral-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">MAIS POPULAR</div>
              <div className="mb-4 text-sm font-bold text-brand-400 tracking-wider uppercase">Pré-venda</div>
              <h3 className="text-xl font-bold text-white mb-2">Ex-Alunos & Parceiros</h3>
              <p className="text-neutral-400 text-sm mb-6 pb-6 border-b border-neutral-800">Cooperados e grupos de estudo</p>
              
              <div className="mb-8">
                <span className="text-sm text-neutral-400 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">R$</span>
                  <span className="text-4xl font-black text-white">122,49</span>
                </div>
                <span className="text-sm text-brand-400 font-medium block mt-2">À vista R$ 450,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/20"
              >
                Comprar Agora
              </button>
            </div>

            {/* Categoria 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col">
              <div className="mb-4 text-sm font-bold text-brand-600 tracking-wider uppercase">Pré-venda</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Cirurgiões Dentistas</h3>
              <p className="text-neutral-500 text-sm mb-6 pb-6 border-b border-neutral-100">Profissionais formados</p>
              
              <div className="mb-8">
                <span className="text-sm text-neutral-500 block mb-1">Por até 4x de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-neutral-900">R$</span>
                  <span className="text-4xl font-black text-neutral-900">176,92</span>
                </div>
                <span className="text-sm text-brand-600 font-medium block mt-2">À vista R$ 650,00</span>
              </div>
              
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="mt-auto w-full py-4 rounded-xl font-bold text-brand-900 bg-brand-50 hover:bg-brand-100 transition-colors"
              >
                Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PATROCINADORES */}
      <Sponsors />

      {/* LOCATION SECTION */}
      <section id="localizacao" className="w-full py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Local do Evento</h2>
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-brand-50 rounded-xl text-brand-600 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Center Convention Uberlândia</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Center Shopping - Av. João Naves de Ávila, 1331 - Piso L4<br/>
                    Tibery, Uberlândia/MG - 38408-902
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-900 mb-4 mt-12 tracking-tight">Hospedagem Recomendada</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-neutral-900">Mercure Uberlândia Plaza Shopping</h4>
                  <p className="text-sm text-neutral-500">Opção oficial do evento (anexo ao Center Convention).</p>
                </div>
                <div className="p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-neutral-900">Ibis Uberlândia</h4>
                  <p className="text-sm text-neutral-500">Avenida João Naves de Ávila, 1590 A</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-neutral-100 rounded-[2rem] overflow-hidden aspect-square md:aspect-video lg:aspect-square relative shadow-lg">
              {/* Placeholder for Map / Local Photo */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-300 flex-col gap-4">
                <MapPin className="w-16 h-16 opacity-50" />
                <span className="font-medium text-neutral-400">Mapa Interativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
