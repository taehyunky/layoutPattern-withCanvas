import { PlayIcon } from 'lucide-react';

const chapters = [
    { title: '섹션 라이브러리 소개', time: '00:45' },
    { title: '프롬프트 동기화', time: '02:10' },
    { title: '캔버스 QA 워크플로우', time: '04:20' },
];

export function HowVideo() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-slate-900">
                <div className="aspect-video w-full bg-gradient-to-br from-primary/60 via-slate-800 to-slate-900" />
                <button
                    type="button"
                    className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl"
                >
                    <PlayIcon className="size-6" />
                </button>
            </div>
            <div className="flex gap-4 overflow-x-auto rounded-2xl border border-border/60 bg-muted/20 p-4">
                {chapters.map(chapter => (
                    <button
                        key={chapter.title}
                        type="button"
                        className="flex min-w-[180px] flex-col gap-1 rounded-xl bg-background px-4 py-3 text-left text-sm text-muted-foreground transition hover:bg-primary/5 hover:text-primary"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            {chapter.time}
                        </span>
                        {chapter.title}
                    </button>
                ))}
            </div>
        </section>
    );
}
