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

  // Border logic: 2x2 on mobile / 1x4 on desktop
  // Top borders: idx 0,1 mobile / all on desktop
  // Left borders: idx 1,3 mobile / idx 1,2,3 desktop
  return (
    <div
      className={`relative px-5 sm:px-6 lg:px-8 py-10 lg:py-14 group
        border-t border-border
        ${idx % 2 === 1 ? 'border-l' : ''}
        ${idx >= 2 ? '' : ''}
        lg:border-t lg:border-border
        ${idx > 0 ? 'lg:border-l' : ''}
      `}
    >
      <div className="flex items-baseline justify-between mb-4 lg:mb-6">
        <span className="text-[10px] font-en text-subtle tracking-[0.22em]">
          0{idx + 1}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-subtle">
          {stat.kr}
        </span>
      </div>

      {/* The number — serif italic, very large */}
      <div className="font-serif-display italic text-ink leading-[0.85] tabular-nums tracking-tight text-[clamp(3.5rem,11vw,8.5rem)]">
        {formatted}
        <span className="text-accent/85 not-italic font-en font-light text-[0.5em] align-top ml-1">
          {stat.suffix}
        </span>
      </div>

      <div className="mt-5 lg:mt-7 flex items-baseline justify-between border-t border-border/60 pt-4">
        <span className="text-[13px] lg:text-sm font-en font-medium text-ink/85 tracking-tight">
          {stat.label}
        </span>
        <span
          className="h-1 w-1 rounded-full bg-accent/70 transition-all duration-500 group-hover:w-6 group-hover:bg-accent"
          aria-hidden
        />
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
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40 section-divider"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Numbers — 03
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Three decades,{' '}
              <span className="font-serif-display italic font-normal text-muted">
                one discipline.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-3 lg:self-end">
            <p className="text-muted text-sm leading-relaxed">
              우리가 쌓아온 시간은 결국 작품의 결로 돌아갑니다. 숫자는 단지 결과의 한 면입니다.
            </p>
          </div>
        </div>

        {/* 2x2 on mobile, single row on desktop — all 4 visible at once */}
        <div className="grid grid-cols-2 lg:grid-cols-4 -mx-px">
          {STATS.map((stat, idx) => (
            <StatCell key={stat.label} stat={stat} idx={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
