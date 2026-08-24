import React from 'react';
import { Mail, Mic, Video, Sparkles } from 'lucide-react';

export const SelectionFlowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '１次選考：DM審査',
      subTitle: 'DM SCREENING',
      icon: Mail,
      desc: '公式X（@IRIZEproduction）のDMにお送りいただいたプロフィール情報および写真（バストアップ・全身）をもとに選考を行います。',
      points: [
        '必要事項を記入の上、公式XへDM送信',
        '通過された方へ順次、2次選考のご案内をお送りします',
      ],
    },
    {
      step: '02',
      title: '最終(2次)選考：面談、歌唱審査',
      subTitle: 'INTERVIEW & VOCAL',
      icon: Mic,
      desc: '面談および歌唱審査を実施いたします。あなたのお人柄や想い、魅力を直接お聞かせください。',
      note: '※オンラインで審査する場合は要相談',
      points: [
        '個人面談（熱意や活動への想い）',
        '歌唱審査（得意な曲・好きな楽曲でOK）',
        '遠方等でオンライン審査をご希望の場合はご相談ください',
      ],
    },
  ];

  return (
    <section id="flow" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-[#222222]">
          <div className="w-2 h-2 bg-[#00f2ff]" />
          <h2 className="text-base sm:text-lg font-bold tracking-widest uppercase text-white font-mono">
            SELECTION PROCESS // <span className="text-[#888888] font-sans">合格までの流れ</span>
          </h2>
        </div>

        <div className="relative">
          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="elegant-card p-5 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    {/* Step header */}
                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#222222]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs tracking-widest text-[#00f2ff]">
                          STEP {item.step}
                        </span>
                      </div>
                      <div className="p-1.5 bg-[#161616] border border-[#222222] text-[#00f2ff]">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="text-[10px] font-mono tracking-widest text-[#888888] uppercase mb-1">
                      {item.subTitle}
                    </div>

                    <h3 className="text-sm sm:text-lg font-bold text-white mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#e0e0e0]/80 leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    {item.note && (
                      <div className="mb-3 p-2 bg-[#161616] border border-[#222222] text-[11px] sm:text-xs text-[#00f2ff] flex items-center gap-1.5">
                        <Video className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{item.note}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#222222] space-y-1.5">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-[#888888]">
                        <div className="w-1.5 h-1.5 bg-[#00f2ff] flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Post Selection Note */}
          <div className="mt-5 p-4 bg-[#111111] border border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#e0e0e0]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00f2ff] flex-shrink-0" />
              <span>合格後は即レッスン・オリジナル楽曲制作・衣装制作などのデビュー準備へと進みます。</span>
            </div>
            <a
              href="https://x.com/IRIZEproduction"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00f2ff] hover:underline whitespace-nowrap self-end sm:self-auto"
            >
              公式Xをフォロー →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

