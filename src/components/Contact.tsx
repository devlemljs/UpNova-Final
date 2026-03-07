
import React from 'react';
import { Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { TikTokIcon } from './Icons';
const logo = '/images/logo2.jpg';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-orange relative overflow-hidden">
      {/* White faded gradient on upper left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Scattered White Glows */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-white/25 blur-[100px] rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/20 blur-[80px] rounded-full translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/15 blur-[60px] rounded-full"></div>
      <div className="absolute top-10 right-1/4 w-24 h-24 bg-white/10 blur-[40px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-white/15 blur-[70px] rounded-full"></div>
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-white/10 blur-[50px] rounded-full"></div>
      <div className="absolute bottom-1/2 left-1/4 w-56 h-56 bg-white/10 blur-[90px] rounded-full"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white/10 blur-[80px] rounded-full"></div>
      <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-white/15 blur-[60px] rounded-full"></div>
      <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-white/10 blur-[70px] rounded-full"></div>
      <div className="absolute top-20 left-1/3 w-24 h-24 bg-white/15 blur-[50px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">Get in Touch</h2>
            <p className="text-lg text-black mb-12 leading-relaxed">
              We're here to help you find the right solution for your business. Reach out to us through any of the following channels.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-sm border border-white/10 backdrop-blur-sm">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-black/60 mb-1">Email Us</h4>
                  <p className="text-lg font-bold text-black">hello@uptech.social</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-sm border border-white/10 backdrop-blur-sm">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-black/60 mb-1">Our Office</h4>
                  <p className="text-lg font-bold text-black">Mandaluyong City, Metro Manila, PH</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-black/60 mb-6">Connect with Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
                    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                    { icon: <MessageCircle className="w-5 h-5" />, label: 'Messenger' },
                    { icon: <TikTokIcon className="w-5 h-5" />, label: 'TikTok' }
                  ].map((social, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg border border-white/10 text-white hover:bg-slate-800 transition-all">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-500"></div>
            <img 
              src= {logo}
              alt="Contact us" 
              className="relative rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
