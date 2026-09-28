
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export const CentralPhrase = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={siteConfig.centralPhrase.background} 
          alt="Nature Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-primary-dark/40" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
            {siteConfig.centralPhrase.text}
          </h2>
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-white text-primary-dark font-bold rounded-full shadow-xl hover:bg-sage-light transition-all duration-300 transform hover:-translate-y-1"
          >
            {siteConfig.centralPhrase.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
