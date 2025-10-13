import { useState } from 'react';
import { ArrowRightIcon, HelpCircleIcon } from 'lucide-react';

const faqs = [
    {
        question: '캔버스를 외부 사이트에 임베드하려면?',
        answer:
            '공유 설정에서 임베드 코드를 생성하고, 필요한 경우 접근 제한 토큰을 함께 발급받을 수 있습니다.',
    },
    {
        question: '디자인 자산을 버전별로 비교할 수 있나요?',
        answer:
            '버전 비교 모드에서 변경된 요소만 하이라이트로 확인할 수 있으며, 이전 버전을 복원하는 것도 가능합니다.',
    },
    {
        question: '지원되는 브라우저 환경은 어떻게 되나요?',
        answer:
            '최신 크롬, 엣지, 사파리, 파이어폭스를 권장하며, 레거시 IE는 지원하지 않습니다.',
    },
];

export function FaqWithContactCta() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="space-y-12 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="grid gap-10 @[1024px]:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Self-service first
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        자주 묻는 질문을 먼저 확인해 보세요
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        그래도 해결되지 않는다면 바로 옆의 지원 옵션을 통해 연락하실 수 있습니다.
                    </p>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <article
                                    key={faq.question}
                                    className="rounded-2xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/40"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center gap-3 px-6 py-5 text-left"
                                    >
                                        <HelpCircleIcon className="size-5 text-primary" />
                                        <span className="flex-1 text-sm font-semibold text-foreground @[768px]:text-base">
                                            {faq.question}
                                        </span>
                                        <ArrowRightIcon
                                            className={`size-4 text-muted-foreground transition-transform ${
                                                isOpen ? 'rotate-90 text-primary' : ''
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="px-6 pb-6 text-sm text-muted-foreground">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
                <aside className="space-y-6 rounded-3xl border border-primary/40 bg-primary/5 p-8 text-primary/85 shadow-inner">
                    <div className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em]">Still stuck?</p>
                        <h3 className="text-2xl font-semibold text-primary">
                            지원 팀이 직접 도와드립니다
                        </h3>
                        <p className="text-sm text-primary/90">
                            라이브 채팅, 연락처 요청, 전담 매니저 연결 중 원하는 방식을 선택하세요.
                        </p>
                    </div>
                    <div className="space-y-3 text-sm">
                        <button
                            type="button"
                            className="w-full rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            Start live chat
                        </button>
                        <button
                            type="button"
                            className="w-full rounded-full border border-primary/50 px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            Talk to sales
                        </button>
                    </div>
                    <div className="rounded-2xl border border-primary/40 bg-primary/10 p-4 text-xs font-semibold uppercase tracking-[0.2em]">
                        평균 응답 시간 2시간 · SLA 보장
                    </div>
                </aside>
            </div>
        </section>
    );
}
