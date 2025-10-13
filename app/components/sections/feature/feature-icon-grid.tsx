import { GaugeIcon, PaletteIcon, Share2Icon } from 'lucide-react';

const features = [
    {
        icon: GaugeIcon,
        title: '즉시 반응하는 속도',
        description:
            '모든 레이아웃은 60fps 목표로 구성되어 있어 스크롤과 인터랙션이 즉각적으로 반응합니다.',
    },
    {
        icon: PaletteIcon,
        title: '브랜드 일관성 유지',
        description:
            '토큰 기반 색상과 타이포그래피 스케일을 활용해 팀이 색상과 폰트를 통일할 수 있습니다.',
    },
    {
        icon: Share2Icon,
        title: '협업 중심 설계',
        description:
            '프롬프트와 디자인 사양을 동시에 공유하여 마케터와 디자이너가 동일한 문맥으로 작업합니다.',
    },
];

export function FeatureIconGrid() {
    return (
        <section className="space-y-10">
            <header className="max-w-2xl space-y-3 text-center @[768px]:mx-auto">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Why teams switch
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    팀이 에너지 낭비 없이 핵심 기능을 전달하도록 돕습니다
                </h2>
            </header>
            <div className="grid gap-5 @[640px]:grid-cols-2 @[1024px]:grid-cols-3">
                {features.map(feature => (
                    <article
                        key={feature.title}
                        className="group h-full rounded-3xl border border-border/60 bg-background/95 p-8 transition-all duration-200 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                    >
                        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <feature.icon className="size-6" />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-foreground @[1024px]:text-2xl">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground @[1024px]:text-base">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
