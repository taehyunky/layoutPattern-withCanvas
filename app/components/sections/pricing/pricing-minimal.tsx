import { ArrowRightIcon, CheckIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

const benefits = [
    '핵심 기능 무제한 사용',
    '프로젝트 3개 동시 운영',
    '브랜드 가이드 템플릿 포함',
    '월 1회 전략 세션 제공',
];

export function PricingMinimal() {
    return (
        <section className="mx-auto max-w-2xl rounded-3xl border border-border/70 bg-background/95 p-10 text-center shadow-xl @[768px]:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                추천 플랜
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">$99 / month</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                프로덕트 마케팅 팀이 필요한 모든 기능을 담았습니다. 결제는 언제든 변경하거나 취소할
                수 있어요.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-3 text-left">
                        <span className="mt-1 rounded-full bg-primary/10 p-1.5 text-primary">
                            <CheckIcon className="size-3.5" />
                        </span>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
            <Button size="lg" className="mt-8 w-full">
                바로 구독하기
            </Button>
            <button
                type="button"
                className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
                모든 플랜 보기
                <ArrowRightIcon className="size-4" />
            </button>
        </section>
    );
}
