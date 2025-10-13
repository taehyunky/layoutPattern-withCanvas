import { useState } from 'react';

import { BrainIcon, ClipboardCheckIcon, RouteIcon } from 'lucide-react';

const features = [
    {
        value: 'brief',
        icon: ClipboardCheckIcon,
        title: '브리프 체크리스트',
        description:
            '신규 섹션을 만들 때 반드시 확인해야 하는 항목을 자동으로 생성하여 누락을 방지합니다.',
        details:
            '목표, 핵심 메시지, CTA 등 8가지 항목을 빠르게 체크해 필요한 정보만 정리할 수 있습니다.',
    },
    {
        value: 'workflow',
        icon: RouteIcon,
        title: '워크플로우 경로',
        description:
            '캔버스에 진입하면 QA, 카피, 디자인까지 연결되는 워크플로우를 단계별로 안내합니다.',
        details:
            '각 단계에서 필요한 문서와 담당자를 자동으로 연결해 다음 작업자로 자연스럽게 이어집니다.',
    },
    {
        value: 'ai-review',
        icon: BrainIcon,
        title: 'AI 리뷰 요약',
        description:
            '릴리스 전 AI가 섹션 구조를 점검하고 개선점을 제안합니다.',
        details:
            '문장 길이, CTA 위치, 이미지 대비 등 20가지 기준으로 검토한 결과를 한 번에 확인할 수 있습니다.',
    },
];

export function HowIconGrid() {
    const [active, setActive] = useState(features[0]!.value);

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-6 shadow-lg @[1024px]:p-10">
            <div className="grid gap-4 @[768px]:grid-cols-3">
                {features.map(feature => {
                    const Icon = feature.icon;
                    const isActive = active === feature.value;
                    return (
                        <button
                            key={feature.value}
                            type="button"
                            onClick={() => setActive(feature.value)}
                            className={`flex h-full flex-col rounded-3xl border border-border/60 bg-background/80 p-6 text-left transition hover:border-primary/40 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                                isActive ? 'border-primary/50 bg-primary/10' : ''
                            }`}
                        >
                            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Icon className="size-5" />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {feature.description}
                            </p>
                            {isActive ? (
                                <p className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm leading-6 text-primary">
                                    {feature.details}
                                </p>
                            ) : null}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
