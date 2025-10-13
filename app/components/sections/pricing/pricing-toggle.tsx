import { useMemo, useState } from 'react';
import { CheckIcon, PercentIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

const basePlans = [
    {
        name: 'Starter',
        monthly: 39,
        annual: 32,
        features: ['캔버스 사용자 3명', '주간 리포트', '템플릿 10개'],
    },
    {
        name: 'Growth',
        monthly: 89,
        annual: 72,
        features: ['무제한 사용자', '실시간 협업', '전환 지표 추적'],
    },
    {
        name: 'Scale',
        monthly: 159,
        annual: 129,
        features: ['엔터프라이즈 보안', 'SLA 99.9%', '전담 성공 매니저'],
    },
];

export function PricingToggle() {
    const [annual, setAnnual] = useState(true);

    const plans = useMemo(
        () =>
            basePlans.map(plan => ({
                ...plan,
                price: annual ? plan.annual : plan.monthly,
                suffix: annual ? '/year' : '/month',
            })),
        [annual]
    );

    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-xl @[768px]:p-12">
            <header className="text-center space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    결제 주기에 따라 더 큰 혜택을 받아보세요
                </h2>
                <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base">
                    토글을 전환하면 가격이 즉시 반영됩니다. 모든 플랜은 14일 환불 보증을 제공합니다.
                </p>
            </header>
            <div className="flex flex-col items-center gap-4 @[640px]:flex-row @[640px]:justify-center">
                <Badge variant="outline" className="gap-2 border-primary/40 bg-primary/10 text-primary">
                    <PercentIcon className="size-4" /> 연간 결제 시 20% 할인
                </Badge>
                <div className="flex items-center gap-3 rounded-full border border-border/60 bg-muted/20 p-2">
                    <span
                        className={`text-sm font-medium ${annual ? 'text-muted-foreground/70' : 'text-foreground'}`}
                    >
                        월간
                    </span>
                    <button
                        type="button"
                        onClick={() => setAnnual(prev => !prev)}
                        aria-pressed={annual}
                        className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            annual ? 'bg-primary' : 'bg-muted-foreground/40'
                        }`}
                    >
                        <span
                            className={`inline-block size-8 transform rounded-full bg-background transition ${
                                annual ? 'translate-x-10' : 'translate-x-2'
                            }`}
                        />
                    </button>
                    <span
                        className={`text-sm font-medium ${annual ? 'text-foreground' : 'text-muted-foreground/70'}`}
                    >
                        연간
                    </span>
                </div>
            </div>

            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {plans.map(plan => (
                    <article
                        key={plan.name}
                        className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg transition hover:-translate-y-1"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold tracking-tight">
                                    ${plan.price}
                                </span>
                                <span className="text-sm text-muted-foreground">{plan.suffix}</span>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <span className="mt-1 rounded-full bg-primary/10 p-1.5 text-primary">
                                        <CheckIcon className="size-3.5" />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 w-full">무료 체험 시작</Button>
                    </article>
                ))}
            </div>
        </section>
    );
}
