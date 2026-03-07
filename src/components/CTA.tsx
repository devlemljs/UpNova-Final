
import React from 'react';

interface CTAProps {
  onContactClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick }) => (
  <section className="sticky top-0 h-screen flex items-center justify-center bg-brand-orange overflow-hidden z-0">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
    {/* Scattered White Glows */}
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/15 blur-[60px] rounded-full"></div>
    <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-white/10 blur-[80px] rounded-full"></div>
    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-white/15 blur-[70px] rounded-full"></div>
    <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 blur-[40px] rounded-full"></div>
    <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-white/10 blur-[60px] rounded-full"></div>
    <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-white/15 blur-[80px] rounded-full"></div>
    <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/10 blur-[70px] rounded-full"></div>
    <div className="absolute top-1/2 right-1/2 w-24 h-24 bg-white/15 blur-[50px] rounded-full"></div>
    
    {/* White faded gradient on the right */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
    
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to transform your digital presence?</h2>
      <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Join hundreds of entrepreneurs who trust UpNova for their digital growth.</p>
      <button onClick={onContactClick} className="bg-white text-brand-orange hover:bg-slate-50 px-10 py-4 rounded-full text-lg font-black transition-all shadow-xl">
        Start Your Project Today
      </button>
    </div>
  </section>
);
