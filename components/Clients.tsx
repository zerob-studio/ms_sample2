const CLIENTS = [
  'NEXON',
  'NCSOFT',
  'KRAFTON',
  'NETMARBLE',
  'PEARL ABYSS',
  'SMILEGATE',
  'NETFLIX',
  'CD PROJEKT RED',
  'LARIAN',
  'SQUARE ENIX',
  'TENCENT',
  'BANDAI NAMCO',
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Trusted by
          </span>
          <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink">
            <span className="gradient-text">200+</span> studios &amp; publishers
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            가장 까다로운 파트너들과 함께, 가장 정직한 기준으로 작업합니다.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div key={`${client}-${idx}`} className="flex items-center mx-8">
              <div className="rounded-lg border border-border bg-surface/50 px-6 py-3 hover:border-accent/40 hover:bg-surface transition-colors">
                <span className="font-en font-medium text-sm tracking-wider text-muted">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse direction row */}
      <div className="relative overflow-hidden py-2">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee whitespace-nowrap will-change-transform"
          style={{ animationDirection: 'reverse', animationDuration: '36s' }}
        >
          {[...CLIENTS.slice().reverse(), ...CLIENTS.slice().reverse()].map((client, idx) => (
            <div key={`r-${client}-${idx}`} className="flex items-center mx-8">
              <div className="rounded-lg border border-border bg-surface/50 px-6 py-3 hover:border-accent/40 hover:bg-surface transition-colors">
                <span className="font-en font-medium text-sm tracking-wider text-muted">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
