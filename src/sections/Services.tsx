
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Brain, Activity, Users, BrainCircuit, Infinity, Leaf } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  "Reiki": Sparkles,
  "Barras de Access": Brain,
  "Apometria": Activity,
  "Constelação Familiar": Users,
  "Grupos de Constelação": Users,
  "Grupos de Práticas de Expansão de Consciência": BrainCircuit,
  "Método Reconexão": Infinity,
};

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf background */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Leaf size={300} className="text-primary rotate-45" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">Especialidades</span>
          <h2 className="text-4xl font-serif font-bold text-primary-dark mb-6">
            {siteConfig.services.title}
          </h2>
          <p className="text-lg text-primary-dark/70">
            {siteConfig.services.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.items.map((service, index) => {
            const Icon = iconMap[service.title] || Leaf;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-off-white p-8 rounded-2xl border border-sage-light hover:border-sage transition-all duration-300 group hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-sage-light/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-dark mb-4">{service.title}</h3>
                <p className="text-primary-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
