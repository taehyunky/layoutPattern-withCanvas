const metrics = [
    {
        label: 'Features shipped this quarter',
        value: '12',
        change: '+33%',
        description: 'vs previous quarter',
    },
    {
        label: 'Active beta participants',
        value: '480',
        change: '+120',
        description: 'New signups in the last 30 days',
    },
    {
        label: 'Release confidence score',
        value: '92%',
        change: '+4 pts',
        description: 'Calculated from QA and customer feedback',
    },
];

const progress = [
    { label: 'Shipped', percent: 68, color: 'bg-primary' },
    { label: 'In progress', percent: 22, color: 'bg-sky-500' },
    { label: 'Planning', percent: 10, color: 'bg-slate-400' },
];

export function RoadmapProgressDashboard() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 @[768px]:text-left text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Delivery metrics
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    개발 진행 상황을 데이터로 확인하세요
                </h2>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-4 @[768px]:grid-cols-3">
                    {metrics.map(metric => (
                        <article
                            key={metric.label}
                            className="space-y-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {metric.label}
                            </p>
                            <p className="text-4xl font-semibold tracking-tight text-foreground">
                                {metric.value}
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                                {metric.change}
                            </p>
                            <p className="text-sm text-muted-foreground">{metric.description}</p>
                        </article>
                    ))}
                </div>
                <div className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">Roadmap progress</h3>
                        <p className="text-sm text-muted-foreground">
                            단계별 비중과 이번 주 하이라이트를 모아봤어요.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {progress.map(item => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                                    <span>{item.label}</span>
                                    <span>{item.percent}%</span>
                                </div>
                                <div className="h-2 w-full rounded-full bg-border">
                                    <div
                                        className={`h-full rounded-full ${item.color}`}
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                        이번 주에는 3개의 주요 기능이 베타 단계에 진입했습니다.
                    </div>
                </div>
            </div>
        </section>
    );
}
