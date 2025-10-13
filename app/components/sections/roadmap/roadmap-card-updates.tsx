import { ArrowUpRightIcon } from 'lucide-react';

const recentUpdates = [
    {
        title: 'Canvas Comments 2.0',
        description: 'Threaded conversations with AI summaries for quicker reviews.',
        badge: 'New',
        date: '3 days ago',
        image:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Workspace Insights',
        description: 'Dashboard showing engagement by team, device, and template.',
        badge: 'Updated',
        date: '1 week ago',
        image:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Template Marketplace',
        description: 'Discover curated layouts shared by the Canvas community.',
        badge: 'Beta',
        date: '2 weeks ago',
        image:
            'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=80',
    },
];

const badgeStyle: Record<string, string> = {
    New: 'bg-emerald-500/10 text-emerald-600 border-emerald-400/40',
    Updated: 'bg-primary/10 text-primary border-primary/40',
    Beta: 'bg-amber-500/10 text-amber-600 border-amber-400/40',
};

export function RoadmapCardUpdates() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Recently shipped
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        최근 출시된 기능을 카드로 요약했어요
                    </h2>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40">
                    View changelog <ArrowUpRightIcon className="size-4" />
                </button>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {recentUpdates.map(update => (
                    <article
                        key={update.title}
                        className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="space-y-4 p-6">
                            <div className="flex items-center justify-between gap-3">
                                <span
                                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${badgeStyle[update.badge]}`}
                                >
                                    {update.badge}
                                </span>
                                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                    {update.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{update.title}</h3>
                            <p className="text-sm text-muted-foreground">{update.description}</p>
                        </div>
                        <div className="relative">
                            <img
                                src={update.image}
                                alt={update.title}
                                className="h-40 w-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
