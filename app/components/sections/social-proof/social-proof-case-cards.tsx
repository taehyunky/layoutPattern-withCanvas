import { ArrowUpRightIcon } from 'lucide-react';

const cases = [
    {
        company: 'Aster',
        metric: '3.2x',
        metricLabel: '신규 리드 증가',
        description: '디자인-마케팅 워크플로우를 통합해 캠페인 속도를 높였습니다.',
    },
    {
        company: 'Mirage',
        metric: '54%',
        metricLabel: '전환율 상승',
        description: '패턴 라이브러리를 활용해 랜딩페이지 실험을 자동화했습니다.',
    },
    {
        company: 'Polaris',
        metric: '12h → 3h',
        metricLabel: '런칭 준비 시간 단축',
        description: '캔버스 QA 도구로 릴리스 검토 과정을 간소화했습니다.',
    },
];

export function SocialProofCaseCards() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    고객 사례를 통해 검증된 성과
                </h2>
                <p className="text-sm text-muted-foreground">
                    다양한 산업군에서 실험과 출시 주기를 가속화하고 있습니다.
                </p>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {cases.map(caseStudy => (
                    <article
                        key={caseStudy.company}
                        className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <header className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">{caseStudy.company}</p>
                            <div className="space-y-1">
                                <p className="text-4xl font-semibold text-primary">{caseStudy.metric}</p>
                                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                    {caseStudy.metricLabel}
                                </p>
                            </div>
                        </header>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            {caseStudy.description}
                        </p>
                        <button
                            type="button"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            사례 읽기
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
