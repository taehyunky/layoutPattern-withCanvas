import type { LucideIcon } from 'lucide-react';
import { CogIcon, CreditCardIcon, ShieldCheckIcon } from 'lucide-react';

const iconFaqs: Array<{
    icon: LucideIcon;
    question: string;
    answer: string;
}> = [
    {
        icon: CreditCardIcon,
        question: '청구서를 여러 통화로 발행할 수 있나요?',
        answer:
            '관리 콘솔에서 기본 통화를 설정하면 고객 지역에 맞춰 USD, EUR, KRW 등으로 자동 변환됩니다.',
    },
    {
        icon: CogIcon,
        question: '워크플로우 단계별 자동 알림을 설정하고 싶어요.',
        answer:
            '각 단계마다 이메일, 슬랙, 푸시 알림을 선택할 수 있으며, 리마인더 주기도 커스터마이즈 가능합니다.',
    },
    {
        icon: ShieldCheckIcon,
        question: '감사 로그는 어디에서 확인할 수 있나요?',
        answer:
            '보안 대시보드에서 다운로드할 수 있고, API로도 90일간의 감사 로그를 가져올 수 있습니다.',
    },
];

export function FaqIconIndicators() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Scan by icon
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    아이콘으로 카테고리를 구분한 FAQ
                </h2>
                <p className="text-sm text-muted-foreground">
                    시각적으로 빠르게 구분할 수 있도록 각 질문에 아이콘을 배치했습니다.
                </p>
            </header>
            <div className="space-y-4">
                {iconFaqs.map(faq => (
                    <article
                        key={faq.question}
                        className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <faq.icon className="size-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                            <p className="text-sm text-muted-foreground @[768px]:text-base">
                                {faq.answer}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
