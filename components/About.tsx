const PILLARS = [
  {
    title: 'PM-led production',
    description:
      '전담 PM이 보이스 디렉션부터 후반작업, 납품까지 단일 채널로 책임집니다.',
  },
  {
    title: 'Original intent first',
    description:
      '대본의 단어가 아닌 캐릭터의 감정을 옮깁니다. 30년의 보이스 디렉션 경험.',
  },
  {
    title: 'Global standard',
    description:
      'AAA 퍼블리셔의 출시 기준을 충족하는 일관된 품질 — Seoul + Berlin 두 거점.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Eyebrow + heading */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              About — 01
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink leading-[1.05]">
              A studio for{' '}
              <span className="gradient-text">global storytellers</span>, since
              1995.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              MUSAI는 사운드, 로컬라이제이션, 엔터테인먼트의 경계를 잇는 종합
              미디어 프로덕션입니다. CD Projekt Red, Larian, Riot, Rockstar —
              세계 유수의 파트너들과 함께 작품의 톤앤매너를 완성해 왔습니다.
            </p>
            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
            >
              See how we work
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PILLARS.map((p, idx) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border bg-surface/60 p-5 hover:border-accent/40 hover:bg-surface transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-en text-muted">
                      0{idx + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="font-en font-semibold text-ink text-base mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <figure className="mt-10 rounded-xl border border-border bg-gradient-to-br from-surface/80 to-surface/30 p-7">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">
                Note from the studio
              </span>
              <blockquote className="mt-3 font-en text-xl lg:text-2xl text-ink leading-snug tracking-tight">
                "We don't just dub. We translate emotion across cultures —
                that's the bar we hold for every project that ships globally."
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-muted">
                MUSAI Studio · Voice Direction
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
