import { ArrowRightIcon } from 'lucide-react';

const options = [
    {
        label: 'Product Tour',
        description: '대시보드와 캔버스 기능을 3분 안에 살펴보세요.',
        cta: '투어 시작',
    },
    {
        label: 'Live Demo',
        description: '전문가와 함께 맞춤형 워크플로우를 구성합니다.',
        cta: '데모 예약',
    },
    {
        label: 'Template Library',
        description: '산업군별 추천 레이아웃 패턴을 확인하세요.',
        cta: '라이브러리 이동',
    },
    {
        label: 'Community',
        description: '디자이너와 마케터 커뮤니티에서 팁을 공유하세요.',
        cta: '가입하기',
    },
];

export function CtaGridOptions() {
    return (
        <div className="rounded-3xl border border-border/60 bg-background/95 p-8 shadow-lg @[768px]:p-12">
            <div className="flex flex-col gap-3 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground @[768px]:text-3xl">
                        필요한 도움을 선택하세요
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground @[768px]:text-base">
                        목적에 따라 맞춤형 경로를 제공해 빠르게 다음 단계로 이동할 수 있습니다.
                    </p>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Quick Actions
                </p>
            </div>
            <div className="mt-8 grid gap-4 @[640px]:grid-cols-2 @[1024px]:gap-6">
                {options.map(option => (
                    <button
                        key={option.label}
                        type="button"
                        className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background/80 p-6 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                        <div>
                            <p className="text-sm font-semibold text-foreground @[768px]:text-base">
                                {option.label}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {option.description}
                            </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                            {option.cta}
                            <ArrowRightIcon className="size-4" />
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
