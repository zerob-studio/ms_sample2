'use client';

import { useState } from 'react';

const FILTERS = ['All', 'Sound', 'Localization', 'Voice Direction'] as const;

type Work = {
  slug: string; // matches /public/works/<slug>.(jpg|webp|png)
  title: string;
  shortTitle?: string;
  publisher: string;
  category: string;
  tags: string[];
  year: string;
  height: string;
  // visual fallback
  tone: 'cool' | 'warm' | 'neutral' | 'crimson' | 'amber' | 'forest';
  pattern: 'beams' | 'orb' | 'wave' | 'noir' | 'grid' | 'split' | 'blur';
  featured?: boolean;
};

const WORKS: Work[] = [
  {
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    shortTitle: 'BG3',
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    tags: ['Sound', 'Localization'],
    year: '2023',
    height: 'h-72 sm:h-80 lg:h-96',
    tone: 'amber',
    pattern: 'beams',
    featured: true,
  },
  {
    slug: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    shortTitle: 'CP77',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    tags: ['Voice Direction'],
    year: '2023',
    height: 'h-56 sm:h-64',
    tone: 'cool',
    pattern: 'grid',
  },
  {
    slug: 'red-dead-2',
    title: 'Red Dead Redemption 2',
    shortTitle: 'RDR2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    tags: ['Localization'],
    year: '2018',
    height: 'h-64 sm:h-80',
    tone: 'crimson',
    pattern: 'noir',
  },
  {
    slug: 'witcher-3',
    title: 'The Witcher 3',
    shortTitle: 'W3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing',
    tags: ['Voice Direction', 'Localization'],
    year: '2015',
    height: 'h-56 sm:h-72',
    tone: 'forest',
    pattern: 'wave',
  },
  {
    slug: 'league-of-legends',
    title: 'League of Legends',
    shortTitle: 'LoL',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    tags: ['Sound', 'Voice Direction'],
    year: 'Ongoing',
    height: 'h-72 sm:h-96',
    tone: 'cool',
    pattern: 'orb',
  },
  {
    slug: 'cod-mw',
    title: 'Call of Duty: MW',
    shortTitle: 'COD',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    tags: ['Sound', 'Voice Direction'],
    year: '2019',
    height: 'h-56 sm:h-64',
    tone: 'neutral',
    pattern: 'split',
  },
  {
    slug: 'wuthering-waves',
    title: 'Wuthering Waves',
    shortTitle: 'WuWa',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    tags: ['Voice Direction'],
    year: '2024',
    height: 'h-56 sm:h-72',
    tone: 'cool',
    pattern: 'blur',
  },
  {
    slug: 'borderlands-4',
    title: 'Borderlands 4',
    shortTitle: 'BL4',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    tags: ['Localization'],
    year: '2025',
    height: 'h-64 sm:h-80',
    tone: 'amber',
    pattern: 'beams',
  },
  {
    slug: 'lies-of-p',
    title: 'Lies of P',
    shortTitle: 'LoP',
    publisher: 'Neowiz',
    category: 'Voice Direction · Sound',
    tags: ['Voice Direction', 'Sound'],
    year: '2023',
    height: 'h-56 sm:h-64',
    tone: 'neutral',
    pattern: 'noir',
  },
  {
    slug: 'stellar-blade',
    title: 'Stellar Blade',
    shortTitle: 'SB',
    publisher: 'Shift Up · Sony',
    category: 'KR Voice Direction',
    tags: ['Voice Direction'],
    year: '2024',
    height: 'h-72 sm:h-80',
    tone: 'crimson',
    pattern: 'orb',
  },
  {
    slug: 'wukong',
    title: 'Black Myth: Wukong',
    shortTitle: 'WK',
    publisher: 'Game Science',
    category: 'KR Localization',
    tags: ['Localization'],
    year: '2024',
    height: 'h-56 sm:h-64',
    tone: 'amber',
    pattern: 'wave',
  },
  {
    slug: 'pubg',
    title: 'PUBG: Battlegrounds',
    shortTitle: 'PUBG',
    publisher: 'Krafton',
    category: 'Voice & Audio',
    tags: ['Sound', 'Voice Direction'],
    year: 'Ongoing',
    height: 'h-56 sm:h-72',
    tone: 'amber',
    pattern: 'split',
  },
];

const TONES: Record<
  string,
  { from: string; to: string; accent: string; shadow: string }
> = {
  cool: { from: '#0c1426', to: '#1e3a8a', accent: '#7aa2f7', shadow: '#020617' },
  warm: { from: '#1c1108', to: '#7c2d12', accent: '#fb923c', shadow: '#0a0604' },
  neutral: { from: '#0a0a0a', to: '#27272a', accent: '#d4d4d8', shadow: '#000000' },
  crimson: { from: '#180717', to: '#831843', accent: '#f472b6', shadow: '#030203' },
  amber: { from: '#1a1208', to: '#78350f', accent: '#fbbf24', shadow: '#0a0704' },
  forest: { from: '#06140d', to: '#14532d', accent: '#86efac', shadow: '#020805' },
};

function CoverPattern({ pattern, accent }: { pattern: Work['pattern']; accent: string }) {
  if (pattern === 'beams') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="b1" cx="30%" cy="20%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.7" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#b1)" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1={-100 + i * 80}
            y1={400}
            x2={100 + i * 120}
            y2={0}
            stroke={accent}
            strokeOpacity={0.18 - i * 0.025}
            strokeWidth={i === 0 ? 60 : 30}
            strokeLinecap="round"
            style={{ filter: 'blur(8px)' }}
          />
        ))}
      </svg>
    );
  }
  if (pattern === 'orb') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="o1" cx="50%" cy="50%" r="45%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.85" />
            <stop offset="55%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="180" r="180" fill="url(#o1)" />
        <circle cx="200" cy="180" r="70" fill={accent} fillOpacity="0.15" />
      </svg>
    );
  }
  if (pattern === 'wave') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M 0 ${120 + i * 30} Q 100 ${80 + i * 30} 200 ${120 + i * 30} T 400 ${120 + i * 30}`}
            stroke={accent}
            strokeOpacity={0.4 - i * 0.05}
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>
    );
  }
  if (pattern === 'noir') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="n1" cx="65%" cy="35%" r="55%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#n1)" />
      </svg>
    );
  }
  if (pattern === 'grid') {
    return (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="g1" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" stroke={accent} strokeWidth="0.5" fill="none" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#g1)" />
        <circle cx="280" cy="120" r="80" fill={accent} fillOpacity="0.25" style={{ filter: 'blur(40px)' }} />
      </svg>
    );
  }
  if (pattern === 'split') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <polygon points="0,0 400,0 400,200 0,400" fill={accent} fillOpacity="0.15" />
        <line x1="0" y1="400" x2="400" y2="200" stroke={accent} strokeOpacity="0.5" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
      <circle cx="120" cy="280" r="120" fill={accent} fillOpacity="0.45" style={{ filter: 'blur(50px)' }} />
      <circle cx="320" cy="100" r="100" fill={accent} fillOpacity="0.35" style={{ filter: 'blur(60px)' }} />
    </svg>
  );
}

const IMAGE_EXTENSIONS = ['jpg', 'webp', 'png'] as const;

function WorkImage({ slug, alt, onAllFailed }: { slug: string; alt: string; onAllFailed: () => void }) {
  const [extIdx, setExtIdx] = useState(0);
  const ext = IMAGE_EXTENSIONS[extIdx];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/works/${slug}.${ext}`}
      alt={alt}
      onError={() => {
        if (extIdx < IMAGE_EXTENSIONS.length - 1) {
          setExtIdx(extIdx + 1);
        } else {
          onAllFailed();
        }
      }}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
      loading="lazy"
    />
  );
}

function WorkCard({ work }: { work: Work }) {
  const [imageFailed, setImageFailed] = useState(false);
  const tone = TONES[work.tone] ?? TONES.cool;

  return (
    <article
      className={`group relative ${work.height} rounded-lg sm:rounded-xl overflow-hidden cursor-pointer ring-1 ring-white/5 hover:ring-white/15 transition-all duration-500`}
    >
      {!imageFailed ? (
        <WorkImage
          slug={work.slug}
          alt={`${work.title} — ${work.publisher}`}
          onAllFailed={() => setImageFailed(true)}
        />
      ) : (
        <>
          {/* Generative SVG cover fallback */}
          <div
            className="absolute inset-0 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
            style={{
              background: `radial-gradient(ellipse at 30% 25%, ${tone.to} 0%, ${tone.from} 60%, ${tone.shadow} 100%)`,
            }}
          />
          <div className="absolute inset-0 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]">
            <CoverPattern pattern={work.pattern} accent={tone.accent} />
          </div>
          <div className="absolute inset-0 cover-noise opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="font-serif-display text-[28vw] sm:text-[14vw] lg:text-[9vw] leading-none italic tracking-tight select-none"
              style={{
                color: tone.accent,
                opacity: 0.08,
                mixBlendMode: 'screen',
              }}
            >
              {work.shortTitle ?? work.title.split(' ')[0]}
            </span>
          </div>
        </>
      )}

      {/* Bottom fade for legibility — applied to BOTH image and fallback */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

      {/* Featured pin */}
      {work.featured && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-en font-medium text-white/95 uppercase tracking-[0.18em]">
          <span
            className="h-1 w-1 rounded-full"
            style={{ background: imageFailed ? tone.accent : '#7aa2f7' }}
          />
          Featured
        </span>
      )}

      {/* Year — top right */}
      <span className="absolute top-3 right-3 text-[10px] font-en text-white/65 tabular-nums tracking-wider drop-shadow">
        {work.year}
      </span>

      {/* Title block — bottom */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/65 mb-1.5 sm:mb-2 truncate">
          {work.category}
        </div>
        <h3 className="font-en font-medium text-base sm:text-lg lg:text-xl text-white tracking-tight leading-tight">
          {work.title}
        </h3>
        <p className="mt-1 text-[10px] sm:text-xs text-white/60 font-en truncate">
          {work.publisher}
        </p>
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
              Work that shipped{' '}
              <span className="font-serif-display italic font-normal text-muted">
                globally.
              </span>
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

        <div className="mb-8 lg:mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-3 -mx-1 px-1 overflow-x-auto scrollbar-hidden">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative shrink-0 text-[13px] font-medium pb-2 transition-colors ${
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

        <div className="masonry">
          {filtered.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
