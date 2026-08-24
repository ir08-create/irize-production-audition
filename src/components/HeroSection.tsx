import React from 'react';
import { Calendar, Send, ArrowDown, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_idol_silhouette_1787575108316.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-between">
      {/* Background Idol Silhouette Image - Clearly visible */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={heroImg}
          alt="名古屋メンズアイドル オーディション メンバーシルエット"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top sm:object-center opacity-75 filter contrast-110 brightness-95"
        />

        {/* Soft atmospheric gradient: darker at top/bottom for readability, clear in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/20 to-[#050505]/70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
        {/* Top Badges / Status */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333] text-[#e0e0e0] mb-6 sm:mb-8 shadow-lg">
          <div className="w-1.5 h-1.5 bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#00f2ff] uppercase font-mono">
            AUDITION 2026
          </span>
          <span className="text-[#444444] text-xs">|</span>
          <span className="text-[11px] sm:text-xs font-medium text-[#e0e0e0]">
            愛知・名古屋発 メンズアイドル第1期生募集
          </span>
        </div>

        {/* 🔵 Main Top Heading: 名古屋 メンズアイドルオーディション */}
        <div className="relative mb-6 sm:mb-8 text-center sm:text-left max-w-3xl mx-auto border-l-0 sm:border-l-4 sm:border-[#00f2ff] sm:pl-8">
          <div className="p-4 sm:p-0 rounded sm:rounded-none bg-[#050505]/60 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border border-white/5 sm:border-none inline-block w-full">
            <h1
              id="main-audition-title"
              className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-tight uppercase text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
            >
              <span className="text-[#00f2ff] drop-shadow-[0_0_25px_rgba(0,242,255,0.6)]">名古屋</span><br />
              メンズアイドル<br />
              <span className="text-[#00f2ff] drop-shadow-[0_0_25px_rgba(0,242,255,0.6)]">オーディション</span>
            </h1>

            {/* Entry Period Badge */}
            <div className="mt-4 inline-block bg-[#00f2ff] text-black px-4 py-2 font-bold text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(0,242,255,0.5)]">
              ENTRY PERIOD: 8/26（水）〜 9/30（水）
            </div>
          </div>
        </div>

        {/* Entry Period Detail Box */}
        <div className="max-w-3xl mx-auto my-6 sm:my-8 text-left">
          <div className="elegant-card p-5 sm:p-8 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#333333] shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-[#222222]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00f2ff]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#00f2ff]">エントリー受付期間</span>
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                8/26<span className="text-sm font-normal text-[#888888] mx-1">（水）</span>
                <span className="text-[#00f2ff] mx-2">〜</span>
                9/30<span className="text-sm font-normal text-[#888888] mx-1">（水）</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-[#e0e0e0]">
              <div className="p-3 bg-[#141414]/90 border border-[#222222] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00f2ff]" />
                <span>完全未経験歓迎</span>
              </div>
              <div className="p-3 bg-[#141414]/90 border border-[#222222] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00f2ff]" />
                <span>レッスン・衣装費 0円</span>
              </div>
              <div className="p-3 bg-[#141414]/90 border border-[#222222] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00f2ff]" />
                <span>公式XのDMで即応募可能</span>
              </div>
            </div>
          </div>
        </div>

        {/* Catchphrase & Action Buttons */}
        <p className="text-sm sm:text-base text-white/95 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-medium">
          「いつかアイドルになりたい」「自分の個性や才能をもっと発揮したい」<br className="hidden sm:inline" />
          一緒にゼロからグループを作り上げていける仲間を探しています。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto w-full px-2">
          <a
            href="#requirements"
            id="hero-cta-apply"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 font-display font-bold text-sm tracking-widest uppercase text-black bg-[#00f2ff] hover:bg-white active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-[0_0_25px_rgba(0,242,255,0.4)]"
          >
            <Send className="w-4 h-4" />
            <span>募集要項・応募方法</span>
          </a>

          <a
            href="https://x.com/IRIZEproduction"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-x"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 font-bold text-sm tracking-wider text-white border border-[#333333] bg-[#0e0e0e]/90 hover:bg-[#1a1a1a] hover:border-[#00f2ff] active:scale-[0.99] transition-all duration-200 cursor-pointer backdrop-blur-md shadow-lg"
          >
            <span>公式X（@IRIZEproduction）</span>
          </a>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-2 text-[#888888] text-xs tracking-widest uppercase">
          <span className="text-[10px] text-[#888888]">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#00f2ff] animate-bounce" />
        </div>
      </div>
    </section>
  );
};

