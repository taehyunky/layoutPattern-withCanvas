const kanbanColumns = [
    {
        title: 'Planned',
        highlight: 'Discovery in progress',
        cards: [
            { title: 'Advanced permissions', priority: 'High' },
            { title: 'Custom AI models', priority: 'Medium' },
        ],
    },
    {
        title: 'In Progress',
        highlight: 'Shipping soon',
        cards: [
            { title: 'Analytics alerts', priority: 'High' },
            { title: 'Template marketplace', priority: 'Medium' },
        ],
    },
    {
        title: 'Testing',
        highlight: 'Beta access available',
        cards: [{ title: 'Workflow automations', priority: 'High' }],
    },
    {
        title: 'Shipped',
        highlight: 'Live for all teams',
        cards: [
            { title: 'Canvas comments 2.0', priority: 'Shipped' },
            { title: 'Figma sync enhancements', priority: 'Shipped' },
        ],
    },
];

const priorityStyle: Record<string, string> = {
    High: 'border-rose-400/40 bg-rose-500/10 text-rose-600',
    Medium: 'border-amber-400/40 bg-amber-500/10 text-amber-600',
    Shipped: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-600',
};

export function RoadmapKanban() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Visual roadmap
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    단계별 진행 상황을 칸반 형태로 정리했습니다
                </h2>
            </header>
            <div className="overflow-x-auto pb-4">
                <div className="flex min-w-[960px] gap-4">
                    {kanbanColumns.map(column => (
                        <div
                            key={column.title}
                            className="flex min-w-[220px] flex-1 flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-4 shadow-sm"
                        >
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    {column.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">{column.highlight}</p>
                            </div>
                            <div className="space-y-3">
                                {column.cards.map(card => (
                                    <article
                                        key={card.title}
                                        className="space-y-3 rounded-2xl border border-border/50 bg-background p-4 shadow-sm"
                                    >
                                        <h4 className="text-sm font-semibold text-foreground">{card.title}</h4>
                                        <span
                                            className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${priorityStyle[card.priority] ?? 'border-border/60 text-muted-foreground'}`}
                                        >
                                            {card.priority}
                                        </span>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
