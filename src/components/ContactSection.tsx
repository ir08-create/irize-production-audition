import React, { useState } from 'react';
import { Send, MessageSquare, HelpCircle, Copy, Check, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyHandle = () => {
    navigator.clipboard.writeText('@IRIZEproduction');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            INQUIRY & CONTACT // <span className="text-[#888888] font-sans">お問い合わせ</span>
          </h2>
        </div>

        {/* Main Contact Card */}
        <div className="elegant-card p-5 sm:p-10 text-center relative overflow-hidden">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#161616] border border-[#222222] flex items-center justify-center text-[#00f2ff] mx-auto mb-4 sm:mb-5">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <h3 className="text-base sm:text-xl font-bold text-white mb-2.5 tracking-wide">
            ご不明点・ご質問はこちら
          </h3>

          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto mb-5 leading-relaxed">
            ご不明点がある場合は、<strong className="text-white font-bold">IRIZE PRODUCTION公式X</strong>までお問い合わせください。
            オーディションに関する疑問やご相談など、お気軽にDMをお送りいただけます。
          </p>

          {/* Official Account Box */}
          <div className="max-w-md mx-auto p-3.5 sm:p-4 bg-[#161616] border border-[#222222] mb-6 sm:mb-8 flex items-center justify-between gap-3">
            <div className="text-left">
              <div className="text-[10px] text-[#888888] font-mono uppercase tracking-wider">OFFICIAL X ACCOUNT</div>
              <div className="text-sm sm:text-base font-bold text-[#00f2ff] font-mono">@IRIZEproduction</div>
            </div>

            <button
              type="button"
              onClick={copyHandle}
              className="px-3 py-2 bg-[#111111] hover:bg-[#222222] active:bg-[#222222] border border-[#333333] text-[#e0e0e0] hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00f2ff]" />
                  <span className="text-[#00f2ff]">コピー完了</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>IDをコピー</span>
                </>
              )}
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 max-w-lg mx-auto w-full">
            <a
              href="https://x.com/IRIZEproduction"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00f2ff] hover:bg-white text-black font-bold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-[0_0_15px_rgba(0,242,255,0.2)]"
            >
              <Send className="w-4 h-4" />
              <span>公式Xで問い合わせ / エントリー</span>
            </a>

            <a
              href="#requirements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#333333] hover:border-white text-[#e0e0e0] text-xs font-bold tracking-wider transition-all bg-[#161616] hover:bg-[#222222]"
            >
              <HelpCircle className="w-4 h-4 text-[#00f2ff]" />
              <span>募集要項を再確認</span>
            </a>
          </div>

          {/* Period Reminder Footnote */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#222222] flex items-center justify-center gap-2 text-xs text-[#888888]">
            <Calendar className="w-3.5 h-3.5 text-[#00f2ff]" />
            <span>エントリー期間：<strong className="text-white">8/24（月）〜 11/30（月）</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};

