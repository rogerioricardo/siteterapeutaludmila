import React, { useState } from 'react';
import { X } from 'lucide-react';

export const FloatingAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 md:bottom-6 left-6 z-50 max-w-xs">
      <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-sage-light flex flex-col gap-2">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md text-primary-dark hover:text-red-500 transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">Novidade</span>
        <h3 className="font-serif font-bold text-lg text-primary-dark">Conheça o Terra Nova</h3>
        <p className="text-sm text-primary-dark/60">Nova consciência para seu despertar.</p>
        <a 
          href="/terranova"
          className="text-sm font-medium text-primary mt-2 hover:underline"
        >
          Acessar página →
        </a>
      </div>
    </div>
  );
};
