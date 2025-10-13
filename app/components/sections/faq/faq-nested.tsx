import { useState } from 'react';
import { ChevronDownIcon, CornerDownRightIcon } from 'lucide-react';

type NestedFaq = {
    question: string;
    answer: string;
    subQuestions: Array<{
        question: string;
        answer: string;
    }>;
};

const nestedFaqs: NestedFaq[] = [
    {
        question: '엔터프라이즈 온보딩 절차는 어떻게 진행되나요?',
        answer:
            '준비 → 설정 → 교육 → 검증의 4단계로 진행하며, 각 단계마다 전담 CSM이 배정됩니다.',
        subQuestions: [
            {
                question: '준비 단계에서 필요한 자료는 무엇인가요?',
                answer: '현재 사용 중인 워크플로우, 사용자 리스트, 보안 정책 문서를 요청합니다.',
            },
            {
                question: '검증 단계는 어떻게 이루어지나요?',
                answer:
                    '파일럿 팀과 함께 2주간 실제 업무를 수행하며, 목표 지표 달성 여부를 기준으로 롤아웃을 결정합니다.',
            },
        ],
    },
    {
        question: '맞춤형 보안 정책은 어떻게 반영되나요?',
        answer: '정책 템플릿을 기반으로 필요 요소를 추가하여 SLA에 명시합니다.',
        subQuestions: [
            {
                question: '데이터 암호화 수준은 무엇인가요?',
                answer: '전 구간 TLS 1.3, 저장 시 AES-256을 사용합니다.',
            },
            {
                question: '감사 로그 접근 권한은 어떻게 부여되나요?',
                answer:
                    '보안 관리자 역할에만 허용되며, 접근 시 MFA 검증과 세션 타임아웃 정책이 적용됩니다.',
            },
            {
                question: '데이터 보존 기간을 변경할 수 있나요?',
                answer:
                    '엔터프라이즈 계약에서 30일~5년 범위 내에서 맞춤 설정이 가능하며, 계약서에 명시됩니다.',
            },
        ],
    },
];

export function FaqNested() {
    const [openParentIndex, setOpenParentIndex] = useState<number | null>(0);
    const [openChildMap, setOpenChildMap] = useState<Record<number, number | null>>({
        0: 0,
        1: null,
    });

    const toggleParent = (index: number) => {
        setOpenParentIndex(prev => (prev === index ? null : index));
        setOpenChildMap(prev => ({
            ...prev,
            [index]: prev[index] ?? 0,
        }));
    };

    const toggleChild = (parentIndex: number, childIndex: number) => {
        setOpenChildMap(prev => ({
            ...prev,
            [parentIndex]: prev[parentIndex] === childIndex ? null : childIndex,
        }));
    };

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Deep dive
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    단계별로 더 자세한 내용을 확인하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    상위 질문을 펼치면 하위 세부 질문도 계층적으로 확인할 수 있습니다.
                </p>
            </header>
            <div className="space-y-4">
                {nestedFaqs.map((faq, index) => {
                    const isParentOpen = openParentIndex === index;
                    const openChildIndex = openChildMap[index] ?? null;
                    return (
                        <article
                            key={faq.question}
                            className="rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/50"
                        >
                            <button
                                type="button"
                                onClick={() => toggleParent(index)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className="text-base font-semibold text-foreground">
                                    {faq.question}
                                </span>
                                <ChevronDownIcon
                                    className={`size-5 text-muted-foreground transition-transform ${
                                        isParentOpen ? 'rotate-180 text-primary' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isParentOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                            >
                                <div className="space-y-4 px-6 pb-6">
                                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                                    <div className="space-y-3 rounded-2xl border border-dashed border-border/60 bg-background/80 p-4">
                                        {faq.subQuestions.map((sub, childIndex) => {
                                            const isChildOpen = openChildIndex === childIndex;
                                            return (
                                                <div
                                                    key={sub.question}
                                                    className="rounded-xl border border-border/50 bg-background/90"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleChild(index, childIndex)}
                                                        className="flex w-full items-center gap-3 px-4 py-3 text-left"
                                                    >
                                                        <CornerDownRightIcon className="size-4 text-primary" />
                                                        <span className="flex-1 text-sm font-semibold text-foreground">
                                                            {sub.question}
                                                        </span>
                                                        <ChevronDownIcon
                                                            className={`size-4 text-muted-foreground transition-transform ${
                                                                isChildOpen ? 'rotate-180 text-primary' : ''
                                                            }`}
                                                        />
                                                    </button>
                                                    <div
                                                        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-in-out ${
                                                            isChildOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                                        }`}
                                                    >
                                                        <div className="px-4 pb-4 text-sm text-muted-foreground">
                                                            {sub.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
