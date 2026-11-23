import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { faqs } from '../data/venturesData';

export default function FaqSection({ isDark, onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Clarity on How Syfag Operates
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Everything you need to know about our investment process, advisory scope, and syndicate criteria.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. check size, timeline, advisory)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-colors outline-none focus:ring-2 focus:ring-cyan-500 ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? isDark 
                        ? 'bg-slate-900/90 border-cyan-500/50 shadow-md' 
                        : 'bg-white border-cyan-500 shadow-md'
                      : isDark 
                        ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-sm sm:text-base font-bold ${
                      isOpen ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`p-1.5 rounded-lg border shrink-0 transition-transform ${
                      isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
                    }`}>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                      isDark ? 'text-slate-300 border-slate-800/80' : 'text-slate-600 border-slate-100'
                    }`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className={`p-8 text-center rounded-2xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <p className="text-sm text-slate-400">No questions found matching your search.</p>
            </div>
          )}
        </div>

        {/* Have more questions CTA */}
        <div className={`mt-12 p-6 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-left">
            <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Have a tailored inquiry or institutional question?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Our partner advisory team responds directly within 24 business hours.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-md shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct Inquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
}
