const SERVICES = [
  {
    no: '01',
    title: 'SOUND',
    krTitle: '사운드',
    tagline: 'Voiceover · audio production with PM-led care.',
    description:
      '보이스오버 레코딩과 디렉션, 캐스팅, 사전·후반 오디오 작업까지. 전담 PM이 톤앤매너를 끝까지 책임지는 협업 방식입니다.',
    bullets: ['Voice Recording', 'Voice Direction', 'Casting', 'Pre · Post Audio'],
  },
  {
    no: '02',
    title: 'L10N',
    krTitle: '로컬라이제이션',
    tagline: 'Translate emotion, not just words.',
    description:
      '번역과 어댑테이션, 포스트에디팅, LQA. 30개 이상의 언어를 가장 정확한 문화적 결로 옮깁니다.',
    bullets: ['Translation', 'Adaptation', 'Post-Editing', 'LQA'],
  },
  {
    no: '03',
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

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Services — 02
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Three pillars,{' '}
              <span className="font-serif-display italic font-normal text-muted">
                one pipeline.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 lg:self-end">
            <p className="text-muted leading-relaxed text-sm">
              Sound · L10N · ECHO. 세 영역의 전문성이 단일 파이프라인으로 연결되어,
              의뢰부터 글로벌 출시까지 끊김 없이 동행합니다.
            </p>
          </div>
        </div>

        {/* Editorial 3-column grid — top hairline only, no card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          {SERVICES.map((service, idx) => (
            <article
              key={service.no}
              className={`group relative pt-8 pb-2 ${
                idx > 0 ? 'border-t lg:border-t lg:border-l border-border lg:pl-8 lg:pt-8' : 'border-t border-border'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[11px] font-en text-subtle tracking-[0.2em]">
                  {service.no}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-subtle">
                  {service.krTitle}
                </span>
              </div>

              <h3 className="font-en font-medium text-3xl lg:text-4xl text-ink tracking-tightest">
                {service.title}
              </h3>

              <p className="mt-6 font-en text-base text-ink/80 leading-snug tracking-tight">
                {service.tagline}
              </p>

              <p className="mt-3 text-sm text-muted leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-8 space-y-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center justify-between py-2 border-b border-border/60 text-sm text-ink/80"
                  >
                    <span>{b}</span>
                    <span className="text-subtle text-xs font-en">→</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
