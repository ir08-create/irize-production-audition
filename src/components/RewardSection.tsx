import React from 'react';
import { Coins, Gift, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const RewardSection: React.FC = () => {
  const zeroCostItems = [
    { title: 'レッスン代', cost: '0円', desc: 'プロ講師によるダンス＆ボイストレーニング' },
    { title: '衣装代', cost: '0円', desc: 'オリジナルステージ衣装の制作＆支給' },
    { title: '撮影費', cost: '0円', desc: 'アーティスト写真・宣材写真の撮影' },
    { title: '遠征費＆宿泊費', cost: '0円', desc: '県外イベント・遠征時の交通費・ホテル代' },
  ];

  return (
    <section id="rewards" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            REWARDS & COSTS // <span className="text-[#888888] font-sans">活動報酬、費用について</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ⚫️ 活動報酬 */}
          <div className="elegant-card p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-[#00f2ff]">01</span>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                    活動報酬
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                  REWARDS
                </span>
              </div>

              <div className="my-3 p-4 sm:p-5 bg-[#161616] border-l-4 border-[#00f2ff]">
                <div className="text-[10px] font-mono text-[#00f2ff] tracking-widest uppercase mb-1 font-bold">
                  HIGH RETURN
                </div>
                <div className="text-lg sm:text-2xl font-display font-bold text-white leading-tight">
                  業界トップクラスの<br />
                  <span className="text-[#00f2ff]">高いバック率</span>を導入
                </div>
              </div>

              <div className="space-y-2.5 text-[#e0e0e0]/90 text-xs sm:text-sm leading-relaxed mt-4">
                <p>
                  当アイドルグループでは、<strong className="text-white font-bold">業界の中でも高いバック率</strong>を導入しています。
                </p>
                <p className="text-xs text-[#888888]">
                  活動内容や条件については契約前に丁寧にご説明いたします。
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#222222] flex items-center gap-2 text-xs text-[#00f2ff]">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>契約前の事前説明を徹底し、安心して活動に打ち込めます</span>
            </div>
          </div>

          {/* ⚫️ 活動費用 */}
          <div className="elegant-card p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#222222]">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-[#00f2ff]">02</span>
                  <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
                    活動費用
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#888888] tracking-widest uppercase">
                  COST
                </span>
              </div>

              <p className="text-[#e0e0e0] text-xs sm:text-sm mb-3 leading-relaxed">
                合格者様の、<strong className="text-white font-bold">レッスン代、衣装代、撮影費、遠征費&宿泊費など活動に関わる費用は一切ありません。</strong>
              </p>

              {/* 4 Zero badges */}
              <div className="grid grid-cols-2 gap-2 my-3">
                {zeroCostItems.map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#161616] border border-[#222222] flex flex-col justify-center">
                    <div className="text-[11px] sm:text-xs text-[#888888] font-medium">{item.title}</div>
                    <div className="text-lg sm:text-xl font-bold font-display text-[#00f2ff]">{item.cost}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mt-3 p-3 bg-[#161616] border border-[#222222] flex items-start gap-2.5 text-xs text-[#e0e0e0]/80">
              <AlertTriangle className="w-4 h-4 text-[#00f2ff] flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed text-xs">
                <strong className="text-white">注意事項：</strong><br />
                ※ライブ会場までの交通費は自己負担となります。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

