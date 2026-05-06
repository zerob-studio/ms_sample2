type LogoStyle = 'serif' | 'mono' | 'wide' | 'condensed' | 'italic' | 'uppercase';

type Client = {
  name: string;
  display?: string;
  style: LogoStyle;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
};

const CLIENTS: Client[] = [
  { name: 'CD PROJEKT RED', display: 'CD PROJEKT', style: 'condensed', weight: 'bold' },
  { name: 'LARIAN STUDIOS', display: 'Larian', style: 'serif', weight: 'normal' },
  { name: 'ROCKSTAR GAMES', display: 'ROCKSTAR', style: 'wide', weight: 'bold' },
  { name: 'RIOT GAMES', display: 'RIOT', style: 'uppercase', weight: 'bold' },
  { name: 'ELECTRONIC ARTS', display: 'EA', style: 'mono', weight: 'bold' },
  { name: 'SONY INTERACTIVE', display: 'SONY', style: 'wide', weight: 'medium' },
  { name: 'TENCENT', display: 'Tencent', style: 'mono', weight: 'medium' },
  { name: 'KURO GAMES', display: 'KURO', style: 'condensed', weight: 'bold' },
  { name: 'PEARL ABYSS', display: 'PEARL ABYSS', style: 'wide', weight: 'light' },
  { name: 'TAKE-TWO', display: 'Take-Two', style: 'serif', weight: 'normal' },
  { name: 'HYPERGRYPH', display: 'Hypergryph', style: 'italic', weight: 'medium' },
  { name: 'ACTIVISION', display: 'ACTIVISION', style: 'condensed', weight: 'bold' },
  { name: 'SEGA', display: 'SEGA', style: 'wide', weight: 'bold' },
  { name: 'KONAMI', display: 'KONAMI', style: 'wide', weight: 'medium' },
  { name: 'BYTEDANCE', display: 'ByteDance', style: 'mono', weight: 'medium' },
  { name: 'SMILEGATE', display: 'SMILEGATE', style: 'condensed', weight: 'medium' },
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
  const cls = `${styleClass[client.style]} ${weightClass[client.weight ?? 'medium']}`;
  return (
    <div className="group relative aspect-[5/2] flex items-center justify-center px-4 py-6 border border-border hover:bg-surface/40 hover:border-hairline transition-colors duration-500">
      <span
        className={`${cls} text-ink/60 group-hover:text-ink transition-colors duration-500 text-base sm:text-lg lg:text-xl text-center leading-none whitespace-nowrap`}
      >
        {client.display ?? client.name}
      </span>
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
            <LogoMark key={c.name} client={c} />
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
