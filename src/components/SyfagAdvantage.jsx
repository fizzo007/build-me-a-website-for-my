import React from 'react';
import { 
  Compass, 
  Workflow, 
  ArrowRight, 
  Target, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { growthFramework } from '../data/venturesData';

export default function SyfagAdvantage({ isDark, onOpenPitch }) {
  return (
    <section id="advantage" className="py-24 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
            <Workflow className="w-3.5 h-3.5" />
            The Syfag Advantage
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Our 4-Stage Growth & Value Creation Framework
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            We bridge the chasm between raw innovation and institutional market scale through a systematic, repeatable playbook.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {growthFramework.map((step, idx) => (
            <div
              key={step.step}
              className={`rounded-2xl border p-6 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/60 shadow-lg' 
                  : 'bg-white border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* Step number badge & timeframe */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                    isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {step.timeframe}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>

                {/* Summary */}
                <p className={`text-xs sm:text-sm font-medium mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {step.summary}
                </p>

                {/* Detail */}
                <p className={`text-xs leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {step.detail}
                </p>
              </div>

              {/* Progress indicator bottom bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400">
                  Phase {idx + 1} Execution
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={`mt-16 rounded-2xl p-8 border flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark 
            ? 'bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border-cyan-900/50' 
            : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-white border-blue-200'
        }`}>
          <div>
            <h4 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Ready to Accelerate With Syfag Ventures?
            </h4>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Connect directly with our investment and advisory syndicate for an exploratory review.
            </p>
          </div>
          <button
            onClick={onOpenPitch}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Initiate Phase 1 Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
