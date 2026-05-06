'use client';

import { useState } from 'react';

const FILTERS = ['All', 'Sound', 'Localization', 'Voice Direction'] as const;

const WORKS = [
  {
    title: "Baldur's Gate 3",
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    tags: ['Sound', 'Localization'],
    year: '2023',
    palette: ['#161a26', '#3a5cab'],
    height: 'h-[28rem]',
    tag: 'Featured',
  },
  {
    title: 'Cyberpunk 2077: Phantom Liberty',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    tags: ['Voice Direction'],
    year: '2023',
    palette: ['#15202e', '#4f8ef7'],
    height: 'h-72',
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    tags: ['Localization'],
    year: '2018',
    palette: ['#1a142a', '#7c5cf0'],
    height: 'h-96',
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    tags: ['Voice Direction', 'Localization'],
    year: '2015',
    palette: ['#0d2030', '#3a8ec0'],
    height: 'h-80',
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    tags: ['Sound', 'Voice Direction'],
    year: 'Ongoing',
    palette: ['#0c1923', '#2d6ec9'],
    height: 'h-[28rem]',
  },
  {
    title: 'Call of Duty: MW',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    tags: ['Sound', 'Voice Direction'],
    year: '2019',
    palette: ['#171b30', '#5276dd'],
    height: 'h-72',
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    tags: ['Voice Direction'],
    year: '2024',
    palette: ['#15213e', '#5fa3f7'],
    height: 'h-72',
  },
  {
    title: 'Borderlands 4',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    tags: ['Localization'],
    year: '2025',
    palette: ['#0d1622', '#456fc4'],
    height: 'h-96',
  },
];

function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
  const [c1, c2] = work.palette;
  return (
    <article
      className={`group relative ${work.height} rounded-xl overflow-hidden cursor-pointer`}
    >
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        style={{ background: `linear-gradient(140deg, ${c1} 0%, ${c2} 130%)` }}
      />
      <div
        className="absolute inset-0 opacity-25 mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.45) 0%, transparent 55%), radial-gradient(circle at 70% 75%, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />

      {work.tag && (
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-en font-medium text-ink/95 uppercase tracking-[0.18em]">
          <span className="h-1 w-1 rounded-full bg-accent" /> {work.tag}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted mb-3">
          <span>{work.category}</span>
          <span className="text-subtle">·</span>
          <span className="font-en">{work.year}</span>
        </div>
        <h3 className="font-en font-medium text-2xl text-ink tracking-tight leading-tight">
          {work.title}
        </h3>
        <p className="mt-1.5 text-xs text-muted/90 font-en">{work.publisher}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-ink transition-colors">
          View case study
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const filtered =
    filter === 'All' ? WORKS : WORKS.filter((w) => w.tags.includes(filter));

  return (
    <section id="works" className="relative py-28 lg:py-40 section-divider">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Selected Works — 04
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Work that shipped <span className="text-muted">globally.</span>
            </h2>
            <p className="mt-5 text-muted max-w-md text-sm leading-relaxed">
              세계 시장에 출시된 게임과 콘텐츠 — 가장 까다로운 파트너들의 결과물입니다.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm text-ink/85 hover:text-ink transition-colors"
          >
            View full portfolio
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Filter — minimal underline tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-x-7 gap-y-2 border-b border-border pb-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative text-[13px] font-medium pb-2 transition-colors ${
                filter === f ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-ink" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="masonry">
          {filtered.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
