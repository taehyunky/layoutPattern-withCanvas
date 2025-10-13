import { useState } from 'react';

import { MoveHorizontalIcon } from 'lucide-react';

export function HowBeforeAfter() {
    const [position, setPosition] = useState(50);

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-slate-900">
                <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900" />
                <div
                    className="absolute inset-y-0 left-0 bg-primary/60"
                    style={{ width: `${position}%`, mixBlendMode: 'screen' }}
                />
                <div className="pointer-events-none absolute inset-0 flex justify-between px-6 py-4 text-sm font-semibold text-white">
                    <span>Before</span>
                    <span>After</span>
                </div>
                <div
                    className="absolute inset-y-0 flex items-center"
                    style={{ left: `${position}%` }}
                >
                    <span className="block h-full w-[2px] bg-white/80" />
                    <span className="mx-2 flex size-12 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                        <MoveHorizontalIcon className="size-6" />
                    </span>
                    <span className="block h-full w-[2px] bg-white/80" />
                </div>
            </div>
            <input
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={event => setPosition(Number(event.target.value))}
                className="mt-6 w-full"
            />
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
                슬라이더를 움직여 수정 전과 후를 비교할 수 있습니다. 모바일에서는 터치로 드래그해
                상태를 확인하세요.
            </p>
        </section>
    );
}
