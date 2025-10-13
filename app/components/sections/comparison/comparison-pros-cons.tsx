import { CheckIcon, XIcon } from 'lucide-react';

const products = [
    {
        name: 'Canvas',
        description: 'Collaborative design intelligence platform',
        pros: ['AI 추천 기반 패턴 라이브러리', '실시간 협업 및 버전 관리', '전담 성공 매니저 포함'],
        cons: ['일부 고급 기능은 엔터프라이즈에서만 제공'],
    },
    {
        name: 'Competitor A',
        description: 'Legacy presentation builder',
        pros: ['익숙한 UI', '기본 템플릿 제공'],
        cons: ['실시간 협업 미지원', 'AI 자동화 부재', '제한된 통합 옵션'],
    },
    {
        name: 'Competitor B',
        description: 'Lightweight collaboration app',
        pros: ['간단한 공유 링크', '모바일 앱 지원'],
        cons: ['대규모 팀에서 성능 저하', '보안 인증 부족', '분석 기능 제한'],
    },
];

export function ComparisonProsCons() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Pros & cons
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    제품별 장단점을 빠르게 비교해보세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    각 카드에는 주요 장점과 한계가 정리되어 있어 의사결정을 돕습니다.
                </p>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {products.map(product => (
                    <article
                        key={product.name}
                        className={`flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg ${
                            product.name === 'Canvas' ? 'border-primary/50 bg-primary/5' : ''
                        }`}
                    >
                        <header className="space-y-1">
                            <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                        </header>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                                    Pros
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {product.pros.map(item => (
                                        <li key={item} className="flex items-start gap-2">
                                            <CheckIcon className="mt-0.5 size-4 text-emerald-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                                    Cons
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {product.cons.map(item => (
                                        <li key={item} className="flex items-start gap-2">
                                            <XIcon className="mt-0.5 size-4 text-red-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mt-auto rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            {product.name === 'Canvas' ? 'Choose Canvas' : `Compare with ${product.name}`}
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
