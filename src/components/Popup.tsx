import React from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-primary-dark hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-serif font-bold text-primary-dark mb-6">{title}</h2>
        <div className="text-primary-dark/80 leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
};
