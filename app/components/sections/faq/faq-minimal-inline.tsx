const faqs = [
    {
        question: '계약서와 법적 문서 서명은 어떤 방식으로 진행되나요?',
        answer:
            '모든 문서는 전자 서명을 통해 처리되며, 서명 로그와 인증서를 포함한 감사 자료가 자동으로 생성됩니다.',
    },
    {
        question: '데이터 보존 정책은 어떻게 되나요?',
        answer:
            '기본적으로 1년간 버전을 보존하며, 엔터프라이즈 고객은 맞춤 기간을 설정할 수 있습니다.',
    },
    {
        question: '사용자 피드백은 제품 로드맵에 어떻게 반영되나요?',
        answer:
            '피드백은 카테고리화되어 분기별 로드맵 리뷰에서 우선순위를 다시 조정합니다.',
    },
    {
        question: '앱 사용에 대한 접근성 테스트는 어느 주기로 이루어지나요?',
        answer:
            '월간 자동 테스트와 분기별 사용자 연구를 통해 접근성 개선 사항을 검증합니다.',
    },
];

export function FaqMinimalInline() {
    return (
        <section className="space-y-12 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Essential info
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    꼭 알아두어야 할 핵심 FAQ
                </h2>
                <p className="text-sm text-muted-foreground">
                    복잡한 인터랙션 없이 필요한 정보를 빠르게 확인하세요.
                </p>
            </header>
            <div className="space-y-12">
                {faqs.map(faq => (
                    <article key={faq.question} className="space-y-4 @[768px]:space-y-5">
                        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                            {faq.question}
                        </h3>
                        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground @[1024px]:text-base">
                            {faq.answer}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
