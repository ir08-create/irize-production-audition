import React, { useState } from 'react';
import { Check, Copy, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const RequirementsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const rawTemplate = `【名古屋 メンズアイドルオーディション 応募】
・氏名(ふりがな)：
・生年月日(年齢)：
・身長・体重：
・住所(市町村まで)：
・趣味・特技・過去の芸歴(あれば)：
・SNSアカウント(あれば)：
・写真：※バストアップ写真と全身写真を添付してください
・自己PR(任意)：`;

  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const qualifications = [
    { text: '16〜28歳の男性（※未成年の方は保護者の同意が必要です）' },
    { text: '愛知拠点の活動に参加できる方' },
    { text: '芸能事務所やレコード会社と契約していない方' },
    { text: '経験/未経験を問いません' },
    { text: 'ダンスまたは歌が好きな方、大歓迎' },
  ];

  const methodItems = [
    '氏名(ふりがな)',
    '生年月日(年齢)',
    '身長・体重',
    '住所(市町村まで)',
    '趣味・特技・過去の芸歴(あれば)',
    'SNSアカウント(あれば)',
    '写真（バストアップ、全身）',
    '自己PR（任意）',
  ];

  return (
    <section id="requirements" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            REQUIREMENTS // <span className="text-[#888888] font-sans">募集要項</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 応募資格 */}
          <div className="lg:col-span-6">
            <div className="elegant-card p-5 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#00f2ff]">01</span>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                      応募資格
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                    ELIGIBILITY
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#161616] border border-[#222222]">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 bg-[#111111] border border-[#333333] flex items-center justify-center text-[#00f2ff] text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-[#e0e0e0] leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 p-3 bg-[#161616] border border-[#222222] text-xs text-[#00f2ff] flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>完全未経験の方も安心してご応募ください</span>
              </div>
            </div>
          </div>

          {/* 応募方法 */}
          <div className="lg:col-span-6">
            <div className="elegant-card p-5 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#00f2ff]">02</span>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                      応募方法
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                    HOW TO APPLY
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {methodItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 bg-[#161616] border border-[#222222] text-xs text-[#e0e0e0]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2ff] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-[#161616] border-l-4 border-[#00f2ff] text-xs text-[#e0e0e0] leading-relaxed">
                  <p className="font-bold text-white">
                    上記をご記入の上、<span className="text-[#00f2ff]">「IRIZE PRODUCTION」公式X</span>（<a href="https://x.com/IRIZEproduction" target="_blank" rel="noopener noreferrer" className="text-[#00f2ff] hover:underline font-mono">＠IRIZEproduction</a>）へDMをお送りください。
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-5 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => copyToClipboard(rawTemplate)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#161616] border border-[#333333] active:bg-[#222222] text-white text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#00f2ff]" />
                      <span className="text-[#00f2ff]">テンプレをコピーしました</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>応募テンプレをコピー</span>
                    </>
                  )}
                </button>

                <a
                  href="https://x.com/IRIZEproduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#00f2ff] hover:bg-white active:bg-white text-black text-xs font-bold tracking-widest uppercase transition-all cursor-pointer shadow-[0_0_15px_rgba(0,242,255,0.2)]"
                >
                  <Send className="w-4 h-4" />
                  <span>公式XのDMを開く</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


