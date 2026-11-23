import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowUpRight, 
  TrendingUp, 
  Layers, 
  ExternalLink,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { portfolioVentures } from '../data/venturesData';

export default function Portfolio({ isDark, onSelectVenture, onOpenPitch }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Ventures & Assets' },
    { id: 'fintech', label: 'FinTech & AI' },
    { id: 'trade', label: 'Trade & Supply Chain' },
    { id: 'energy', label: 'Clean Energy' },
    { id: 'infrastructure', label: 'Infrastructure & Real Assets' },
  ];

  const filteredVentures = filter === 'all' 
    ? portfolioVentures 
    : portfolioVentures.filter(v => v.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background radial */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Selective Portfolio & High-Yield Assets
            </div>
            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Transformative Ventures Shaping Modern Commerce
            </h2>
          </div>
          
          <button
            onClick={onOpenPitch}
            className={`hidden md:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border transition-all ${
              isDark 
                ? 'border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-400 bg-slate-900/60' 
                : 'border-slate-300 text-slate-800 hover:border-blue-600 hover:text-blue-600 bg-white'
            }`}
          >
            <span>Pitch Your Venture</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/20'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${
                isDark 
                  ? 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800 hover:border-cyan-500/50 shadow-lg' 
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {venture.categoryLabel}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {venture.stage}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className={`text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {venture.name}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {venture.tagline}
                </p>

                {/* Key Metric Highlight */}
                <div className={`p-3.5 rounded-xl border mb-5 flex items-center justify-between ${
                  isDark ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xs text-slate-400">Key Milestone:</div>
                  <div className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    {venture.metrics}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {venture.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        isDark ? 'bg-slate-800/60 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <button
                onClick={() => onSelectVenture(venture)}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                  isDark 
                    ? 'border-slate-800 bg-slate-950/40 text-slate-300 hover:text-white hover:border-cyan-500' 
                    : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span>Read Full Case Study</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Submit CTA */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={onOpenPitch}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pitch Your Venture to Syfag</span>
          </button>
        </div>

      </div>
    </section>
  );
}
