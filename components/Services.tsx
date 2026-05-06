const SERVICES = [
  {
    no: '01',
    badge: 'Sound',
    title: 'SOUND',
    krTitle: '사운드',
    tagline: 'Voiceover · audio production with PM-led care.',
    description:
      '보이스오버 레코딩과 디렉션, 캐스팅, 사전·후반 오디오 작업까지. 전담 PM이 톤앤매너를 끝까지 책임지는 협업 방식입니다.',
    bullets: ['Voice Recording', 'Voice Direction', 'Casting', 'Pre · Post Audio'],
  },
  {
    no: '02',
    badge: 'L10N',
    title: 'L10N',
    krTitle: '로컬라이제이션',
    tagline: 'Translate emotion, not just words.',
    description:
      '번역과 어댑테이션, 포스트에디팅, LQA. 30개 이상의 언어를 가장 정확한 문화적 결로 옮깁니다.',
    bullets: ['Translation', 'Adaptation', 'Post-Editing', 'LQA'],
  },
  {
    no: '03',
    badge: 'ECHO',
    title: 'ECHO',
    krTitle: '엔터테인먼트',
    tagline: 'Talents who find their global stage.',
    description:
      '아티스트 매니지먼트, 전문 트레이닝, 오디션과 글로벌 마켓 진출까지. 사운드의 경계를 넘어 사람과 IP를 잇습니다.',
    bullets: [
      'Artist Management',
      'Pro Training',
      'Casting',
      'Global Expansion',
    ],
  },
];

function ServiceIcon({ no }: { no: string }) {
  if (no === '01') {
    return (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M3 16h2M9 9v14M16 4v24M23 9v14M27 16h2" />
      </svg>
    );
  }
  if (no === '02') {
    return (
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M4 16h24M16 4c3 3.5 5 7.5 5 12s-2 8.5-5 12c-3-3.5-5-7.5-5-12s2-8.5 5-12z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3l3 9 9 1-7 6.5L23 29l-7-5-7 5 2-9.5L4 13l9-1z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Services — 02
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink leading-[1.05]">
              Three pillars, one pipeline.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <p className="text-muted leading-relaxed">
              Sound · L10N · ECHO. 세 영역의 전문성이 단일 파이프라인으로
              연결되어, 의뢰부터 글로벌 출시까지 끊김 없이 동행합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group relative rounded-2xl border border-border bg-surface/70 p-7 lg:p-8 hover:border-accent/40 hover:bg-surface transition-all duration-500 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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

                <p className="mt-5 font-en text-base text-ink/85 leading-snug tracking-tight">
                  {service.tagline}
                </p>

                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-7 grid grid-cols-2 gap-2.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink/80">
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
