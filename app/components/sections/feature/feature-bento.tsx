import type { CSSProperties } from 'react';

const cards = [
    {
        id: 'playbook',
        area: 'main',
        title: '팀 전용 플레이북',
        description:
            '분야별 베스트 프랙티스를 미리 정의해 두고, 신규 멤버가 들어와도 같은 기준으로 작업이 가능합니다.',
        accent:
            'bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 text-foreground border-primary/30',
    },
    {
        id: 'automation',
        area: 'tall',
        title: '자동 추출 스크립트',
        description:
            'Markdown 문서를 읽어 패턴을 추출하고, 캔버스에 반영하는 작업을 자동화합니다.',
        accent: 'bg-slate-900 text-white border-slate-700',
    },
    {
        id: 'insights',
        area: 'wide',
        title: '릴리스 레포트',
        description:
            '각 패턴이 배포된 이후의 전환율과 클릭 데이터를 기록해, 어떤 실험이 성공했는지 바로 확인합니다.',
        accent: 'bg-primary/5 text-foreground border-primary/20',
    },
    {
        id: 'support',
        area: 'small-a',
        title: '24h SLA',
        description: '엔터프라이즈 고객을 위한 실시간 챗과 전담 매니저를 제공합니다.',
        accent: 'bg-background text-foreground border-border/60',
    },
    {
        id: 'library',
        area: 'small-b',
        title: '템플릿 라이브러리',
        description: '분기별로 업데이트되는 업계별 템플릿을 활용할 수 있습니다.',
        accent: 'bg-secondary/20 text-foreground border-secondary/40',
    },
];

const areaStyles: Record<string, string> = {
    main: 'main',
    tall: 'tall',
    wide: 'wide',
    'small-a': 'smallA',
    'small-b': 'smallB',
};

export function FeatureBento() {
    return (
        <section className="rounded-3xl border border-border/60 bg-background/95 p-6 shadow-lg @[768px]:p-10">
            <div
                className="grid gap-4 @[640px]:grid-cols-2 @[1024px]:grid-cols-4"
                style={
                    {
                        gridTemplateAreas: `
                            "main main wide wide"
                            "main main smallA smallB"
                            "tall tall smallA smallB"
                        `,
                    } as CSSProperties
                }
            >
                {cards.map(card => (
                    <article
                        key={card.id}
                        className={`flex h-full flex-col justify-between rounded-3xl border ${card.accent} p-6 @[768px]:p-8`}
                        style={
                            {
                                gridArea: areaStyles[card.area],
                            } as CSSProperties
                        }
                    >
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                Feature
                            </span>
                            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{card.title}</h3>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground/90">
                            {card.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
