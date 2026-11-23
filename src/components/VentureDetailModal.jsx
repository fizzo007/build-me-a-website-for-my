import React from 'react';
import { X, TrendingUp, CheckCircle, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function VentureDetailModal({ venture, onClose, isDark, onOpenPitch }) {
  if (!venture) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-2xl rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
            isDark 
              ? 'border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white' 
              : 'border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            {venture.categoryLabel}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            {venture.stage}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
            Joined {venture.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
          {venture.name}
        </h2>
        <p className={`text-sm sm:text-base mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {venture.tagline}
        </p>

        {/* Stats highlight card */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-xs text-slate-400 mb-1">Growth Trajectory</div>
            <div className="text-lg font-bold text-emerald-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              {venture.metrics}
            </div>
          </div>
          <div className={`p-4 rounded-xl border ${isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="text-xs text-slate-400 mb-1">Key Operational Metric</div>
            <div className="text-lg font-bold text-cyan-400">
              {venture.statsHighlight}
            </div>
          </div>
        </div>

        {/* Narrative & Impact */}
        <div className="space-y-4 mb-8">
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Overview & Problem Solved
            </h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {venture.description}
            </p>
          </div>

          <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Syfag Ventures' Strategic Role
            </h4>
            <p className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {venture.syfagRole}
            </p>
          </div>

          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Quantifiable Impact
            </h4>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {venture.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold border ${
              isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenPitch();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pitch a Similar Opportunity</span>
          </button>
        </div>
      </div>
    </div>
  );
}
