import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { ImageCarousel } from '../components/ImageCarousel';

export const Events = () => {
  return (
    <section id="eventos" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary-dark">
            Eventos
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ImageCarousel images={siteConfig.eventosCarousel} />
        </div>
      </div>
    </section>
  );
};
