import { CheckIcon, MinusIcon, XIcon } from 'lucide-react';

const categories = [
    {
        name: 'Collaboration',
        ours: { status: 'Real-time co-editing', detail: 'Unlimited collaborators with presence.' },
        competitor: { status: 'Async only', detail: 'Version locking required.' },
    },
    {
        name: 'Automation',
        ours: { status: 'AI-driven', detail: 'Pattern suggestions and workflow triggers.' },
        competitor: { status: 'Manual rules', detail: 'Basic conditional templates only.' },
    },
    {
        name: 'Analytics',
        ours: { status: '360 dashboard', detail: 'Attribution, engagement, and ROI tracked.' },
        competitor: { status: 'Limited metrics', detail: 'Basic exports once per week.' },
    },
    {
        name: 'Support',
        ours: { status: '24/5 + CSM', detail: 'Dedicated success manager for teams 20+.' },
        competitor: { status: 'Ticket-based', detail: 'Average response time 48 hours.' },
    },
];

export function ComparisonUsVsCompetitor() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Why teams choose us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    경쟁 솔루션과 주요 차별점을 비교했습니다
                </h2>
                <p className="text-sm text-muted-foreground">
                    좌측은 Canvas, 우측은 업계 주요 경쟁사 기준입니다.
                </p>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-2">
                <article className="space-y-6 rounded-3xl border border-primary/40 bg-primary/10 p-8 shadow-inner">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Canvas
                            </p>
                            <h3 className="text-2xl font-semibold text-primary">Purpose-built for scale</h3>
                        </div>
                        <span className="rounded-full border border-primary bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                            Recommended
                        </span>
                    </div>
                    <div className="space-y-5 text-sm text-primary/90">
                        {categories.map(category => (
                            <div key={category.name} className="rounded-2xl border border-primary/30 bg-background/70 p-5">
                                <div className="flex items-center gap-3 text-primary">
                                    <CheckIcon className="size-5" />
                                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                                        {category.name}
                                    </span>
                                </div>
                                <p className="mt-3 text-base font-semibold text-primary/90">
                                    {category.ours.status}
                                </p>
                                <p className="text-sm">{category.ours.detail}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="w-full rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Talk to sales
                    </button>
                </article>
                <article className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                Competitor
                            </p>
                            <h3 className="text-2xl font-semibold text-foreground">Legacy workflow tool</h3>
                        </div>
                        <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Limited
                        </span>
                    </div>
                    <div className="space-y-5 text-sm text-muted-foreground">
                        {categories.map(category => (
                            <div key={category.name} className="rounded-2xl border border-border/60 bg-background/95 p-5">
                                <div className="flex items-center gap-3">
                                    <XIcon className="size-5 text-red-500" />
                                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
                                        {category.name}
                                    </span>
                                </div>
                                <p className="mt-3 text-base font-semibold text-foreground">
                                    {category.competitor.status}
                                </p>
                                <p className="text-sm">{category.competitor.detail}</p>
                            </div>
                        ))}
                        <div className="rounded-2xl border border-dashed border-border/60 p-5 text-muted-foreground">
                            <div className="flex items-center gap-3">
                                <MinusIcon className="size-5" />
                                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                                    CTA
                                </span>
                            </div>
                            <p className="mt-3 text-sm">
                                제한된 기능과 지원으로 인해 맞춤형 협업이 어렵습니다.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
