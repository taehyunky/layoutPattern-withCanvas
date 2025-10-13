import { PlayIcon } from 'lucide-react';

const videos = [
    {
        company: 'Atlas Labs',
        name: '강지훈 Director',
    },
    {
        company: 'Brightlane',
        name: '이세린 PM',
    },
    {
        company: 'Momentum',
        name: '오상혁 CMO',
    },
    {
        company: 'Focal',
        name: '유가을 Product Marketing',
    },
];

export function SocialProofVideoGrid() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Video testimonials
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    고객이 직접 들려주는 활용 사례
                </h2>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-2">
                {videos.map(video => (
                    <article
                        key={video.company}
                        className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/40 via-slate-900 to-secondary/40">
                            <button
                                type="button"
                                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl"
                                aria-label={`${video.company} 영상 재생`}
                            >
                                <PlayIcon className="size-6" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1 px-6 py-5 text-sm text-muted-foreground">
                            <p className="text-base font-semibold text-foreground">{video.company}</p>
                            <p>{video.name}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
