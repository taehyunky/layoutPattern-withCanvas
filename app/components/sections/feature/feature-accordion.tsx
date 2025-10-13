import { useState } from 'react';

import { ChevronDownIcon } from 'lucide-react';

const items = [
    {
        title: '디자인 시스템 자동 동기화',
        description:
            '컴포넌트 변경 내역이 문서와 코드에 동시에 반영되어, 한쪽에서 업데이트를 놓쳐도 쉽게 발견할 수 있습니다.',
    },
    {
        title: '실험 결과 저장',
        description:
            '각 레이아웃 실험이 끝나면 변동된 지표와 주요 학습 내용을 패턴 카드에 기록해 재사용할 수 있습니다.',
    },
    {
        title: '워크플로우 체크리스트',
        description:
            '릴리스 전 확인해야 할 항목들을 자동으로 생성해, QA가 누락되거나 책임자가 불분명한 문제를 예방합니다.',
    },
];

export function FeatureAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="rounded-3xl border border-border/60 bg-background/95 p-6 shadow-lg @[768px]:p-10">
            <header className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Feature highlights
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    필요한 기능만 열어서 확인할 수 있어요
                </h2>
            </header>
            <div className="mt-8 divide-y divide-border/70 border-y border-border/70">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.title} className="py-5 @[768px]:py-6">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex w-full items-center justify-between gap-4 text-left"
                                aria-expanded={isOpen}
                            >
                                <span className="text-lg font-semibold text-foreground">
                                    {item.title}
                                </span>
                                <span
                                    className={`flex size-10 items-center justify-center rounded-full border border-border/60 transition-transform ${
                                        isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''
                                    }`}
                                >
                                    <ChevronDownIcon className="size-5" />
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    isOpen
                                        ? 'grid-rows-[1fr] opacity-100'
                                        : 'grid-rows-[0fr] opacity-0'
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="mt-4 text-sm leading-7 text-muted-foreground @[768px]:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
