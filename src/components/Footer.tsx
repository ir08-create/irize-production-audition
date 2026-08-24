import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-[#222222] bg-[#050505] py-10 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Navigation Quick Anchors */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-[#888888] mb-6 font-medium">
          <a href="#hero" className="hover:text-white transition-colors">トップ</a>
          <span className="text-[#333333]">•</span>
          <a href="#concept" className="hover:text-white transition-colors">グループコンセプト</a>
          <span className="text-[#333333]">•</span>
          <a href="#rewards" className="hover:text-white transition-colors">活動報酬・費用</a>
          <span className="text-[#333333]">•</span>
          <a href="#requirements" className="hover:text-white transition-colors">募集要項</a>
          <span className="text-[#333333]">•</span>
          <a href="#flow" className="hover:text-white transition-colors">合格までの流れ</a>
          <span className="text-[#333333]">•</span>
          <a href="#message" className="hover:text-white transition-colors">メッセージ</a>
          <span className="text-[#333333]">•</span>
          <a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>

        {/* サイトの一番下中央にプロダクション名としてIRIZE PRODUCTIONを、会社サイトの会社名のように小さくいれる */}
        <div className="pt-4 border-t border-[#222222] flex flex-col items-center justify-center gap-1.5">
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#e0e0e0] uppercase font-semibold">
            IRIZE PRODUCTION
          </div>
          <p className="text-[10px] text-[#666666] tracking-wider font-mono">
            © {new Date().getFullYear()} IRIZE PRODUCTION. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

