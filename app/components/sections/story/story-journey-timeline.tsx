const milestones = [
    {
        title: 'Onboarding',
        description: '워크숍을 통해 기존 자료를 정리하고 캔버스 워크플로우를 도입했습니다.',
        metric: '2주 → 5일',
    },
    {
        title: 'Implementation',
        description: '디자인·콘텐츠 팀이 공통 템플릿을 사용해 릴리스 프로세스를 통합했습니다.',
        metric: '릴리스 오류 -37%',
    },
    {
        title: 'Early Wins',
        description: '초기 실험에서 온보딩 완료율이 빠르게 개선되었습니다.',
        metric: '+24% 전환',
    },
    {
        title: 'Full Results',
        description: '팀 전반에서 레이아웃 재사용이 표준화되어 반복 속도가 두 배 이상 향상되었습니다.',
        metric: '반복 속도 2.1x',
    },
];

export function StoryJourneyTimeline() {
    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <ol className="relative border-l border-border/70 pl-8">
                {milestones.map(milestone => (
                    <li key={milestone.title} className="mb-10 last:mb-0">
                        <span className="absolute -left-[11px] flex size-6 items-center justify-center rounded-full border-2 border-primary bg-background" />
                        <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {milestone.description}
                        </p>
                        <p className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                            {milestone.metric}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
