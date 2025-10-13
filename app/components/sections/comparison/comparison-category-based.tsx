import { useState } from 'react';
import { ChevronDownIcon, StarIcon } from 'lucide-react';

type Category = {
    name: string;
    description: string;
    ratings: Array<{ product: string; score: number; note: string }>;
};

const categories: Category[] = [
    {
        name: 'Pricing',
        description: '월 이용료, 장기 계약 할인, 총소유비용을 비교했습니다.',
        ratings: [
            { product: 'Canvas', score: 4.8, note: '명확한 공개 요금제와 사용량 기반 할인' },
            { product: 'Competitor A', score: 3.6, note: '견적 기반, 계약 종료 시 위약금' },
            { product: 'Competitor B', score: 4.0, note: '저가이지만 기능 제한' },
        ],
    },
    {
        name: 'Features',
        description: '협업, 자동화, 분석 기능 범위를 평가했습니다.',
        ratings: [
            { product: 'Canvas', score: 4.9, note: 'AI 자동화와 실시간 협업' },
            { product: 'Competitor A', score: 3.8, note: '협업 제한, 자동화 없음' },
            { product: 'Competitor B', score: 3.5, note: '주요 기능 일부만 제공' },
        ],
    },
    {
        name: 'Support',
        description: '지원 시간, SLA, 성공 매니저 제공 여부를 비교했습니다.',
        ratings: [
            { product: 'Canvas', score: 4.7, note: '24/5 지원 + 전담 CSM' },
            { product: 'Competitor A', score: 3.0, note: '티켓 기반, 응답 지연' },
            { product: 'Competitor B', score: 3.4, note: '커뮤니티 포럼 중심 지원' },
        ],
    },
];

export function ComparisonCategoryBased() {
    const [openCategory, setOpenCategory] = useState(0);

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Category breakdown
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    카테고리별로 세분화된 비교 리포트
                </h2>
                <p className="text-sm text-muted-foreground">
                    각 항목을 펼쳐 세부 지표와 점수를 확인하세요.
                </p>
            </header>
            <div className="space-y-4">
                {categories.map((category, index) => {
                    const isOpen = openCategory === index;
                    return (
                        <article
                            key={category.name}
                            className="rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/40"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenCategory(isOpen ? -1 : index)}
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                        {category.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
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
                                    {category.ratings.map(rating => (
                                        <div
                                            key={rating.product}
                                            className="rounded-2xl border border-border/50 bg-background/90 p-5"
                                        >
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="text-base font-semibold text-foreground">
                                                    {rating.product}
                                                </h3>
                                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                                    <StarIcon className="size-4" />
                                                    {rating.score.toFixed(1)}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm text-muted-foreground">{rating.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="rounded-2xl border border-primary/40 bg-primary/10 px-6 py-4 text-sm font-semibold text-primary">
                Canvas가 모든 카테고리에서 평균 4.8점을 기록했습니다.
            </div>
        </section>
    );
}
