import { CheckIcon, MinusIcon, StarIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

const plans = [
    {
        name: 'Starter',
        price: 29,
        description: '작은 팀이 빠르게 실험을 시작할 때 적합합니다.',
        features: ['커스텀 섹션 5개', '주간 리포트', '라이브 공유 링크'],
        limited: ['SLA 지원', '자동 동기화 로그'],
        popular: false,
    },
    {
        name: 'Growth',
        price: 79,
        description: '다양한 캠페인을 병렬로 운영하는 팀을 위한 플랜입니다.',
        features: ['커스텀 섹션 20개', '자동 프롬프트 동기화', '분기별 전략 세션'],
        limited: ['전담 매니저'],
        popular: true,
    },
    {
        name: 'Scale',
        price: 149,
        description: '복잡한 워크플로우를 가진 엔터프라이즈를 지원합니다.',
        features: [
            '무제한 섹션 라이브러리',
            '목표 기반 대시보드',
            'SAML 기반 보안 + SOC2 리포트',
        ],
        limited: [],
        popular: false,
    },
];

export function PricingClassic() {
    return (
        <section className="space-y-10">
            <header className="mx-auto max-w-2xl text-center space-y-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                    월간 결제 기준
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    팀 규모에 맞는 요금제를 선택하세요
                </h2>
                <p className="text-sm leading-7 text-muted-foreground @[768px]:text-base">
                    모든 플랜은 7일 무료 체험을 제공합니다. 언제든 업그레이드하거나 취소할 수 있습니다.
                </p>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {plans.map(plan => (
                    <article
                        key={plan.name}
                        className={`relative flex h-full flex-col rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg transition hover:-translate-y-1 ${
                            plan.popular ? 'border-primary/50 shadow-primary/20 @[1024px]:scale-[1.02]' : ''
                        }`}
                    >
                        {plan.popular ? (
                            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                                <StarIcon className="mr-1 size-3.5" /> 가장 인기
                            </Badge>
                        ) : null}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-semibold tracking-tight">
                                    ${plan.price}
                                </span>
                                <span className="text-sm text-muted-foreground">/month</span>
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
                            {plan.limited.map(feature => (
                                <li key={feature} className="flex items-start gap-3 text-muted-foreground/70">
                                    <span className="mt-1 rounded-full bg-muted/30 p-1.5">
                                        <MinusIcon className="size-3.5" />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 w-full" variant={plan.popular ? 'default' : 'outline'}>
                            시작하기
                        </Button>
                    </article>
                ))}
            </div>
        </section>
    );
}
