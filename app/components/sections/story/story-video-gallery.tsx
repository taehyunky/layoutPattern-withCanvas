import { PlayIcon } from 'lucide-react';

const videos = [
    { title: 'Zendo가 금융 가입 플로우를 최적화한 방법', duration: '05:21' },
    { title: 'Everpeak의 세일즈 데크 자동화', duration: '04:02' },
    { title: 'Lightship의 글로벌 캠페인 구축 사례', duration: '06:18' },
];

export function StoryVideoGallery() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    영상으로 살펴보는 고객 사례
                </h2>
                <p className="text-sm text-muted-foreground">
                    실제 고객의 목소리와 제품 활용 방법을 영상으로 만나보세요.
                </p>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {videos.map(video => (
                    <article
                        key={video.title}
                        className="flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="relative aspect-video w-full bg-gradient-to-br from-primary/30 via-slate-900 to-secondary/30">
                            <button
                                type="button"
                                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl"
                                aria-label={`${video.title} 재생`}
                            >
                                <PlayIcon className="size-6" />
                            </button>
                            <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                                {video.duration}
                            </span>
                        </div>
                        <div className="px-6 py-5">
                            <p className="text-sm font-semibold text-foreground">{video.title}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
