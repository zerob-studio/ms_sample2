# Portfolio Images

이 폴더에 작품 이미지를 넣으면 `<Portfolio />` 섹션에서 자동으로 표시됩니다.

## 파일명 규칙

`components/Portfolio.tsx` 의 `WORKS` 배열에서 각 항목의 `slug` 값과 동일한 파일명을 사용하세요.

예시:

```
public/works/baldurs-gate-3.jpg
public/works/cyberpunk-2077.jpg
public/works/red-dead-2.jpg
public/works/witcher-3.jpg
public/works/league-of-legends.jpg
public/works/cod-mw.jpg
public/works/wuthering-waves.jpg
public/works/borderlands-4.jpg
public/works/lies-of-p.jpg
public/works/stellar-blade.jpg
public/works/wukong.jpg
public/works/pubg.jpg
```

## 권장 형식

- **포맷**: `.jpg` 우선, 없으면 `.webp` → `.png` 순서로 자동 시도
- **비율**: 가로형 4:5 ~ 3:4 (인물/캐릭터가 들어가는 키아트는 세로형 권장)
- **해상도**: 가로 최소 1200px, retina 고려해 2400px 권장
- **용량**: 1장당 200~400KB 이내 (TinyPNG/Squoosh 등으로 압축)
- **색감**: 너무 밝지 않게. 카드 하단에 텍스트가 오버레이되므로 하단 1/3은 어둡거나 단색 영역이 좋음

## 파일이 없을 때

해당 slug에 매칭되는 이미지 파일이 없으면 자동으로 SVG 패턴 커버(beams/orb/wave/grid/...)가 fallback으로 표시됩니다.
