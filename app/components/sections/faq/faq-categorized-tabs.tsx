import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

const categorizedFaqs = {
    billing: [
        {
            question: '청구 주기는 어떻게 되나요?',
            answer:
                '월간 또는 연간 결제를 선택할 수 있으며, 연간 결제 시 15% 할인 혜택이 적용됩니다.',
        },
        {
            question: '사용량 기반 부가 비용이 있나요?',
            answer:
                '비디오 렌더링과 같은 고용량 리소스는 월간 크레딧 내에서 제공되며, 초과분은 알림 후 청구됩니다.',
        },
    ],
    technical: [
        {
            question: 'SSO 연동은 어떤 프로토콜을 지원하나요?',
            answer:
                'SAML 2.0과 OAuth 2.0을 공식 지원하며, 엔터프라이즈 플랜에서는 SCIM 프로비저닝도 가능합니다.',
        },
        {
            question: 'API 제한은 어떻게 관리되나요?',
            answer:
                '분당/일별 호출 제한을 제공하며, 엔터프라이즈 플랜은 필요에 따라 상향 조정할 수 있습니다.',
        },
    ],
    account: [
        {
            question: '팀 멤버 역할은 어떤 종류가 있나요?',
            answer:
                '관리자, 편집자, 리뷰어, 게스트 네 가지 역할이 있으며, 권한을 세부적으로 조정할 수 있습니다.',
        },
        {
            question: '계정 삭제 후 데이터는 얼마나 보관되나요?',
            answer:
                '법적 요구 사항에 따라 30일간 암호화된 상태로 보관 후 완전히 삭제됩니다.',
        },
    ],
} as const;

type CategoryKey = keyof typeof categorizedFaqs;

export function FaqCategorizedTabs() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('billing');
    const [openQuestion, setOpenQuestion] = useState<string | null>(
        categorizedFaqs[activeCategory][0].question
    );

    const handleTabChange = (value: string) => {
        const key = value as CategoryKey;
        setActiveCategory(key);
        setOpenQuestion(categorizedFaqs[key][0]?.question ?? null);
    };

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Browse by topic
                </p>
                <div className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        주제별 FAQ를 선택해 더 빠르게 답을 찾으세요
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        청구, 기술, 계정 관리 세 가지 카테고리로 구성되어 있습니다.
                    </p>
                </div>
            </header>
            <Tabs
                defaultValue="billing"
                value={activeCategory}
                onValueChange={handleTabChange}
                className="space-y-6"
            >
                <TabsList className="w-full justify-start overflow-x-auto rounded-2xl border border-border/60 bg-background/80 p-1">
                    {(Object.keys(categorizedFaqs) as CategoryKey[]).map(category => (
                        <TabsTrigger
                            key={category}
                            value={category}
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {(Object.entries(categorizedFaqs) as Array<[CategoryKey, typeof categorizedFaqs[CategoryKey]]>).map(
                    ([category, faqs]) => (
                        <TabsContent key={category} value={category} className="space-y-3">
                            {faqs.map(faq => {
                                const isOpen = openQuestion === faq.question;
                                return (
                                    <article
                                        key={faq.question}
                                        className="rounded-2xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/50"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenQuestion(isOpen ? null : faq.question)
                                            }
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
                        </TabsContent>
                    )
                )}
            </Tabs>
        </section>
    );
}
