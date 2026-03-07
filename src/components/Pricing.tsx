
import React from 'react';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';

interface PricingProps {
  onSubscribe: (tier: any) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSubscribe }) => (
  <section id="pricing" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your current needs. No hidden fees, ever.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_TIERS.map((tier) => (
          <div key={tier.name} className={`relative p-10 rounded-3xl border transition-all duration-300 flex flex-col ${tier.isPopular ? 'bg-brand-orange border-brand-orange shadow-2xl shadow-brand-orange/20 scale-105 z-10 text-white' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
            {tier.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-brand-orange text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                RECOMMENDED
              </div>
            )}
            <h3 className={`text-2xl font-black mb-2 ${tier.isPopular ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h3>
            <p className={`text-sm mb-8 ${tier.isPopular ? 'text-white/90' : 'text-slate-500'}`}>{tier.description}</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className={`text-5xl font-black ${tier.isPopular ? 'text-white' : 'text-slate-900'}`}>₱{tier.price}</span>
              <span className={`text-sm font-medium ${tier.isPopular ? 'text-white/80' : 'text-slate-400'}`}>/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((f, i) => (
                <li key={i} className={`flex items-center gap-3 text-sm font-medium ${tier.isPopular ? 'text-white' : 'text-slate-700'}`}>
                  <Check className={`w-4 h-4 ${tier.isPopular ? 'text-white' : 'text-brand-orange'}`} /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
