
import React from 'react';
import { Check, Zap, Heart, Users, BookOpen } from 'lucide-react';
const logo = '/images/logo.jpg';

interface AboutProps {
  onTeamClick: () => void;
  onStoryClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onTeamClick, onStoryClick }) => {
  return (
    <section id="about" className="py-24 bg-brand-orange relative overflow-hidden z-10">
      {/* White faded gradient on upper left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Scattered White Glows */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/25 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/20 blur-[80px] rounded-full"></div>
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-white/15 blur-[60px] rounded-full translate-x-1/2"></div>
      <div className="absolute top-10 left-1/4 w-24 h-24 bg-white/10 blur-[40px] rounded-full"></div>
      <div className="absolute bottom-10 right-1/3 w-40 h-40 bg-white/15 blur-[70px] rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-white/10 blur-[50px] rounded-full"></div>
      <div className="absolute bottom-1/2 right-1/4 w-56 h-56 bg-white/10 blur-[90px] rounded-full"></div>
      <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-white/15 blur-[60px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/2 w-48 h-48 bg-white/10 blur-[80px] rounded-full"></div>
      <div className="absolute top-3/4 left-1/4 w-40 h-40 bg-white/10 blur-[70px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/15 blur-[50px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Technology with a <br />
              <span className="text-slate-900">Social Heart.</span>
            </h2>
            <p className="text-lg text-black mb-8 leading-relaxed">
              UpNova was founded on the belief that high-quality technology shouldn't be a luxury. As a social enterprise, we bridge the gap between innovation and affordability.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { title: 'Affordability', desc: 'Pricing models designed for the local market and small businesses.', icon: <Check className="text-white" strokeWidth={3} /> },
                { title: 'Innovation', desc: 'Using the latest stacks to ensure your business stays ahead.', icon: <Zap className="text-white" strokeWidth={3} /> },
                { title: 'Social Impact', desc: 'Reinvesting 30% of our margins into community tech literacy programs.', icon: <Heart className="text-white" strokeWidth={3} /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-black/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={onTeamClick} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-black/10">
                <Users className="w-4 h-4" /> Our Team
              </button>
              <button onClick={onStoryClick} className="flex items-center gap-2 bg-white hover:bg-slate-50 text-brand-orange px-8 py-3.5 rounded-full text-sm font-bold transition-all">
                <BookOpen className="w-4 h-4" /> Our Story
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
            <img 
              src= {logo}
              alt="Team working" 
              className="relative rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
