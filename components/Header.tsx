'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-bg/80 backdrop-blur-lg border-b border-border'
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

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-bg bg-ink hover:bg-ink/90 px-4 py-2 rounded-md transition-colors"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
