
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl font-serif font-bold text-primary-dark">
            {siteConfig.faq.title}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {siteConfig.faq.items.map((item, index) => (
            <div 
              key={index}
              className="border border-sage-light rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-off-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-primary-dark">{item.question}</span>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-primary-dark/70 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
