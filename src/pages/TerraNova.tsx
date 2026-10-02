import React from 'react';
import { motion } from 'motion/react';

export const TerraNova = () => {
  return (
    <div className="min-h-screen bg-[#F7F2E8] text-[#3A563C]">
      <header className="py-6 px-6 md:px-12 border-b border-[#3A563C]/20 flex items-center justify-between">
        <div className="text-2xl font-serif font-bold text-[#3A563C]">Terra Nova</div>
        <a 
          href="/" 
          className="px-6 py-2 bg-[#3A563C] text-[#F7F2E8] rounded-full font-medium hover:bg-[#3A563C]/90 transition-all"
        >
          Voltar para Home
        </a>
      </header>
      
      <main className="container mx-auto px-6 md:px-12 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Image from user */}
          <div className="mb-12 max-w-sm mx-auto">
             <img src="/assets/images/logo_terra_nova.jpg" alt="Logo Terra Nova" className="w-full h-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-[#3A563C]">Nova Consciência</h1>
          <p className="text-xl max-w-2xl mx-auto mb-12 text-[#3A563C]/80">
            Um espaço dedicado ao seu despertar, equilíbrio e cura.
          </p>
          <div className="w-32 h-1 bg-[#C5A059] mx-auto mb-12"></div>
        </motion.div>
      </main>
      
      <footer className="py-10 text-center text-sm text-[#3A563C]/60">
        © 2026 Terra Nova - Ludmilla Deolinda
      </footer>
    </div>
  );
};
