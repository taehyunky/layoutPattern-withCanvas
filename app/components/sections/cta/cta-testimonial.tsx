import { QuoteIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function CtaTestimonial() {
    return (
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-background/95 p-8 shadow-lg @[768px]:grid-cols-[2fr_3fr] @[768px]:p-12">
            <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    Customer Stories
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    “한 주 만에 5개의 신규 랜딩 페이지를 출시했어요.”
                </h2>
                <p className="text-sm leading-6 text-muted-foreground @[768px]:text-base">
                    템플릿과 프롬프트 라이브러리를 그대로 복사해 프로덕트와 콘텐츠 팀이 동시에
                    작업했습니다. 수정 라운드가 절반 이상 줄어든 것이 가장 큰 성과였어요.
                </p>
                <div>
                    <p className="text-sm font-semibold text-foreground">김지원 · Growth Lead</p>
                    <p className="text-xs text-muted-foreground">Onboardly</p>
                </div>
                <Button size="lg" className="mt-4 w-full @[480px]:w-auto">
                    사례 더 보기
                </Button>
            </div>
            <div className="relative rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-8">
                <QuoteIcon className="absolute right-8 top-8 size-10 text-primary/30" />
                <div className="space-y-6 text-sm leading-7 text-muted-foreground">
                    <p>
                        “캔버스 뷰에서 모바일과 데스크톱 레이아웃을 동시에 확인할 수 있어 QA 시간이
                        획기적으로 줄었습니다.”
                    </p>
                    <p>
                        “프롬프트 미리보기 버튼으로 카피 팀이 즉시 복사해 수정할 수 있어, 탭 간 이동이
                        거의 사라졌습니다.”
                    </p>
                    <p className="font-semibold text-primary">
                        NPS +32p, 페이지 제작 속도 2.4배 향상, 첫 달 내 전환율 18% 상승
                    </p>
                </div>
            </div>
        </div>
    );
}
