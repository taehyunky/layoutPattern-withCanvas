import { useMemo, useState } from 'react';

const filters = ['모두', '협업', '분석', '자동화'] as const;

const cards = [
    {
        title: 'Figma ↔ Docs Sync',
        description: '디자인 파일과 문서 간 버전을 자동으로 비교합니다.',
        category: '협업',
    },
    {
        title: 'Conversion Insights',
        description: '각 섹션이 기여한 전환율을 자동 계산합니다.',
        category: '분석',
    },
    {
        title: 'Prompt Generator',
        description: '패턴을 바탕으로 AI 프롬프트를 생성합니다.',
        category: '자동화',
    },
    {
        title: 'Live Comment Mode',
        description: '팀원이 동시에 피드백을 남길 수 있는 실시간 댓글 모드입니다.',
        category: '협업',
    },
    {
        title: 'Heatmap Tracking',
        description: '섹션별 사용자 상호작용을 시각적으로 보여줍니다.',
        category: '분석',
    },
    {
        title: 'Release Scheduler',
        description: '릴리스 일정을 캘린더와 연동하고 자동 공지합니다.',
        category: '자동화',
    },
];

export function FeatureFilterMatrix() {
    const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('모두');

    const filteredCards = useMemo(() => {
        if (activeFilter === '모두') return cards;
        return cards.filter(card => card.category === activeFilter);
    }, [activeFilter]);

    return (
        <section className="space-y-6 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-lg @[768px]:p-10">
            <header className="flex flex-col gap-4 @[768px]:items-center @[768px]:justify-between @[1024px]:flex-row">
                <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Feature matrix
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        필요한 기능만 필터링해서 확인하세요
                    </h2>
                </div>
                <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                    카테고리를 선택하면 관련 기능만 강조되어 탐색 시간을 절약할 수 있습니다.
                </p>
            </header>
            <div className="flex gap-2 overflow-x-auto rounded-full border border-border/60 bg-muted/20 p-2">
                {filters.map(filter => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            activeFilter === filter
                                ? 'bg-background text-foreground shadow'
                                : 'text-muted-foreground'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Showing {filteredCards.length} of {cards.length} features
            </p>
            <div className="grid gap-4 @[640px]:grid-cols-2 @[1024px]:grid-cols-3">
                {filteredCards.map(card => (
                    <article
                        key={card.title}
                        className="h-full rounded-3xl border border-border/60 bg-background/90 p-6 shadow-md transition hover:-translate-y-1"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            {card.category}
                        </span>
                        <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
