import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { companyInfo } from '../data/venturesData';

export default function Navbar({ isDark, toggleTheme, onOpenPitch, onOpenSchedule }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Verticals', href: '#verticals' },
    { label: 'Ventures', href: '#portfolio' },
    { label: 'The Syfag Model', href: '#advantage' },
    { label: 'Evaluator', href: '#wizard' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20">
              <div className={`w-full h-full rounded-[10px] ${isDark ? 'bg-slate-950' : 'bg-white'} flex items-center justify-center`}>
                <span className="font-extrabold text-base tracking-tighter bg-gradient-to-r from-blue-500 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                  SV
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold tracking-wider text-lg sm:text-xl uppercase ${isDark ? 'text-white' : 'text-slate-900'} leading-none`}>
                Syfag<span className="text-cyan-400 font-semibold ml-1">Ventures</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Global Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className={`p-2 rounded-xl transition-all ${
                isDark 
                  ? 'bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-700/60' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Schedule Call */}
            <button
              onClick={onOpenSchedule}
              className={`hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all ${
                isDark
                  ? 'border-slate-700 text-slate-200 hover:border-cyan-500 hover:text-cyan-400 bg-slate-900/50'
                  : 'border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 bg-white'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>Schedule Call</span>
            </button>

            {/* Submit Pitch CTA */}
            <button
              onClick={onOpenPitch}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Submit Pitch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl text-xs ${
                isDark 
                  ? 'bg-slate-900 text-amber-400 border border-slate-800' 
                  : 'bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isDark 
                  ? 'bg-slate-900 text-slate-200 border border-slate-800' 
                  : 'bg-slate-100 text-slate-800 border border-slate-200'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden px-4 pt-3 pb-6 border-b transition-all duration-300 ${
            isDark 
              ? 'bg-slate-950/95 border-slate-800 text-white' 
              : 'bg-white border-slate-200 text-slate-900 shadow-xl'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isDark ? 'hover:bg-slate-900' : 'hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2.5 border-t border-slate-800">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSchedule(); }}
                className={`w-full py-2.5 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'border-slate-700 text-slate-200 bg-slate-900' 
                    : 'border-slate-300 text-slate-800 bg-slate-50'
                }`}
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                Schedule Strategic Call
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPitch(); }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Submit Pitch / Business Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
