import type { LucideIcon } from 'lucide-react';
import {
    BrainCircuitIcon,
    ChartBarIcon,
    GlobeIcon,
    ShieldCheckIcon,
    SparklesIcon,
    UsersIcon,
} from 'lucide-react';

type VisualComparison = {
    product: string;
    icon: LucideIcon;
    features: Array<{ label: string; icon: LucideIcon; score: 'full' | 'partial' }>;
};

const visuals: VisualComparison[] = [
    {
        product: 'Canvas',
        icon: SparklesIcon,
        features: [
            { label: 'AI automation', icon: BrainCircuitIcon, score: 'full' },
            { label: 'Global teams', icon: GlobeIcon, score: 'full' },
            { label: 'Analytics', icon: ChartBarIcon, score: 'full' },
            { label: 'Security', icon: ShieldCheckIcon, score: 'full' },
        ],
    },
    {
        product: 'Competitor',
        icon: UsersIcon,
        features: [
            { label: 'AI automation', icon: BrainCircuitIcon, score: 'partial' },
            { label: 'Global teams', icon: GlobeIcon, score: 'partial' },
            { label: 'Analytics', icon: ChartBarIcon, score: 'partial' },
            { label: 'Security', icon: ShieldCheckIcon, score: 'partial' },
        ],
    },
];

export function ComparisonVisualIcon() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Visual summary
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    아이콘으로 직관적인 비교를 제공합니다
                </h2>
                <p className="text-sm text-muted-foreground">
                    색상과 아이콘 조합으로 기능 지원 수준을 빠르게 확인하세요.
                </p>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-2">
                {visuals.map(visual => (
                    <article
                        key={visual.product}
                        className={`flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary/50 ${
                            visual.product === 'Canvas' ? 'border-primary/60 bg-primary/5' : ''
                        }`}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <visual.icon className="size-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{visual.product}</h3>
                        </div>
                        <div className="grid gap-4">
                            {visual.features.map(feature => (
                                <div
                                    key={feature.label}
                                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left ${
                                        feature.score === 'full'
                                            ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-600'
                                            : 'border-border/60 bg-background/95 text-muted-foreground'
                                    }`}
                                >
                                    <feature.icon className="size-5" />
                                    <span className="text-sm font-semibold">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/90 px-6 py-4 text-sm text-muted-foreground">
                색상 전설: <span className="font-semibold text-emerald-500">Full</span> 지원 /
                <span className="ml-2 font-semibold text-muted-foreground">Partial</span> 지원
            </div>
        </section>
    );
}
