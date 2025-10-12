import { ArrowUpRightIcon, MonitorSmartphoneIcon, PaletteIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

const highlights = [
    {
        icon: MonitorSmartphoneIcon,
        label: 'Responsive previews',
    },
    {
        icon: PaletteIcon,
        label: 'Theme aware',
    },
    {
        icon: ArrowUpRightIcon,
        label: 'Export to code',
    },
];

export function HeroMedia() {
    return (
        <Card className="w-full max-w-[680px] gap-0 overflow-hidden border border-border/60 bg-background shadow-lg">
            <CardHeader className="gap-4 px-6 pt-8 pb-4 @[640px]:px-10 @[640px]:pt-10 @[640px]:pb-6">
                <Badge variant="outline" className="w-fit gap-1 border-dashed px-3 py-1">
                    Layer Toolkit
                </Badge>
                <div className="space-y-3">
                    <CardTitle className="text-2xl font-semibold tracking-tight @[480px]:text-3xl">
                        Swap hero layouts without leaving the canvas.
                    </CardTitle>
                    <CardDescription className="text-sm leading-6 text-muted-foreground @[480px]:text-base @[480px]:leading-7">
                        Generate polished hero sections with built-in variants, then push them
                        directly into your Remix routes.
                    </CardDescription>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    {highlights.map(({ icon: Icon, label }) => (
                        <span
                            key={label}
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1"
                        >
                            <Icon className="size-3.5" />
                            {label}
                        </span>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="relative overflow-hidden px-6 pb-8 @[640px]:px-10 @[640px]:pb-10">
                <div className="rounded-2xl border border-border/60 bg-muted p-5 shadow-inner @[640px]:p-6">
                    <div className="flex flex-col gap-5 @[640px]:gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-[11px] font-medium text-muted-foreground">
                                <span className="size-2 rounded-full bg-emerald-500" />
                                Preview: Desktop • Light
                            </div>
                            <h2 className="text-xl font-semibold tracking-tight @[480px]:text-2xl">
                                Unlock adaptive hero layouts
                            </h2>
                            <p className="text-sm leading-6 text-muted-foreground">
                                Position media blocks, headlines, and call-to-actions with smart
                                snapping.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 rounded-xl bg-background/80 p-5 shadow-sm @[640px]:p-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base font-medium @[480px]:text-lg">
                                    Component preview
                                </h3>
                                <p className="text-sm leading-6 text-muted-foreground">
                                    Compare hero modules side-by-side. Toggle device sizes and
                                    export JSX when you&apos;re ready.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <Button size="sm">Open Canvas</Button>
                                <Button variant="ghost" size="sm">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
