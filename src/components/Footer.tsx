
import React from 'react';

interface FooterProps {
  onOpenModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => (
  <footer className="py-8 bg-brand-orange relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/60">
      <p>© 2026. All rights reserved.</p>
      <div className="flex gap-8">
        <button onClick={() => onOpenModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
        <button onClick={() => onOpenModal('terms')} className="hover:text-white transition-colors">Terms of Service</button>
      </div>
    </div>
  </footer>
);
