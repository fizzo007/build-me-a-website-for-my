import React, { useState } from 'react';
import { 
  Rocket, 
  TrendingUp, 
  Globe, 
  Building2, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Sparkles
} from 'lucide-react';
import { verticals } from '../data/venturesData';

const iconMap = {
  Rocket: Rocket,
  TrendingUp: TrendingUp,
  Globe: Globe,
  Building2: Building2,
  Cpu: Cpu,
};

export default function Verticals({ isDark, onSelectVertical, onOpenPitch }) {
  const [activeTab, setActiveTab] = useState(verticals[0].id);
  const selectedVertical = verticals.find(v => v.id === activeTab) || verticals[0];
  const IconComponent = iconMap[selectedVertical.icon] || Rocket;

  return (
    <section id="verticals" className="py-24 relative overflow-hidden">
      {/* Background ambient subtle blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
            <Zap className="w-3.5 h-3.5" />
            Core Capabilities & Business Verticals
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineered for High-Stakes Growth Across 5 Strategic Pillars
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Syfag Ventures bridges technical innovation with physical asset deployment and institutional cross-border networks.
          </p>
        </div>

        {/* Vertical Tabs navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {verticals.map((v) => {
            const TabIcon = iconMap[v.icon] || Rocket;
            const isActive = activeTab === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : isDark
                      ? 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{v.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Vertical Interactive Feature Card */}
        <div className={`rounded-3xl border p-6 sm:p-10 lg:p-12 transition-all ${
          isDark 
            ? 'bg-slate-900/70 border-slate-800 shadow-2xl shadow-cyan-950/20' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {selectedVertical.badge}
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Operational Mandate
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {selectedVertical.title}
                </h3>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedVertical.fullDesc}
              </p>

              {/* Highlights List */}
              <div className="space-y-3 pt-2">
                <div className={`text-xs uppercase tracking-wider font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Key Strategic Deliverables & Syfag Advantage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedVertical.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenPitch}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Propose Collaboration in this Pillar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Visual Column */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl p-6 sm:p-8 border ${
                isDark 
                  ? 'bg-slate-950/70 border-slate-800' 
                  : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
                  Target Sub-Sectors & Asset Profiles
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedVertical.sectors.map((sec, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg border ${
                        isDark 
                          ? 'bg-slate-900 border-slate-700/80 text-slate-200' 
                          : 'bg-white border-slate-300 text-slate-800'
                      }`}
                    >
                      {sec}
                    </span>
                  ))}
                </div>

                <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-2 ${
                  isDark ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'
                }`}>
                  <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Institutional Criteria:
                  </div>
                  <p>
                    Clear path to $10M+ ARR or tangible infrastructure asset yields within 36 months, paired with structural moats against commoditization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
