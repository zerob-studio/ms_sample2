'use client';

import { useEffect, useState } from 'react';

const ROTATING_WORDS = ['Games', 'Animation', 'Films', 'Brands', 'Voices'];
const TRUST_LOGOS = [
  'CD PROJEKT RED',
  'LARIAN',
  'ROCKSTAR',
  'RIOT GAMES',
  'SONY INTERACTIVE',
  'TENCENT',
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(79,142,247,0.20) 0%, rgba(79,142,247,0.06) 35%, transparent 70%)',
        }}
      />
      {/* Floating orbs */}
      <div className="absolute top-32 left-12 w-2 h-2 rounded-full bg-accent animate-pulse-soft hidden lg:block" />
      <div className="absolute top-72 right-24 w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-24 left-1/3 w-1 h-1 rounded-full bg-accent animate-pulse-soft hidden lg:block" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Status pill */}
        <div className="flex justify-center mb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Boost Your Play — Now booking 2026 productions</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center font-en font-semibold tracking-[-0.04em] text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.98]">
          <span className="block text-ink animate-fade-up" style={{ animationDelay: '0.05s' }}>
            Sound that moves
          </span>
          <span className="block animate-fade-up mt-2" style={{ animationDelay: '0.15s' }}>
            <span className="gradient-text">{ROTATING_WORDS[wordIdx]}</span>
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mt-10 max-w-2xl mx-auto text-center text-lg lg:text-xl text-muted leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          AAA 게임과 글로벌 콘텐츠를 위한 사운드, 로컬라이제이션, 그리고 엔터테인먼트.
          <br className="hidden md:inline" />
          <span className="text-ink/85">30년</span>의 경험이 만든 가장 정직한 협업 방식.
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
            Browse selected works
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-surface hover:bg-surface2 border border-border px-5 py-3 rounded-md transition-colors"
          >
            Start a project
          </a>
        </div>

        {/* Meta strip */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            ['Origin', 'Seoul · Berlin'],
            ['Founded', '1995'],
            ['Languages', '30+'],
            ['Voice talent', '1,000+'],
          ].map(([label, value]) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
              <div className="mt-1 font-en font-medium text-ink">{value}</div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: '0.75s' }}>
          <div className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-6">
            Trusted by AAA studios &amp; publishers worldwide
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm font-en font-medium tracking-wider text-muted/70">
            {TRUST_LOGOS.map((logo) => (
              <span key={logo} className="hover:text-ink transition-colors">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
