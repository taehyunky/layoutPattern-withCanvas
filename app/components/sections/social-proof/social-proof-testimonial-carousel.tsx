import { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';

const testimonials = [
    {
        quote:
            '캔버스에서 바로 프롬프트를 공유할 수 있어, 마케팅 팀이 요청한 섹션을 2배 빠르게 출시하고 있습니다.',
        name: '박민서',
        title: 'Head of Growth · Goodbits',
    },
    {
        quote:
            '데스크톱/모바일 레이아웃을 동시에 확인하면서 QA 라운드를 절반으로 줄였어요. 팀 전체가 같은 기준을 갖게 되었죠.',
        name: '이하연',
        title: 'Product Designer · Aurora Labs',
    },
    {
        quote:
            '문서와 코드가 자동으로 동기화되어, 릴리스 과정에서 생기던 의사소통 비용이 크게 감소했습니다.',
        name: '전도윤',
        title: 'Marketing Lead · Clarity',
    },
];

export function SocialProofTestimonialCarousel() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(current => (current === 0 ? testimonials.length - 1 : current - 1));
    };

    const handleNext = () => {
        setIndex(current => (current === testimonials.length - 1 ? 0 : current + 1));
    };

    const active = testimonials[index];

    return (
        <section className="flex flex-col items-center gap-8 rounded-3xl border border-border/70 bg-background/95 p-10 text-center shadow-xl @[768px]:p-14">
            <div className="relative max-w-2xl space-y-6">
                <QuoteIcon className="mx-auto size-10 text-primary/40" />
                <p className="text-xl font-medium leading-relaxed text-foreground @[768px]:text-2xl">
                    “{active.quote}”
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">{active.name}</p>
                    <p>{active.title}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    aria-label="이전 후기"
                >
                    <ChevronLeftIcon className="size-5" />
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    aria-label="다음 후기"
                >
                    <ChevronRightIcon className="size-5" />
                </button>
            </div>
            <div className="flex items-center gap-2">
                {testimonials.map((_, dotIndex) => (
                    <span
                        key={`dot-${dotIndex}`}
                        className={`h-2 w-2 rounded-full transition ${
                            dotIndex === index ? 'bg-primary' : 'bg-border'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
