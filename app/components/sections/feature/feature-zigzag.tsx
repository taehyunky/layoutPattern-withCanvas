const items = [
    {
        label: 'Realtime canvas',
        title: '동시에 보면 더 빨라집니다',
        description:
            '데스크톱과 모바일 미리보기를 한 번에 확인하여 QA 라운드를 줄이고, 전환율에 영향을 미치는 요소를 빠르게 조정합니다.',
        palette: 'from-blue-500 via-sky-400 to-cyan-500',
    },
    {
        label: 'Prompt sync',
        title: '카피 팀과의 협업을 자동화',
        description:
            '문서에서 패턴을 선택하면 바로 프롬프트 미리보기를 열 수 있어, 카피 수정 과정을 반복하지 않아도 됩니다.',
        palette: 'from-purple-500 via-fuchsia-500 to-pink-500',
    },
    {
        label: 'Version control',
        title: '릴리스 이력까지 한 화면에서 관리',
        description:
            '각 패턴 버전에 대한 변경 이유와 비교 지표를 함께 보면서 제품 변경 기록을 팀 전체가 공유합니다.',
        palette: 'from-emerald-500 via-teal-500 to-blue-500',
    },
];

export function FeatureZigzag() {
    return (
        <section className="space-y-16">
            {items.map((item, index) => {
                const isEven = index % 2 === 1;
                return (
                    <article
                        key={item.title}
                        className="grid gap-8 @[1024px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] @[1024px]:items-center @[1024px]:gap-16"
                    >
                        <div
                            className={`relative overflow-hidden rounded-3xl border border-border/40 bg-muted/20 shadow-lg @[480px]:aspect-video ${
                                isEven ? '@[1024px]:order-2' : ''
                            }`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.palette} opacity-80`}
                            />
                            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                                        Canvas
                                    </span>
                                    <span className="text-xs text-white/70">Live Preview</span>
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                                        {item.label}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 @[1024px]:space-y-6">
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                {item.label}
                            </span>
                            <h3 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base @[768px]:leading-7">
                                {item.description}
                            </p>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                사용 방법 살펴보기
                            </button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
}
