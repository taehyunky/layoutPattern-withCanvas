import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

type CompetitorComparison = {
    id: string;
    name: string;
    metrics: Array<{ feature: string; ours: string; competitor: string }>;
};

const comparisons: CompetitorComparison[] = [
    {
        id: 'atlas',
        name: 'Atlas Suite',
        metrics: [
            { feature: 'Implementation time', ours: '2 weeks', competitor: '6 weeks' },
            { feature: 'AI automation', ours: 'Native', competitor: 'Add-on' },
            { feature: 'Security', ours: 'SOC2 + SSO', competitor: 'SSO only' },
            { feature: 'Success manager', ours: 'Included', competitor: 'Unavailable' },
        ],
    },
    {
        id: 'bright',
        name: 'BrightCollab',
        metrics: [
            { feature: 'Design system sync', ours: 'One-click', competitor: 'Manual import' },
            { feature: 'Realtime editing', ours: 'Unlimited', competitor: '5 users' },
            { feature: 'Analytics granularity', ours: 'Event-level', competitor: 'Weekly summary' },
            { feature: 'Compliance', ours: 'GDPR, SOC2', competitor: 'GDPR only' },
        ],
    },
    {
        id: 'nova',
        name: 'NovaWorks',
        metrics: [
            { feature: 'Custom integrations', ours: 'Marketplace + API', competitor: 'Request only' },
            { feature: 'Pricing transparency', ours: 'Public tiers', competitor: 'Quote only' },
            { feature: 'Localization', ours: '12 languages', competitor: '3 languages' },
            { feature: 'Support hours', ours: '24/5', competitor: 'Business hours' },
        ],
    },
];

export function ComparisonTabbedCompetitor() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[1024px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Choose a competitor
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    탭을 전환하며 경쟁사별 비교 결과를 확인하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    우리 제품은 항상 기준 열로 고정되고, 탭을 전환하면 상대 열이 바뀝니다.
                </p>
            </header>
            <Tabs defaultValue={comparisons[0].id} className="space-y-6">
                <TabsList className="w-full justify-start overflow-x-auto rounded-2xl border border-border/60 bg-background/80 p-1">
                    {comparisons.map(comparison => (
                        <TabsTrigger
                            key={comparison.id}
                            value={comparison.id}
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                            Canvas vs {comparison.name}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {comparisons.map(comparison => (
                    <TabsContent key={comparison.id} value={comparison.id}>
                        <div className="overflow-x-auto rounded-3xl border border-border/60">
                            <table className="min-w-[640px] w-full border-collapse text-left">
                                <thead className="bg-muted/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    <tr>
                                        <th className="px-6 py-4 text-foreground">Feature</th>
                                        <th className="px-6 py-4 text-primary">Canvas</th>
                                        <th className="px-6 py-4 text-foreground">{comparison.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.metrics.map(metric => (
                                        <tr key={metric.feature} className="border-t border-border/40">
                                            <th className="px-6 py-4 text-sm font-medium text-foreground">
                                                {metric.feature}
                                            </th>
                                            <td className="px-6 py-4 text-sm font-semibold text-primary">
                                                {metric.ours}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted-foreground">
                                                {metric.competitor}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
