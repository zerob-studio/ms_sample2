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
    <section id="studios" className="relative py-28 lg:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Studios — 06
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Two cities.{' '}
              <span className="text-muted">One studio.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 lg:self-end">
            <p className="text-muted text-sm leading-relaxed">
              Seoul과 Berlin 두 거점에서 24시간 협업이 가능한 글로벌 파이프라인을 운영합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {STUDIOS.map((studio, idx) => (
            <article
              key={studio.city}
              className={`relative py-10 lg:py-12 ${
                idx === 0 ? 'border-t border-border md:pr-10' : 'border-t border-border md:border-l md:pl-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[11px] font-en text-subtle tracking-[0.2em]">
                  0{idx + 1} · {studio.role}
                </span>
                <span className="text-[11px] font-en text-muted tabular-nums">
                  {studio.timezone}
                </span>
              </div>

              <h3 className="font-en font-medium text-5xl lg:text-6xl text-ink tracking-tightest leading-none">
                {studio.city}
              </h3>
              <p className="mt-3 text-[13px] text-muted">{studio.krCity}</p>

              <div className="mt-10 pt-8 border-t border-border space-y-5 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-2">
                    Address
                  </div>
                  <div className="text-ink/90">{studio.address}</div>
                  <div className="text-xs text-muted mt-1">
                    {studio.krAddress}
                  </div>
                </div>

                {studio.contacts.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-baseline justify-between gap-4 pt-3 border-t border-border/60"
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] text-subtle">
                      {c.label}
                    </span>
                    <span className="font-en text-ink/90 text-sm">{c.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
