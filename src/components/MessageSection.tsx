import React from 'react';
import { Quote, Flame, Shield, Sparkles } from 'lucide-react';

export const MessageSection: React.FC = () => {
  return (
    <section id="message" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            PRODUCER MESSAGE // <span className="text-[#888888] font-sans">メッセージ</span>
          </h2>
        </div>

        {/* Message Container */}
        <div className="elegant-card p-5 sm:p-12 relative overflow-hidden">
          {/* Quote icon */}
          <div className="text-[#00f2ff]/20 mb-4 sm:mb-6">
            <Quote className="w-7 h-7 sm:w-10 sm:h-10 rotate-180" />
          </div>

          {/* Core Quotes */}
          <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
            <div className="text-base sm:text-2xl font-bold text-white tracking-wide leading-snug">
              「<span className="text-[#00f2ff]">いつかアイドルになりたい</span>」
            </div>
            <div className="text-base sm:text-2xl font-bold text-white tracking-wide leading-snug">
              「<span className="text-white">自分の個性や才能をもっと発揮したい</span>」
            </div>
            <div className="text-xs sm:text-base text-[#888888] pt-1.5 sm:pt-2">
              そんな想いを持っている方へ。
            </div>
          </div>

          {/* Message Body */}
          <div className="space-y-3.5 sm:space-y-4 text-[#e0e0e0] text-xs sm:text-sm leading-relaxed border-t border-[#222222] pt-5 sm:pt-6">
            <p>
              このプロジェクトは、IRIZE PRODUCTIONが新たに立ち上げる新規メンズアイドルグループです。<br />
              <strong className="text-white font-bold bg-[#161616] px-2 py-0.5 border border-[#222222] inline-block mt-1">
                一緒にゼロからグループを作り上げていける仲間
              </strong>
              を探しています。
            </p>
            <p className="text-[#888888]">
              皆様が安心してアイドル活動に専念できるようサポートいたします。
            </p>
          </div>

          {/* Values Grid */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
            <div className="p-3 bg-[#161616] border border-[#222222] flex items-center gap-2.5 text-[#e0e0e0]">
              <Flame className="w-4 h-4 text-[#00f2ff] flex-shrink-0" />
              <span>ゼロから共に創る熱量</span>
            </div>
            <div className="p-3 bg-[#161616] border border-[#222222] flex items-center gap-2.5 text-[#e0e0e0]">
              <Shield className="w-4 h-4 text-[#00f2ff] flex-shrink-0" />
              <span>安心のサポート体制</span>
            </div>
            <div className="p-3 bg-[#161616] border border-[#222222] flex items-center gap-2.5 text-[#e0e0e0]">
              <Sparkles className="w-4 h-4 text-[#00f2ff] flex-shrink-0" />
              <span>個性が輝くステージ</span>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-6 sm:mt-8 text-right">
            <div className="text-[10px] text-[#888888] font-mono tracking-widest uppercase">PROJECT FOUNDER</div>
            <div className="text-xs sm:text-sm font-bold text-white tracking-widest mt-0.5">
              IRIZE PRODUCTION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

