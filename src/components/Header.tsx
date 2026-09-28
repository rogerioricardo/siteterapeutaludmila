
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Como Posso Ajudar', href: '#servicos' },
    { name: 'Atendimentos', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary shadow-lg ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-serif font-bold transition-colors text-white">
            {siteConfig.name}
          </span>
          <span className="text-xs uppercase tracking-widest font-medium transition-colors text-white/90">
            {siteConfig.profession}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:w-full text-white hover:text-white/80 after:bg-white"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg bg-white text-primary hover:bg-sage-light"
          >
            {siteConfig.hero.primaryButton}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-12">
          <div className="flex justify-between items-center mb-12">
             <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary-dark">
                {siteConfig.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-primary font-medium">
                {siteConfig.profession}
              </span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} className="text-primary-dark" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-serif text-primary-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-primary text-white text-lg font-medium rounded-xl"
            >
              {siteConfig.hero.primaryButton}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
