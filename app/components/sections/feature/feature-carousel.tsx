import { useRef } from 'react';

import { ArrowLeftIcon, ArrowRightIcon, SparklesIcon } from 'lucide-react';

const cards = [
    {
        title: '라이브 편집 모드',
        description: '레이아웃을 수정하면 즉시 미리보기가 갱신되어 QA와 커뮤니케이션이 빠릅니다.',
    },
    {
        title: '콘텐츠 가이드',
        description: '프롬프트 템플릿이 포함되어 카피 팀이 별도 도구 없이 협업할 수 있습니다.',
    },
    {
        title: '버전 비교',
        description: '여러 버전을 좌우로 스와이프하며 성과 지표를 비교할 수 있습니다.',
    },
    {
        title: '팀 협업 로그',
        description: '누가 어떤 패턴을 사용했는지 기록하고, 공유 링크로 바로 이동합니다.',
    },
];

export function FeatureCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        const node = scrollRef.current;
        if (!node) return;
        node.scrollBy({ left: offset, behavior: 'smooth' });
    };

    return (
        <section className="rounded-3xl border border-border/60 bg-background/95 p-6 shadow-lg @[768px]:p-10">
            <header className="flex flex-col gap-4 @[768px]:flex-row @[768px]:items-center @[768px]:justify-between">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Product tour
                    </span>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                        좌우 스크롤로 핵심 기능을 살펴보세요
                    </h2>
                </div>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={() => scroll(-320)}
                        className="flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        aria-label="이전 기능"
                    >
                        <ArrowLeftIcon className="size-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll(320)}
                        className="flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        aria-label="다음 기능"
                    >
                        <ArrowRightIcon className="size-5" />
                    </button>
                </div>
            </header>
            <div className="relative mt-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background via-background/90 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background via-background/90 to-transparent" />
                <div
                    ref={scrollRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
                >
                    {cards.map(card => (
                        <article
                            key={card.title}
                            className="snap-start rounded-3xl border border-border/60 bg-background/95 p-6 shadow-md transition-transform hover:-translate-y-1 @[480px]:min-w-[280px] @[768px]:min-w-[320px]"
                        >
                            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <SparklesIcon className="size-5" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-foreground @[768px]:text-xl">
                                {card.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
