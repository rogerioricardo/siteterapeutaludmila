import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { ImageCarousel } from '../components/ImageCarousel';

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
          className="max-w-3xl mx-auto text-[#3A563C]"
        >
          {/* Logo/Image */}
          <div className="mb-12 max-w-sm mx-auto">
             <img src="/assets/images/logo_terra_nova.jpg" alt="Logo Terra Nova" className="w-full h-auto" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Um novo olhar sobre si. Um novo caminho para a vida.
          </h1>
          
          <div className="space-y-6 text-lg leading-relaxed text-[#3A563C]/80 text-left mb-16">
            <p>A Terra Nova — Nova Consciência nasceu do propósito de criar um espaço onde o cuidado vai além do corpo e alcança também as emoções, a mente e a dimensão espiritual.</p>
            <p>Idealizado por Ludmilla Deolinda, terapeuta holística e integrativa (CRT 53400), o espaço é um convite ao autoconhecimento, à expansão da consciência e à reconexão com a própria essência.</p>
            <p>Acredito que, ao longo da vida, muitas vezes nos afastamos de quem realmente somos. Acumulamos crenças, experiências, medos e padrões que, pouco a pouco, podem limitar nossas escolhas e nos manter presos a histórias que já não representam nossa verdadeira identidade.</p>
            <p>É nesse processo que meu trabalho encontra seu propósito: oferecer acolhimento, escuta ativa e práticas integrativas que favoreçam a percepção, o discernimento e a construção de novas possibilidades.</p>
            <p>Aqui, cada pessoa é recebida em sua individualidade, respeitando sua história, seu tempo e seu próprio processo de transformação.</p>
            <p>Por meio de atendimentos terapêuticos, práticas de cuidado integrativo e do Método Reconexão, o espaço proporciona experiências voltadas ao equilíbrio, ao autoconhecimento e ao despertar de uma nova consciência.</p>
            <p>A Terra Nova representa um recomeço.</p>
            <p>Um lugar para desacelerar, olhar para dentro, reconhecer sua força interior e descobrir que sempre é possível construir uma nova relação consigo mesmo e com a vida.</p>
            <p>Porque transformar a própria realidade começa quando você se permite reencontrar quem realmente é.</p>
          </div>

          {/* Carousel */}
          <div className="mb-16">
            <ImageCarousel images={siteConfig.terraNovaCarousel} />
          </div>

          <div className="space-y-2 font-serif font-bold text-lg">
            <p>Terra Nova — Nova Consciência.</p>
            <p>Conexão. Equilíbrio. Cura. Expansão. Transformação.</p>
          </div>
          
          <div className="w-32 h-1 bg-[#C5A059] mx-auto my-12"></div>
        </motion.div>
      </main>
      
      <footer className="py-10 text-center text-sm text-[#3A563C]/60">
        © 2026 Terra Nova - Ludmilla Deolinda
      </footer>
    </div>
  );
};
