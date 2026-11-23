import React, { useState } from 'react';
import { X, Sparkles, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PitchModal({ isOpen, onClose, isDark, prefilledData }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    companyName: '',
    deckUrl: '',
    sector: 'fintech',
    stage: 'seed',
    mrr: '',
    pitchBrief: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`w-full max-w-xl rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all ${
          isDark 
            ? 'bg-slate-900 border-slate-700 text-white' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <button
          onClick={handleClose}
          className={`absolute top-6 right-6 p-2 rounded-full border transition-colors ${
            isDark 
              ? 'border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white' 
              : 'border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold">Pitch Deck Submitted!</h3>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Your venture brief has been registered with the Syfag Investment Committee. We will contact you within 5 business days.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> Syfag Fast-Track Review
            </div>
            <h2 className="text-2xl font-extrabold mb-1">
              Submit Your Venture Proposal
            </h2>
            <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Direct submission to the Syfag Ventures General Partners & Sector Leads.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Founder / Lead Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Thorne"
                    value={formData.founderName}
                    onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maya@startup.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SolarSync Labs"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Pitch Deck Link (URL) *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://docsend.com/... or Google Drive"
                    value={formData.deckUrl}
                    onChange={(e) => setFormData({ ...formData, deckUrl: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Primary Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl text-xs border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="fintech">FinTech & AI</option>
                    <option value="trade">Trade & Logistics</option>
                    <option value="energy">CleanTech & Energy</option>
                    <option value="enterprise">Enterprise Software</option>
                    <option value="infrastructure">Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Current MRR / Revenue Run-rate
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. $45K MRR / Pre-revenue"
                    value={formData.mrr}
                    onChange={(e) => setFormData({ ...formData, mrr: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Elevator Pitch & Moat (1-2 Paragraphs) *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Explain the systemic problem you solve, your proprietary distribution or technology moat, and how Syfag accelerates your path to market leadership..."
                  value={formData.pitchBrief}
                  onChange={(e) => setFormData({ ...formData, pitchBrief: e.target.value })}
                  className={`w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Standard NDA Protected
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit to Investment Committee</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
