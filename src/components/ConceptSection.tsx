import React from 'react';
import { Mic2, Camera, Share2, Compass, Users } from 'lucide-react';

export const ConceptSection: React.FC = () => {
  return (
    <section id="concept" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            GROUP CONCEPT // <span className="text-[#888888] font-sans">グループコンセプトについて</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* ⚫️ 目指すグループ像 */}
          <div className="elegant-card p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#222222]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-[#00f2ff]">01</span>
                <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                  目指すグループ像
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                VISION
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4 text-[#e0e0e0] leading-relaxed text-xs sm:text-base">
              <p className="p-3.5 sm:p-4 bg-[#161616] border-l-4 border-[#00f2ff] text-white font-medium text-xs sm:text-sm">
                グループのコンセプトは、<span className="text-[#00f2ff] font-bold">合格者の皆様との話し合いを通して</span>決めていきたいと考えています。
              </p>
              <p className="text-[#e0e0e0]/85 text-xs sm:text-sm">
                現時点では、<strong className="text-white font-bold">パフォーマンス力が高く</strong>、<strong className="text-white font-bold">個性が輝き</strong>、<strong className="text-[#00f2ff] font-bold">見ている人を元気にできるグループ（7人組想定）</strong>を目指しています。
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                <span className="px-2.5 py-1 bg-[#161616] border border-[#222222] text-[#00f2ff] font-semibold">
                  # ハイパフォーマンス
                </span>
                <span className="px-2.5 py-1 bg-[#161616] border border-[#222222] text-[#e0e0e0] font-semibold">
                  # 個性発揮
                </span>
                <span className="px-2.5 py-1 bg-[#161616] border border-[#222222] text-[#00f2ff] font-semibold">
                  # 元気と感動を届ける
                </span>
                <span className="px-2.5 py-1 bg-[#161616] border border-[#222222] text-[#888888]">
                  # メンバー主導
                </span>
              </div>
            </div>
          </div>

          {/* ⚫️ 活動内容 */}
          <div className="elegant-card p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold text-[#00f2ff]">02</span>
                <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                  活動内容
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                ACTIVITIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {/* ・ライブ、イベント出演 */}
              <div className="p-4 sm:p-5 bg-[#161616] border border-[#222222]">
                <div className="text-[10px] font-mono text-[#00f2ff] tracking-widest uppercase mb-1.5 font-bold">
                  ACTIVITY 01
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-wide">
                  ライブ、イベント出演
                </h4>
                <p className="text-xs text-[#e0e0e0]/70 leading-relaxed">
                  定期公演や主催ライブ、対バンイベントなどを中心に活動を行います。
                </p>
              </div>

              {/* ・特典会 */}
              <div className="p-4 sm:p-5 bg-[#161616] border border-[#222222]">
                <div className="text-[10px] font-mono text-[#00f2ff] tracking-widest uppercase mb-1.5 font-bold">
                  ACTIVITY 02
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-wide">
                  特典会
                </h4>
                <p className="text-xs text-[#e0e0e0]/70 leading-relaxed">
                  ファンの方との交流や、チェキ・写真撮影などを行います。
                </p>
              </div>

              {/* ・SNS活動 */}
              <div className="p-4 sm:p-5 bg-[#161616] border border-[#222222]">
                <div className="text-[10px] font-mono text-[#00f2ff] tracking-widest uppercase mb-1.5 font-bold">
                  ACTIVITY 03
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-wide">
                  SNS活動
                </h4>
                <p className="text-xs text-[#e0e0e0]/70 leading-relaxed">
                  TikTok, Instagram, XなどのSNSを活用し、活動の様子やメンバーの魅力を発信します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

