
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { CheckCircle2, Heart, Shield, MessageCircle } from 'lucide-react';

export const Differentials = () => {
  const icons = [MessageCircle, Heart, Shield, CheckCircle2];

  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {siteConfig.differentials.title}
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {siteConfig.differentials.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
                  <Icon className="text-sage" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-sage-light/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
