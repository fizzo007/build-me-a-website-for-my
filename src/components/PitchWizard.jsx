import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Users, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

export default function PitchWizard({ isDark, onSelectPathway }) {
  const [industry, setIndustry] = useState('fintech');
  const [stage, setStage] = useState('seed');
  const [requirement, setRequirement] = useState('capital');
  const [ticketSize, setTicketSize] = useState('500k-1.5m');

  const industries = [
    { id: 'fintech', label: 'FinTech & AI APIs' },
    { id: 'trade', label: 'Global Trade & Logistics' },
    { id: 'cleantech', label: 'CleanTech & Energy' },
    { id: 'enterprise', label: 'Enterprise Software' },
    { id: 'infra', label: 'Infrastructure & Real Assets' },
  ];

  const stages = [
    { id: 'pre-seed', label: 'Pre-Seed / Prototype' },
    { id: 'seed', label: 'Seed (Early Revenue)' },
    { id: 'series-a', label: 'Series A (Scale-Up)' },
    { id: 'established', label: 'Established Commercial' },
  ];

  const requirements = [
    { id: 'capital', label: 'Equity Investment' },
    { id: 'advisory', label: 'Strategic Scale & M&A' },
    { id: 'trade-finance', label: 'Trade Finance Syndicate' },
    { id: 'studio', label: 'Studio Tech Incubation' },
  ];

  const ticketSizes = [
    { id: '100k-500k', label: '$100K - $500K' },
    { id: '500k-1.5m', label: '$500K - $1.5M' },
    { id: '1.5m-5m', label: '$1.5M - $5M' },
    { id: '5m+', label: '$5M - $25M+' },
  ];

  // Dynamic assessment result
  const getRecommendation = () => {
    let practice = "Syfag Venture Acceleration Practice";
    let turnaround = "5 - 7 Business Days";
    let syndicate = "Syfag Principal Syndicate + Co-Investor Tier";
    let keyDeliverable = "Direct seed equity tranche, tech architecture review & Tier-1 commercial pilot access.";

    if (requirement === 'advisory' || stage === 'established') {
      practice = "Syfag Enterprise M&A & Scale Advisory";
      turnaround = "3 - 5 Business Days";
      syndicate = "Managing Partner Advisory Squad";
      keyDeliverable = "Cross-border expansion blueprint, capital structuring & strategic enterprise acquirer intros.";
    } else if (requirement === 'trade-finance' || industry === 'trade') {
      practice = "Syfag Global Trade Finance Syndicate";
      turnaround = "4 - 7 Business Days";
      syndicate = "Trade Risk & Commodities Liquidity Desk";
      keyDeliverable = "Structured inventory financing, cargo inspection guarantees & cross-border FX netting.";
    } else if (industry === 'cleantech' || industry === 'infra') {
      practice = "Syfag Sustainable Assets & Infrastructure Hub";
      turnaround = "7 - 10 Business Days";
      syndicate = "Real Asset Development Committee";
      keyDeliverable = "Project equity syndication, off-taker agreements & ESG-certified green funding structures.";
    }

    return { practice, turnaround, syndicate, keyDeliverable };
  };

  const rec = getRecommendation();

  return (
    <section id="wizard" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Opportunity Evaluator
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Calculate Your Syfag Partnership Pathway
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Select your industry, maturity stage, and primary objectives to see how Syfag Ventures structures your engagement.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 border space-y-6 ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>
            
            {/* Step 1: Industry */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                1. Industry Sector
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {industries.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustry(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      industry === item.id
                        ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 font-semibold ring-1 ring-cyan-400'
                        : isDark
                          ? 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Growth Stage */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                2. Enterprise Stage
              </label>
              <div className="grid grid-cols-2 gap-2">
                {stages.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStage(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      stage === item.id
                        ? 'bg-emerald-500/15 border-emerald-400 text-emerald-300 font-semibold ring-1 ring-emerald-400'
                        : isDark
                          ? 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Engagement Need */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                3. Primary Need
              </label>
              <div className="grid grid-cols-2 gap-2">
                {requirements.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRequirement(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                      requirement === item.id
                        ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-semibold ring-1 ring-amber-400'
                        : isDark
                          ? 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Capital / Facility Scope */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                4. Target Funding or Engagement Tranche
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ticketSizes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTicketSize(item.id)}
                    className={`p-3 rounded-xl text-xs font-medium text-center border transition-all ${
                      ticketSize === item.id
                        ? 'bg-blue-500/15 border-blue-400 text-blue-300 font-semibold ring-1 ring-blue-400'
                        : isDark
                          ? 'bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`rounded-3xl p-6 sm:p-8 border shadow-2xl relative overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 text-white' 
                : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 text-slate-900'
            }`}>
              {/* Top tag */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Recommended Engagement Blueprint
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready to Apply
                </span>
              </div>

              {/* Body */}
              <div className="py-6 space-y-5">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Assigned Syfag Group Practice:</div>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {rec.practice}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> Review Velocity
                    </div>
                    <div className="text-xs font-bold text-slate-200 dark:text-slate-100">
                      {rec.turnaround}
                    </div>
                  </div>

                  <div className={`p-3 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 flex items-center gap-1 mb-1">
                      <Users className="w-3.5 h-3.5 text-emerald-400" /> Syndicate Tier
                    </div>
                    <div className="text-xs font-bold text-slate-200 dark:text-slate-100">
                      Partner-Led Committee
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Core Value Delivery
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed">
                    {rec.keyDeliverable}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPathway({ industry, stage, requirement, ticketSize, practice: rec.practice })}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Apply with this Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
