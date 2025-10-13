import { Button } from '~/components/ui/button';

const steps = [
    { title: '요구사항 정리', description: '프로젝트 목표와 타깃 이용자를 정의합니다.' },
    { title: '패턴 선정', description: '섹션 라이브러리에서 적합한 레이아웃을 고릅니다.' },
    { title: '프롬프트 작성', description: '카피/디자인 프롬프트를 맞춤화합니다.' },
];

export function CtaMultiStep() {
    return (
        <div className="w-full rounded-3xl border border-border/60 bg-background p-8 shadow-lg @[768px]:p-10">
            <div className="flex flex-col gap-6 @[768px]:flex-row @[768px]:items-center">
                <div className="flex items-center gap-3">
                    <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                        1 / 3
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground @[768px]:text-3xl">
                            온보딩 진행 상황을 확인하세요
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground @[768px]:text-base">
                            셋업을 완료하면 팀 전체가 동일한 플레이북을 기준으로 작업할 수 있습니다.
                        </p>
                    </div>
                </div>
                <Button size="lg" className="w-full @[768px]:w-auto">
                    다음 단계로 이동
                </Button>
            </div>
            <ol className="mt-10 grid gap-6 @[768px]:grid-cols-3 @[768px]:gap-8">
                {steps.map((step, index) => (
                    <li
                        key={step.title}
                        className="rounded-2xl border border-border/60 bg-background/60 p-6"
                    >
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            Step {index + 1}
                            <span className="h-px w-full bg-border/60" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {step.description}
                        </p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
