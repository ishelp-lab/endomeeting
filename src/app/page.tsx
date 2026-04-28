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
      {/* BACKGROUND DECORATIONS - GLOBAL LIGHTING */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-brand-200/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] -right-[10%] w-[35vw] h-[35vw] bg-brand-100/10 rounded-full blur-[100px] animate-float" />
      </div>

      <PaymentPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        checkoutUrl={kiwifyCheckoutUrl} 
      />

      {/* INTRO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
        {/* Background Image with opacity */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/intro-dark.png" 
            alt="Endomeeting Background" 
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-neutral-950" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 flex flex-col items-center text-center px-6"
        >
          <div className="w-20 h-1 bg-brand-600 mb-8 rounded-full" />
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
            4º ENDO<span className="text-brand-500">MEETING</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 font-medium tracking-[0.2em] uppercase mb-12">
            Triângulo Mineiro • 2027
          </p>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neutral-500"
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em]">Role para entrar</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-brand-600 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* HERO & VIDEO SECTION */}
      <section id="hero" className="relative w-full min-h-screen flex items-center justify-center py-24 overflow-hidden bg-white/50 backdrop-blur-sm border-t border-neutral-100">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-6 border border-brand-100/50">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Inscrições Abertas - Lote de Pré-venda
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tight leading-[0.9] mb-8">
              A Excelência<br/>
              <span className="text-brand-900">Redefinida</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl leading-relaxed">
              O evento que reúne os maiores especialistas em endodontia do Brasil para dois dias de imersão tecnológica e científica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center justify-center gap-3 px-10 py-5 bg-brand-900 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-brand-900/40"
              >
                Garantir Ingresso
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-neutral-900 border border-neutral-200 rounded-2xl text-lg font-bold hover:bg-neutral-50 transition-colors">
                <span className="w-8 h-8 flex items-center justify-center bg-brand-50 rounded-full text-brand-600">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1" />
                </span>
                Ver Teaser
              </button>
            </div>
          </motion.div>

          {/* Video / Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-8 border-white group"
          >
            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
              {/* NOTE: Replace with real video embed later */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                </div>
                <span className="text-white/60 font-bold uppercase tracking-widest text-sm">Assista ao Vídeo de 2026</span>
              </div>
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="w-full py-12 bg-neutral-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-wrap justify-between gap-8 md:gap-12">
          {[
            { icon: <Calendar className="w-5 h-5" />, label: "DATA", val: "01 e 02 de Maio, 2027" },
            { icon: <MapPin className="w-5 h-5" />, label: "LOCAL", val: "Center Convention, Uberlândia" },
            { icon: <User className="w-5 h-5" />, label: "PÚBLICO", val: "CDs e Acadêmicos" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="text-brand-500">{item.icon}</div>
              <div>
                <p className="text-[10px] font-black tracking-[0.2em] text-neutral-500">{item.label}</p>
                <p className="text-sm font-bold">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="w-full py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">Excelência em <span className="text-brand-900">Foco</span></h2>
            <p className="text-xl text-neutral-500 mb-10 leading-relaxed font-medium">
              Organizado pela Equipe Rodrigo Faria de Endodontia, o Endomeeting é o epicentro da inovação endodôntica no Brasil.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Alta Tecnologia", desc: "Acesso às mais recentes inovações e microscopia de ponta.", icon: <CheckCircle2 className="w-6 h-6" /> },
              { title: "Networking Elite", desc: "Conexões valiosas com os maiores nomes da endodontia nacional.", icon: <User className="w-6 h-6" /> },
              { title: "Imersão Prática", desc: "Vivencie protocolos clínicos reais com hands-on especializados.", icon: <Stethoscope className="w-6 h-6" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 hover:border-brand-200/50 hover:bg-white hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-white shadow-sm border border-neutral-100 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-900 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section id="palestrantes" className="w-full py-32 bg-neutral-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight"
            >
              Mestres da Endodontia
            </motion.h2>
            <p className="text-neutral-500 max-w-2xl text-xl font-medium">Conheça os especialistas que estão transformando a endodontia clínica.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group bg-white rounded-[2rem] p-8 border border-neutral-100 hover:border-brand-200 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-3xl bg-neutral-100 mb-6 overflow-hidden flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                  <User className="w-12 h-12 text-neutral-300" />
                  <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{speaker.name}</h3>
                <h4 className="text-sm font-bold text-brand-700 mb-4 tracking-wider uppercase">{speaker.title}</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-medium line-clamp-3">{speaker.description}</p>
              </motion.div>
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
