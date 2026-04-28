"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Palestrantes", href: "#palestrantes" },
    { name: "Cronograma", href: "#cronograma" },
    { name: "Ingressos", href: "#ingressos" },
    { name: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          {/* PLACEHOLDER LOGO */}
          <div className="text-2xl font-black tracking-tighter text-brand-900">
            Endomeeting<span className="text-brand-500">TM</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                isScrolled ? "text-neutral-600" : "text-neutral-800"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#ingressos"
            className="rounded-full bg-brand-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/30 hover:bg-brand-800 transition-all hover:scale-105"
          >
            Garantir Vaga
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col border-t border-neutral-100"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 border-b border-neutral-50 text-neutral-600 font-medium hover:bg-neutral-50 hover:text-brand-600"
            >
              {link.name}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#ingressos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center rounded-xl bg-brand-900 px-6 py-3 font-semibold text-white shadow-md"
            >
              Garantir Vaga
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
