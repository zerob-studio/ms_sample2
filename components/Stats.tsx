'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 30, suffix: '+', label: 'Years', kr: '경력' },
  { value: 20, suffix: '+', label: 'Studios', kr: '글로벌 거점' },
  { value: 200, suffix: '+', label: 'Clients', kr: '파트너사' },
  { value: 2000, suffix: '+', label: 'Projects', kr: '완료 프로젝트' },
];

function useCountUp(target: number, isVisible: boolean, durationMs = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, target, durationMs]);
  return value;
}

function StatCell({
  stat,
  idx,
  visible,
}: {
  stat: (typeof STATS)[number];
  idx: number;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, visible);
  const formatted = count >= 1000 ? count.toLocaleString() : String(count);
  return (
    <div
      className={`relative py-10 lg:py-12 ${
        idx > 0 ? 'border-t lg:border-t-0 lg:border-l border-border lg:pl-10' : ''
      }`}
    >
      <div className="text-[11px] font-en text-subtle tracking-[0.2em] mb-6">
        0{idx + 1}
      </div>
      <div className="font-en font-medium tracking-tightest text-6xl lg:text-7xl text-ink tabular-nums leading-none">
        {formatted}
        <span className="text-accent/80">{stat.suffix}</span>
      </div>
      <div className="mt-6 flex items-baseline justify-between">
        <span className="text-[13px] font-en font-medium text-ink/85">
          {stat.label}
        </span>
        <span className="text-[11px] text-muted">{stat.kr}</span>
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40 section-divider"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Numbers — 03
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Three decades,{' '}
              <span className="text-muted">one discipline.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 lg:self-end">
            <p className="text-muted text-sm leading-relaxed">
              우리가 쌓아온 시간은 결국 작품의 결로 돌아갑니다. 숫자는 단지 결과의 한 면입니다.
            </p>
          </div>
        </div>

        {/* Editorial inline grid, no cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {STATS.map((stat, idx) => (
            <StatCell key={stat.label} stat={stat} idx={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
