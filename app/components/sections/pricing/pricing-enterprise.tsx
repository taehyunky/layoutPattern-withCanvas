import type { FormEvent } from 'react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

const standardPlans = [
    {
        name: 'Starter',
        price: 49,
        description: '소규모 팀을 위한 필수 기능',
        features: ['프로젝트 3개', '템플릿 10개', '주간 리포트'],
    },
    {
        name: 'Growth',
        price: 119,
        description: '멀티 채널 운영을 위한 확장 기능',
        features: ['프로젝트 무제한', '실시간 협업', '목표 기반 대시보드'],
    },
];

export function PricingEnterprise() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="grid gap-6 @[1024px]:grid-cols-[2fr_3fr]">
            <div className="space-y-6">
                {standardPlans.map(plan => (
                    <article
                        key={plan.name}
                        className="flex h-full flex-col rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">{plan.description}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold tracking-tight">${plan.price}</span>
                                <span className="text-sm text-muted-foreground">/month</span>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 w-full">플랜 선택</Button>
                    </article>
                ))}
            </div>
            <aside className="flex h-full flex-col justify-between rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-8 shadow-xl @[768px]:p-10">
                <div className="space-y-4">
                    <Badge className="bg-primary text-primary-foreground">Enterprise</Badge>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                        엔터프라이즈 전용 상담을 예약하세요
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                        전담 지원, 보안 검토, SLA까지 포함된 맞춤 견적이 필요하신가요? 아래 양식을 제출해
                        주시면 24시간 내 연락드립니다.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 @[640px]:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="enterprise-name" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                이름
                            </label>
                            <input
                                id="enterprise-name"
                                type="text"
                                required
                                className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="enterprise-email" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                                이메일
                            </label>
                            <input
                                id="enterprise-email"
                                type="email"
                                required
                                className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="enterprise-company" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            회사명
                        </label>
                        <input
                            id="enterprise-company"
                            type="text"
                            required
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="enterprise-notes" className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            필요 사항
                        </label>
                        <textarea
                            id="enterprise-notes"
                            rows={4}
                            className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                            placeholder="필요 기능, 예상 사용자 수 등을 알려주세요."
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        상담 요청하기
                    </Button>
                    <p className="text-xs text-muted-foreground">
                        양식을 제출하면 개인정보 처리방침에 동의한 것으로 간주됩니다.
                    </p>
                </form>
            </aside>
        </section>
    );
}
