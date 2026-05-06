# MUSAI Studio — 시안 2: Modern Minimal

다크 네이비(#0d1117) + 일렉트릭 블루(#4f8ef7) + Inter / Noto Sans KR
클린하고 직관적인 모던 미니멀 컨셉입니다.

## 구성

- 히어로: 텍스트 중심 + 회전 키워드 애니메이션 (Games / Animation / Films / Brands / Stories)
- 숫자 통계: IntersectionObserver 기반 카운터 애니메이션 (0 → 30 / 20 / 200 / 2,000)
- 서비스 3개: 가로 카드 레이아웃 (Sound / L10N / Entertainment + 아이콘)
- 포트폴리오: CSS columns 마소나리 그리드 (8개 작품)
- 고객사: 양방향 마퀴 슬라이더 (정방향 + 역방향 2줄)
- 문의 폼: 예산 라디오 칩 포함

## 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속.

## 스택

- Next.js 14 (App Router)
- Tailwind CSS 3.4
- TypeScript
- next/font (Inter, Noto Sans KR)

## 주요 폴더

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  Hero.tsx
  Stats.tsx
  Services.tsx
  Portfolio.tsx
  Clients.tsx
  Contact.tsx
  Footer.tsx
```
