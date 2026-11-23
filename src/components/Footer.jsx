import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Send, 
  Check, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import { companyInfo } from '../data/venturesData';

export default function Footer({ isDark }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors pt-16 pb-12 ${
      isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-[2px]">
                <div className={`w-full h-full rounded-[10px] ${isDark ? 'bg-slate-950' : 'bg-white'} flex items-center justify-center`}>
                  <span className="font-extrabold text-sm tracking-tighter bg-gradient-to-r from-blue-500 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                    SV
                  </span>
                </div>
              </div>
              <span className={`font-extrabold tracking-wider text-xl uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Syfag<span className="text-cyan-400 font-semibold ml-1">Ventures</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Catalyzing growth, empowering innovation, and deploying strategic capital across technology, trade, and sustainable infrastructure.
            </p>

            <div className="text-xs text-slate-500 space-y-1">
              <div>Global HQ: London • Regional Desks: Dubai, Lagos, New York, Singapore</div>
              <div>Regulated Custodial Governance & Sovereign Advisory Standards</div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className={`text-sm sm:text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                The Syfag Quarterly Dispatch
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Quarterly macro intelligence, frontier trade analyses, and venture portfolio highlights. Zero spam.
              </p>

              {subscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>You are subscribed to the Syfag Quarterly Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your institutional email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={`flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none focus:ring-2 focus:ring-cyan-500 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Verticals
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#verticals" className="hover:text-cyan-400 transition-colors">Venture Capital & Seed</a></li>
              <li><a href="#verticals" className="hover:text-cyan-400 transition-colors">Enterprise M&A & Advisory</a></li>
              <li><a href="#verticals" className="hover:text-cyan-400 transition-colors">Global Trade Finance</a></li>
              <li><a href="#verticals" className="hover:text-cyan-400 transition-colors">Sustainable Infrastructure</a></li>
              <li><a href="#verticals" className="hover:text-cyan-400 transition-colors">Digital Studios & AI Labs</a></li>
            </ul>
          </div>

          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The Firm
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Syfag Ventures</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Venture Portfolio</a></li>
              <li><a href="#advantage" className="hover:text-cyan-400 transition-colors">The 4-Stage Framework</a></li>
              <li><a href="#wizard" className="hover:text-cyan-400 transition-colors">Opportunity Evaluator</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Global Desks
            </h5>
            <ul className="space-y-2 text-xs">
              <li>London (100 Bishopsgate)</li>
              <li>Dubai (DIFC Innovation Hub)</li>
              <li>Lagos (Victoria Island Tech Corridors)</li>
              <li>New York (One World Trade)</li>
              <li>Singapore (Marina Bay Financial)</li>
            </ul>
          </div>

          <div>
            <h5 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Governance & Legal
            </h5>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure Guarantee</li>
              <li>AML / KYC Policy Compliance</li>
              <li>ESG Investment Standards</li>
              <li>Terms of Engagement</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-cyan-400 transition-colors">
              {companyInfo.contact.email}
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1 ${
                isDark 
                  ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300' 
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
