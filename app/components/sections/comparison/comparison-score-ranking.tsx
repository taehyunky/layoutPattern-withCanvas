const rankings = [
    {
        rank: 1,
        product: 'Canvas',
        score: 9.4,
        categories: [
            { name: 'Performance', value: 96 },
            { name: 'Features', value: 94 },
            { name: 'Value', value: 92 },
            { name: 'Support', value: 95 },
        ],
        badgeColor: 'bg-amber-500 text-amber-900',
    },
    {
        rank: 2,
        product: 'Competitor A',
        score: 8.1,
        categories: [
            { name: 'Performance', value: 84 },
            { name: 'Features', value: 78 },
            { name: 'Value', value: 82 },
            { name: 'Support', value: 76 },
        ],
        badgeColor: 'bg-slate-200 text-slate-700',
    },
    {
        rank: 3,
        product: 'Competitor B',
        score: 7.4,
        categories: [
            { name: 'Performance', value: 72 },
            { name: 'Features', value: 70 },
            { name: 'Value', value: 74 },
            { name: 'Support', value: 68 },
        ],
        badgeColor: 'bg-slate-300 text-slate-700',
    },
];

export function ComparisonScoreRanking() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Ranked results
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    종합 점수 기준으로 제품을 순위화했습니다
                </h2>
                <p className="text-sm text-muted-foreground">
                    각 제품의 세부 카테고리 점수도 함께 확인할 수 있습니다.
                </p>
            </header>
            <div className="space-y-6">
                {rankings.map(item => (
                    <article
                        key={item.product}
                        className={`grid gap-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm @[1024px]:grid-cols-[160px_1fr] ${
                            item.rank === 1 ? 'border-primary/60 bg-primary/5' : ''
                        }`}
                    >
                        <div className="flex flex-col items-start gap-4">
                            <span
                                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] ${item.badgeColor}`}
                            >
                                #{item.rank}
                            </span>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground">{item.product}</h3>
                                <p className="text-sm text-muted-foreground">Overall score · {item.score}</p>
                            </div>
                            <button
                                type="button"
                                className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                {item.rank === 1 ? 'Choose Canvas' : 'Compare details'}
                            </button>
                        </div>
                        <div className="space-y-4">
                            {item.categories.map(category => (
                                <div key={category.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                                        <span>{category.name}</span>
                                        <span>{category.value}%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-border">
                                        <div
                                            className="h-full rounded-full bg-primary transition-all"
                                            style={{ width: `${category.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
