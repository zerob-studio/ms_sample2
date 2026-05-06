'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-border overflow-hidden">
      {/* Bottom glow */}
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(79,142,247,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              Get in touch
            </span>
            <h2 className="mt-3 font-en font-semibold text-4xl lg:text-5xl tracking-[-0.03em] text-ink leading-[1.05]">
              Let's build<br />
              <span className="gradient-text">something great</span>.
            </h2>
            <p className="mt-5 text-muted leading-relaxed max-w-md">
              한 줄이라도 좋습니다. 프로젝트의 결과 톤, 일정과 규모를 알려주시면 24시간 내 회신드립니다.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <a href="mailto:hello@musai.studio" className="flex items-center justify-between rounded-lg border border-border bg-surface/60 px-5 py-4 hover:border-accent/40 hover:bg-surface transition-colors">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </div>
                  <div className="font-en text-ink mt-0.5">hello@musai.studio</div>
                </div>
                <span className="text-accent">↗</span>
              </a>
              <div className="rounded-lg border border-border bg-surface/60 px-5 py-4">
                <div className="text-xs uppercase tracking-wider text-muted">
                  Studio
                </div>
                <div className="text-ink mt-0.5">
                  서울특별시 강남구 도산대로 327, 5F
                </div>
              </div>
              <div className="rounded-lg border border-border bg-surface/60 px-5 py-4">
                <div className="text-xs uppercase tracking-wider text-muted">
                  Phone
                </div>
                <div className="font-en text-ink mt-0.5">+82 (0)2 1234 5678</div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-7 lg:p-9"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </Field>
              </div>

              <Field label="Project Type" required>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-bg border border-border rounded-md px-4 py-2.5 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                >
                  <option value="" disabled>
                    프로젝트 유형 선택
                  </option>
                  <option>Sound Design / Music</option>
                  <option>Localization / Dubbing</option>
                  <option>Entertainment / IP</option>
                  <option>Other</option>
                </select>
              </Field>

              <Field label="Budget Range">
                <div className="flex flex-wrap gap-2">
                  {['~ ₩50M', '₩50M – 200M', '₩200M – 1B', '1B+', '미정'].map((b) => (
                    <label
                      key={b}
                      className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs text-muted hover:border-accent/50 hover:text-ink has-[:checked]:bg-accent/15 has-[:checked]:border-accent has-[:checked]:text-ink transition-colors"
                    >
                      <input type="radio" name="budget" className="sr-only" />
                      {b}
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Project Brief" required>
                <textarea
                  required
                  rows={5}
                  placeholder="프로젝트에 대해 알려주세요. 일정, 규모, 톤앤매너, 어떤 결을 그리시나요?"
                  className="w-full bg-bg border border-border rounded-md px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </Field>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted">
                  제출 시 24시간 이내 회신을 약속드립니다.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-bg bg-accent hover:bg-accent-hover px-6 py-2.5 rounded-md transition-colors disabled:bg-accent-soft disabled:text-muted disabled:cursor-not-allowed"
                >
                  {submitted ? 'Sent · Thank you' : 'Send Inquiry'}
                  <span aria-hidden className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block mb-5 last:mb-0">
      <span className="block text-xs uppercase tracking-wider text-muted mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
