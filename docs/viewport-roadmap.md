# Viewport Tabs Roadmap

캔버스 상단 탭(Desktop/Tablet/Mobile)을 실제 동작하도록 확장할 때 참고용 로드맵입니다.

## 1. 상태 관리 추가

- `home.tsx`에 `const [activeViewport, setActiveViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')` 선언.
- `Tabs` 컴포넌트에 `value={activeViewport}`와 `onValueChange={setActiveViewport}` 전달.
- `TabsTrigger`는 value 속성만 설정하면 됨.

## 2. 캔버스 스케일 제어

- `CanvasWorkspace`에 `initialScale`, `minScale`, `maxScale`를 prop으로 넘길 수 있도록 확장.
- 예시:

```ts
const viewportScale = {
  desktop: { initial: 0.8, min: 0.3, max: 2 },
  tablet: { initial: 0.6, min: 0.3, max: 1.6 },
  mobile: { initial: 0.45, min: 0.3, max: 1.2 },
};

const scale = viewportScale[activeViewport];

<CanvasWorkspace
  initialScale={scale.initial}
  minScale={scale.min}
  maxScale={scale.max}
  onReset={() => setActiveViewport('desktop')}
>
  ...
</CanvasWorkspace>
```

- 줌 컨트롤과 상태를 묶고 싶다면 `CanvasWorkspace`에서 `onZoomChange` 콜백을 받고, 상위에서 현재 배율을 표시.

## 3. 레이아웃/스타일 조정

- 모바일 탭 선택 시 프레임 컨테이너 폭을 `min-w-[360px]` 정도로 축소.
- 섹션 패턴 컴포넌트에 `viewport` prop을 전달해 텍스트 크기, 버튼 배치, 그리드 열 수 등을 조건부로 변경.
- Tailwind 반응형 클래스를 적극 활용 (`sm`, `md`, `lg`).

## 4. 추가 UX 아이디어

- 현재 배율을 상단에 표시: 예) `Desktop · 80%`.
- 탭 상태를 URL 쿼리 파라미터(`?viewport=tablet`) 또는 `useSearchParams`로 동기화해 공유 가능한 상태 만들기.
- 뷰포트 전환 시 자동으로 캔버스 중심 포커싱(패턴들 가운데 정렬).
