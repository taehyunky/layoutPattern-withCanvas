import { ArrowUpRightIcon } from 'lucide-react';

const customers = [
    {
        name: 'Nimbus',
        industry: 'SaaS',
        metrics: ['+41% 전환율', 'QA -35%'],
    },
    {
        name: 'Finease',
        industry: 'Finance',
        metrics: ['승인 속도 2.3x', '문서 오류 -52%'],
    },
    {
        name: 'Bluecart',
        industry: 'E-commerce',
        metrics: ['장바구니 회복 +29%', '캠페인 속도 1.8x'],
    },
    {
        name: 'Revera',
        industry: 'Healthcare',
        metrics: ['온보딩 5일 → 2일', '고객 만족 +17pt'],
    },
];

export function StoryComparisonGrid() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <header className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    다양한 산업의 고객이 얻은 결과
                </h2>
                <p className="text-sm text-muted-foreground">
                    공통된 워크플로우로 어떤 팀이든 빠르게 성과를 만들 수 있습니다.
                </p>
            </header>
            <div className="grid gap-4 @[768px]:grid-cols-4">
                {customers.map(customer => (
                    <article
                        key={customer.name}
                        className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6"
                    >
                        <div>
                            <p className="text-sm font-semibold text-foreground">{customer.name}</p>
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                {customer.industry}
                            </p>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {customer.metrics.map(metric => (
                                <li key={metric}>{metric}</li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            View story
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
