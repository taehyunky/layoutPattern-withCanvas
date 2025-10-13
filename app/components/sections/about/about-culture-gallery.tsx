const photos = [
    {
        src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
        label: 'Design sprint workshop',
    },
    {
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
        label: 'Engineering pairing session',
    },
    {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
        label: 'Customer discovery interview',
    },
    {
        src: 'https://images.unsplash.com/photo-1521737604893-ffb3f0401089?auto=format&fit=crop&w=800&q=80',
        label: 'Product roadmap kickoff',
    },
    {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        label: 'Culture day volunteer program',
    },
    {
        src: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80',
        label: 'Hybrid team meetup',
    },
];

export function AboutCultureGallery() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Culture moments
                </p>
                <div className="flex flex-col gap-2 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        현장의 순간으로 보는 팀 문화
                    </h2>
                    <p className="text-sm text-muted-foreground @[768px]:max-w-sm">
                        협업, 학습, 리더십 성장의 장면을 기록한 갤러리입니다. 모든 사진은 구성원이
                        직접 촬영했습니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-4 @[640px]:grid-cols-2 @[1024px]:grid-cols-3">
                {photos.map(photo => (
                    <figure
                        key={photo.label}
                        className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm"
                    >
                        <img
                            src={photo.src}
                            alt={photo.label}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/60 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur">
                            {photo.label}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
