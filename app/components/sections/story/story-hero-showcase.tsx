import { QuoteIcon } from 'lucide-react';

export function StoryHeroShowcase() {
    return (
        <section className="grid gap-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-xl @[1024px]:grid-cols-2 @[1024px]:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/20 via-slate-900 to-secondary/20 shadow-lg">
                <div className="aspect-[4/3]" />
                <span className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Fintech · Atlas
                </span>
            </div>
            <div className="space-y-5">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Case study
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        Atlas 팀이 신규 온보딩 플로우를 4주 → 10일로 단축한 방법
                    </h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        문제 정의부터 결과 측정까지 모든 단계를 캔버스에 통합하여 정보를 투명하게 공유했습니다.
                    </p>
                </div>
                <div className="grid gap-4 @[768px]:grid-cols-3">
                    <div className="rounded-2xl border border-border/60 bg-background/90 p-4 text-center">
                        <p className="text-2xl font-semibold text-primary">+38%</p>
                        <p className="text-xs text-muted-foreground">전환율 증가</p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/90 p-4 text-center">
                        <p className="text-2xl font-semibold text-primary">-42%</p>
                        <p className="text-xs text-muted-foreground">QA 시간 감소</p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/90 p-4 text-center">
                        <p className="text-2xl font-semibold text-primary">2x</p>
                        <p className="text-xs text-muted-foreground">실험 속도</p>
                    </div>
                </div>
                <div className="space-y-3 rounded-3xl border border-border/60 bg-muted/20 p-6">
                    <QuoteIcon className="size-8 text-primary" />
                    <p className="text-sm leading-7 text-muted-foreground">
                        “우리는 더 이상 여러 문서를 열어볼 필요가 없습니다. 캔버스가 단일 소스로 자리 잡으며
                        커뮤니케이션 비용이 크게 줄었어요.”
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        이유진 · Product Lead, Atlas
                    </p>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    Read full case study
                </button>
            </div>
        </section>
    );
}
