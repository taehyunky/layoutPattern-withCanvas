import { useState } from 'react';
import { ListFilterIcon } from 'lucide-react';

const allFeatures = [
    { feature: 'Real-time co-editing', canvas: 'Unlimited teammates', competitor: 'Limited to 5' },
    { feature: 'Pattern library', canvas: 'AI-assisted', competitor: 'Manual templates' },
    { feature: 'Localization', canvas: '12 languages', competitor: '3 languages' },
    { feature: 'Automation', canvas: 'Workflow builder', competitor: 'Manual reminders' },
    { feature: 'Analytics', canvas: 'Event-level insights', competitor: 'Weekly exports' },
    { feature: 'Role-based access', canvas: 'Granular', competitor: 'Viewer or Editor' },
    { feature: 'Integrations', canvas: '30+ native apps', competitor: 'Zapier only' },
    { feature: 'Security', canvas: 'SOC2, ISO 27001', competitor: 'SOC2 pending' },
    { feature: 'Support', canvas: '24/5 + CSM', competitor: 'Ticket only' },
    { feature: 'Roadmap access', canvas: 'Partner program', competitor: 'Quarterly updates' },
];

export function ComparisonExpandableDetailed() {
    const [expanded, setExpanded] = useState(false);
    const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

    const visibleFeatures = expanded ? allFeatures : allFeatures.slice(0, 5);
    const filteredFeatures = showDifferencesOnly
        ? visibleFeatures.filter(feature => feature.canvas !== feature.competitor)
        : visibleFeatures;

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Detailed breakdown
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        핵심 기능부터 전체 목록까지 단계적으로 비교하세요
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        기본적으로 상위 5개 항목을 보여주고, 필요 시 전체 목록을 펼칠 수 있습니다.
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <ListFilterIcon className="size-4" />
                    {expanded ? 'Showing full list' : 'Showing top features'}
                </div>
            </header>
            <div className="flex flex-wrap items-center gap-3 text-sm">
                <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary/40 hover:text-primary">
                    <input
                        type="checkbox"
                        checked={showDifferencesOnly}
                        onChange={event => setShowDifferencesOnly(event.target.checked)}
                        className="size-4"
                    />
                    Show only differences
                </label>
                <button
                    type="button"
                    onClick={() => setExpanded(prev => !prev)}
                    className="rounded-full border border-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    {expanded ? 'Collapse list' : 'See all features'}
                </button>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-border/60">
                <table className="min-w-[640px] w-full border-collapse text-left">
                    <thead className="bg-muted/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        <tr>
                            <th className="px-6 py-4 text-foreground">Feature</th>
                            <th className="px-6 py-4 text-primary">Canvas</th>
                            <th className="px-6 py-4 text-foreground">Competitor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFeatures.map(feature => (
                            <tr key={feature.feature} className="border-t border-border/40">
                                <th className="px-6 py-4 text-sm font-medium text-foreground">
                                    {feature.feature}
                                </th>
                                <td className="px-6 py-4 text-sm font-semibold text-primary">
                                    {feature.canvas}
                                </td>
                                <td className="px-6 py-4 text-sm text-muted-foreground">
                                    {feature.competitor}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!expanded && (
                <div className="rounded-2xl border border-border/60 bg-background/90 px-5 py-4 text-sm text-muted-foreground">
                    상위 5개 기능만 표시 중입니다. 전체 목록을 보려면 <strong>See all features</strong>를
                    클릭하세요.
                </div>
            )}
        </section>
    );
}
