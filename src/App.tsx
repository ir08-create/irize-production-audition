import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { RewardSection } from './components/RewardSection';
import { RequirementsSection } from './components/RequirementsSection';
import { SelectionFlowSection } from './components/SelectionFlowSection';
import { MessageSection } from './components/MessageSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Send, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] selection:bg-[#00f2ff] selection:text-black font-sans relative overflow-x-hidden">
      {/* Background with subtle grid & minimal atmospheric aura */}
      <CyberBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area with bottom padding for mobile sticky bar */}
      <main className="relative z-10 pb-16 sm:pb-0">
        {/* 🔵 Top Heading: 名古屋 メンズアイドルオーディション / エントリー期間 */}
        <HeroSection />

        {/* 🔴 グループコンセプトについて */}
        <ConceptSection />

        {/* 🔴 活動報酬、費用について */}
        <RewardSection />

        {/* 🔴 募集要項 */}
        <RequirementsSection />

        {/* 🔴 合格までの流れ */}
        <SelectionFlowSection />

        {/* 🔴 メッセージ */}
        <MessageSection />

        {/* 🔴 お問い合わせ */}
        <ContactSection />
      </main>

      {/* Footer with small IRIZE PRODUCTION at bottom center */}
      <div className="pb-16 sm:pb-0">
        <Footer />
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#050505]/95 backdrop-blur-md border-t border-[#222222] shadow-[0_-4px_20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {showScrollTop && (
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="ページトップへ戻る"
              className="p-3 bg-[#111111] border border-[#333333] active:bg-[#222222] text-white flex-shrink-0 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          <a
            href="https://x.com/IRIZEproduction"
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-sticky-entry-button"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#00f2ff] active:bg-white text-black font-extrabold text-xs tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,242,255,0.3)] cursor-pointer"
          >
            <Send className="w-4 h-4 text-black flex-shrink-0" />
            <span>公式XのDMで即エントリー</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating Action Bars (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="ページトップへ戻る"
            className="p-3 bg-[#111111] border border-[#333333] hover:border-[#00f2ff] text-white hover:text-[#00f2ff] transition-all backdrop-blur-md cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="https://x.com/IRIZEproduction"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-entry-button"
          className="group inline-flex items-center gap-2 px-5 py-3.5 bg-[#00f2ff] hover:bg-white text-black font-bold text-xs sm:text-sm tracking-widest uppercase transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-[0_4px_20px_rgba(0,242,255,0.25)]"
        >
          <Send className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
          <span className="font-extrabold">公式Xで応募</span>
        </a>
      </div>
    </div>
  );
}

