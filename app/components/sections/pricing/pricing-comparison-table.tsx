import { Fragment } from 'react';

import { CheckIcon, MinusIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

type ComparisonRow = {
    feature: string;
    starter: boolean;
    growth: boolean;
    scale: boolean;
};

const featureGroups: { category: string; rows: ComparisonRow[] }[] = [
    {
        category: '핵심 기능',
        rows: [
            { feature: '실시간 캔버스 협업', starter: true, growth: true, scale: true },
            { feature: '패턴 라이브러리', starter: true, growth: true, scale: true },
            { feature: '템플릿 내보내기', starter: false, growth: true, scale: true },
        ],
    },
    {
        category: '자동화',
        rows: [
            { feature: '프롬프트 동기화', starter: false, growth: true, scale: true },
            { feature: '지표 알림', starter: false, growth: false, scale: true },
        ],
    },
    {
        category: '지원',
        rows: [
            { feature: '이메일 지원', starter: true, growth: true, scale: true },
            { feature: '전담 성공 매니저', starter: false, growth: false, scale: true },
        ],
    },
];

const plans: { key: Exclude<keyof ComparisonRow, 'feature'>; name: string; price: number }[] = [
    { key: 'starter', name: 'Starter', price: 39 },
    { key: 'growth', name: 'Growth', price: 89 },
    { key: 'scale', name: 'Scale', price: 159 },
];

export function PricingComparisonTable() {
    return (
        <section className="space-y-8">
            <header className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    플랜별 차이를 한눈에 비교하세요
                </h2>
                <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base">
                    필요한 기능만 골라볼 수 있도록 주요 항목을 정리했습니다. 모바일에서는 가로로
                    스크롤해 전체 항목을 확인하세요.
                </p>
            </header>

            <div className="overflow-hidden rounded-3xl border border-border/70">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse text-left text-sm text-muted-foreground">
                        <thead className="bg-muted/40 text-foreground">
                            <tr className="border-b border-border/70">
                                <th className="min-w-[200px] px-6 py-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                    Feature
                                </th>
                                {plans.map(plan => (
                                    <th key={plan.key} className="min-w-[180px] px-6 py-5 text-center">
                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold">{plan.name}</p>
                                            <p className="text-xl font-semibold text-foreground">
                                                ${plan.price}
                                            </p>
                                            <Button size="sm" className="w-full">
                                                선택
                                            </Button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featureGroups.map(group => (
                                <Fragment key={group.category}>
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="bg-muted/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                                        >
                                            {group.category}
                                        </td>
                                    </tr>
                                    {group.rows.map(row => (
                                        <tr
                                            key={`${group.category}-${row.feature}`}
                                            className="border-t border-border/60"
                                        >
                                            <td className="px-6 py-4 text-foreground">{row.feature}</td>
                                            {plans.map(plan => {
                                                const enabled = row[plan.key];
                                                return (
                                                    <td key={plan.key} className="px-6 py-4">
                                                        {enabled ? (
                                                            <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1.5 text-primary">
                                                                <CheckIcon className="size-4" />
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center justify-center rounded-full bg-muted/30 p-1.5 text-muted-foreground">
                                                                <MinusIcon className="size-4" />
                                                            </span>
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
