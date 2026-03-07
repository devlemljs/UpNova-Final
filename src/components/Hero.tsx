
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TAGLINE } from '../constants';

interface HeroProps {
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLearnMore }) => (
  <section id="home" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-slate-950 z-0">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 bg-grid opacity-10 invert"></div>
    
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
        Empowering Your <br />
        <span className="bg-gradient-to-r from-brand-orange to-white bg-clip-text text-transparent">Digital Future.</span>
      </h1>
      <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
        {TAGLINE} We provide high-end tech solutions at prices that make sense for startups and online sellers.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onLearnMore}
          className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 group animate-float"
        >
          Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);
