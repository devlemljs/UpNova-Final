
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { APP_NAME } from '../constants';
const logo = '/images/logo.webp';

interface NavbarProps {
  onHomeClick: () => void;
  onGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      onHomeClick();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
          <img 
            src= {logo} 
            alt="Upnova Logo" 
            className="w-10 h-10 rounded-xl shadow-lg shadow-brand-orange/20 object-cover"
            referrerPolicy="no-referrer"
          />
          <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>{APP_NAME}</span>
        </div>

        {/* Desktop Nav - Centered Links */}
        <div className="hidden md:flex flex-[2] justify-center items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-orange' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <button onClick={onGetStarted} className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-orange/20">
            How it Works
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-auto text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} 
              className="text-lg font-semibold text-slate-600"
            >
              {link.name}
            </a>
          ))}
          <button onClick={onGetStarted} className="bg-brand-orange text-white px-6 py-3 rounded-xl text-sm font-bold">
            How it Works
          </button>
        </div>
      )}
    </nav>
  );
};
