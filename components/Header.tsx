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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent/15 ring-1 ring-accent/30 group-hover:bg-accent/25 transition-colors">
            <span className="absolute inset-0 rounded-md bg-accent/20 blur-md group-hover:bg-accent/40 transition-colors" />
            <span className="relative font-en font-bold text-accent text-sm">M</span>
          </span>
          <span className="font-en font-semibold text-ink tracking-tight">
            musai<span className="text-muted">.studio</span>
          </span>
          <span className="hidden md:inline-block ml-2 text-[10px] uppercase tracking-[0.18em] text-muted/70">
            Est. 1995
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted hover:text-ink hover:bg-surface px-3.5 py-1.5 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((o) => !o)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink hover:bg-surface px-2.5 py-1.5 rounded-md transition-colors"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6" />
                <path d="M2 8h12M8 2c2 2 3 4 3 6s-1 4-3 6c-2-2-3-4-3-6s1-4 3-6z" />
              </svg>
              {lang}
              <span className="text-muted/60">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-1.5 w-24 rounded-md border border-border bg-surface shadow-xl py-1 z-50">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onMouseDown={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-1.5 text-xs ${
                      lang === l
                        ? 'text-accent bg-accent/10'
                        : 'text-muted hover:text-ink hover:bg-bg'
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
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-bg bg-ink hover:bg-ink/90 px-4 py-2 rounded-md transition-colors"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
