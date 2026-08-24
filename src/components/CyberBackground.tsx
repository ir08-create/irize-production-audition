import React from 'react';

export const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Matte Black Base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Subtle Elegant Grid Layer */}
      <div className="absolute inset-0 elegant-grid-bg opacity-100" />

      {/* Minimal Electric Cyan Atmosphere Glow */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-[#00f2ff]/4 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-[#00f2ff]/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Outer border framing effect */}
      <div className="hidden lg:block fixed inset-3 border border-[#111111] pointer-events-none z-50" />
    </div>
  );
};

