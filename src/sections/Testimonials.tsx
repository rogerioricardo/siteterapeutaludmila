
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-off-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">Depoimentos</span>
          <h2 className="text-4xl font-serif font-bold text-primary-dark">
            {siteConfig.testimonials.title}
          </h2>
          <p className="mt-4 text-primary text-sm font-medium italic">
            * Conteúdo de demonstração (será substituído por depoimentos reais)
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-sage-light flex flex-col"
            >
              {item.videoUrl ? (
                <div className="aspect-[9/16] w-full mb-6 rounded-xl overflow-hidden">
                  <video src={item.videoUrl} controls className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="flex items-center gap-4 mb-6">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt={item.author} className="w-16 h-16 rounded-full object-cover border-2 border-sage-light" />
                  )}
                  <Quote className="text-sage" size={32} />
                </div>
              )}
              <p className="text-primary-dark/80 text-lg leading-relaxed mb-8 italic flex-grow">
                “{item.content}”
              </p>
              <div className="mt-auto pt-6 border-t border-sage-light">
                <span className="font-medium text-primary-dark">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
