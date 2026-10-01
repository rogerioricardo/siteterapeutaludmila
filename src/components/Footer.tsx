
import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-sage-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-serif font-bold text-primary-dark">
                {siteConfig.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                {siteConfig.profession}
              </span>
            </div>
            <p className="text-primary-dark/60 max-w-xs text-sm">
              Um espaço de acolhimento, escuta e cuidado para você olhar para si com mais carinho e leveza.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-8">
            <a href="#" className="text-sm font-medium text-primary-dark/80 hover:text-primary">Início</a>
            <a href="#sobre" className="text-sm font-medium text-primary-dark/80 hover:text-primary">Sobre</a>
            <a href="#servicos" className="text-sm font-medium text-primary-dark/80 hover:text-primary">Atendimentos</a>
            <a href="#contato" className="text-sm font-medium text-primary-dark/80 hover:text-primary">Contato</a>
          </nav>
          
          <div className="flex items-center gap-6">
            <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Mail size={20} />
            </a>
            <a href={`tel:${siteConfig.contact.phone}`} className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-sage-light flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-dark/40 uppercase tracking-widest">
          <span>{siteConfig.footer.copyright}</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
