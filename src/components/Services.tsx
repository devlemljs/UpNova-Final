
import React from 'react';
import { Search, Layout, Code, Rocket } from 'lucide-react';
import { FEATURES, getIcon } from '../constants';

export const Services: React.FC = () => (
  <section id="services" className="py-24 bg-slate-50 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Services */}
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-orange/50 transition-all group shadow-sm">
                <div className="w-12 h-12 bg-brand-orange/5 text-brand-orange rounded-xl flex items-center justify-center mb-4 border border-brand-orange/10 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  {getIcon(feature.icon)}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{feature.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Workflow */}
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Our Workflow</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business goals and target audience.", icon: <Search className="w-5 h-5" /> },
              { step: "02", title: "Design", desc: "Creating intuitive and visually stunning user experiences.", icon: <Layout className="w-5 h-5" /> },
              { step: "03", title: "Development", desc: "Building robust, scalable solutions with modern tech stacks.", icon: <Code className="w-5 h-5" /> },
              { step: "04", title: "Deployment", desc: "Launching your product and ensuring everything runs smoothly.", icon: <Rocket className="w-5 h-5" /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg shadow-brand-orange/20">
                    {item.step}
                  </div>
                  {i !== 3 && <div className="w-px h-full bg-slate-100 my-2"></div>}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-orange">{item.icon}</span>
                    <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
