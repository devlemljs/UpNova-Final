
import React from 'react';
import { ArrowLeft, BookOpen, Heart, Target, Users } from 'lucide-react';

interface StoryProps {
  onBack: () => void;
}

export const Story: React.FC<StoryProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-slate-600 hover:text-brand-orange font-bold mb-12 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to About
        </button>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen className="w-4 h-4" /> Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
            From a Small Idea to a <br />
            <span className="text-brand-orange">Social Movement.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            UpNova wasn't built in a boardroom. It was built in the trenches of the local market, where we saw brilliant entrepreneurs struggling with outdated tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To bridge the digital divide by providing enterprise-grade technology solutions that are accessible, affordable, and impactful for every business owner.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">
              We believe in radical transparency, community-first innovation, and the power of technology to create sustainable social change.
            </p>
          </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-slate-600 mb-8">
            We are second year Bachelor of Science in Entreprenuership students from Rizal Technological University. UpNova started as our Social Entrepreneurship project, but it quickly grew into something more meaningful. What began as a classroom requirement became a mission driven tech company dedicated to helping startups and professionals build a strong online presence.
          </p>

          <p className="text-slate-600 mb-8">
            With the full commitment of our team and the programming of, Lemuel Jan Suico, UpNova was officially created. Through the guidance of Prof. Michael Batuyong, we transformed our ideas into action by combining entrepreneurial thinking with modern web solutions.
          </p>

          <p className="text-slate-600 mb-8">
            Our leaders Marcie Caballa, Leonardo Suyo, Ayessha Robillos, and Ruza Yruma worked together to shape the direction and values of the company. Alongside them, our team members Jenine Busalpa, Norielle Asari, Neil Lumpay, and Leonardo Marcus helped turn ideas into real and functional platforms.
          </p>

          <p className="text-slate-600 mb-8">
            Today, UpNova stands as a student led social enterprise focused on delivering clean, simple, and effective landing pages and portfolio websites. We believe every startup and professional deserves a digital space that clearly represents their vision without complexity or high costs.
          </p>

          <p className="text-slate-600">
            Our journey is just beginning, and we are excited to grow, innovate, and build with you.
          </p>
        </div>
      </div>
    </div>
  );
};
