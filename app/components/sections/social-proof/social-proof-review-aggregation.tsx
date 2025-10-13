import { StarIcon } from 'lucide-react';

const platforms = [
    {
        name: 'G2',
        score: '4.8 / 5.0',
        reviews: '327 reviews',
    },
    {
        name: 'Capterra',
        score: '4.7 / 5.0',
        reviews: '198 reviews',
    },
    {
        name: 'Trustpilot',
        score: '4.9 / 5.0',
        reviews: '154 reviews',
    },
];

export function SocialProofReviewAggregation() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <div className="flex flex-col gap-3 @[768px]:items-center @[768px]:text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Verified reviews
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    신뢰할 수 있는 리뷰 플랫폼에서 높은 평가를 받고 있습니다
                </h2>
            </div>
            <div className="grid gap-4 @[768px]:grid-cols-3">
                {platforms.map(platform => (
                    <article
                        key={platform.name}
                        className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6"
                    >
                        <header className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">{platform.name}</p>
                            <div className="flex items-center gap-1 text-primary">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <StarIcon key={`${platform.name}-star-${index}`} className="size-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-sm font-semibold text-foreground">{platform.score}</p>
                        </header>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                            {platform.reviews}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
