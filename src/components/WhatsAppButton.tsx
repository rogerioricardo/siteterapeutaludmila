
import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip Balloon */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white text-primary-dark px-4 py-2 rounded-2xl shadow-xl text-sm font-medium border border-sage-light relative mb-2 animate-bounce-slow pointer-events-auto"
      >
        Me chame no WhatsApp
        {/* Triangle arrow for the bubble */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-sage-light rotate-45" />
      </motion.div>

      <motion.a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 bg-[#25D366] text-white p-3 md:px-4 md:py-2.5 rounded-full shadow-2xl transition-all duration-300 group pointer-events-auto"
      >
        <MessageCircle size={22} />
        <span className="hidden md:inline font-bold text-sm">Fale comigo</span>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
      </motion.a>
    </div>
  );
};
