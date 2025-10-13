const leftColumn = [
    {
        question: '어떤 지표로 효과를 측정하나요?',
        answer:
            '콘텐츠 제작 시간, 승인 주기, 협업 참여도, 전환율 등 핵심 KPI를 실시간 대시보드로 제공합니다.',
    },
    {
        question: '캔버스에 업로드 가능한 파일 형식은?',
        answer:
            '이미지(PNG, JPG, SVG), 영상(MP4), 문서(PDF)를 지원하며, 4K 해상도까지 자동 최적화합니다.',
    },
    {
        question: '팀 외부 파트너도 초대할 수 있나요?',
        answer:
            '예. 게스트 권한으로 초대하면 보기/댓글 중심으로 협업할 수 있고, 접근 제어 정책을 설정할 수 있습니다.',
    },
];

const rightColumn = [
    {
        question: '버전 관리는 어떻게 이루어지나요?',
        answer:
            '모든 변경 사항은 타임라인에 저장되며, 특정 시점으로 롤백하거나 비교할 수 있습니다.',
    },
    {
        question: 'AI 추천 패턴은 어떻게 학습되나요?',
        answer:
            '제품 내 사용 패턴과 업계 데이터를 바탕으로 추천 모델을 학습하며, 민감 정보는 수집하지 않습니다.',
    },
    {
        question: '서비스 가용성 SLA는 어느 정도인가요?',
        answer:
            '엔터프라이즈 플랜 기준 월 99.9% 가용성을 보장하며, 장애 발생 시 SLA에 따른 크레딧을 제공합니다.',
    },
];

export function FaqTwoColumnGrid() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Answers at a glance
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    빠르게 확인할 수 있는 핵심 질문들
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground">
                    카테고리별로 정리된 FAQ를 두 열로 배치해 스캔 속도를 높였습니다.
                </p>
            </header>
            <div className="grid gap-10 @[1024px]:grid-cols-2">
                {[leftColumn, rightColumn].map((column, columnIndex) => (
                    <ul key={columnIndex} className="space-y-8">
                        {column.map(item => (
                            <li key={item.question} className="space-y-3">
                                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                                <p className="text-sm text-muted-foreground @[1024px]:text-base">
                                    {item.answer}
                                </p>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}
