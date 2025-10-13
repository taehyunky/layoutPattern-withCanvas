import type { LucideIcon } from 'lucide-react';
import { CompassIcon, LightbulbIcon, ShieldCheckIcon } from 'lucide-react';

const pillars: Array<{
    title: string;
    description: string;
    highlight: string;
    icon: LucideIcon;
}> = [
    {
        title: 'Mission',
        description:
            '팀이 가진 아이디어가 곧바로 인터랙티브 프로토타입이 되도록, 디자인 워크플로우를 자동화합니다.',
        highlight: 'Empower teams with intuitive creation tools.',
        icon: CompassIcon,
    },
    {
        title: 'Vision',
        description:
            '언제 어디서나 맥락이 유지되는 협업 공간을 제공하여, 글로벌 팀의 의사결정을 가속합니다.',
        highlight: 'A connected, context-rich workspace for every team.',
        icon: LightbulbIcon,
    },
    {
        title: 'Values',
        description:
            '사람 중심, 데이터 기반, 투명성이라는 세 가지 가치를 모든 제품과 문화에 반영합니다.',
        highlight: 'Human-first, data-informed, openly executed.',
        icon: ShieldCheckIcon,
    },
];

export function AboutMissionVisionValues() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Mission · Vision · Values
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    회사의 방향성을 결정하는 세 가지 원칙
                </h2>
                <p className="mx-auto max-w-2xl text-sm text-muted-foreground @[1024px]:text-base">
                    우리 팀은 제품 전략과 조직 운영 전반에서 동일한 의사결정 원칙을 공유합니다.
                    고객 여정에서 일관된 경험을 제공하기 위한 기준이기도 합니다.
                </p>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {pillars.map(pillar => (
                    <article
                        key={pillar.title}
                        className="relative flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-gradient-to-br from-background/95 via-background/90 to-primary/5 p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
                    >
                        <pillar.icon className="size-12 text-primary" />
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-foreground">{pillar.title}</h3>
                            <p className="text-sm text-muted-foreground @[1024px]:text-base">
                                {pillar.description}
                            </p>
                        </div>
                        <p className="rounded-2xl border border-dashed border-primary/40 bg-primary/10 p-4 text-sm font-medium tracking-tight text-primary">
                            {pillar.highlight}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
