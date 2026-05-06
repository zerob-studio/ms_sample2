const CLIENTS = [
  'CD PROJEKT RED',
  'LARIAN STUDIOS',
  'ROCKSTAR GAMES',
  'RIOT GAMES',
  'ELECTRONIC ARTS',
  'SONY INTERACTIVE',
  'TENCENT',
  'KURO GAMES',
  'PEARL ABYSS',
  'TAKE-TWO',
  'HYPERGRYPH',
  'ACTIVISION',
  'SEGA',
  'KONAMI',
  'BYTEDANCE',
  'SMILEGATE',
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 lg:py-40 section-divider overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
            Trusted by — 05
          </div>
          <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
            <span className="tabular-nums">200+</span>{' '}
            <span className="text-muted">studios &amp; publishers.</span>
          </h2>
          <p className="mt-5 text-muted max-w-xl mx-auto text-sm leading-relaxed">
            Seoul과 Berlin, 두 거점에서 가장 까다로운 파트너들과 함께 작업합니다.
          </p>
        </div>
      </div>

      {/* Marquee — bare typography, no pill borders */}
      <div className="relative overflow-hidden py-3 border-y border-border">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform py-5">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div key={`${client}-${idx}`} className="flex items-center px-7">
              <span className="font-en font-medium text-base lg:text-lg tracking-[0.18em] text-muted/85 hover:text-ink transition-colors">
                {client}
              </span>
              <span className="ml-7 text-subtle">·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-3 border-b border-border">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee whitespace-nowrap will-change-transform py-5"
          style={{ animationDirection: 'reverse', animationDuration: '52s' }}
        >
          {[...CLIENTS.slice().reverse(), ...CLIENTS.slice().reverse()].map(
            (client, idx) => (
              <div key={`r-${client}-${idx}`} className="flex items-center px-7">
                <span className="font-en font-medium text-base lg:text-lg tracking-[0.18em] text-muted/70 hover:text-ink transition-colors">
                  {client}
                </span>
                <span className="ml-7 text-subtle">·</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
