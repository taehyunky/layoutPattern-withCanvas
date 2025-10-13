const testimonials = [
    {
        quote:
            '“새로운 랜딩 페이지를 실험할 때마다 문서와 디자인을 오가던 시간을 아꼈습니다. 3일 걸리던 작업이 이제는 하루면 끝나요.”',
        name: '김서하 · Product Marketing Manager',
    },
    {
        quote:
            '“QA 절차가 일원화되어 버전 혼동이 없어졌습니다. 모든 이해관계자가 캔버스에서 같은 화면을 보며 이야기할 수 있거든요.”',
        name: '최윤호 · Engineering Lead',
    },
    {
        quote:
            '“프롬프트 미리보기 덕분에 카피 팀이 요청 사항을 즉시 파악해 수정 사이클이 크게 줄었습니다.”',
        name: '박유나 · Copywriter',
    },
    {
        quote:
            '“팀별 실험 결과가 자동으로 기록되어, 새로 합류한 동료가 빠르게 문맥을 이해할 수 있었습니다.”',
        name: '정한결 · Growth Analyst',
    },
    {
        quote:
            '“캔버스 뷰를 통해 고객 피드백을 즉시 반영하며 UI를 조정했습니다. 덕분에 퍼널 완료율이 18% 상승했어요.”',
        name: '이미나 · UX Researcher',
    },
];

export function SocialProofMasonryWall() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                팀이 전하는 실사용 후기
            </h2>
            <div className="columns-1 gap-4 @[768px]:columns-2 @[1024px]:columns-3">
                {testimonials.map(testimonial => (
                    <article
                        key={testimonial.name}
                        className="mb-4 break-inside-avoid rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <p className="text-sm leading-7 text-muted-foreground">{testimonial.quote}</p>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                            {testimonial.name}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
