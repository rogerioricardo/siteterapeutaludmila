
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-off-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={siteConfig.about.image} 
                alt="Ludmila de Olinda" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage/20 rounded-full blur-xl -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">Sobre Mim</span>
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-8">
              {siteConfig.about.title}
            </h2>
            <div className="space-y-6 text-primary-dark/80 text-lg leading-relaxed">
              {siteConfig.about.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                {siteConfig.about.buttonText}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
