'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 30, suffix: '+', label: 'Years', kr: '경력' },
  { value: 20, suffix: '+', label: 'Studios', kr: '글로벌 거점' },
  { value: 200, suffix: '+', label: 'Clients', kr: '파트너사' },
  { value: 2000, suffix: '+', label: 'Projects', kr: '완료 프로젝트' },
];

function useCountUp(target: number, isVisible: boolean, durationMs = 1800) {
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

function StatCard({ stat, idx, visible }: { stat: (typeof STATS)[number]; idx: number; visible: boolean }) {
  const count = useCountUp(stat.value, visible);
  const formatted = count >= 1000 ? count.toLocaleString() : String(count);
  return (
    <div
      className="group relative rounded-xl border border-border bg-surface/60 backdrop-blur p-7 hover:border-accent/40 hover:bg-surface transition-all duration-500"
      style={{ transitionDelay: `${idx * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-muted font-en">0{idx + 1}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
      </div>
      <div className="font-en font-semibold tracking-tight text-5xl lg:text-6xl text-ink tabular-nums">
        {formatted}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-sm font-en font-medium text-ink/80">{stat.label}</span>
        <span className="text-xs text-muted">{stat.kr}</span>
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
    <section ref={sectionRef} id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Numbers
          </span>
          <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink">
            Three decades, one <span className="gradient-text">discipline</span>.
          </h2>
          <p className="mt-4 text-muted">
            우리가 쌓아온 시간은 결국 작품의 결로 돌아갑니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} idx={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
