import { CheckIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

const benefits = [
    '30+ 프레임워크별 레이아웃 템플릿 제공',
    '프롬프트-디자인 동기화 자동화',
    '다국어 대응을 위한 카피 구조 가이드',
];

export function CtaFeatureHighlights() {
    return (
        <div className="w-full max-w-xl rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg @[640px]:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                All-In-One Toolkit
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                SaaS 팀을 위한 레이아웃 운영 패키지
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground @[640px]:text-base">
                검증된 패턴과 카피 가이드, 코드 샘플까지 한 번에 제공해 빠르게 실험하고 학습할 수
                있습니다.
            </p>
            <ul className="mt-6 space-y-3">
                {benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                            <CheckIcon className="size-3.5" />
                        </span>
                        <span className="leading-6 text-muted-foreground">{benefit}</span>
                    </li>
                ))}
            </ul>
            <Button size="lg" className="mt-8 w-full">
                기능 살펴보기
            </Button>
        </div>
    );
}
