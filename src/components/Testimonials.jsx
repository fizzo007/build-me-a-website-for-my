import React from 'react';
import { 
  Quote, 
  Star, 
  ShieldCheck, 
  Building2, 
  Award,
  Sparkles
} from 'lucide-react';
import { testimonials } from '../data/venturesData';

export default function Testimonials({ isDark }) {
  const partnerLogos = [
    { name: "Apex Capital", tag: "Institutional Syndicate" },
    { name: "Vanguard Global Trade", tag: "Commodity Desk" },
    { name: "Equinox Bank PLC", tag: "Custody & Treasury" },
    { name: "Atlas Green Infrastructure", tag: "Renewable Alliance" },
    { name: "Horizon Studio Labs", tag: "Engineering Partner" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-amber-400 bg-amber-950/40 border border-amber-800/60 mb-4">
            <Award className="w-3.5 h-3.5" />
            Market Validation & Institutional Trust
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Trusted by Audacious Founders and Global Co-Investors
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Hear from the leaders scaling multi-million dollar platforms alongside Syfag Ventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-amber-500 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Quote icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                    {t.badge}
                  </span>
                </div>

                {/* Quote text */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                />
                <div>
                  <div className={`text-xs sm:text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Trust Bar */}
        <div className={`rounded-2xl p-6 sm:p-8 border text-center ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Institutional Alliances & Syndicate Partners
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            {partnerLogos.map((partner, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-xl border flex flex-col items-center justify-center ${
                  isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm tracking-tight">{partner.name}</div>
                <div className="text-[10px] text-cyan-400 font-medium">{partner.tag}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
