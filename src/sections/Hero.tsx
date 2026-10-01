
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-off-white">
      {/* Decorative element */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sage-light/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-primary mb-4 block uppercase">
            {siteConfig.hero.kicker}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-dark text-wrap-balance">
            {siteConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-dark/70 mb-10 max-w-lg leading-relaxed">
            {siteConfig.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-full text-center font-medium shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all duration-300"
            >
              {siteConfig.hero.primaryButton}
            </a>
            <a 
              href="#sobre"
              className="px-8 py-4 bg-white text-primary-dark border border-sage rounded-full text-center font-medium hover:bg-sage-light/20 transition-all duration-300"
            >
              {siteConfig.hero.secondaryButton}
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl z-10">
            <img 
              src={siteConfig.hero.image} 
              alt="Terapeuta Ludmila Deolinda" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Subtle organic shape behind image */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-sage rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
