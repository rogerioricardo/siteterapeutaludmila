
import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/siteConfig';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-off-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">Contato</span>
            <h2 className="text-4xl font-serif font-bold text-primary-dark mb-6">
              Vamos conversar?
            </h2>
            <p className="text-lg text-primary-dark/70 mb-10 max-w-md">
              Se você sente que chegou o momento de olhar para si com mais cuidado, entre em contato.
            </p>
            
            <div className="space-y-6">
              {siteConfig.contact.phone && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-sage-light flex items-center justify-center text-primary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary-dark/40 mb-1">Telefone</span>
                    <span className="text-primary-dark font-medium">{siteConfig.contact.phone}</span>
                  </div>
                </div>
              )}
              
              {siteConfig.contact.email && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-sage-light flex items-center justify-center text-primary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary-dark/40 mb-1">E-mail</span>
                    <span className="text-primary-dark font-medium">{siteConfig.contact.email}</span>
                  </div>
                </div>
              )}
              
              {siteConfig.contact.instagram && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-sage-light flex items-center justify-center text-primary shadow-sm">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-primary-dark/40 mb-1">Instagram</span>
                    <span className="text-primary-dark font-medium">{siteConfig.contact.instagram}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all duration-300"
              >
                <MessageCircle size={24} />
                Agendar atendimento pelo WhatsApp
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-sage-light"
          >
            <h3 className="text-2xl font-serif font-bold text-primary-dark mb-6">Onde estamos</h3>
            <div className="space-y-4 text-primary-dark/70 mb-8">
              <p className="flex items-start gap-2">
                <span className="font-bold">Endereço:</span> {siteConfig.location.address}
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold">Cidade:</span> {siteConfig.location.city} - {siteConfig.location.state}
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-sage-light/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-sage">
              <p className="text-sage font-medium italic">O mapa será exibido aqui após o endereço ser definido</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
