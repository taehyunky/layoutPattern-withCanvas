const milestones = [
    {
        year: '2016',
        headline: '첫 번째 프로토타입 출시',
        description: '디자인 자동화 엔진 베타를 20명의 초기 고객에게 공개했습니다.',
    },
    {
        year: '2018',
        headline: '시리즈 A 투자 유치',
        description: '글로벌 협업 기능을 확장하며 북미 본사를 설립했습니다.',
    },
    {
        year: '2020',
        headline: '하이브리드 워크 플랫폼 전환',
        description: '원격 협업을 위한 실시간 캔버스 기능을 도입했습니다.',
    },
    {
        year: '2022',
        headline: 'APAC 리서치 허브 설립',
        description: '서울과 싱가포르에 엔지니어링 및 리서치 팀을 확장했습니다.',
    },
    {
        year: '2024',
        headline: 'AI 플레이북 자동화 발표',
        description: '생성형 AI 기반의 패턴 추천 시스템을 공식적으로 론칭했습니다.',
    },
];

export function AboutFounderTimeline() {
    return (
        <section className="grid gap-12 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1.1fr_1fr]">
            <article className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Founder story
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    “직관적인 디자인 협업을 모든 팀에 제공하자”는 약속으로 시작했습니다
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground @[1024px]:text-base">
                    공동 창업자인 Mina와 Theo는 복잡한 협업 도구로 인해 창작자의 흐름이 끊기는
                    문제를 해결하고자 했습니다. 2016년 첫 베타를 출시한 이후 고객과 직접 인터뷰하며
                    제품을 다듬었고, 오늘날 120개 이상의 국가에서 매일 30만 명 이상이 플랫폼을
                    사용합니다. 우리는 여전히 “사람 중심의 기술”이라는 원칙을 지키며,
                    데이터로 검증된 경험을 설계합니다.
                </p>
                <div className="space-y-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-primary/90">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em]">Why we build</p>
                    <p className="text-sm leading-relaxed @[1024px]:text-base">
                        창작자 모두가 아이디어를 시각화하고 팀과 빠르게 검증할 수 있도록 돕는 것이 우리의
                        존재 이유입니다. 자동화 기술은 빛이 아니라 촉진자라고 믿습니다.
                    </p>
                </div>
            </article>
            <ol className="relative space-y-10 border-l border-border/60 pl-10">
                <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-border/60 to-transparent" />
                {milestones.map(milestone => (
                    <li key={milestone.year} className="relative">
                        <span className="absolute -left-[38px] flex size-7 items-center justify-center rounded-full border border-primary/50 bg-background font-semibold text-xs uppercase tracking-widest text-primary">
                            {milestone.year.slice(-2)}
                        </span>
                        <div className="space-y-2 rounded-2xl border border-border/60 bg-background/90 p-5 shadow-sm transition hover:border-primary/50 hover:shadow-lg">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                                {milestone.year}
                            </p>
                            <h3 className="text-lg font-semibold text-foreground">{milestone.headline}</h3>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
