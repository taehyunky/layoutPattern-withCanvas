const steps = [
    {
        number: '01',
        title: '문서 동기화',
        description:
            '패턴 문서를 작성하면 스크립트가 자동으로 프롬프트를 추출하여 라이브러리에 추가합니다.',
    },
    {
        number: '02',
        title: '캔버스 미리보기',
        description:
            '데스크톱과 모바일 뷰를 동시에 확인하며 간격이나 타이포그래피를 빠르게 조정합니다.',
    },
    {
        number: '03',
        title: '팀 공유',
        description:
            '프롬프트 보기 버튼으로 카피 팀과 정보를 공유하고, QA 체크리스트를 자동으로 확인합니다.',
    },
];

export function HowStepCards() {
    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {steps.map(step => (
                    <article
                        key={step.number}
                        className="relative flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 transition hover:-translate-y-1"
                    >
                        <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                            {step.number}
                        </span>
                        <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
