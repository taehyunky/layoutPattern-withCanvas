import { useState } from 'react';

const checklist = [
    { label: '패턴 문서 작성 완료', description: '문서 규칙과 넘버링이 올바로 적용됐는지 확인합니다.' },
    { label: '프롬프트 동기화 실행', description: '`npm run sync-prompts` 명령으로 JSON을 업데이트합니다.' },
    { label: '캔버스 QA 검수', description: '데스크톱/모바일 뷰에서 여백과 인터랙션을 검토합니다.' },
    { label: '전환 지표 목표 설정', description: '실험 목표를 기록하고 추적 대시보드에 연결합니다.' },
];

export function HowChecklist() {
    const [completed, setCompleted] = useState<string[]>([checklist[0]!.label]);

    const toggle = (label: string) => {
        setCompleted(prev =>
            prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
        );
    };

    return (
        <section className="rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg @[1024px]:p-12">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">체크리스트</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
                진행 상황에 따라 항목을 완료로 표시하세요. 모든 항목이 체크되면 배포할 준비가 끝난
                것입니다.
            </p>
            <ul className="mt-6 space-y-4">
                {checklist.map(item => {
                    const isDone = completed.includes(item.label);
                    return (
                        <li key={item.label} className="flex items-start gap-4">
                            <button
                                type="button"
                                onClick={() => toggle(item.label)}
                                className={`mt-1 flex size-8 items-center justify-center rounded-full border border-border/60 transition focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                                    isDone ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground'
                                }`}
                                aria-pressed={isDone}
                            >
                                {isDone ? '✓' : ''}
                            </button>
                            <div>
                                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
