'use client';

import { useEffect, useState } from 'react';

const ROTATING_WORDS = ['Games', 'Animation', 'Films', 'Brands'];
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
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Single soft glow — no dot grid, no floating dots */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(122,162,247,0.10) 0%, rgba(122,162,247,0.03) 40%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Status — minimal, single line */}
        <div className="flex justify-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Now booking · 2026 productions
          </div>
        </div>

        {/* Headline — bigger, tighter, more confident */}
        <h1 className="text-center font-en font-medium tracking-tightest text-[clamp(2.75rem,9vw,7.75rem)] leading-[0.95] text-ink">
          <span className="block animate-fade-up" style={{ animationDelay: '0.05s' }}>
            Sound that moves
          </span>
          <span
            className="block animate-fade-up mt-3 italic font-light"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="gradient-text">{ROTATING_WORDS[wordIdx]}</span>
          </span>
        </h1>

        {/* Subhead — single sentence, more breathing room */}
        <p
          className="mt-12 max-w-xl mx-auto text-center text-base lg:text-lg text-muted leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          AAA 게임과 글로벌 콘텐츠를 위한 사운드, 로컬라이제이션, 엔터테인먼트.{' '}
          <span className="text-ink/85">30년</span>의 경험이 만든 가장 정직한 협업 방식.
        </p>

        {/* CTAs — only one primary, secondary is text link */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#works"
            className="inline-flex items-center gap-2 text-sm font-medium text-bg bg-ink hover:bg-ink/90 px-6 py-3 rounded-full transition-colors"
          >
            Browse selected works
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/85 hover:text-ink transition-colors"
          >
            <span>Start a project</span>
            <span className="text-muted" aria-hidden>↗</span>
          </a>
        </div>

        {/* Meta strip — tabular, more refined */}
        <div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-6 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            ['Origin', 'Seoul · Berlin'],
            ['Founded', '1995'],
            ['Languages', '30+'],
            ['Voice talent', '1,000+'],
          ].map(([label, value]) => (
            <div key={label} className="text-center md:text-left">
              <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-1.5">
                {label}
              </div>
              <div className="font-en font-medium text-ink tabular-nums">{value}</div>
            </div>
          ))}
        </div>

        {/* Trust strip — quieter, evenly spaced */}
        <div className="mt-24 animate-fade-up" style={{ animationDelay: '0.75s' }}>
          <div className="text-center text-[10px] uppercase tracking-[0.28em] text-subtle mb-7">
            Trusted by AAA studios &amp; publishers worldwide
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-[12px] font-en font-medium tracking-[0.16em] text-muted/70">
            {TRUST_LOGOS.map((logo) => (
              <span key={logo} className="hover:text-ink transition-colors duration-300">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
