import React from 'react';
import { 
  Building, 
  Globe2, 
  ShieldCheck, 
  Lightbulb, 
  Award, 
  MapPin, 
  Users2,
  CheckCircle2,
  Target
} from 'lucide-react';
import { companyInfo } from '../data/venturesData';

export default function AboutUs({ isDark }) {
  const pillars = [
    {
      title: "Integrity & Fiduciary Discipline",
      desc: "We operate with unyielding transparency, strict risk governance, and institutional diligence across every dollar allocated.",
      icon: ShieldCheck
    },
    {
      title: "Radical Operational Support",
      desc: "Capital is commodity; unfair operational execution is king. We deploy hands-on engineering, banking networks, and regulatory access.",
      icon: Lightbulb
    },
    {
      title: "Cross-Border Corridors",
      desc: "We bridge frontier growth markets with mature global capital centers across the UK, UAE, Africa, US, and Southeast Asia.",
      icon: Globe2
    },
    {
      title: "Generational ESG Resilience",
      desc: "Every asset in the Syfag portfolio must advance environmental decarbonization or systemic community economic mobility.",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
            <Building className="w-3.5 h-3.5" />
            About Syfag Ventures
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Building Enduring Value in an Era of Accelerated Transformation
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Syfag Ventures was founded on a singular premise: the biggest value creation opportunities lie at the intersection of breakthrough technology and physical real-economy infrastructure.
          </p>
        </div>

        {/* Narrative & Core Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              A Modern Venture & Strategic Holding Group
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Conventional venture capital often remains isolated in software abstractions, detached from physical trade networks, regulatory compliance, and heavy industrial needs. Conversely, traditional holding companies often lack the technical speed and digital-native instincts needed to dominate today’s markets.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <strong className="text-cyan-400 font-semibold">Syfag Ventures</strong> unites both worlds. By combining patient capital with sovereign trade connections, digital venture studio labs, and enterprise restructuring advisory, we build enterprises equipped to thrive across market cycles.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-2xl font-extrabold text-cyan-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Founder-Aligned Syndication</div>
              </div>
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="text-2xl font-extrabold text-emerald-400">Zero</div>
                <div className="text-xs text-slate-400 mt-1">Bureaucracy & Latency</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className={`rounded-3xl p-6 sm:p-8 border shadow-2xl relative ${
              isDark 
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-slate-800' 
                : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Global Operating Hubs
              </div>
              <div className="space-y-3">
                {companyInfo.contact.regionalHubs.map((hub, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span className={isDark ? 'text-white' : 'text-slate-900'}>{hub.city}</span>
                        <span className="text-[10px] text-slate-400">({hub.country})</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 ml-5">
                        {hub.focus}
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Guiding Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {p.title}
                </h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
