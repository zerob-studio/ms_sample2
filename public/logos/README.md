# Client Logos

이 폴더에 클라이언트 로고 파일을 넣으면 `<Clients />` 섹션에서 자동으로 표시됩니다.

## 파일명 규칙

`components/Clients.tsx` 의 `CLIENTS` 배열에서 각 항목의 `slug` 값과 동일한 파일명을 사용하세요.

예시:

```
public/logos/cdpr.svg
public/logos/larian.svg
public/logos/rockstar.svg
public/logos/riot.svg
public/logos/ea.svg
public/logos/sony.svg
public/logos/tencent.svg
public/logos/kuro.svg
public/logos/pearl-abyss.svg
public/logos/take-two.svg
public/logos/hypergryph.svg
public/logos/activision.svg
public/logos/sega.svg
public/logos/konami.svg
public/logos/bytedance.svg
public/logos/smilegate.svg
```

## 권장 형식

- **포맷**: SVG (벡터, 모노크롬 단일 색상 추천 — 다크 배경에서 선명하게)
- **색상**: `#e6edf3` 또는 `currentColor` 사용 → CSS로 색 제어
- **여백(padding)**: 로고 자체에 여백을 두지 말고, 컨테이너에서 처리
- **PNG 사용 시**: 투명 배경, 최소 2배 해상도(retina) 권장

## 파일이 없을 때

해당 slug에 매칭되는 이미지 파일이 없으면 자동으로 텍스트 워드마크가 fallback으로 표시됩니다.
