export function AboutVideoIntroduction() {
    return (
        <section className="grid gap-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Behind the scenes
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    영상으로 미리 만나는 Canvas 팀
                </h2>
                <p className="text-sm text-muted-foreground @[1024px]:text-base">
                    CEO 메시지, 제품 팀 인터뷰, 고객 성공 사례 등을 모은 3분 소개 영상입니다. 제품
                    로드맵과 일하는 방식이 어떻게 맞물려 있는지 확인해 보세요.
                </p>
                <ul className="space-y-2 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary/80">
                    <li>· 글로벌 팀 협업 워크플로우 시연</li>
                    <li>· 생성형 AI 패턴 추천 작동 방식</li>
                    <li>· 고객 성공팀과의 실제 인터뷰</li>
                </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-lg">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-black/80 shadow-inner">
                    <video
                        controls
                        poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                        className="aspect-video w-full object-cover"
                    >
                        <source
                            src="https://cdn.coverr.co/videos/coverr-young-business-people-1080p.mp4"
                            type="video/mp4"
                        />
                        <track
                            kind="captions"
                            srcLang="ko"
                            label="Korean captions"
                            src="https://cdn.coverr.co/subtitles/placeholder.vtt"
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        3:12 min
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <div className="space-y-1">
                        <p className="font-semibold text-foreground">자막 및 접근성 옵션</p>
                        <p className="text-muted-foreground">
                            한국어/영어 자막과 키보드 제어를 기본 지원합니다.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Learn more about us
                    </button>
                </div>
            </div>
        </section>
    );
}
