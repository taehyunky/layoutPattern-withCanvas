import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import { LayoutDashboardIcon, SparklesIcon } from 'lucide-react';

import type { Route } from './+types/home';
import { CanvasWorkspace } from '~/components/canvas/CanvasWorkspace';
import {
    HeroAsymmetricGrid,
    HeroBentoGrid,
    HeroMedia,
    HeroMinimalCentered,
    HeroPromo,
    HeroScrollReveal,
    HeroSplitScreen,
} from '~/components/sections/hero';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Separator } from '~/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { cn } from '~/lib/utils';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Canvas Layout Viewer' },
        {
            name: 'description',
            content: 'Compare layout patterns on a zoomable canvas',
        },
    ];
}

export default function Home() {
    const sections = useMemo(
        () => [
            {
                id: 'hero',
                label: 'Hero',
                icon: SparklesIcon,
                description: 'Primary above-the-fold layouts',
                patterns: [
                    { id: 'hero-promo', title: 'Product Promo', component: HeroPromo },
                    { id: 'hero-media', title: 'Media Spotlight', component: HeroMedia },
                    {
                        id: 'hero-split-screen',
                        title: 'Split Screen Spotlight',
                        component: HeroSplitScreen,
                    },
                    {
                        id: 'hero-minimal-centered',
                        title: 'Minimal Centered',
                        component: HeroMinimalCentered,
                    },
                    {
                        id: 'hero-asymmetric-grid',
                        title: 'Asymmetric Grid',
                        component: HeroAsymmetricGrid,
                    },
                    {
                        id: 'hero-bento-grid',
                        title: 'Bento Grid Showcase',
                        component: HeroBentoGrid,
                    },
                    {
                        id: 'hero-scroll-reveal',
                        title: 'Scroll Reveal Depth',
                        component: HeroScrollReveal,
                    },
                ],
            },
            {
                id: 'placeholder',
                label: 'Coming soon',
                icon: LayoutDashboardIcon,
                description: 'Add more sections as you author patterns',
                patterns: [] as { id: string; title: string; component: ComponentType }[],
            },
        ],
        []
    );

    const [activeSection, setActiveSection] = useState(sections[0]);
    const DESKTOP_PREVIEW_WIDTH = 1440;
    const MOBILE_PREVIEW_WIDTH = 390;
    const PREVIEW_SAFE_GUTTER = 24;
    const DESKTOP_COLUMN_WIDTH = DESKTOP_PREVIEW_WIDTH + PREVIEW_SAFE_GUTTER * 2;
    const MOBILE_COLUMN_WIDTH = MOBILE_PREVIEW_WIDTH + PREVIEW_SAFE_GUTTER * 2;

    return (
        <div className="flex h-dvh min-h-[720px]">
            <aside className="flex w-72 flex-col border-r bg-sidebar p-4">
                <header className="mb-6 space-y-2">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Sections
                    </p>
                    <h1 className="text-lg font-semibold">Layout canvas</h1>
                </header>
                <ScrollArea className="flex-1">
                    <div className="space-y-3 pr-2">
                        {sections.map(section => {
                            const Icon = section.icon;
                            const isActive = activeSection.id === section.id;

                            return (
                                <button
                                    key={section.id}
                                    type="button"
                                    onClick={() => setActiveSection(section)}
                                    className={cn(
                                        'w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-left transition-colors hover:bg-accent',
                                        isActive && 'border-primary/50 bg-primary/10'
                                    )}
                                >
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Icon className="size-4" />
                                        {section.label}
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {section.description}
                                    </p>
                                    {isActive && (
                                        <Badge variant="secondary" className="mt-3">
                                            {section.patterns.length} patterns
                                        </Badge>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </ScrollArea>
                <Separator className="my-4" />
                <div className="space-y-3 rounded-xl border border-dashed border-border/70 bg-background/70 p-4 text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">Add new section</p>
                    <p>Drop upcoming layout patterns here to review on the canvas.</p>
                    <Button size="sm" variant="outline" className="w-full justify-start gap-2">
                        + New section
                    </Button>
                </div>
            </aside>

            <main className="flex flex-1 flex-col overflow-hidden bg-muted/20">
                <div className="flex items-center justify-between border-b bg-background px-8 py-4">
                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold">{activeSection.label}</h2>
                        <p className="text-sm text-muted-foreground">{activeSection.description}</p>
                    </div>
                    <Tabs defaultValue="desktop" className="w-fit">
                        <TabsList>
                            <TabsTrigger value="desktop">Desktop</TabsTrigger>
                            <TabsTrigger value="tablet">Tablet</TabsTrigger>
                            <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        </TabsList>
                        <TabsContent value="desktop" className="hidden" />
                        <TabsContent value="tablet" className="hidden" />
                        <TabsContent value="mobile" className="hidden" />
                    </Tabs>
                </div>

                <CanvasWorkspace className="flex-1">
                    {activeSection.patterns.length ? (
                        activeSection.patterns.map(pattern => {
                            const Component = pattern.component;
                            return (
                                <section
                                    key={pattern.id}
                                    className="flex min-w-[2000px] flex-col gap-6 rounded-3xl border border-border/70 bg-background/95 p-6 shadow-xl"
                                >
                                    <header className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                                {pattern.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground/70">
                                                Hero variant
                                            </p>
                                        </div>
                                        <Button size="sm" variant="ghost">
                                            Inspect
                                        </Button>
                                    </header>
                                    <div
                                        className="grid gap-6"
                                        style={{
                                            gridTemplateColumns: `${DESKTOP_COLUMN_WIDTH}px ${MOBILE_COLUMN_WIDTH}px`,
                                        }}
                                    >
                                        <div className="space-y-4 rounded-2xl border border-border/60 bg-background/95 p-6">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span className="font-medium uppercase tracking-widest text-muted-foreground/70">
                                                    Desktop
                                                </span>
                                                <span>{DESKTOP_PREVIEW_WIDTH}px</span>
                                            </div>
                                            <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
                                                <div
                                                    className="mx-auto @container"
                                                    style={{ width: `${DESKTOP_PREVIEW_WIDTH}px` }}
                                                >
                                                    <Component />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 rounded-2xl border border-border/60 bg-background/95 p-6">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span className="font-medium uppercase tracking-widest text-muted-foreground/70">
                                                    Mobile
                                                </span>
                                                <span>{MOBILE_PREVIEW_WIDTH}px</span>
                                            </div>
                                            <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
                                                <div
                                                    className="mx-auto @container"
                                                    style={{ width: `${MOBILE_PREVIEW_WIDTH}px` }}
                                                >
                                                    <Component />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <p className="rounded-xl border border-dashed border-border/60 bg-background/70 px-6 py-4 text-sm text-muted-foreground">
                                No patterns yet. Start by importing TSX demos for this section.
                            </p>
                        </div>
                    )}
                </CanvasWorkspace>
            </main>
        </div>
    );
}
