'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Studios', href: '#studios' },
  { label: 'Contact', href: '#contact' },
];

const LANGS = ['EN', 'KR', 'JP', 'CN', 'DE'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-en font-medium text-ink tracking-tight">
            musai<span className="text-muted/80">studio</span>
          </span>
          <span className="hidden md:inline-block ml-1 text-[10px] uppercase tracking-[0.22em] text-subtle">
            Est. 1995
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] text-muted hover:text-ink transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {/* Language */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted hover:text-ink px-2.5 py-1.5 rounded-full transition-colors"
            >
              {lang}
              <span className="text-subtle text-[10px]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-lg border border-border bg-surface/95 backdrop-blur-xl shadow-2xl py-1 z-50">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onMouseDown={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-1.5 text-xs transition-colors ${
                      lang === l
                        ? 'text-ink'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-bg bg-ink hover:bg-ink/90 px-4 py-1.5 rounded-full transition-colors ml-2"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
