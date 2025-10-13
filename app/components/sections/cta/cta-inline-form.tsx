import type { FormEvent } from 'react';

import { Button } from '~/components/ui/button';

export function CtaInlineForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="w-full max-w-3xl rounded-3xl border border-border/60 bg-background/90 p-8 shadow-lg @[768px]:p-10">
            <div className="space-y-3 text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    Newsletter
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground @[768px]:text-3xl">
                    최신 패턴 릴리스와 자동화 팁을 받아보세요
                </h2>
                <p className="text-sm leading-6 text-muted-foreground @[768px]:text-base">
                    매주 목요일, 새로 추가된 섹션과 실제 적용 사례를 메일로 정리해 드립니다.
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 @[640px]:flex-row @[640px]:items-center"
            >
                <label className="sr-only" htmlFor="cta-inline-email">
                    이메일 주소
                </label>
                <input
                    id="cta-inline-email"
                    type="email"
                    required
                    placeholder="work@email.com"
                    className="h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 @[640px]:h-14 @[640px]:rounded-2xl"
                />
                <Button
                    type="submit"
                    size="lg"
                    className="h-12 w-full rounded-xl @[640px]:h-14 @[640px]:w-auto @[640px]:rounded-2xl @[640px]:px-8"
                >
                    구독하기
                </Button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
                스팸은 보내지 않아요. 최대 월 4회, 해지 링크는 모든 메일 하단에 포함되어 있습니다.
            </p>
        </div>
    );
}
