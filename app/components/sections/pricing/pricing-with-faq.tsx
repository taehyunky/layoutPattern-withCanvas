import { useState } from 'react';

import { ChevronDownIcon, CheckIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

const pricingCards = [
    {
        name: 'Starter',
        price: 39,
        description: '캠페인 테스트를 시작하는 팀에게 적합합니다.',
        features: ['템플릿 10개', '프로젝트 3개', '주간 리포트'],
    },
    {
        name: 'Growth',
        price: 99,
        description: '다양한 채널을 운영하며 데이터를 기반으로 실험합니다.',
        features: ['템플릿 무제한', '프로젝트 10개', '전환 지표 대시보드'],
    },
];

const faqs = [
    {
        question: '체험 후에도 자동으로 결제되나요?',
        answer: '체험이 종료되면 결제 정보가 등록된 경우에만 자동으로 연장됩니다. 사전에 취소하면 요금이 청구되지 않습니다.',
    },
    {
        question: '팀원 수에 따른 비용은 어떻게 계산되나요?',
        answer: '모든 플랜은 기본 5명의 팀원을 포함하며, 추가 인원은 월 $8에 이용할 수 있습니다.',
    },
    {
        question: '연간 결제 시 할인이 있나요?',
        answer: '네, 연간 결제 플랜은 2개월치가 무료로 제공되어 전체 금액의 약 17%를 절약할 수 있습니다.',
    },
    {
        question: '데이터는 어디에 저장되나요?',
        answer: 'AWS 서울 리전에 저장되며, SOC2 인증을 완료한 인프라를 사용하고 있습니다.',
    },
];

export function PricingWithFaq() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="space-y-12">
            <div className="grid gap-6 @[768px]:grid-cols-2">
                {pricingCards.map(card => (
                    <article
                        key={card.name}
                        className="flex h-full flex-col rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">{card.name}</h3>
                            <p className="text-sm text-muted-foreground">{card.description}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-semibold tracking-tight">${card.price}</span>
                                <span className="text-sm text-muted-foreground">/month</span>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                            {card.features.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <span className="mt-1 rounded-full bg-primary/10 p-1.5 text-primary">
                                        <CheckIcon className="size-3.5" />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Button className="mt-8 w-full">지금 시작하기</Button>
                    </article>
                ))}
            </div>

            <div className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">자주 묻는 질문</h3>
                <div className="mt-6 divide-y divide-border/70">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={faq.question} className="py-4">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-sm font-semibold text-foreground @[768px]:text-base">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex size-10 items-center justify-center rounded-full border border-border/60 transition-transform ${
                                            isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''
                                        }`}
                                    >
                                        <ChevronDownIcon className="size-5" />
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
