'use client';

import { useEffect, useState } from 'react';

const ROTATING_WORDS = ['Games', 'Animation', 'Films', 'Brands', 'Stories'];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(79,142,247,0.18) 0%, rgba(79,142,247,0.06) 35%, transparent 70%)',
        }}
      />
      {/* Floating accent orbs */}
      <div className="absolute top-32 left-12 w-2 h-2 rounded-full bg-accent animate-pulse-soft hidden lg:block" />
      <div
        className="absolute top-72 right-24 w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft hidden lg:block"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-24 left-1/3 w-1 h-1 rounded-full bg-accent animate-pulse-soft hidden lg:block"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Status pill */}
        <div className="flex justify-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Now booking 2026 — Limited slots</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center font-en font-semibold tracking-[-0.04em] text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.98]">
          <span
            className="block text-ink animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            Sound that moves
          </span>
          <span
            className="block animate-fade-up mt-2"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="gradient-text">{ROTATING_WORDS[wordIdx]}</span>
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mt-10 max-w-2xl mx-auto text-center text-lg lg:text-xl text-muted leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          게임, 영상, 그리고 브랜드를 위한 사운드 디자인과 로컬라이제이션.
          <br className="hidden md:inline" />
          <span className="text-ink/80"> 30년의 경험</span>이 만든 가장 정직한 작업 방식.
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#works"
            className="inline-flex items-center gap-2 text-sm font-medium text-bg bg-ink hover:bg-ink/90 px-5 py-3 rounded-md transition-colors"
          >
            Browse our work
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-surface hover:bg-surface2 border border-border px-5 py-3 rounded-md transition-colors"
          >
            Start a project
          </a>
        </div>

        {/* Sub-meta row */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            ['Origin', 'Seoul, KR'],
            ['Founded', '1995'],
            ['Languages', '30+'],
            ['Voice talent', '1,000+'],
          ].map(([label, value]) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-xs uppercase tracking-wider text-muted">
                {label}
              </div>
              <div className="mt-1 font-en font-medium text-ink">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
