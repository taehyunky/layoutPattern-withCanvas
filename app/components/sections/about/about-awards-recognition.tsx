const awards = [
    {
        title: 'Forrester Wave™ Leader',
        year: '2024',
        organization: 'Forrester Research',
        description: 'Collaborative design platforms category',
    },
    {
        title: 'Red Dot Design Award',
        year: '2023',
        organization: 'Red Dot',
        description: 'Product experience & interaction design',
    },
    {
        title: 'Best SaaS for Design Teams',
        year: '2022',
        organization: 'SaaS Awards',
        description: 'Recognized for measurable ROI and adoption',
    },
    {
        title: 'Top 100 Remote Companies',
        year: '2024',
        organization: 'Remote.com',
        description: 'Building inclusive, distributed teams',
    },
    {
        title: 'G2 Leader',
        year: '2024',
        organization: 'G2 Crowd',
        description: 'Spring reports · Enterprise design collaboration',
    },
    {
        title: 'Best Workplace for Innovators',
        year: '2023',
        organization: 'Fast Company',
        description: 'Culture of experimentation and learning',
    },
];

export function AboutAwardsRecognition() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Awards & press
                </p>
                <div className="flex flex-col gap-2 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        업계와 미디어가 인정한 성과
                    </h2>
                    <p className="text-sm text-muted-foreground @[768px]:max-w-sm">
                        제품 혁신과 팀 문화를 기반으로 다양한 기관의 인증과 수상을 기록했습니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-4 @[640px]:grid-cols-2 @[1024px]:grid-cols-3">
                {awards.map(award => (
                    <article
                        key={`${award.title}-${award.year}`}
                        className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
                    >
                        <div className="space-y-3">
                            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/80">
                                {award.year}
                            </span>
                            <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                            <p className="text-sm font-medium text-muted-foreground">
                                {award.organization}
                            </p>
                            <p className="text-sm text-muted-foreground">{award.description}</p>
                        </div>
                        <button
                            type="button"
                            className="mt-6 inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            View announcement
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
