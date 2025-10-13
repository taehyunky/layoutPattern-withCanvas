const plans = [
    { name: 'Starter', price: '$29', recommended: false },
    { name: 'Growth', price: '$79', recommended: true },
    { name: 'Enterprise', price: 'Talk to us', recommended: false },
];

const features = [
    { label: 'Unlimited canvases', availability: [true, true, true] },
    { label: 'AI pattern suggestions', availability: [false, true, true] },
    { label: 'Advanced permissions', availability: [false, false, true] },
    { label: 'Analytics dashboard', availability: [true, true, true] },
    { label: 'Dedicated success manager', availability: [false, false, true] },
];

export function ComparisonClassicMatrix() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Feature matrix
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    플랜별 제공 기능을 한눈에 비교하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    추천 플랜은 강조 표시되어 있습니다. 모바일에서는 가로 스크롤로 확인하세요.
                </p>
            </header>
            <div className="overflow-x-auto rounded-3xl border border-border/60">
                <table className="min-w-[720px] w-full border-collapse">
                    <thead>
                        <tr className="bg-muted/60 text-left text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            <th className="sticky left-0 bg-muted/60 px-6 py-4 text-foreground">Features</th>
                            {plans.map(plan => (
                                <th
                                    key={plan.name}
                                    className={`px-6 py-4 text-center ${
                                        plan.recommended ? 'bg-primary/10 text-primary' : ''
                                    }`}
                                >
                                    <div className="space-y-1">
                                        <span className="block text-sm font-semibold text-foreground">
                                            {plan.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{plan.price}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map(feature => (
                            <tr key={feature.label} className="border-t border-border/40">
                                <th className="sticky left-0 bg-background/95 px-6 py-4 text-left text-sm font-medium text-foreground">
                                    {feature.label}
                                </th>
                                {feature.availability.map((available, index) => (
                                    <td
                                        key={`${feature.label}-${plans[index].name}`}
                                        className={`px-6 py-4 text-center text-sm ${
                                            plans[index].recommended ? 'bg-primary/5' : ''
                                        }`}
                                    >
                                        {available ? (
                                            <span className="inline-flex items-center justify-center rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                                                Included
                                            </span>
                                        ) : (
                                            <span className="text-muted-foreground">—</span>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/90 px-6 py-4 text-sm">
                <div className="space-y-1">
                    <p className="font-semibold text-foreground">추천 플랜: Growth</p>
                    <p className="text-muted-foreground">협업과 자동화 기능을 모두 포함합니다.</p>
                </div>
                <button
                    type="button"
                    className="rounded-full border border-primary bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    Start Growth trial
                </button>
            </div>
        </section>
    );
}
