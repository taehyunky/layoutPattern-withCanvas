import { useMemo, useState } from 'react';
import { CalculatorIcon } from 'lucide-react';

type SupportTier = 'standard' | 'premium';

const pricingModel = {
    canvas: {
        basePerUser: 22,
        storagePerTb: 120,
        supportMultiplier: {
            standard: 1,
            premium: 1.2,
        },
    },
    competitor: {
        basePerUser: 29,
        storagePerTb: 150,
        supportMultiplier: {
            standard: 1,
            premium: 1.35,
        },
    },
};

const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(
        value
    );

export function ComparisonPricingCalculator() {
    const [users, setUsers] = useState(40);
    const [storage, setStorage] = useState(2);
    const [supportTier, setSupportTier] = useState<SupportTier>('standard');

    const results = useMemo(() => {
        const canvasCost =
            users * pricingModel.canvas.basePerUser +
            storage * pricingModel.canvas.storagePerTb * pricingModel.canvas.supportMultiplier[supportTier];
        const competitorCost =
            users * pricingModel.competitor.basePerUser +
            storage *
                pricingModel.competitor.storagePerTb *
                pricingModel.competitor.supportMultiplier[supportTier];

        return [
            { name: 'Canvas', cost: canvasCost, description: 'AI 자동화 포함' },
            { name: 'Competitor', cost: competitorCost, description: '애드온 과금 발생' },
        ].sort((a, b) => a.cost - b.cost);
    }, [storage, supportTier, users]);

    const [cheapest, higher] = results;

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Cost projection
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        팀 규모에 맞는 비용을 즉시 계산해보세요
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        사용자 수, 저장 용량, 지원 등급을 조정하면 월 예상 비용이 업데이트됩니다.
                    </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <CalculatorIcon className="size-4" />
                    Real-time calculator
                </div>
            </header>
            <div className="grid gap-8 @[1024px]:grid-cols-[0.9fr_1.1fr]">
                <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground" htmlFor="users-range">
                            Team size · {users} seats
                        </label>
                        <input
                            id="users-range"
                            type="range"
                            min={10}
                            max={150}
                            value={users}
                            onChange={event => setUsers(Number(event.target.value))}
                            className="w-full cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>10</span>
                            <span>150</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground" htmlFor="storage-range">
                            Storage · {storage} TB
                        </label>
                        <input
                            id="storage-range"
                            type="range"
                            min={1}
                            max={10}
                            value={storage}
                            onChange={event => setStorage(Number(event.target.value))}
                            className="w-full cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1 TB</span>
                            <span>10 TB</span>
                        </div>
                    </div>
                    <fieldset className="space-y-3">
                        <legend className="text-sm font-semibold text-foreground">Support tier</legend>
                        <div className="grid gap-3 @[768px]:grid-cols-2">
                            {(['standard', 'premium'] as SupportTier[]).map(tier => (
                                <label
                                    key={tier}
                                    className={`flex cursor-pointer flex-col gap-1 rounded-2xl border px-4 py-3 text-sm ${
                                        supportTier === tier
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="support-tier"
                                        value={tier}
                                        checked={supportTier === tier}
                                        onChange={() => setSupportTier(tier)}
                                        className="hidden"
                                    />
                                    <span className="font-semibold capitalize">{tier}</span>
                                    <span>
                                        {tier === 'standard'
                                            ? '기본 이메일/채팅 지원'
                                            : '24/5 대응 + 전담 매니저'}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </fieldset>
                </aside>
                <div className="space-y-6">
                    <div className="grid gap-4 @[1024px]:grid-cols-2">
                        {[cheapest, higher].map(option => (
                            <article
                                key={option.name}
                                className={`flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm ${
                                    option === cheapest ? 'border-emerald-400/60 bg-emerald-500/10' : ''
                                }`}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-semibold text-foreground">{option.name}</h3>
                                    {option === cheapest && (
                                        <span className="rounded-full border border-emerald-500 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                                            Best value
                                        </span>
                                    )}
                                </div>
                                <p className="text-3xl font-semibold tracking-tight text-foreground">
                                    {formatCurrency(option.cost)}
                                    <span className="ml-2 text-sm font-medium text-muted-foreground">/ month</span>
                                </p>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                                <button
                                    type="button"
                                    className="mt-auto rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                                >
                                    {option === cheapest ? 'Choose plan' : 'Compare details'}
                                </button>
                            </article>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm text-primary">
                        Canvas는 동일 조건에서 매월 {formatCurrency(higher.cost - cheapest.cost)} 절감됩니다.
                    </div>
                </div>
            </div>
        </section>
    );
}
