import { ArrowUpRightIcon } from 'lucide-react';

const stories = [
    {
        company: 'Northwind',
        headline: '온보딩 이메일 제작 시간 60% 단축',
        metric: '300% ROI',
    },
    {
        company: 'Helix',
        headline: '제품 출시 속도 2.1배 향상',
        metric: '42% 더 빠른 반복',
    },
    {
        company: 'Aurora',
        headline: '세일즈 데크 제작 자동화',
        metric: '75% 시간 절감',
    },
];

export function StoryFeaturedGrid() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Customer success
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    성과로 입증된 케이스 스터디
                </h2>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {stories.map(story => (
                    <article
                        key={story.company}
                        className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">{story.company}</p>
                            <h3 className="text-xl font-semibold text-foreground">{story.headline}</h3>
                        </div>
                        <p className="mt-4 text-sm font-medium text-primary">{story.metric}</p>
                        <button
                            type="button"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            Read story
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
