import { useState } from 'react';
import { MoveHorizontalIcon } from 'lucide-react';

export function ComparisonInteractiveSlider() {
    const [position, setPosition] = useState(50);

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Drag to compare
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    슬라이더를 움직여 두 경험을 직접 비교하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    좌측은 Canvas, 우측은 기존 워크플로우 스크린입니다.
                </p>
            </header>
            <div className="space-y-4">
                <div className="relative h-96 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-inner">
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white/20">
                        Legacy Workflow
                    </div>
                    <div
                        className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-400 text-white shadow-xl transition-all"
                        style={{ width: `${position}%` }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white/90">
                            Canvas Experience
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 left-0 flex items-center"
                        style={{ transform: `translateX(${position}%)` }}
                    >
                        <div className="relative -ml-5 flex h-96 items-center">
                            <div className="relative flex h-full w-10 items-center justify-center">
                                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/60" />
                                <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/80 bg-white text-primary shadow-lg">
                                    <MoveHorizontalIcon className="size-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input
                    aria-label="Comparison slider"
                    type="range"
                    min={0}
                    max={100}
                    value={position}
                    onChange={event => setPosition(Number(event.target.value))}
                    className="h-2 w-full cursor-pointer rounded-full bg-border accent-primary"
                />
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Canvas · Reduced setup by 63%</span>
                    <span>Legacy tool · Manual updates required</span>
                </div>
            </div>
        </section>
    );
}
