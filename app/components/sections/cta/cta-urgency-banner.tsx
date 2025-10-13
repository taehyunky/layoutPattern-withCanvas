import { Button } from '~/components/ui/button';

export function CtaUrgencyBanner() {
    return (
        <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-primary px-6 py-8 text-white @[768px]:flex-row @[768px]:items-center @[768px]:px-10">
            <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-black/20 px-4 py-2 text-center font-mono text-xs uppercase tracking-[0.3em]">
                    Limited
                </div>
                <div>
                    <h2 className="text-2xl font-semibold @[768px]:text-3xl">초기 사용자 특별 혜택</h2>
                    <p className="mt-1 text-sm text-white/80 @[768px]:text-base">
                        48시간 내 신청 시 3개월 간 프로 플랜 30% 할인과 온보딩 세션을 제공합니다.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 @[640px]:flex-row">
                <div className="flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 font-mono text-sm">
                    <span className="text-white/70">남은 시간</span>
                    <span className="text-lg font-semibold tracking-widest">12:48:26</span>
                </div>
                <Button size="lg" variant="secondary" className="w-full @[640px]:w-auto">
                    혜택 받기
                </Button>
            </div>
        </div>
    );
}
