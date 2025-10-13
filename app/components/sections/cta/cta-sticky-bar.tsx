import { Button } from '~/components/ui/button';

export function CtaStickyBar() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/95 shadow-lg">
            <div className="space-y-3 px-8 py-10 @[768px]:px-12">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground @[768px]:text-3xl">
                    라이브 세션이 곧 시작됩니다
                </h2>
                <p className="text-sm leading-6 text-muted-foreground @[768px]:text-base">
                    캔버스 구축 사례와 프롬프트 작성 팁을 45분 동안 라이브로 소개합니다. 자리가 빠르게
                    마감되고 있으니 지금 등록하세요.
                </p>
            </div>
            <div className="sticky bottom-0 flex flex-col gap-4 border-t border-border/80 bg-background/90 px-6 py-5 @[640px]:flex-row @[640px]:items-center @[640px]:justify-between">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                    <span className="size-2 rounded-full bg-primary" />
                    Live in 02:15:09
                </div>
                <div className="flex w-full flex-col gap-3 @[640px]:w-auto @[640px]:flex-row @[640px]:items-center">
                    <Button size="lg" className="w-full @[640px]:w-auto">
                        좌석 예약하기
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="w-full border border-border/70 @[640px]:w-auto"
                    >
                        리마인더 받기
                    </Button>
                </div>
            </div>
        </div>
    );
}
