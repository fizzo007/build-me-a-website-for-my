import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  Layers, 
  BarChart3,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { companyInfo } from '../data/venturesData';

export default function Hero({ isDark, onOpenPitch, onOpenSchedule }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-[400px] h-[350px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/30 bg-cyan-950/30 dark:bg-cyan-950/50 text-cyan-300 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wide">SYFAG VENTURES 2026/2027 CAPITAL & ALLIANCE MANDATE ACTIVE</span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Capital, Strategy & Velocity for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Visionary Enterprises
            </span>
          </h1>

          <p className={`text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto mb-10 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We partner with fearless founders, scale-ups, and sovereign assets across <strong className="text-cyan-400 font-semibold">emerging tech</strong>, <strong className="text-emerald-400 font-semibold">global trade corridors</strong>, and <strong className="text-amber-400 font-semibold">sustainable infrastructure</strong> to build enduring category leaders.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenPitch}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              <span>Submit Pitch / Proposal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenSchedule}
              className={`w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base border transition-all flex items-center justify-center gap-2.5 ${
                isDark
                  ? 'border-slate-700 bg-slate-900/80 text-slate-100 hover:border-slate-500 hover:bg-slate-800 shadow-lg'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-md'
              }`}
            >
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Schedule Strategic Call</span>
            </button>

            <a
              href="#verticals"
              className={`w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 ${
                isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Explore Verticals</span>
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>

        {/* Live Metrics Showcase Card */}
        <div className={`rounded-2xl p-6 sm:p-8 backdrop-blur-xl border shadow-2xl relative ${
          isDark 
            ? 'bg-slate-900/60 border-slate-800/80 text-white shadow-cyan-950/40' 
            : 'bg-white/90 border-slate-200 text-slate-900 shadow-slate-200/80'
        }`}>
          {/* Subtle top indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-700/40 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-400">
                Syfag Real-Time Enterprise Track Record
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Regulated Custody & Governance
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-cyan-400" /> 5 Global Financial Hubs
              </span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Capital Mobilized
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                $65M+
              </div>
              <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +42% YoY Volume
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Active Enterprises
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                24
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Across 4 Continents
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Portfolio Scale Velocity
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                3.4x
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                Average 24-Mo Growth
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Enterprise Partners
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-400">
                50+
              </div>
              <div className="text-xs text-amber-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Fortune 500 & Banking
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
