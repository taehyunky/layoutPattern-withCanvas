import { useState } from 'react';

const industries = [
    {
        value: 'saas',
        label: 'SaaS',
        headline: '지원 티켓 대응 시간을 절반으로 줄인 Supportly',
        metric: 'CSAT +21pt',
        summary:
            '패턴 라이브러리를 활용해 긴급 공지와 튜토리얼 페이지를 빠르게 제작함으로써 고객 만족도가 상승했습니다.',
    },
    {
        value: 'ecommerce',
        label: 'E-commerce',
        headline: '장바구니 전환율을 35% 높인 Bloom Market',
        metric: '매출 +28%',
        summary:
            '데이터 기반 캔버스를 사용해 체크아웃 흐름을 최적화하고, A/B 테스트 속도를 가속화했습니다.',
    },
    {
        value: 'finance',
        label: 'Finance',
        headline: '규제 문서를 자동화한 Ledger Bank',
        metric: '승인 속도 2.3x',
        summary:
            '프롬프트 동기화 기능으로 법무·컴플라이언스 팀이 실시간으로 내용을 검토하며 승인 과정을 가속화했습니다.',
    },
];

export function StoryIndustryTabs() {
    const [active, setActive] = useState(industries[0]!.value);
    const current = industries.find(item => item.value === active) ?? industries[0]!;

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="flex gap-2 overflow-x-auto rounded-full border border-border/60 bg-muted/20 p-2">
                {industries.map(industry => (
                    <button
                        key={industry.value}
                        type="button"
                        onClick={() => setActive(industry.value)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                            industry.value === active
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground'
                        }`}
                    >
                        {industry.label}
                    </button>
                ))}
            </div>
            <div className="mt-8 space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {current.headline}
                </h3>
                <p className="text-sm font-medium text-primary">{current.metric}</p>
                <p className="text-sm leading-7 text-muted-foreground">{current.summary}</p>
            </div>
        </section>
    );
}
