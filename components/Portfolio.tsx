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
    palette: ['#1a2440', '#3a5cab'],
    height: 'h-72',
    tag: 'Featured',
  },
  {
    title: 'Cyberpunk 2077: Phantom Liberty',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    tags: ['Voice Direction'],
    year: '2023',
    palette: ['#1f3a6e', '#4f8ef7'],
    height: 'h-56',
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    tags: ['Localization'],
    year: '2018',
    palette: ['#2c1f56', '#7c5cf0'],
    height: 'h-80',
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    tags: ['Voice Direction', 'Localization'],
    year: '2015',
    palette: ['#0f2a3a', '#3a8ec0'],
    height: 'h-64',
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    tags: ['Sound', 'Voice Direction'],
    year: 'Ongoing',
    palette: ['#0d1f2c', '#2d6ec9'],
    height: 'h-72',
  },
  {
    title: 'Call of Duty: MW',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    tags: ['Sound', 'Voice Direction'],
    year: '2019',
    palette: ['#1d2545', '#5276dd'],
    height: 'h-60',
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    tags: ['Voice Direction'],
    year: '2024',
    palette: ['#1a2c5e', '#5fa3f7'],
    height: 'h-56',
  },
  {
    title: 'Borderlands 4',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    tags: ['Localization'],
    year: '2025',
    palette: ['#101e30', '#456fc4'],
    height: 'h-72',
  },
];

function WorkCard({ work }: { work: (typeof WORKS)[number] }) {
  const [c1, c2] = work.palette;
  return (
    <article
      className={`group relative ${work.height} rounded-xl overflow-hidden border border-border hover:border-accent/40 transition-colors duration-500 cursor-pointer`}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg/95 via-bg/30 to-transparent" />

      {work.tag && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent/15 backdrop-blur-md border border-accent/30 px-2.5 py-1 text-[10px] font-en font-medium text-accent uppercase tracking-wider">
          <span className="h-1 w-1 rounded-full bg-accent" /> {work.tag}
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-accent mb-2">
          <span>{work.category}</span>
          <span className="text-muted">·</span>
          <span className="text-muted font-en">{work.year}</span>
        </div>
        <h3 className="font-en font-semibold text-xl text-ink tracking-tight">
          {work.title}
        </h3>
        <p className="mt-1 text-xs text-muted/80 font-en">{work.publisher}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted group-hover:text-ink transition-colors">
          View case study
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
      </div>

      <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-accent/20 transition-colors duration-500 rounded-xl pointer-events-none" />
    </article>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const filtered =
    filter === 'All' ? WORKS : WORKS.filter((w) => w.tags.includes(filter));

  return (
    <section id="works" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Selected Works — 04
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink leading-[1.05]">
              Work that shipped globally.
            </h2>
            <p className="mt-3 text-muted max-w-md">
              세계 시장에 출시된 게임과 콘텐츠 — 가장 까다로운 파트너들의 결과물입니다.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors">
            View full portfolio
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Filter chips */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
                filter === f
                  ? 'border-accent bg-accent/15 text-ink'
                  : 'border-border bg-surface/60 text-muted hover:text-ink hover:border-accent/40'
              }`}
            >
              {f}
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
