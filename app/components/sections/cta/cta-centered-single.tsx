import { Button } from '~/components/ui/button';

export function CtaCenteredSingle() {
    return (
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-12 text-center shadow-xl @[480px]:p-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground @[640px]:text-4xl">
                프로젝트 출시를 빠르게 앞당기는 디자인 시스템
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground @[640px]:text-lg">
                통합된 섹션 라이브러리와 프롬프트 가이드를 통해 일관된 페이지를 빠르게 제작하세요.
                워크플로우를 표준화하고 팀 협업 속도를 높입니다.
            </p>
            <Button size="lg" className="mt-8 w-full @[480px]:w-auto @[480px]:px-10">
                지금 시작하기
            </Button>
        </div>
    );
}
