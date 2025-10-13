const stats = [
    {
        label: '글로벌 고객사',
        value: '2800+',
        helper: '스타트업부터 엔터프라이즈까지',
    },
    {
        label: '월간 활성 사용자',
        value: '320K',
        helper: '120개국에서 접속',
    },
    {
        label: '평균 온보딩 기간',
        value: '48h',
        helper: '전담 성공 매니저 배정',
    },
    {
        label: '디자인 자산 재사용률',
        value: '86%',
        helper: 'AI 추천 기반',
    },
];

export function AboutStatsHighlight() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-gradient-to-br from-background/95 via-background/90 to-primary/10 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Verified impact
                </p>
                <div className="flex flex-col gap-2 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        수치로 확인하는 성장 지표
                    </h2>
                    <p className="text-sm text-muted-foreground @[768px]:max-w-sm">
                        제품 사용 데이터와 고객 성공 팀이 함께 수집한 핵심 성과 지표입니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-6 @[640px]:grid-cols-2 @[1024px]:grid-cols-4">
                {stats.map(stat => (
                    <article
                        key={stat.label}
                        className="flex flex-col items-center rounded-3xl border border-border/60 bg-background/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg @[768px]:items-start @[768px]:text-left"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {stat.label}
                        </p>
                        <p className="mt-4 text-5xl font-semibold tracking-tight text-foreground @[1024px]:text-6xl">
                            {stat.value}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground">{stat.helper}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
