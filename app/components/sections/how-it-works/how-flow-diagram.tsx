const flow = [
    { id: 'A', title: '문서 작성', description: '패턴 문서를 작성하고 저장합니다.' },
    { id: 'B', title: '프롬프트 추출', description: '스크립트가 프롬프트와 메타데이터를 추출합니다.' },
    { id: 'C', title: '캔버스 배치', description: '섹션을 캔버스에 배치하여 비주얼을 확인합니다.' },
    { id: 'D', title: '전환 측정', description: '실험 결과를 기록하고 다음 반복을 준비합니다.' },
];

export function HowFlowDiagram() {
    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <div className="grid gap-6 @[1024px]:grid-cols-4">
                {flow.map((step, index) => (
                    <article
                        key={step.id}
                        className="relative flex flex-col rounded-2xl border border-border/60 bg-background/90 p-6"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            Step {index + 1}
                        </span>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
                        {index < flow.length - 1 ? (
                            <span className="absolute right-[-18px] top-1/2 hidden h-px w-9 bg-border/70 @[1024px]:block" />
                        ) : null}
                    </article>
                ))}
            </div>
        </section>
    );
}
