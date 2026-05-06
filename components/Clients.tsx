'use client';

import { useState } from 'react';

type LogoStyle = 'serif' | 'mono' | 'wide' | 'condensed' | 'italic' | 'uppercase';

type Client = {
  slug: string; // matches /public/logos/<slug>.svg
  name: string;
  display?: string;
  style: LogoStyle;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
};

const CLIENTS: Client[] = [
  { slug: 'cdpr', name: 'CD PROJEKT RED', display: 'CD PROJEKT', style: 'condensed', weight: 'bold' },
  { slug: 'larian', name: 'LARIAN STUDIOS', display: 'Larian', style: 'serif', weight: 'normal' },
  { slug: 'rockstar', name: 'ROCKSTAR GAMES', display: 'ROCKSTAR', style: 'wide', weight: 'bold' },
  { slug: 'riot', name: 'RIOT GAMES', display: 'RIOT', style: 'uppercase', weight: 'bold' },
  { slug: 'ea', name: 'ELECTRONIC ARTS', display: 'EA', style: 'mono', weight: 'bold' },
  { slug: 'sony', name: 'SONY INTERACTIVE', display: 'SONY', style: 'wide', weight: 'medium' },
  { slug: 'tencent', name: 'TENCENT', display: 'Tencent', style: 'mono', weight: 'medium' },
  { slug: 'kuro', name: 'KURO GAMES', display: 'KURO', style: 'condensed', weight: 'bold' },
  { slug: 'pearl-abyss', name: 'PEARL ABYSS', display: 'PEARL ABYSS', style: 'wide', weight: 'light' },
  { slug: 'take-two', name: 'TAKE-TWO', display: 'Take-Two', style: 'serif', weight: 'normal' },
  { slug: 'hypergryph', name: 'HYPERGRYPH', display: 'Hypergryph', style: 'italic', weight: 'medium' },
  { slug: 'activision', name: 'ACTIVISION', display: 'ACTIVISION', style: 'condensed', weight: 'bold' },
  { slug: 'sega', name: 'SEGA', display: 'SEGA', style: 'wide', weight: 'bold' },
  { slug: 'konami', name: 'KONAMI', display: 'KONAMI', style: 'wide', weight: 'medium' },
  { slug: 'bytedance', name: 'BYTEDANCE', display: 'ByteDance', style: 'mono', weight: 'medium' },
  { slug: 'smilegate', name: 'SMILEGATE', display: 'SMILEGATE', style: 'condensed', weight: 'medium' },
];

const styleClass: Record<LogoStyle, string> = {
  serif: 'font-serif-display italic',
  mono: 'font-en tracking-tight',
  wide: 'font-en tracking-[0.18em] uppercase',
  condensed: 'font-en tracking-[0.06em] uppercase',
  italic: 'font-en italic tracking-tight',
  uppercase: 'font-en tracking-[0.04em] uppercase',
};

const weightClass: Record<NonNullable<Client['weight']>, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

function LogoMark({ client }: { client: Client }) {
  const [errored, setErrored] = useState(false);
  const cls = `${styleClass[client.style]} ${weightClass[client.weight ?? 'medium']}`;

  return (
    <div className="group relative aspect-[5/2] flex items-center justify-center px-4 py-6 border border-border hover:bg-surface/40 hover:border-hairline transition-colors duration-500">
      {!errored ? (
        // Try to load real logo from /public/logos/<slug>.(svg|png)
        // Falls back to wordmark below on error.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${client.slug}.svg`}
          alt={client.name}
          onError={(e) => {
            // try .png if .svg missing
            const img = e.currentTarget;
            if (img.dataset.fallback !== 'png') {
              img.dataset.fallback = 'png';
              img.src = `/logos/${client.slug}.png`;
            } else {
              setErrored(true);
            }
          }}
          className="max-h-7 sm:max-h-8 lg:max-h-9 max-w-[80%] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500 select-none"
          style={{
            filter: 'grayscale(1) brightness(1.1)',
          }}
          loading="lazy"
        />
      ) : (
        <span
          className={`${cls} text-ink/55 group-hover:text-ink transition-colors duration-500 text-base sm:text-lg lg:text-xl text-center leading-none whitespace-nowrap`}
        >
          {client.display ?? client.name}
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 lg:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Trusted by — 05
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              <span className="tabular-nums">200+</span>{' '}
              <span className="font-serif-display italic font-normal text-muted">
                studios &amp; publishers.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 lg:self-end">
            <p className="text-muted text-sm leading-relaxed">
              Seoul과 Berlin, 두 거점에서 가장 까다로운 파트너들과 함께 작업합니다.
            </p>
          </div>
        </div>

        {/* Logo grid — borders form a clean matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 -mx-px">
          {CLIENTS.map((c) => (
            <LogoMark key={c.slug} client={c} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-subtle">
          <span className="h-px w-8 bg-border" />
          and many more
          <span className="h-px w-8 bg-border" />
        </div>
      </div>
    </section>
  );
}
