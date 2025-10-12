# 새 섹션 추가 가이드

섹션별 레이아웃 패턴을 캔버스에 배치하려면 아래 단계를 따릅니다.

## 1. 섹션 메타데이터 정의

- 위치: `app/routes/home.tsx`
- `sections` 배열에 새 객체 추가 (`id`, `label`, `icon`, `description`, `patterns`).

```ts
import { CreditCardIcon } from 'lucide-react';
import { PricingSimple, PricingFeatured } from '~/components/sections/pricing';

const sections = [
    // ...existing sections,
    {
        id: 'pricing',
        label: 'Pricing',
        icon: CreditCardIcon,
        description: 'Plan comparison layouts',
        patterns: [
            { id: 'pricing-simple', title: 'Simple Grid', component: PricingSimple },
            { id: 'pricing-featured', title: 'Featured Plan', component: PricingFeatured },
        ],
    },
];
```

## 2. 패턴 컴포넌트 작성

- 폴더: `app/components/sections/<section-name>/`
- 각 패턴은 TSX 컴포넌트로 작성하고, 필요한 shadcn UI 코드는 MCP에서 가져온 뒤 `app/components/ui/`에 저장.
- `index.ts`에서 명시적으로 export.

```ts
export { PricingSimple } from './pricing-simple';
export { PricingFeatured } from './pricing-featured';
```

## 3. 캔버스 반영 확인

- 사이드바에서 새 섹션이 보이고, 클릭 시 패턴 카드가 캔버스에 나타나는지 확인.
- 섹션별로 프레임 스타일이 더 필요하다면 `CanvasWorkspace`에서 섹션 ID에 따라 프레임 클래스를 분기하거나, 패턴 컴포넌트 자체에 라퍼를 추가.

## 4. 테스트 체크리스트

1. `npm run dev` 실행 후 새 섹션 메뉴가 노출되는지 확인.
2. 패턴 카드 렌더, 확대/축소, 이동이 정상인지 확인.
3. 뷰포트 탭과 연동해 반응형 레이아웃이 의도대로 보이는지 점검.
