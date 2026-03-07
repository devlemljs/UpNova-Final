
import React from 'react';
import { Layout, Monitor, BarChart3 } from 'lucide-react';
const portfolio = '/images/portfolio.webp';
const uptech = '/images/uptech.webp';
const easepoint = '/images/easepoint.webp';
const kape = '/images/kape.webp';
const buildup = 'images/buildup.webp';

export const Mockups: React.FC = () => (
  <section id="projects" className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Sample Mockups</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">A glimpse into the high-quality designs we deliver for our clients.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {[
          { title: "Resume Type Portfolio", type: "Portfolio Web", img: portfolio, icon: <Layout className="w-5 h-5" />, className: "md:col-span-2 md:row-span-2 h-[300px] md:h-full" },
          { title: "Business Website", type: "Landing Page", img: uptech, icon: <Monitor className="w-5 h-5" />, className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" },
          { title: "Company Page", type: "Web Design", img: easepoint, icon: <BarChart3 className="w-5 h-5" />, className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" },
          { title: "Resume Builder", type: "Web App", img: buildup, icon: <Layout className="w-5 h-5" />, className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" },
          { title: "Shop Website", type: "Web Design", img: kape, icon: <BarChart3 className="w-5 h-5" />, className: "md:col-span-1 md:row-span-1 h-[250px] md:h-full" }
        ].map((mock, i) => (
          <div 
            key={i} 
            className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 ${mock.className}`}
          >
            <img src={mock.img} alt={mock.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center gap-2 text-brand-orange mb-2">
                {mock.icon}
                <span className="text-xs font-black uppercase tracking-widest">{mock.type}</span>
              </div>
              <h4 className="text-xl font-black">{mock.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
