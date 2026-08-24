import React, { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'コンセプト', href: '#concept' },
    { label: '活動・報酬', href: '#rewards' },
    { label: '募集要項', href: '#requirements' },
    { label: '選考の流れ', href: '#flow' },
    { label: 'メッセージ', href: '#message' },
    { label: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-8 h-8 bg-[#111111] border border-[#333333] group-hover:border-[#00f2ff] text-[#00f2ff] transition-all">
            <span className="font-display font-black text-sm tracking-tighter">IR</span>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] text-[#00f2ff] uppercase font-bold flex items-center gap-1.5">
              <span>NAGOYA PROJECT</span>
            </div>
            <div className="font-display font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-[#00f2ff] transition-colors">
              IRIZE PRODUCTION
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm text-[#e0e0e0]/80 hover:text-[#00f2ff] transition-colors tracking-wider font-medium relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00f2ff] transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://x.com/IRIZEproduction"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-entry-button"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#00f2ff] hover:bg-white text-black text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>公式Xでエントリー</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://x.com/IRIZEproduction"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#00f2ff] text-black font-bold text-xs"
          >
            <Send className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-2 bg-[#111111] border border-[#333333] text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/98 border-b border-[#222222] px-6 py-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#e0e0e0] hover:text-[#00f2ff] py-1 border-b border-[#1a1a1a] tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://x.com/IRIZEproduction"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-[#00f2ff] text-black font-bold text-xs tracking-widest uppercase"
            >
              <Send className="w-4 h-4" />
              <span>「IRIZE PRODUCTION」公式XへDM</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

