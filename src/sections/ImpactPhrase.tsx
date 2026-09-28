
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';

export const ImpactPhrase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif italic text-primary mb-6">
            {siteConfig.impactPhrase.phrase}
          </h2>
          <p className="text-lg md:text-xl text-primary-dark/60 leading-relaxed italic">
            {siteConfig.impactPhrase.complement}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
