import { QuoteIcon } from 'lucide-react';

export function SocialProofFeaturedQuote() {
    return (
        <section className="grid gap-8 rounded-3xl border border-border/70 bg-gradient-to-br from-primary/5 via-background to-secondary/20 p-10 shadow-xl @[1024px]:grid-cols-[3fr_2fr] @[1024px]:items-center">
            <div className="space-y-6">
                <QuoteIcon className="size-10 text-primary" />
                <p className="text-3xl font-semibold leading-snug text-foreground @[768px]:text-4xl">
                    “워터폴로 진행되던 캠페인이 이제는 동일한 캔버스와 프롬프트를 기준으로 움직입니다.
                    반복되는 커뮤니케이션 비용이 절반 이하로 줄었습니다.”
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">송다연</p>
                    <p>VP of Marketing · Nova CRM</p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    사례 더 보기
                </button>
            </div>
            <div className="relative mx-auto flex size-64 items-center justify-center overflow-hidden rounded-3xl border border-border/40 bg-background/80 @[768px]:size-80">
                <span className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                <span className="relative text-2xl font-semibold text-foreground">Nova CRM 팀</span>
            </div>
        </section>
    );
}
