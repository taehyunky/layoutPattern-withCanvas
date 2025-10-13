import { PlayIcon } from 'lucide-react';

const highlights = [
    {
        title: 'AI powered storyboards',
        description: 'Auto-generate customer journey slides from existing case studies.',
    },
    {
        title: 'Collaboration timeline',
        description: 'Rewind how feedback evolved and who approved each milestone.',
    },
    {
        title: 'Localized templates',
        description: 'Launch assets faster with ready-to-use regional variants.',
    },
];

export function RoadmapVideoAnnouncement() {
    return (
        <section className="grid gap-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Release spotlight
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    새로운 기능을 영상으로 먼저 만나보세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    3분 데모 영상으로 이번 분기 주요 업데이트를 빠르게 확인할 수 있습니다.
                </p>
                <ul className="space-y-3 rounded-2xl border border-border/60 bg-background/90 p-6">
                    {highlights.map(item => (
                        <li key={item.title} className="space-y-1">
                            <p className="text-sm font-semibold text-foreground">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40">
                    Watch full demo
                </button>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-black/80 shadow-lg">
                <video
                    controls
                    poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
                    className="aspect-video w-full object-cover"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-the-working-mind-1080p.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                        <PlayIcon className="size-6" />
                    </span>
                </div>
            </div>
        </section>
    );
}
