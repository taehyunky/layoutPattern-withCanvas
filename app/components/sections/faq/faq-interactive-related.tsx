import { useMemo, useRef, useState } from 'react';
import { ChevronDownIcon, CornerDownRightIcon } from 'lucide-react';

type RelatedFaq = {
    id: string;
    question: string;
    answer: string;
    related: string[];
};

const faqData: RelatedFaq[] = [
    {
        id: 'templates',
        question: '팀별 템플릿을 어떻게 공유하나요?',
        answer:
            '워크스페이스 템플릿 라이브러리에 업로드하면 권한이 있는 모든 사용자가 즉시 사용할 수 있습니다. 업데이트 시 변경 사항 알림을 자동 발송합니다.',
        related: ['automation', 'localization'],
    },
    {
        id: 'automation',
        question: '자동화 플로우는 몇 단계까지 구성할 수 있나요?',
        answer:
            '최대 20개의 연속된 액션을 구성할 수 있으며, 조건부 분기와 지연 설정을 지원합니다.',
        related: ['governance', 'templates'],
    },
    {
        id: 'localization',
        question: '다국어 콘텐츠는 어떻게 관리되나요?',
        answer:
            '언어별 변형을 한 번에 관리할 수 있는 번역 패널이 제공되며, 번역 메모리와 외부 LSP 연동을 지원합니다.',
        related: ['templates'],
    },
    {
        id: 'governance',
        question: '콘텐츠 검수 프로세스는 어떻게 적용되나요?',
        answer:
            '승인 단계, 만료일, 자동 알림을 설정할 수 있으며, 거절 시 피드백 기록이 자동으로 생성됩니다.',
        related: ['automation'],
    },
];

export function FaqInteractiveRelated() {
    const [openId, setOpenId] = useState<string | null>(faqData[0].id);
    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const faqMap = useMemo(
        () =>
            faqData.reduce<Record<string, RelatedFaq>>((acc, faq) => {
                acc[faq.id] = faq;
                return acc;
            }, {}),
        []
    );

    const handleRelatedClick = (id: string) => {
        setOpenId(id);
        if (typeof window !== 'undefined') {
            requestAnimationFrame(() => {
                const target = itemRefs.current[id];
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    };

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Explore related
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    관련 질문을 따라가며 자연스럽게 탐색하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    각 답변 하단에서 연관된 질문으로 이동할 수 있습니다.
                </p>
            </header>
            <div className="space-y-3">
                {faqData.map(faq => {
                    const isOpen = openId === faq.id;
                    return (
                        <article
                            key={faq.id}
                            ref={element => {
                                itemRefs.current[faq.id] = element;
                            }}
                            className="rounded-2xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/40"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenId(isOpen ? null : faq.id)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className="text-sm font-semibold text-foreground @[768px]:text-base">
                                    {faq.question}
                                </span>
                                <ChevronDownIcon
                                    className={`size-5 text-muted-foreground transition-transform ${
                                        isOpen ? 'rotate-180 text-primary' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                            >
                                <div className="space-y-4 px-6 pb-6">
                                    <p className="text-sm text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                    {faq.related.length > 0 && (
                                        <div className="space-y-2 border-t border-border/60 pt-4">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                                Related questions
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {faq.related.map(relatedId => (
                                                    <button
                                                        key={relatedId}
                                                        type="button"
                                                        onClick={() => handleRelatedClick(relatedId)}
                                                        className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                                                    >
                                                        <CornerDownRightIcon className="size-4" />
                                                        {faqMap[relatedId]?.question ?? relatedId}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
