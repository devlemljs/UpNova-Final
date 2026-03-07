
import React from 'react';
import { ArrowLeft } from 'lucide-react';
const marcie = '/images/marcie.webp';
const lem = '/images/lem.webp';
const ryza = '/images/ryza.webp';
const marcus = '/images/marcus.webp';
const leo = '/images/leo.webp';
const eun = '/images/eun.webp';
const aye = '/images/aye.webp';
const neil = '/images/neil.webp';
const jude = '/images/jude.webp';
const jenine = '/images/jenine.webp';


interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface TeamProps {
  onBack: () => void;
  onStoryClick: () => void;
}

export const Team: React.FC<TeamProps> = ({ onBack, onStoryClick }) => {
  // Level 1
  const ceo: TeamMember = { name: "Marcie", role: "Chief Executive Officer", imageUrl: marcie };
  
  // Level 2
  const cto: TeamMember = { name: "Lemuel", role: "Chief Technology Officer", imageUrl: lem };
  
  // Level 3
  const coo: TeamMember = { name: "Leo", role: "Chief Operating Officer", imageUrl: leo };
  const cmo: TeamMember = { name: "Ayessha", role: "Chief Marketing Officer", imageUrl: aye };
  const cfo: TeamMember = { name: "Ryza", role: "Chief Finance Officer", imageUrl: ryza };

  // Level 4
  const cooTeam: TeamMember[] = [
    { name: "Eun", role: "UX Designer", imageUrl: eun },
    { name: "Jude", role: "QA Tester", imageUrl: jude }
  ];
  const cmoTeam: TeamMember[] = [
    { name: "Neil", role: "Client Manager", imageUrl: neil },
    { name: "Jenine", role: "Marketing Officer", imageUrl: jenine }
  ];
  const cfoTeam: TeamMember[] = [
    { name: "Marcus", role: "Financial Specialist", imageUrl: marcus }
  ];

  const MemberCard: React.FC<{ member: TeamMember, size?: "lg" | "md" | "sm" }> = ({ member, size = "md" }) => (
    <div className="flex flex-col items-center text-center group">
      <div className={`relative mb-4 ${size === 'lg' ? 'w-32 h-32' : size === 'md' ? 'w-24 h-24' : 'w-20 h-20'}`}>
        <div className="absolute -inset-2 bg-brand-orange/10 rounded-full blur-lg group-hover:bg-brand-orange/20 transition-all"></div>
        <img src={member.imageUrl} alt={member.name} className="relative w-full h-full rounded-full border-2 border-white shadow-xl object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
      </div>
      <h4 className={`font-black text-slate-900 ${size === 'lg' ? 'text-xl' : 'text-lg'}`}>{member.name}</h4>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">{member.role}</p>
    </div>
  );

  const handleStoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onStoryClick();
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-brand-orange font-bold mb-12 transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The visionaries behind UpNova's mission to democratize technology.</p>
        </div>

        <div className="space-y-24">
          {/* Level 1 */}
          <div className="flex justify-center">
            <MemberCard member={ceo} size="lg" />
          </div>

          {/* Level 2 */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-12 w-px bg-slate-200"></div>
              <MemberCard member={cto} size="lg" />
            </div>
          </div>

          {/* Level 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* COO Column */}
            <div className="space-y-12">
              <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-12 w-px bg-slate-200"></div>
                <MemberCard member={coo} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {cooTeam.map((m, i) => <MemberCard key={i} member={m} size="sm" />)}
              </div>
            </div>

            {/* CMO Column */}
            <div className="space-y-12">
              <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-12 w-px bg-slate-200"></div>
                <MemberCard member={cmo} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {cmoTeam.map((m, i) => <MemberCard key={i} member={m} size="sm" />)}
              </div>
            </div>

            {/* CFO Column */}
            <div className="space-y-12">
              <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-12 w-px bg-slate-200"></div>
                <MemberCard member={cfo} />
              </div>
              <div className="flex justify-center">
                {cfoTeam.map((m, i) => <MemberCard key={i} member={m} size="sm" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button onClick={handleStoryClick} className="bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-brand-orange/20">
            Read Our Story
          </button>
        </div>
      </div>
    </div>
  );
};
