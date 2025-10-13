const timeline = [
    {
        title: '아이디어 수집',
        description: '팀이 요청한 신규 섹션 요구 사항을 수집하고 우선순위를 정합니다.',
    },
    {
        title: '패턴 작성',
        description: '문서를 작성하고 프롬프트 동기화 스크립트를 실행해 구조를 맞춥니다.',
    },
    {
        title: '배포 및 학습',
        description: '캔버스에 배포한 뒤 지표를 추적하고 다음 반복을 위한 인사이트를 모읍니다.',
    },
];

export function HowTimeline() {
    return (
        <section className="relative flex gap-12">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-border/70 @[768px]:block" />
            <ol className="grid gap-12 @[768px]:pl-16">
                {timeline.map((item, index) => (
                    <li key={item.title} className="relative flex gap-6">
                        <div className="relative hidden @[768px]:block">
                            <span className="absolute left-[calc(-2.25rem)] top-0 flex size-12 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold text-primary">
                                {index + 1}
                            </span>
                        </div>
                        <div className="rounded-3xl border border-border/60 bg-background/95 p-6 shadow-md">
                            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
