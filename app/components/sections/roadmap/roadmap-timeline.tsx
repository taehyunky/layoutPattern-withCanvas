const roadmapQuarters = [
    {
        quarter: 'Q1 · Shipped',
        items: [
            {
                title: 'Canvas Blocks 2.0',
                description: 'Reusable components with synced data sources across workspaces.',
                status: 'Shipped',
            },
            {
                title: 'AI Pattern Library',
                description: 'Auto-curated suggestions based on team usage insights.',
                status: 'Shipped',
            },
        ],
    },
    {
        quarter: 'Q2 · In Progress',
        items: [
            {
                title: 'Journey Analytics',
                description: 'Track conversion funnels and engagement across published canvases.',
                status: 'In Progress',
            },
            {
                title: 'Localized Templates',
                description: 'Fully translated starter kits for 6 languages.',
                status: 'In Progress',
            },
        ],
    },
    {
        quarter: 'Q3 · Planned',
        items: [
            {
                title: 'Workflow Automations',
                description: 'Trigger external tools when milestones are reached.',
                status: 'Planned',
            },
            {
                title: 'Design Token Sync',
                description: 'Bidirectional sync with your design system repository.',
                status: 'Planned',
            },
        ],
    },
];

const statusStyle: Record<string, string> = {
    Shipped: 'bg-emerald-500/10 text-emerald-600 border-emerald-400/40',
    'In Progress': 'bg-sky-500/10 text-sky-600 border-sky-400/40',
    Planned: 'bg-slate-500/10 text-slate-600 border-slate-400/40',
};

export function RoadmapTimeline() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 @[768px]:text-left text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Roadmap
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    분기별 로드맵을 한눈에 확인하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    각 분기는 출시 여부에 따라 색상으로 구분되어 있습니다.
                </p>
            </header>
            <div className="relative pl-8">
                <span className="absolute left-3 top-2 h-[calc(100%-16px)] w-px bg-border/60" />
                <div className="space-y-8">
                    {roadmapQuarters.map(quarter => (
                        <article key={quarter.quarter} className="relative pl-8">
                            <span className="absolute left-[-6px] top-1 flex size-6 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold uppercase text-primary">
                                ●
                            </span>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {quarter.quarter}
                            </h3>
                            <div className="mt-4 grid gap-4 @[768px]:grid-cols-2">
                                {quarter.items.map(item => (
                                    <div
                                        key={item.title}
                                        className="space-y-3 rounded-2xl border border-border/60 bg-background/90 p-5 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                                    >
                                        <div className="flex items-center justify-between gap-3">
                                            <h4 className="text-lg font-semibold text-foreground">
                                                {item.title}
                                            </h4>
                                            <span
                                                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusStyle[item.status]}`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
