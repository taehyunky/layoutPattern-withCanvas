import { useState } from 'react';

import { Button } from '~/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

const tabItems = [
    {
        value: 'workflow',
        label: '워크플로우',
        eyebrow: 'Guided flow',
        title: '캔버스, 프롬프트, QA까지 한 번에',
        description:
            '탭을 이동할 때마다 해당 단계에서 필요한 도구와 예시를 바로 확인할 수 있습니다. 각 패턴에 연결된 프롬프트가 동기화되어 있어 브리핑 시간이 줄어듭니다.',
    },
    {
        value: 'collaboration',
        label: '협업',
        eyebrow: 'Shared context',
        title: '팀 전체가 동일한 기준을 바라봅니다',
        description:
            '문서, 레이아웃, 카피 작성자가 서로 다른 환경에서 일하지 않도록 통합된 워크스페이스를 제공합니다. 댓글과 히스토리가 저장되어 언제든 컨텍스트를 복구할 수 있습니다.',
    },
    {
        value: 'automation',
        label: '자동화',
        eyebrow: 'Ops automation',
        title: '반복되는 조합은 자동으로 생성',
        description:
            '스크립트가 문서를 읽어 패턴을 자동 추출하고, 레이아웃 라이브러리에 즉시 반영합니다. 수동 복사가 사라져 QA 오류가 크게 줄어듭니다.',
    },
];

export function FeatureTabs() {
    const [activeTab, setActiveTab] = useState(tabItems[0]!.value);

    return (
        <section className="rounded-3xl border border-border/60 bg-background/95 p-8 shadow-xl @[768px]:p-12">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="flex flex-col gap-8 @[768px]:gap-10"
            >
                <div className="flex flex-col gap-4 @[768px]:items-center">
                    <TabsList className="flex w-full justify-start gap-2 overflow-x-auto rounded-full bg-muted/40 p-2 @[768px]:justify-center">
                        {tabItems.map(tab => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="rounded-full border border-transparent px-5 py-2 text-sm font-medium data-[state=active]:border-primary/60 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                {tabItems.map(tab => (
                    <TabsContent key={tab.value} value={tab.value} className="mt-0">
                        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                {tab.eyebrow}
                            </span>
                            <h3 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                                {tab.title}
                            </h3>
                            <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base">
                                {tab.description}
                            </p>
                            <Button size="lg" variant="outline" className="mx-auto">
                                단계별 가이드 열기
                            </Button>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
