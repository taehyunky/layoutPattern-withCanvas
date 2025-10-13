import { useEffect, useState } from 'react';

const stats = [
    { label: '평균 전환율 상승', value: 28, suffix: '%' },
    { label: '캠페인 출시 속도 향상', value: 2.4, suffix: 'x' },
    { label: 'QA 라운드 감소', value: 56, suffix: '%' },
];

export function SocialProofStatsBar() {
    const [values, setValues] = useState(() => stats.map(() => 0));

    useEffect(() => {
        const duration = 900;
        const frameRate = 1000 / 60;
        const steps = Math.ceil(duration / frameRate);
        let frame = 0;

        const interval = window.setInterval(() => {
            frame += 1;
            const progress = Math.min(frame / steps, 1);
            setValues(stats.map(stat => Number((stat.value * progress).toFixed(1))));

            if (progress === 1) {
                window.clearInterval(interval);
            }
        }, frameRate);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {stats.map((stat, index) => (
                    <div
                        key={stat.label}
                        className="flex flex-col items-center gap-2 border-border/60 @[768px]:border-r @[768px]:last:border-none"
                    >
                        <p className="text-4xl font-semibold tracking-tight text-primary">
                            {values[index]}
                            {stat.suffix}
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
