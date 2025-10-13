import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

const faqs = [
    {
        question: '플랫폼 온보딩에는 얼마나 걸리나요?',
        answer:
            '표준 온보딩은 7일 이하로 완료됩니다. 스타터 키트, 템플릿 라이브러리, 교육 세션을 순차적으로 제공하며, 엔터프라이즈는 전담 컨설턴트가 배정됩니다.',
    },
    {
        question: '보안 인증은 어떤 것들을 지원하나요?',
        answer:
            'SOC 2 Type II, ISO 27001을 포함해 주요 인증을 충족합니다. 또한 SSO, SCIM, 감사 로그 기능을 제공합니다.',
    },
    {
        question: '팀당 좌석 수를 유연하게 조정할 수 있나요?',
        answer:
            '관리자는 좌석을 실시간으로 추가하거나 회수할 수 있으며, 월별 청구 시 사용량 기반으로 계산됩니다.',
    },
    {
        question: '디자인 시스템을 가져오려면 어떻게 해야 하나요?',
        answer:
            'Figma, Sketch, Storybook 파일을 업로드하면 자동 변환 도구가 구성 요소를 캔버스 패턴으로 매핑합니다.',
    },
];

export function FaqClassicAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Frequently asked
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    고객이 가장 자주 묻는 질문을 정리했어요
                </h2>
                <p className="text-sm text-muted-foreground">
                    아래 질문을 클릭하면 답변이 펼쳐집니다. 필요 시 담당자가 후속 안내를 드립니다.
                </p>
            </header>
            <div className="space-y-3">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <article
                            key={faq.question}
                            className="rounded-2xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/50"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
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
                                <div className="px-6 pb-6 text-sm text-muted-foreground @[768px]:text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
