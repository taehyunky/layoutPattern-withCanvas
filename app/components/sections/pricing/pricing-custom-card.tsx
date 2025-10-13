import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import { Building2Icon, UsersIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

const storageOptions = [
    { label: '50GB', value: 50, multiplier: 1 },
    { label: '200GB', value: 200, multiplier: 1.3 },
    { label: '1TB', value: 1000, multiplier: 1.6 },
];

export function PricingCustomCard() {
    const [seats, setSeats] = useState(10);
    const [storage, setStorage] = useState(storageOptions[1]);

    const price = useMemo(() => {
        const base = 12;
        const seatCost = seats * base;
        return Math.round(seatCost * storage.multiplier);
    }, [seats, storage]);

    const handleSeatChange = (value: number) => {
        setSeats(Math.min(50, Math.max(1, value)));
    };

    const handleStorageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const next = storageOptions.find(option => option.value === Number(event.target.value));
        if (next) setStorage(next);
    };

    return (
        <section className="grid gap-6 @[1024px]:grid-cols-[2fr_1fr]">
            <div className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    <UsersIcon className="size-4" /> 좌석과 스토리지를 선택하세요
                </div>
                <div className="mt-6 space-y-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="seat-slider" className="text-sm font-semibold text-foreground">
                                팀 좌석 수 ({seats}명)
                            </label>
                            <span className="text-xs text-muted-foreground">최대 50명</span>
                        </div>
                        <input
                            id="seat-slider"
                            type="range"
                            min={1}
                            max={50}
                            value={seats}
                            onChange={event => handleSeatChange(Number(event.target.value))}
                            className="mt-3 w-full appearance-none overflow-hidden rounded-full bg-muted"
                            style={{ height: '8px' }}
                        />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="storage-select" className="text-sm font-semibold text-foreground">
                            저장소 용량
                        </label>
                        <select
                            id="storage-select"
                            value={storage.value}
                            onChange={handleStorageChange}
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            {storageOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <aside className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        <Building2Icon className="size-4" /> 커스텀 견적
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                        ${price}/month
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                        {seats}명 사용자, {storage.label} 저장소 기준 예상 요금입니다. 맞춤 플랜으로
                        산정되며, 세금은 별도입니다.
                    </p>
                </div>
                <div className="space-y-3">
                    <Button className="w-full">맞춤 견적 받기</Button>
                    <Button variant="ghost" className="w-full border border-border/60">
                        영업팀과 채팅하기
                    </Button>
                </div>
            </aside>
        </section>
    );
}
