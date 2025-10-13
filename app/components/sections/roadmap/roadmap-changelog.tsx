const changelogEntries = [
    {
        month: 'May 2024',
        items: [
            {
                date: 'May 28',
                version: 'v3.14',
                type: 'Feature',
                title: 'Automated Slides',
                description: 'Generate multi-slide presentations based on selected canvases.',
            },
            {
                date: 'May 21',
                version: 'v3.13',
                type: 'Improvement',
                title: 'Faster canvas loading',
                description: 'Optimized asset streaming reduces initial load time by 34%.',
            },
        ],
    },
    {
        month: 'April 2024',
        items: [
            {
                date: 'Apr 12',
                version: 'v3.12',
                type: 'Bug fix',
                title: 'Resolved multi-account switcher issue',
                description: 'Fixed session edge cases that forced users to re-authenticate.',
            },
        ],
    },
];

const typeStyle: Record<string, string> = {
    Feature: 'text-primary',
    Improvement: 'text-emerald-600',
    'Bug fix': 'text-amber-600',
};

export function RoadmapChangelogList() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Changelog
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        버전별 업데이트 내역을 확인하세요
                    </h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40">
                    Subscribe to updates
                </button>
            </header>
            <div className="space-y-10">
                {changelogEntries.map(entry => (
                    <div key={entry.month} className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {entry.month}
                        </h3>
                        <div className="space-y-4">
                            {entry.items.map(item => (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                                >
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        <span>{item.date}</span>
                                        <span className="rounded-full border border-border/50 px-3 py-1">
                                            {item.version}
                                        </span>
                                        <span className={typeStyle[item.type] ?? 'text-muted-foreground'}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <h4 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h4>
                                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
