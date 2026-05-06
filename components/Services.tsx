const SERVICES = [
  {
    no: '01',
    badge: 'Sound',
    title: 'Sound Design',
    krTitle: '사운드 디자인',
    description:
      '오리지널 스코어부터 사운드 디자인, 믹싱·마스터링까지. 작품의 정서를 결정짓는 모든 청각적 순간을 함께 설계합니다.',
    bullets: ['Original Score', 'Sound Design', 'Mixing & Mastering', 'Voice Recording'],
  },
  {
    no: '02',
    badge: 'L10N',
    title: 'Localization',
    krTitle: '로컬라이제이션',
    description:
      '30개 언어, 1,000명의 보이스 풀. 게임과 콘텐츠를 현지 사용자의 감각에 정확히 맞춥니다.',
    bullets: ['Translation', 'Voice Casting', 'Dubbing & ADR', 'QA & LQA'],
  },
  {
    no: '03',
    badge: 'IP',
    title: 'Entertainment',
    krTitle: '엔터테인먼트',
    description:
      '아티스트와 IP, 그리고 라이브 프로덕션. 사운드의 경계를 넘어 콘텐츠 비즈니스로 확장합니다.',
    bullets: ['IP Development', 'Artist Management', 'Live Production', 'Brand Collab'],
  },
];

function ServiceIcon({ no }: { no: string }) {
  if (no === '01') {
    // sound waves
    return (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 14h2M9 8v12M14 4v20M19 8v12M25 14h-2" />
      </svg>
    );
  }
  if (no === '02') {
    // globe / language
    return (
      <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <path d="M4 14h20M14 4c3 3 5 6.5 5 10s-2 7-5 10c-3-3-5-6.5-5-10s2-7 5-10z" />
      </svg>
    );
  }
  // sparkle / star
  return (
    <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3l2.5 7.5L24 13l-7.5 2.5L14 23l-2.5-7.5L4 13l7.5-2.5z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Services
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink">
              What we do, end to end.
            </h2>
          </div>
          <p className="text-muted max-w-md">
            세 영역의 전문성이 하나의 파이프라인으로 연결되어, 의뢰부터 출시까지 끊김 없이 작업합니다.
          </p>
        </div>

        {/* Horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group relative rounded-2xl border border-border bg-surface/70 p-7 lg:p-8 hover:border-accent/40 hover:bg-surface transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between mb-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-en text-muted">
                    <span className="text-accent">{service.no}</span>
                    <span>·</span>
                    <span>{service.badge}</span>
                  </div>
                  <div className="text-accent">
                    <ServiceIcon no={service.no} />
                  </div>
                </div>

                <h3 className="font-en font-semibold text-3xl text-ink tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-accent/90">{service.krTitle}</p>

                <p className="mt-5 text-muted leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-8 grid grid-cols-2 gap-2.5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-ink/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted">Learn more</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
