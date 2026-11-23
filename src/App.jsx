import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Verticals from './components/Verticals';
import PitchWizard from './components/PitchWizard';
import Portfolio from './components/Portfolio';
import SyfagAdvantage from './components/SyfagAdvantage';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VentureDetailModal from './components/VentureDetailModal';
import PitchModal from './components/PitchModal';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('syfag_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to dark luxury theme
  });

  const [selectedVenture, setSelectedVenture] = useState(null);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [prefilledData, setPrefilledData] = useState(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('syfag_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('syfag_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSelectPathway = (pathway) => {
    setPrefilledData(pathway);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        onOpenPitch={() => setIsPitchModalOpen(true)}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          isDark={isDark} 
          onOpenPitch={() => setIsPitchModalOpen(true)}
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
        />

        {/* 5 Core Verticals */}
        <Verticals 
          isDark={isDark} 
          onOpenPitch={() => setIsPitchModalOpen(true)}
        />

        {/* Selected Portfolio */}
        <Portfolio 
          isDark={isDark} 
          onSelectVenture={(v) => setSelectedVenture(v)}
          onOpenPitch={() => setIsPitchModalOpen(true)}
        />

        {/* Opportunity Matcher / Wizard */}
        <PitchWizard 
          isDark={isDark} 
          onSelectPathway={handleSelectPathway}
        />

        {/* The Syfag Advantage / 4-Phase Framework */}
        <SyfagAdvantage 
          isDark={isDark} 
          onOpenPitch={() => setIsPitchModalOpen(true)}
        />

        {/* About Us & Global Corridors */}
        <AboutUs 
          isDark={isDark} 
        />

        {/* Testimonials & Institutional Validation */}
        <Testimonials 
          isDark={isDark} 
        />

        {/* FAQ Accordion */}
        <FaqSection 
          isDark={isDark} 
          onOpenContact={handleOpenContact}
        />

        {/* Contact & Pitch Portal */}
        <ContactSection 
          isDark={isDark} 
          prefilledData={prefilledData}
        />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Modals */}
      <VentureDetailModal 
        venture={selectedVenture} 
        onClose={() => setSelectedVenture(null)} 
        isDark={isDark}
        onOpenPitch={() => setIsPitchModalOpen(true)}
      />

      <PitchModal 
        isOpen={isPitchModalOpen} 
        onClose={() => setIsPitchModalOpen(false)} 
        isDark={isDark}
        prefilledData={prefilledData}
      />

      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
        isDark={isDark}
      />

    </div>
  );
}
