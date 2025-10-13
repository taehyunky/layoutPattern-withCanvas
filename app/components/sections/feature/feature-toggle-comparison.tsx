import { useState } from 'react';

import { MonitorIcon, SmartphoneIcon } from 'lucide-react';

const modes = {
    desktop: {
        label: 'Desktop experience',
        headline: '캔버스에서 데스크톱을 설계',
        points: [
            '1440px 기준의 레이아웃을 한눈에 파악',
            '시뮬레이션 패널로 스크롤 인터랙션 확인',
            '다중 패턴 비교를 위해 두 번째 캔버스 고정',
        ],
    },
    mobile: {
        label: 'Mobile preview',
        headline: '모바일 전환율을 위한 세부 조정',
        points: [
            '390px 뷰포트 템플릿 제공',
            '터치 타겟 기준 체크리스트 자동 표시',
            '뷰포트별 카피 길이 제한 가이드',
        ],
    },
};

export function FeatureToggleComparison() {
    const [mode, setMode] = useState<keyof typeof modes>('desktop');
    const active = modes[mode];
    const inactive = modes[mode === 'desktop' ? 'mobile' : 'desktop'];

    return (
        <section className="rounded-3xl border border-border/60 bg-background/95 p-6 shadow-lg @[768px]:p-10">
            <div className="flex flex-col gap-6 @[768px]:items-center @[768px]:justify-between @[1024px]:flex-row">
                <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Responsive comparison
                    </span>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        보기 모드에 따라 필요한 정보만 보여줍니다
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                        뷰포트에 따라 달라지는 정보를 각각의 패널에 분리해 표시하고, 토글로 즉시
                        전환할 수 있습니다.
                    </p>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-border/70 bg-muted/30 p-2">
                    <button
                        type="button"
                        onClick={() => setMode('desktop')}
                        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            mode === 'desktop'
                                ? 'bg-background text-foreground shadow'
                                : 'text-muted-foreground'
                        }`}
                    >
                        <MonitorIcon className="size-4" />
                        Desktop
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode('mobile')}
                        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            mode === 'mobile'
                                ? 'bg-background text-foreground shadow'
                                : 'text-muted-foreground'
                        }`}
                    >
                        <SmartphoneIcon className="size-4" />
                        Mobile
                    </button>
                </div>
            </div>
            <div className="mt-8 grid gap-6 @[768px]:grid-cols-2">
                {[active, inactive].map((side, index) => (
                    <article
                        key={side.label}
                        className={`rounded-3xl border border-border/60 p-6 transition-all @[768px]:p-8 ${
                            index === 0 ? 'bg-primary/5 text-foreground' : 'bg-background/80 opacity-80'
                        }`}
                        aria-label={side.label}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            {side.label}
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-foreground">
                            {side.headline}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                            {side.points.map(point => (
                                <li key={point} className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
