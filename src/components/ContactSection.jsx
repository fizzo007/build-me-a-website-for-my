import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Sparkles, 
  Copy, 
  ShieldCheck,
  Building,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/venturesData';

export default function ContactSection({ isDark, prefilledData }) {
  const [tab, setTab] = useState('pitch'); // 'pitch', 'advisory', 'general'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    stage: 'seed',
    sector: 'fintech',
    capitalNeeded: '$500K - $1.5M',
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Apply prefilled data if provided from wizard
  React.useEffect(() => {
    if (prefilledData) {
      setTab('pitch');
      setFormData(prev => ({
        ...prev,
        sector: prefilledData.industry || prev.sector,
        stage: prefilledData.stage || prev.stage,
        capitalNeeded: prefilledData.ticketSize || prev.capitalNeeded,
        message: `Applying via Syfag Evaluator for ${prefilledData.practice || 'Ventures'}. Scope: ${prefilledData.requirement || 'Capital & Advisory'}.`
      }));
    }
  }, [prefilledData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Fire confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {
        // ignore
      }

      const randomRef = 'SYFAG-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(randomRef);
      setIsSubmitting(false);
    }, 600);
  };

  const copyRef = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetForm = () => {
    setSubmittedRef(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      stage: 'seed',
      sector: 'fintech',
      capitalNeeded: '$500K - $1.5M',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 mb-4">
            <Mail className="w-3.5 h-3.5" />
            Direct Engagement & Partner Inquiry
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Initiate a Conversation with Syfag Ventures
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Whether pitching a breakthrough tech company, seeking strategic enterprise advisory, or exploring syndicate co-investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Container (7 cols) */}
          <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 border shadow-2xl relative ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}>

            {/* Mode selection tabs */}
            <div className="flex items-center gap-2 pb-6 mb-6 border-b border-slate-800">
              <button
                type="button"
                onClick={() => { setTab('pitch'); setSubmittedRef(null); }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  tab === 'pitch'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founder Pitch</span>
              </button>

              <button
                type="button"
                onClick={() => { setTab('advisory'); setSubmittedRef(null); }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  tab === 'advisory'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Enterprise & Advisory</span>
              </button>

              <button
                type="button"
                onClick={() => { setTab('general'); setSubmittedRef(null); }}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  tab === 'general'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>General Inquiry</span>
              </button>
            </div>

            {submittedRef ? (
              /* Success Confirmation Box */
              <div className="py-8 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Inquiry Received Successfully!
                  </h3>
                  <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Thank you for reaching out to Syfag Ventures. Our investment and strategic advisory committee will review your submission.
                  </p>
                </div>

                {/* Tracking Code */}
                <div className={`p-4 rounded-xl border max-w-sm mx-auto flex items-center justify-between gap-3 ${
                  isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Submission Tracking ID</div>
                    <div className="font-mono font-bold text-cyan-400 text-base">{submittedRef}</div>
                  </div>
                  <button
                    onClick={copyRef}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-400">
                  Estimated review turnaround: <strong>3 to 5 business days</strong>. A confirmation email has been logged.
                </p>

                <button
                  onClick={resetForm}
                  className={`mt-4 px-6 py-2 rounded-xl text-xs font-semibold border ${
                    isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Interactive Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Work / Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Company / Project Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. NovaScale Tech"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Website / Pitch Deck URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourcompany.com or docsend..."
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {tab === 'pitch' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Current Stage
                      </label>
                      <select
                        value={formData.stage}
                        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                        className={`w-full px-3 py-2 rounded-xl text-xs border outline-none focus:ring-2 focus:ring-cyan-500 ${
                          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="pre-seed">Pre-Seed / Prototype</option>
                        <option value="seed">Seed</option>
                        <option value="series-a">Series A</option>
                        <option value="growth">Growth Stage</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className={`w-full px-3 py-2 rounded-xl text-xs border outline-none focus:ring-2 focus:ring-cyan-500 ${
                          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
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
                      <label className={`block text-[11px] font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Target Capital
                      </label>
                      <select
                        value={formData.capitalNeeded}
                        onChange={(e) => setFormData({ ...formData, capitalNeeded: e.target.value })}
                        className={`w-full px-3 py-2 rounded-xl text-xs border outline-none focus:ring-2 focus:ring-cyan-500 ${
                          isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="$150K - $500K">$150K - $500K</option>
                        <option value="$500K - $1.5M">$500K - $1.5M</option>
                        <option value="$1.5M - $5M">$1.5M - $5M</option>
                        <option value="$5M+">$5M - $25M+</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Executive Brief / Proposal Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      tab === 'pitch'
                        ? 'Briefly describe your product, your core metric or revenue run-rate, your competitive advantage, and why you believe Syfag Ventures is the ideal partner...'
                        : 'Describe your organizational objectives, target market expansion, capital or restructuring requirements, and expected timeline...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      isDark 
                        ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Protected by Syfag Institutional Non-Disclosure Protocol</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Submission</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Information & Contact Direct Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`rounded-3xl p-6 sm:p-8 border shadow-xl ${
              isDark ? 'bg-slate-900/60 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-cyan-400" />
                Global Headquarters
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                    {companyInfo.contact.address}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-200 dark:text-slate-200">
                      General: <a href={`mailto:${companyInfo.contact.email}`} className="text-cyan-400 hover:underline">{companyInfo.contact.email}</a>
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      Syndicate: <a href={`mailto:${companyInfo.contact.partnerEmail}`} className="text-emerald-400 hover:underline">{companyInfo.contact.partnerEmail}</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                    {companyInfo.contact.phone}
                  </span>
                </div>
              </div>

              {/* Fast response note */}
              <div className={`mt-6 p-4 rounded-xl border text-xs leading-relaxed ${
                isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span className="font-semibold text-cyan-400">Response SLA:</span> Submissions evaluated by dedicated sector leads. Urgent M&A advisory requests can note `[URGENT / TIME-SENSITIVE]` in proposal brief.
              </div>
            </div>

            {/* Regional Corridors Card */}
            <div className={`rounded-3xl p-6 sm:p-8 border ${
              isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Principal Regional Corridors
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/40">
                  <span className="font-bold text-white block">London & Europe</span>
                  <span className="text-[10px] text-slate-400">Capital & Global M&A</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/40">
                  <span className="font-bold text-white block">Dubai & GCC</span>
                  <span className="text-[10px] text-slate-400">Trade Finance & Web3</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/40">
                  <span className="font-bold text-white block">Lagos & West Africa</span>
                  <span className="text-[10px] text-slate-400">Frontier FinTech & Agri</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-950/40">
                  <span className="font-bold text-white block">New York & Americas</span>
                  <span className="text-[10px] text-slate-400">Institutional Syndicate</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
