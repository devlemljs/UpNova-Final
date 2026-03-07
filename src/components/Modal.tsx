
import React from 'react';
import { X, Mail, Phone, MapPin, Facebook, Instagram, MessageCircle, Linkedin } from 'lucide-react';
import { TikTokIcon, UpNovaLogo } from './Icons';
const logo = '/images/logo.webp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  hideHeader?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, hideHeader = false }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white border border-slate-200 rounded-[2.5rem] w-full max-w-xl max-h-[90vh] overflow-y-auto p-10 shadow-2xl animate-in zoom-in-95 duration-300">
        {!hideHeader && (
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-black text-slate-900">{title}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        )}
        <div className="text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ContactModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex flex-col h-full">
    <div className="flex justify-between items-start mb-8">
      <div className="flex items-center gap-3">
         <img
      src= {logo}
      alt="UpNova Logo"
      className="w-10 h-10 rounded-xl object-cover"
    />
        <span className="text-2xl font-black text-slate-900 tracking-tight">UpNova</span>
      </div>
      <button onClick={onClose} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all">
        <X className="w-5 h-5" />
      </button>
    </div>

    <div className="mb-10">
      <h2 className="text-4xl font-black text-slate-900 mb-2">Connect with us</h2>
      <p className="text-slate-500 font-medium">Direct support for entrepreneurs and startups.</p>
    </div>

    <div className="space-y-4 mb-12">
      <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:border-brand-orange/20 transition-all">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
          <Mail className="text-brand-orange w-6 h-6" />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">EMAIL</p>
          <p className="text-xl font-bold text-slate-900">upnova@gmail.com</p>
        </div>
      </div>

      <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:border-brand-orange/20 transition-all">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
          <Phone className="text-brand-orange w-6 h-6" />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">WHATSAPP / CALL</p>
          <p className="text-xl font-bold text-slate-900">+63 912 345 6789</p>
        </div>
      </div>

      <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:border-brand-orange/20 transition-all">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
          <MapPin className="text-brand-orange w-6 h-6" />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">OFFICE</p>
          <p className="text-xl font-bold text-slate-900">Mandaluyong City, Metro Manila, PH</p>
        </div>
      </div>
    </div>

    <div className="flex justify-center gap-4 mb-12">
      {[
        { icon: <Facebook className="w-6 h-6" />, href: "#" },
        { icon: <Instagram className="w-6 h-6" />, href: "#" },
        { icon: <MessageCircle className="w-6 h-6" />, href: "#" },
        { icon: <Linkedin className="w-6 h-6" />, href: "#" }
      ].map((social, i) => (
        <a key={i} href={social.href} className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-600 hover:text-brand-orange hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-all">
          {social.icon}
        </a>
      ))}
    </div>

    <button onClick={onClose} className="text-center w-full text-slate-400 hover:text-brand-orange font-black text-xs uppercase tracking-[0.3em] transition-colors">
      RETURN TO SITE
    </button>
  </div>
);

export const ProcessModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="space-y-8">
    <div className="relative">
      <h4 className="text-xl font-black text-brand-orange mb-2">How we bring your vision to life</h4>
      <p className="text-slate-500 text-sm">Our streamlined approach to digital excellence.</p>
    </div>

    <div className="space-y-6">
      {[
        {
          step: '01',
          title: 'Initial Consultation',
          content: 'Begin by reaching out through the Contact section of our website or via email at swingbase@gmail.com. Share a brief overview of your vision, goals, and project requirements.'
        },
        {
          step: '02',
          title: 'Personalized Response',
          content: 'Within a few hours, our team will connect with you to better understand your objectives and determine how we can strategically bring your project to life.'
        },
        {
          step: '03',
          title: 'Onboarding & Agreement',
          content: 'To ensure clarity and professionalism, you’ll receive our registration form, contract agreement, and privacy policy. Once completed, your project is officially secured in our development pipeline.'
        },
        {
          step: '04',
          title: 'Strategy & Design Alignment',
          content: 'We conduct a detailed discussion to define your website’s structure, design direction, features, and user experience. Whether it’s a refined landing page or a high-converting portfolio, every detail is aligned with your brand identity and business goals.\n\nActive collaboration is essential — timely communication ensures a seamless and efficient development process.'
        },
        {
          step: '05',
          title: 'Development & Ongoing Collaboration',
          content: 'We build with precision while keeping you informed at every stage. Communication channels are tailored to your preference and availability, including:\n\n• Private video consultations\n• Email correspondence\n• Direct messaging support\n\nFrom concept to launch, we focus on delivering a polished, performance-driven digital experience that reflects excellence.'
        }
      ].map((item, i) => (
        <div key={i} className="flex gap-6 group">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
              <span className="text-sm font-black text-slate-400 group-hover:text-white transition-colors">Step {item.step}</span>
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h5 className="text-lg font-black text-slate-900 mb-2">{item.title}</h5>
            <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="pt-6 border-t border-slate-100">
      <button onClick={onClose} className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-brand-orange/20">
        Got it, thanks!
      </button>
    </div>
  </div>
);
