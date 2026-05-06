const STUDIOS = [
  {
    city: 'Seoul',
    krCity: '서울 본사',
    role: 'Headquarters',
    address: '166 Donggwang-ro, Seocho, Seoul 06589, Korea',
    krAddress: '서울특별시 서초구 동광로 166',
    contacts: [
      { label: 'KR Hotline', value: '+82 2 529 1488' },
      { label: 'EN Hotline', value: '+82 10 3800 8638' },
      { label: 'Email', value: 'contact@musaistudio.com' },
    ],
    timezone: 'KST · UTC+9',
  },
  {
    city: 'Berlin',
    krCity: '베를린',
    role: 'European Office',
    address: 'Holsteinische Str. 1, Steglitz, Berlin 12163, Germany',
    krAddress: 'Steglitz, Berlin · Germany',
    contacts: [
      { label: 'Inquiries', value: 'contact@musaistudio.com' },
      { label: 'Region', value: 'EU · MENA · LATAM' },
    ],
    timezone: 'CET · UTC+1',
  },
];

export default function Studios() {
  return (
    <section id="studios" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Studios — 06
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink leading-[1.05]">
              Two cities. <span className="gradient-text">One studio.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-muted">
              Seoul과 Berlin 두 거점에서 24시간 협업이 가능한 글로벌 파이프라인을 운영합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STUDIOS.map((studio, idx) => (
            <article
              key={studio.city}
              className="group relative rounded-2xl border border-border bg-surface/70 p-7 lg:p-8 hover:border-accent/40 hover:bg-surface transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-en text-muted">
                    <span className="text-accent">0{idx + 1}</span>
                    <span>·</span>
                    <span>{studio.role}</span>
                  </div>
                  <span className="text-xs font-en text-muted">{studio.timezone}</span>
                </div>

                <h3 className="font-en font-semibold text-5xl text-ink tracking-[-0.03em]">
                  {studio.city}
                </h3>
                <p className="mt-1 text-sm text-accent/90">{studio.krCity}</p>

                <div className="mt-7 pt-6 border-t border-border space-y-4 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted mb-1">
                      Address
                    </div>
                    <div className="text-ink">{studio.address}</div>
                    <div className="text-xs text-muted/70 mt-0.5">
                      {studio.krAddress}
                    </div>
                  </div>

                  {studio.contacts.map((c) => (
                    <div key={c.label} className="flex items-baseline justify-between gap-4">
                      <span className="text-xs uppercase tracking-wider text-muted">
                        {c.label}
                      </span>
                      <span className="font-en text-ink/90">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
