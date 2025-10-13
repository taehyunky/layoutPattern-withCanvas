import { QuoteIcon } from 'lucide-react';

const qa = [
    {
        question: '어떤 문제를 해결하고 싶었나요?',
        answer:
            '캠페인별로 서로 다른 문서와 디자인 파일을 참조하다 보니 커뮤니케이션 비용이 컸습니다. 단일 소스가 필요했습니다.',
    },
    {
        question: '도입 이후 가장 큰 변화는 무엇인가요?',
        answer:
            '캔버스에서 모든 팀이 동일한 프레임을 확인하게 되면서 QA 요청이 줄고, 전환 최적화에 집중할 수 있게 되었습니다.',
    },
    {
        question: '다음 단계는 무엇인가요?',
        answer:
            '성과 데이터를 기반으로 섹션 라이브러리를 확장하고 있으며, AI 프롬프트 자동화를 실험 중입니다.',
    },
];

export function StoryInterview() {
    return (
        <section className="grid gap-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1fr_2fr]">
            <aside className="flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-background/90 p-8 text-center">
                <div className="size-24 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40" />
                <div>
                    <p className="text-lg font-semibold text-foreground">이주안</p>
                    <p className="text-sm text-muted-foreground">Head of Product · Flare</p>
                </div>
                <QuoteIcon className="size-8 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                    “섹션 가이드와 캔버스를 도입한 이후, 팀 간 온보딩 시간이 3배 빨라졌습니다.”
                </p>
            </aside>
            <div className="space-y-6">
                {qa.map(item => (
                    <article key={item.question} className="space-y-3">
                        <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                        <p className="rounded-2xl border border-border/60 bg-muted/20 p-5 text-sm leading-7 text-muted-foreground">
                            {item.answer}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
