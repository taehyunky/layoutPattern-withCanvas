import { useMemo, useState } from 'react';

type CaseStudy = {
    title: string;
    industry: string;
    metric: string;
};

const caseStudies: CaseStudy[] = [
    { title: 'Checkout 개선으로 28% 매출 성장', industry: 'E-commerce', metric: '매출 +28%' },
    { title: '문서 자동화로 승인 속도 향상', industry: 'Finance', metric: '승인 2.5x' },
    { title: '콘텐츠 제작 시간 단축', industry: 'SaaS', metric: '제작 시간 -45%' },
    { title: '국제 캠페인 현지화 성공', industry: 'Media', metric: '리드 +63%' },
];

const industries = ['All', 'SaaS', 'E-commerce', 'Finance', 'Media'] as const;

export function StoryExplorer() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<(typeof industries)[number]>('All');

    const filtered = useMemo(() => {
        return caseStudies.filter(caseStudy => {
            const matchIndustry = filter === 'All' || caseStudy.industry === filter;
            const matchSearch =
                search.trim().length === 0 ||
                caseStudy.title.toLowerCase().includes(search.toLowerCase());
            return matchIndustry && matchSearch;
        });
    }, [filter, search]);

    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    업계별 성공 사례를 찾아보세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    키워드나 산업군을 선택해 해당하는 케이스 스터디를 빠르게 탐색할 수 있습니다.
                </p>
            </header>
            <div className="flex flex-col gap-4 @[768px]:flex-row @[768px]:items-center @[768px]:justify-between">
                <input
                    type="search"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Search case studies"
                    className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 @[768px]:w-80"
                />
                <div className="flex gap-2 overflow-x-auto rounded-full border border-border/60 bg-muted/20 p-2">
                    {industries.map(industry => (
                        <button
                            key={industry}
                            type="button"
                            onClick={() => setFilter(industry)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                                filter === industry
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground'
                            }`}
                        >
                            {industry}
                        </button>
                    ))}
                </div>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Showing {filtered.length} of {caseStudies.length}
            </p>
            <div className="grid gap-4 @[768px]:grid-cols-2">
                {filtered.map(caseStudy => (
                    <article
                        key={caseStudy.title}
                        className="flex flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
                    >
                        <div className="space-y-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                                {caseStudy.industry}
                            </span>
                            <h3 className="text-lg font-semibold text-foreground">{caseStudy.title}</h3>
                        </div>
                        <p className="mt-4 inline-flex w-max rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                            {caseStudy.metric}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
