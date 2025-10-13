import { useMemo, useState } from 'react';
import { SearchIcon } from 'lucide-react';

const searchableFaqs = [
    {
        question: '재택 근무 환경에서도 실시간 협업이 가능한가요?',
        answer:
            '실시간 커서 공유, 음성 메모, 의견 모드 등 원격 협업을 위한 기능을 기본 제공합니다.',
    },
    {
        question: 'AI 추천을 비활성화할 수 있나요?',
        answer:
            '환경 설정에서 패턴 추천 기능을 개인 또는 조직 단위로 끌 수 있습니다. 이후 언제든 다시 활성화할 수 있습니다.',
    },
    {
        question: '데이터는 어느 리전에 저장되나요?',
        answer:
            '기본은 미국 리전이며, 엔터프라이즈 고객은 서울, 도쿄, 프랑크푸르트 중 선택할 수 있습니다.',
    },
    {
        question: '모바일에서도 캔버스를 편집할 수 있나요?',
        answer:
            'iOS와 Android 앱에서 주요 편집 기능을 지원하며, 태블릿에서는 데스크톱 수준 편집이 가능합니다.',
    },
    {
        question: '접근성 기준은 어떤 것을 충족하나요?',
        answer:
            'WCAG 2.1 AA 가이드라인을 준수하며, 스크린 리더 라벨과 키보드 네비게이션을 지원합니다.',
    },
];

const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);

    return parts.map((segment, index) =>
        index % 2 === 1 ? (
            <mark key={`${segment}-${index}`} className="rounded bg-primary/20 px-1">
                {segment}
            </mark>
        ) : (
            <span key={index}>{segment}</span>
        )
    );
};

export function FaqSearchEnabled() {
    const [query, setQuery] = useState('');

    const filteredFaqs = useMemo(() => {
        if (!query.trim()) return searchableFaqs;
        return searchableFaqs.filter(faq =>
            `${faq.question} ${faq.answer}`.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Search everything
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    키워드로 빠르게 답을 찾아보세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    질문을 입력하면 실시간으로 관련 FAQ를 필터링합니다.
                </p>
            </header>
            <div className="space-y-6">
                <div className="flex items-center gap-3 rounded-full border border-border/60 bg-background px-4 py-3 shadow-sm">
                    <SearchIcon className="size-5 text-muted-foreground" />
                    <input
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                        placeholder="예: AI 추천 비활성화, 데이터 리전..."
                        className="flex-1 border-none bg-transparent text-sm focus:outline-none"
                    />
                    {query && (
                        <button
                            type="button"
                            onClick={() => setQuery('')}
                            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
                        >
                            Clear
                        </button>
                    )}
                </div>
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span>
                        Showing {filteredFaqs.length} of {searchableFaqs.length} questions
                    </span>
                    <span>Last updated · 3 days ago</span>
                </div>
                <div className="space-y-5">
                    {filteredFaqs.length === 0 ? (
                        <div className="space-y-4 rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-8 text-center text-sm text-primary">
                            <p>검색 결과가 없습니다.</p>
                            <button
                                type="button"
                                className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                Contact support
                            </button>
                        </div>
                    ) : (
                        filteredFaqs.map(faq => (
                            <article
                                key={faq.question}
                                className="space-y-3 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-foreground">
                                    {highlightMatch(faq.question, query)}
                                </h3>
                                <p className="text-sm text-muted-foreground @[1024px]:text-base">
                                    {highlightMatch(faq.answer, query)}
                                </p>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
