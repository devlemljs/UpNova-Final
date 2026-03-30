
import React from 'react';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Rocket, 
  Heart, 
  Zap,
  Target,
  Layout
} from 'lucide-react';
import { PricingTier, TeamMember, CostData, Feature } from './types';

export const APP_NAME = "UpNova";
export const TAGLINE = "Empowering Professionals, Startups, and Online Sellers with Affordable Tech.";

export const FEATURES: Feature[] = [
  {
    id: 'web',
    title: 'Website Building',
    description: 'Custom, responsive websites tailored for your brand and audience.',
    icon: 'Globe'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Web',
    description: 'Professional portfolio websites to showcase your work and skills.',
    icon: 'Layout'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your tech running smoothly.',
    icon: 'ShieldCheck'
  },
  {
    id: 'social',
    title: 'Social Impact',
    description: 'As a social enterprise, we reinvest to bridge the digital divide.',
    icon: 'Heart'
  }
];

export const COST_BREAKDOWN: CostData[] = [
  { name: 'Social Impact Fund', value: 30, color: '#10b981' }, // Emerald
  { name: 'Infrastructure & Hosting', value: 25, color: '#3b82f6' }, // Blue
  { name: 'Talent & Development', value: 25, color: '#6366f1' }, // Indigo
  { name: 'Community Outreach', value: 15, color: '#f59e0b' }, // Amber
  { name: 'Operational Margin', value: 5, color: '#94a3b8' } // Slate
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Basic",
    price: 239,
    description: "Essential tech solutions for individual professionals.",
    features: ["Custom Design", "Responsive Layout", "1 Revision", "SEO Baseline"]
  },
  {
    name: "Standard",
    price: 289,
    description: "Added tools for growing startups and small teams.",
    isPopular: true,
    features: ["Custom Design", "Responsive Layout", "3 Revisions", "SEO Baseline"]
  },
  {
    name: "Premium",
    price: 339,
    description: "Full suite of services with dedicated support.",
    features: ["Custom Design", "Responsive Layout", "5 Revisions", "SEO Baseline"]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Visionary leader dedicated to making technology accessible for all.",
    contribution: "Spearheaded the social enterprise model and pricing strategy."
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Expert developer with a passion for clean code and social impact.",
    contribution: "Developed the core infrastructure for affordable web solutions."
  },
  {
    name: "Michael Chen",
    role: "Community Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Building bridges between tech and local communities.",
    contribution: "Managed outreach programs that reached over 500+ startups."
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Globe': return <Globe className="w-6 h-6" />;
    case 'Smartphone': return <Smartphone className="w-6 h-6" />;
    case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
    case 'Rocket': return <Rocket className="w-6 h-6" />;
    case 'Heart': return <Heart className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    case 'Layout': return <Layout className="w-6 h-6" />;
    default: return <Zap className="w-6 h-6" />;
  }
};
