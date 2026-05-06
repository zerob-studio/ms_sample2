import type { Metadata } from 'next';
import { Inter, Noto_Sans_KR, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

export const metadata: Metadata = {
  title: 'MUSAI Studio — Sound · Localization · Entertainment',
  description:
    '게임과 영상을 위한 사운드, 로컬라이제이션, 엔터테인먼트. 모던하고 직관적인 협업 파트너 — MUSAI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKr.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-bg text-ink">{children}</body>
    </html>
  );
}
