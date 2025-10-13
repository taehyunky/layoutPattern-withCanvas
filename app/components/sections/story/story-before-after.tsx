import { useState } from 'react';

const states = {
    before: {
        title: 'Before',
        description: '여러 팀이 각자 문서를 관리하며 중복 작업과 커뮤니케이션 지연이 발생했습니다.',
        metrics: ['릴리스 준비 18시간', 'QA 라운드 6회', '전환율 3.1%'],
    },
    after: {
        title: 'After',
        description: '캔버스 기반 프로세스로 정리하여 릴리스 시간을 크게 단축하고 전환율을 끌어올렸습니다.',
        metrics: ['릴리스 준비 6시간', 'QA 라운드 2회', '전환율 4.9%'],
    },
};

export function StoryBeforeAfter() {
    const [mode, setMode] = useState<'before' | 'after'>('after');
    const active = states[mode];
    const inactive = states[mode === 'after' ? 'before' : 'after'];

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="flex flex-col gap-4 @[768px]:items-center @[768px]:justify-between @[1024px]:flex-row">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    변화 전후를 명확히 비교하세요
                </h2>
                <div className="flex items-center gap-3 rounded-full border border-border/60 bg-muted/20 p-2">
                    <button
                        type="button"
                        onClick={() => setMode('before')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            mode === 'before' ? 'bg-background text-foreground shadow' : 'text-muted-foreground'
                        }`}
                    >
                        Before
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode('after')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            mode === 'after' ? 'bg-background text-foreground shadow' : 'text-muted-foreground'
                        }`}
                    >
                        After
                    </button>
                </div>
            </div>
            <div className="mt-8 grid gap-6 @[768px]:grid-cols-2">
                {[active, inactive].map((state, index) => (
                    <article
                        key={state.title}
                        className={`rounded-3xl border border-border/60 p-6 transition @[768px]:p-8 ${
                            index === 0 ? 'bg-primary/5' : 'bg-background/80'
                        }`}
                    >
                        <h3 className="text-lg font-semibold text-foreground">{state.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{state.description}</p>
                        <ul className="mt-4 space-y-3">
                            {state.metrics.map(metric => (
                                <li key={metric} className="rounded-2xl bg-background/80 px-4 py-3 text-sm text-foreground">
                                    {metric}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
