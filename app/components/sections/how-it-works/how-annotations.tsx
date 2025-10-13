const annotations = [
    { id: 1, title: '히어로 영역', description: '메인 헤드라인과 서브 카피를 테스트한 결과입니다.' },
    { id: 2, title: '소셜 프루프', description: '브랜드 로고와 후기를 추가해 신뢰도를 높였습니다.' },
    { id: 3, title: 'CTA 블록', description: '주요 CTA와 보조 CTA를 구분해 선택지를 제공합니다.' },
];

export function HowAnnotations() {
    return (
        <section className="grid gap-6 @[1024px]:grid-cols-[3fr_2fr]">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/40 shadow-xl">
                <div className="aspect-[4/3]" />
                {annotations.map(annotation => (
                    <span
                        key={annotation.id}
                        className="absolute flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                        style={{
                            top: `${20 + annotation.id * 18}%`,
                            left: annotation.id % 2 === 0 ? '70%' : '25%',
                        }}
                    >
                        {annotation.id}
                    </span>
                ))}
            </div>
            <ol className="space-y-4 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
                {annotations.map(annotation => (
                    <li key={annotation.id} className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            #{annotation.id}
                        </p>
                        <h3 className="text-lg font-semibold text-foreground">{annotation.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{annotation.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
