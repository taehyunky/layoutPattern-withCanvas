import { Button } from '~/components/ui/button';

export function CtaSplitDual() {
    return (
        <div className="grid gap-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg @[768px]:grid-cols-2 @[1024px]:gap-10">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground @[768px]:text-3xl">
                    팀에 맞는 플랜을 선택하고 시작해보세요
                </h2>
                <p className="text-sm leading-6 text-muted-foreground @[768px]:text-base @[768px]:leading-7">
                    셀프 서비스와 맞춤형 온보딩 두 가지 경로 중 필요한 방식을 선택하면,
                    워크플로우를 끊김없이 구성할 수 있습니다.
                </p>
            </div>
            <div className="grid gap-4 @[480px]:grid-cols-2 @[1024px]:gap-6">
                <div className="flex flex-col justify-between rounded-2xl border border-primary/40 bg-primary/10 p-6 text-left">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">셀프 온보딩</h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                            템플릿을 선택하고 즉시 프로젝트를 구성하세요.
                        </p>
                    </div>
                    <Button size="lg" className="mt-6">
                        무료로 시작하기
                    </Button>
                </div>
                <div className="flex flex-col justify-between rounded-2xl border border-border bg-background/80 p-6 text-left">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">전문가 세션</h3>
                        <p className="mt-3 text-sm text-muted-foreground">
                            컨설턴트와 함께 맞춤형 워크플로우를 구성해 드립니다.
                        </p>
                    </div>
                    <Button size="lg" variant="outline" className="mt-6">
                        데모 예약하기
                    </Button>
                </div>
            </div>
        </div>
    );
}
