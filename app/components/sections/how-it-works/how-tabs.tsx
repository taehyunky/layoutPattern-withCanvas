import { useState } from 'react';

import { Button } from '~/components/ui/button';

const steps = [
    {
        value: 'discover',
        label: '요구 파악',
        title: '요구 사항 템플릿 작성',
        description:
            '섹션 가이드 템플릿을 복사해 제품, 메시지, KPI 정보를 수집합니다. 작성 즉시 팀과 공유됩니다.',
    },
    {
        value: 'design',
        label: '디자인',
        title: '캔버스에서 레이아웃 조합',
        description:
            '데스크톱과 모바일 뷰를 나란히 두고 카드 기반으로 섹션을 조합합니다. 프롬프트 버튼으로 카피 팀이 내용을 확인합니다.',
    },
    {
        value: 'launch',
        label: '출시',
        title: '전환 데이터 추적',
        description:
            '릴리스 후 자동으로 전환 데이터를 수집하여 보고서에 기록하고, 다음 반복을 위한 인사이트를 제공받습니다.',
    },
];

export function HowTabs() {
    const [active, setActive] = useState(steps[0]!.value);
    const current = steps.find(step => step.value === active) ?? steps[0]!;

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <div className="flex flex-wrap gap-2">
                {steps.map(step => (
                    <button
                        key={step.value}
                        type="button"
                        onClick={() => setActive(step.value)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            active === step.value
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted/30 text-muted-foreground'
                        }`}
                    >
                        {step.label}
                    </button>
                ))}
            </div>
            <div className="mt-8 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Step
                </span>
                <h3 className="text-3xl font-semibold tracking-tight text-foreground">{current.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base">
                    {current.description}
                </p>
                <Button variant="outline" className="mt-2">
                    상세 가이드 열기
                </Button>
            </div>
        </section>
    );
}
