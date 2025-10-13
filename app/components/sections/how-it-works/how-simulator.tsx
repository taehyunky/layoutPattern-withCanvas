import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';

import { Button } from '~/components/ui/button';

export function HowSimulator() {
    const [visitors, setVisitors] = useState(5000);
    const [conversion, setConversion] = useState(2.3);
    const [lift, setLift] = useState(12);

    const result = useMemo(() => {
        const baseLeads = Math.round((visitors * conversion) / 100);
        const uplift = Math.round(baseLeads * (lift / 100));
        return {
            baseLeads,
            projected: baseLeads + uplift,
            uplift,
        };
    }, [visitors, conversion, lift]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="grid gap-6 @[1024px]:grid-cols-2">
            <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg space-y-4"
            >
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">전환 모의 계산기</h3>
                <div className="grid gap-4">
                    <label className="space-y-2 text-sm font-medium text-foreground">
                        예상 방문자 수
                        <input
                            type="number"
                            min={0}
                            value={visitors}
                            onChange={event => setVisitors(Number(event.target.value))}
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                    </label>
                    <label className="space-y-2 text-sm font-medium text-foreground">
                        현재 전환율 (%)
                        <input
                            type="number"
                            step="0.1"
                            min={0}
                            value={conversion}
                            onChange={event => setConversion(Number(event.target.value))}
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                    </label>
                    <label className="space-y-2 text-sm font-medium text-foreground">
                        예상 개선율 (%)
                        <input
                            type="number"
                            step="1"
                            value={lift}
                            onChange={event => setLift(Number(event.target.value))}
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                    </label>
                </div>
                <Button type="submit" className="w-full">
                    결과 업데이트
                </Button>
            </form>
            <div className="flex flex-col justify-between rounded-3xl border border-primary/40 bg-primary/5 p-8 shadow-lg">
                <header className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                        Simulation
                    </span>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                        예상 전환 결과
                    </h3>
                </header>
                <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-background/80 p-4">
                        <dt className="font-semibold text-foreground">현재 리드</dt>
                        <dd className="text-lg font-semibold text-primary">{result.baseLeads}명</dd>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-background/80 p-4">
                        <dt className="font-semibold text-foreground">예상 추가 리드</dt>
                        <dd className="text-lg font-semibold text-primary">+{result.uplift}명</dd>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-background/80 p-4">
                        <dt className="font-semibold text-foreground">최종 예상 리드</dt>
                        <dd className="text-lg font-semibold text-primary">{result.projected}명</dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
