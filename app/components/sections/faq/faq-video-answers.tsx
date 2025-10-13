import { PlayIcon, VideoIcon } from 'lucide-react';

const videoFaqs = [
    {
        question: '워크플로우 자동화는 어떻게 설정하나요?',
        answer:
            '자동화 템플릿을 선택한 후 트리거와 액션을 정의하면 됩니다. 팀 권한에 따라 승인 단계를 추가할 수 있습니다.',
        video:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
    {
        question: '데이터 익스포트 시 어떤 포맷을 사용할 수 있나요?',
        answer:
            'JSON, CSV, PDF, 이미지 패키지까지 다양한 형식을 제공합니다. API로도 자동 내보내기를 설정할 수 있습니다.',
        video:
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    },
    {
        question: '협업 권한은 어떻게 관리되나요?',
        answer:
            '뎁스 단위로 권한을 설정할 수 있습니다. 프로젝트별 읽기/쓰기와 댓글 전용 권한을 세분화하여 지정하세요.',
        video:
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    },
];

export function FaqWithVideoAnswers() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Watch or read
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        영상과 텍스트로 동시에 확인하는 FAQ
                    </h2>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    <VideoIcon className="size-4" />
                    Subtitles available in 3 languages
                </div>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-3">
                {videoFaqs.map(faq => (
                    <article
                        key={faq.question}
                        className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                            <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        </div>
                        <button
                            type="button"
                            className="relative mt-6 overflow-hidden rounded-2xl border border-border/60"
                        >
                            <img
                                src={faq.video}
                                alt={`${faq.question} video thumbnail`}
                                className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                                loading="lazy"
                            />
                            <span className="absolute inset-0 flex items-center justify-center">
                                <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                                    <PlayIcon className="size-6" />
                                </span>
                            </span>
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
