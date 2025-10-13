import { Button } from '~/components/ui/button';

export function CtaMediaBackground() {
    return (
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/70 to-primary/60" />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl px-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Launch Week
                </p>
                <h2 className="mt-4 text-3xl font-semibold @[768px]:text-4xl">
                    새로운 레이아웃 캔버스를 만나보세요
                </h2>
                <p className="mt-4 text-base leading-7 text-white/80">
                    실시간 미리보기와 프롬프트 복사를 한번에. 팀의 설계-카피 워크플로우를 하나의
                    화면으로 정리합니다.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 @[480px]:flex-row">
                    <Button size="lg" className="w-full @[480px]:w-auto @[480px]:px-10">
                        데모 보기
                    </Button>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="w-full bg-white/10 text-white hover:bg-white/20 @[480px]:w-auto"
                    >
                        제품 소개서 받기
                    </Button>
                </div>
            </div>
        </div>
    );
}
