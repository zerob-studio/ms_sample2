const PILLARS = [
  {
    no: '01',
    title: 'PM-led production',
    description:
      '전담 PM이 보이스 디렉션부터 후반작업, 납품까지 단일 채널로 책임집니다.',
  },
  {
    no: '02',
    title: 'Original intent first',
    description:
      '대본의 단어가 아닌 캐릭터의 감정을 옮깁니다. 30년의 보이스 디렉션 경험.',
  },
  {
    no: '03',
    title: 'Global standard',
    description:
      'AAA 퍼블리셔의 출시 기준을 충족하는 일관된 품질 — Seoul + Berlin 두 거점.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-40 section-divider">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-16 lg:mb-20">
          <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
            About — 01
          </div>
          <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02] max-w-4xl">
            A studio for global storytellers,{' '}
            <span className="font-serif-display italic font-normal text-muted">
              since 1995.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-muted leading-relaxed text-base">
              MUSAI는 사운드, 로컬라이제이션, 엔터테인먼트의 경계를 잇는 종합
              미디어 프로덕션입니다. CD Projekt Red, Larian, Riot, Rockstar —
              세계 유수의 파트너들과 함께 작품의 톤앤매너를 완성해 왔습니다.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              See how we work
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Pillars — flat editorial list, no card chrome */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {PILLARS.map((p) => (
                <div key={p.title} className="pt-5 border-t border-border">
                  <div className="text-[11px] font-en text-subtle tracking-[0.2em] mb-4">
                    {p.no}
                  </div>
                  <h3 className="font-en font-medium text-ink text-lg tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote — minimal */}
            <figure className="mt-16 pl-6 border-l border-accent/40">
              <blockquote className="font-serif-display text-2xl lg:text-3xl text-ink/95 leading-snug italic font-normal">
                "We don't just dub. We translate emotion across cultures —
                that's the bar we hold for every project that ships globally."
              </blockquote>
              <figcaption className="mt-5 text-[11px] uppercase tracking-[0.22em] text-subtle">
                MUSAI Studio · Voice Direction
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
