
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-off-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">Processo</span>
          <h2 className="text-4xl font-serif font-bold text-primary-dark">
            {siteConfig.howItWorks.title}
          </h2>
        </div>
        
        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-sage-light -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {siteConfig.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-sage-light flex flex-col items-center text-center group hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-serif font-bold mb-8 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{step.title}</h3>
                <p className="text-primary-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
