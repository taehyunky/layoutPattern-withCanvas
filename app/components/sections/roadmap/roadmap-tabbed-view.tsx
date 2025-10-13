import { useState } from 'react';
import { Progress } from '~/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

type StageKey = 'shipped' | 'development' | 'planned';

const roadmapStages: Record<StageKey, Array<{ title: string; description: string; eta?: string; progress?: number }>> =
    {
        shipped: [
            {
                title: 'AI Snippets',
                description: 'Generate slide-ready copy with contextual tone controls.',
            },
            {
                title: 'Canvas Permissions',
                description: 'Granular access roles for guest reviewers.',
            },
        ],
        development: [
            {
                title: 'Analytics Alerts',
                description: 'Notify teams when KPIs move outside thresholds.',
                eta: 'Target: June 2024',
                progress: 65,
            },
            {
                title: 'Figma Sync 2.0',
                description: 'Two-way binding between design tokens and components.',
                eta: 'Target: July 2024',
                progress: 40,
            },
        ],
        planned: [
            {
                title: 'Offline canvas mode',
                description: 'Capture feedback without network connectivity.',
                eta: 'Exploration begins Q3',
            },
            {
                title: 'Custom AI models',
                description: 'Bring your own model or connect to private endpoints.',
                eta: 'Research sprint Q4',
            },
        ],
    };

export function RoadmapTabbedView() {
    const [value, setValue] = useState<StageKey>('shipped');

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 @[768px]:text-left text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    What's next
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    진행 단계별로 로드맵을 확인하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    최근 출시, 개발 중, 계획 중인 항목을 탭에서 전환합니다.
                </p>
            </header>
            <Tabs
                value={value}
                onValueChange={val => setValue(val as StageKey)}
                defaultValue="shipped"
                className="space-y-6"
            >
                <TabsList className="w-full justify-start overflow-x-auto rounded-2xl border border-border/60 bg-background/80 p-1">
                    <TabsTrigger value="shipped">Recently Shipped</TabsTrigger>
                    <TabsTrigger value="development">In Development</TabsTrigger>
                    <TabsTrigger value="planned">Coming Soon</TabsTrigger>
                </TabsList>
                {(Object.keys(roadmapStages) as StageKey[]).map(stage => (
                    <TabsContent key={stage} value={stage}>
                        <div className="space-y-4">
                            {roadmapStages[stage].map(item => (
                                <article
                                    key={item.title}
                                    className="space-y-3 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                        {item.eta && (
                                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                                {item.eta}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                    {typeof item.progress === 'number' && (
                                        <div className="space-y-2">
                                            <Progress value={item.progress} className="h-2" />
                                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                                {item.progress}% complete
                                            </span>
                                        </div>
                                    )}
                                </article>
                            ))}
                            {roadmapStages[stage].length === 0 && (
                                <div className="rounded-2xl border border-dashed border-border/60 p-6 text-center text-sm text-muted-foreground">
                                    Nothing in this stage right now.
                                </div>
                            )}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
