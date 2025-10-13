const quotes = [
    { text: '“Release 시간 40% 단축”', author: 'Acme Corp' },
    { text: '“전환율 18% 상승”', author: 'Brightlane' },
    { text: '“QA 라운드 절반으로 감소”', author: 'Momentum' },
    { text: '“팀 온보딩 기간 3배 빨라짐”', author: 'Focal' },
];

export function SocialProofQuoteTicker() {
    const items = [...quotes, ...quotes];

    return (
        <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-primary text-primary-foreground shadow-lg">
            <style>{`
                @keyframes social-proof-ticker {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .social-proof-ticker__track {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transform: translateX(0) !important;
                    }
                }
            `}</style>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-primary/0" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-primary/0" />
            <div
                className="social-proof-ticker__track flex w-max gap-8 whitespace-nowrap py-6 text-sm"
                style={{ animation: 'social-proof-ticker 24s linear infinite' }}
            >
                {items.map((quote, index) => (
                    <span key={`${quote.author}-${index}`} className="flex items-center gap-2">
                        <span className="font-medium text-white/90">{quote.text}</span>
                        <span className="text-white/60">{quote.author}</span>
                        <span className="text-white/30">•</span>
                    </span>
                ))}
            </div>
        </section>
    );
}
