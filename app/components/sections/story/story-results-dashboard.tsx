const metrics = [
    { label: '신규 가입 증가', value: '+48%', description: '신규 온보딩 플로우 최적화' },
    { label: '캠페인 속도', value: '2.6x', description: '레이아웃 재사용으로 준비 시간 단축' },
    { label: 'QA 라운드', value: '-38%', description: '팀 간 검토 과정 간소화' },
    { label: 'NPS 상승', value: '+17pt', description: '일관된 경험 제공' },
    { label: '팀 온보딩', value: '3일', description: '캔버스 가이드로 교육 시간 감소' },
    { label: '수익 기여', value: '$2.4M', description: '실험 성공 사례 누적' },
];

export function StoryResultsDashboard() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Impact metrics
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    수치로 증명된 결과
                </h2>
            </header>
            <div className="grid gap-4 @[768px]:grid-cols-3">
                {metrics.map(metric => (
                    <article
                        key={metric.label}
                        className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            {metric.label}
                        </p>
                        <p className="mt-3 text-3xl font-semibold text-primary">{metric.value}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{metric.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
