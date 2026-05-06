'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-28 lg:py-40 section-divider overflow-hidden"
    >
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(122,162,247,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-subtle mb-4">
              Get in touch — 07
            </div>
            <h2 className="font-en font-medium text-4xl lg:text-6xl tracking-tightest text-ink leading-[1.02]">
              Let's build
              <br />
              <span className="font-serif-display italic font-normal text-muted">
                something great.
              </span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md text-sm">
              한 줄이라도 좋습니다. 작품의 결, 일정과 규모를 알려주시면 24시간 이내 회신드립니다.
            </p>

            <div className="mt-12 space-y-0 text-sm">
              <a
                href="mailto:contact@musaistudio.com"
                className="group flex items-center justify-between py-5 border-t border-border hover:text-accent transition-colors"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-1.5">
                    General Email
                  </div>
                  <div className="font-en text-ink group-hover:text-accent transition-colors">
                    contact@musaistudio.com
                  </div>
                </div>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">
                  ↗
                </span>
              </a>
              <div className="py-5 border-t border-border">
                <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-1.5">
                  Seoul HQ
                </div>
                <div className="text-ink">
                  166 Donggwang-ro, Seocho, Seoul
                </div>
                <div className="font-en text-muted mt-1.5 text-xs tabular-nums">
                  +82 2 529 1488 (KR) · +82 10 3800 8638 (EN)
                </div>
              </div>
              <div className="py-5 border-t border-b border-border">
                <div className="text-[10px] uppercase tracking-[0.22em] text-subtle mb-1.5">
                  Berlin
                </div>
                <div className="text-ink">
                  Holsteinische Str. 1, 12163 Berlin
                </div>
              </div>
            </div>
          </div>

          {/* Right: form — clear field areas, soft surface */}
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="form-input"
                  />
                </Field>
                <Field label="Studio / Company">
                  <input
                    type="text"
                    placeholder="e.g. CD Projekt Red"
                    className="form-input"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>
                <Field label="Service" required>
                  <div className="relative">
                    <select
                      required
                      defaultValue=""
                      className="form-input appearance-none pr-9 cursor-pointer"
                    >
                      <option value="" disabled className="bg-bg">
                        Select a service
                      </option>
                      <option className="bg-bg">SOUND — Audio &amp; Voice</option>
                      <option className="bg-bg">L10N — Localization</option>
                      <option className="bg-bg">ECHO — Talent &amp; IP</option>
                      <option className="bg-bg">Multiple / Other</option>
                    </select>
                    <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted text-xs">
                      ▾
                    </span>
                  </div>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project Stage">
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Concept', 'Pre-production', 'Production', 'Post / LQA', 'Live ops'].map(
                      (b) => (
                        <label
                          key={b}
                          className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-border bg-bg/60 px-3.5 py-2 text-xs text-muted hover:border-ink/40 hover:text-ink has-[:checked]:bg-ink has-[:checked]:border-ink has-[:checked]:text-bg transition-colors"
                        >
                          <input type="radio" name="stage" className="sr-only" />
                          {b}
                        </label>
                      ),
                    )}
                  </div>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Project Brief" required>
                  <textarea
                    required
                    rows={5}
                    placeholder="장르, 일정, 규모, 톤앤매너 — 어떤 결의 작품인가요?"
                    className="form-input resize-none"
                  />
                </Field>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted flex items-center gap-2">
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="7" width="10" height="7" rx="1" />
                    <path d="M5 7V5a3 3 0 016 0v2" />
                  </svg>
                  Confidential by default. 제출 시 24시간 이내 회신.
                </p>
                <button
                  type="submit"
                  disabled={submitted}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-bg bg-ink hover:bg-ink/90 px-7 py-3 rounded-full transition-colors disabled:bg-surface disabled:text-muted disabled:cursor-not-allowed"
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
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.22em] text-subtle mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
