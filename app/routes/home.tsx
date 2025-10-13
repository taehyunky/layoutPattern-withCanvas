import { useMemo, useState } from 'react';
import type { ComponentType } from 'react';
import {
    LayersIcon,
    LayoutDashboardIcon,
    MegaphoneIcon,
    PanelsTopLeftIcon,
    SparklesIcon,
} from 'lucide-react';

import type { Route } from './+types/home';
import { CanvasWorkspace } from '~/components/canvas/CanvasWorkspace';
import {
    PromptPreviewDialog,
    type PromptPreviewData,
} from '~/components/canvas/PromptPreviewDialog';
import {
    CtaCenteredSingle,
    CtaFeatureHighlights,
    CtaGridOptions,
    CtaInlineForm,
    CtaMediaBackground,
    CtaMultiStep,
    CtaSplitDual,
    CtaStickyBar,
    CtaTestimonial,
    CtaUrgencyBanner,
} from '~/components/sections/cta';
import {
    FeatureAccordion,
    FeatureBento,
    FeatureCarousel,
    FeatureFilterMatrix,
    FeatureIconGrid,
    FeatureTabs,
    FeatureToggleComparison,
    FeatureZigzag,
} from '~/components/sections/feature';
import {
    HeroAsymmetricGrid,
    HeroBentoGrid,
    HeroMedia,
    HeroMinimalCentered,
    HeroPromo,
    HeroScrollReveal,
    HeroSplitScreen,
} from '~/components/sections/hero';
import {
    NavbarCenteredLogo,
    NavbarClassic,
    NavbarFab,
    NavbarMegaMenu,
    NavbarSidebarDrawer,
    NavbarSplitSearch,
    NavbarTransparentScroll,
    NavbarTwoTier,
    NavbarUnderlineIndicator,
    NavbarWithBreadcrumb,
} from '~/components/sections/navbar';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Separator } from '~/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import {
    getPatternPrompt,
    getSectionPromptMetadata,
    type PatternPrompt,
} from '~/lib/pattern-prompts';
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

type PatternPromptDetails = PatternPrompt & {
    sectionId: string;
    sectionTitle?: string;
    key: string;
};

type SectionPattern = {
    id: string;
    title: string;
    component: ComponentType;
    promptId?: string | null;
    promptDetails: PatternPromptDetails | null;
};

type Section = {
    id: string;
    label: string;
    icon: ComponentType<{ className?: string }>;
    description: string;
    patternLabel: string;
    promptSectionId?: string;
    promptSectionTitle?: string;
    patterns: SectionPattern[];
};

export default function Home() {
    const sections = useMemo<Section[]>(() => {
        const promptSectionCache = new Map<string, ReturnType<typeof getSectionPromptMetadata>>();

        const resolvePromptSectionMeta = (sectionId?: string) => {
            if (!sectionId) return null;
            if (!promptSectionCache.has(sectionId)) {
                promptSectionCache.set(sectionId, getSectionPromptMetadata(sectionId));
            }
            return promptSectionCache.get(sectionId) ?? null;
        };

        const attachPromptDetails = (
            pattern: Omit<SectionPattern, 'promptDetails'>,
            promptSectionId?: string
        ): SectionPattern => {
            if (!promptSectionId || pattern.promptId === null) {
                return { ...pattern, promptDetails: null };
            }

            const promptKey = pattern.promptId ?? pattern.id;
            if (!promptKey) {
                return { ...pattern, promptDetails: null };
            }

            const promptMeta = getPatternPrompt(promptSectionId, promptKey);
            const sectionMeta = resolvePromptSectionMeta(promptSectionId);

            if (!promptMeta) {
                return { ...pattern, promptDetails: null };
            }

            return {
                ...pattern,
                promptDetails: {
                    ...promptMeta,
                    key: promptKey,
                    sectionId: promptSectionId,
                    sectionTitle: sectionMeta?.title,
                },
            };
        };

        const ctaPromptSectionId = 'cta-section';
        const featurePromptSectionId = 'feature-section-pattern';
        const heroPromptSectionId = 'hero-section-pattern';
        const navbarPromptSectionId = 'navbar-section';

        const ctaPatterns = [
            {
                id: 'cta-centered-single',
                title: 'Centered Primary CTA',
                component: CtaCenteredSingle,
                promptId: 'centered-cta-block-with-single-prominent-button',
            },
            {
                id: 'cta-split-dual',
                title: 'Split Dual Actions',
                component: CtaSplitDual,
                promptId: 'split-cta-with-dual-action-buttons',
            },
            {
                id: 'cta-urgency-banner',
                title: 'Urgency Banner',
                component: CtaUrgencyBanner,
                promptId: 'cta-banner-with-urgency-elements',
            },
            {
                id: 'cta-feature-highlights',
                title: 'Feature Highlights Card',
                component: CtaFeatureHighlights,
                promptId: 'cta-card-with-feature-highlights',
            },
            {
                id: 'cta-media-background',
                title: 'Media Background CTA',
                component: CtaMediaBackground,
                promptId: 'full-width-cta-with-background-image-video',
            },
            {
                id: 'cta-inline-form',
                title: 'Inline Form Subscribe',
                component: CtaInlineForm,
                promptId: 'inline-cta-with-form-input',
            },
            {
                id: 'cta-multi-step',
                title: 'Multi-Step Progress',
                component: CtaMultiStep,
                promptId: 'multi-step-cta-with-progress-indicator',
            },
            {
                id: 'cta-testimonial',
                title: 'Testimonial CTA',
                component: CtaTestimonial,
                promptId: 'social-proof-cta-with-testimonial',
            },
            {
                id: 'cta-sticky-bar',
                title: 'Sticky Bottom Bar',
                component: CtaStickyBar,
                promptId: 'sticky-bottom-cta-bar',
            },
            {
                id: 'cta-grid-options',
                title: 'Grid of Options',
                component: CtaGridOptions,
                promptId: 'cta-grid-with-multiple-options',
            },
        ].map(pattern => attachPromptDetails(pattern, ctaPromptSectionId));

        const featurePatterns = [
            {
                id: 'feature-icon-grid',
                title: 'Icon Feature Grid',
                component: FeatureIconGrid,
                promptId: 'three-column-icon-feature-grid-with-hover-states',
            },
            {
                id: 'feature-zigzag',
                title: 'Zigzag Feature Showcase',
                component: FeatureZigzag,
                promptId: 'alternating-image-text-feature-showcase-zigzag-layout',
            },
            {
                id: 'feature-tabs',
                title: 'Tabbed Feature Switcher',
                component: FeatureTabs,
                promptId: 'tabbed-feature-interface-with-content-switching',
            },
            {
                id: 'feature-bento',
                title: 'Bento Feature Mosaic',
                component: FeatureBento,
                promptId: 'bento-style-feature-mosaic-with-variable-card-sizes',
            },
            {
                id: 'feature-accordion',
                title: 'Feature Accordion',
                component: FeatureAccordion,
                promptId: 'accordion-feature-list-with-expandable-details',
            },
            {
                id: 'feature-carousel',
                title: 'Horizontal Feature Carousel',
                component: FeatureCarousel,
                promptId: 'horizontal-scrolling-feature-cards-carousel-slider',
            },
            {
                id: 'feature-toggle-comparison',
                title: 'Responsive Toggle Comparison',
                component: FeatureToggleComparison,
                promptId: 'split-screen-feature-comparison-with-toggle-switch',
            },
            {
                id: 'feature-filter-matrix',
                title: 'Filterable Feature Matrix',
                component: FeatureFilterMatrix,
                promptId: 'interactive-feature-matrix-with-filtering',
            },
        ].map(pattern => attachPromptDetails(pattern, featurePromptSectionId));

        const heroPatterns = [
            { id: 'hero-promo', title: 'Product Promo', component: HeroPromo, promptId: null },
            { id: 'hero-media', title: 'Media Spotlight', component: HeroMedia, promptId: null },
            {
                id: 'hero-split-screen',
                title: 'Split Screen Spotlight',
                component: HeroSplitScreen,
                promptId: 'full-viewport-centered-hero-with-split-screen-layout',
            },
            {
                id: 'hero-minimal-centered',
                title: 'Minimal Centered',
                component: HeroMinimalCentered,
                promptId: 'minimal-centered-hero-with-background-video-image-overlay',
            },
            {
                id: 'hero-asymmetric-grid',
                title: 'Asymmetric Grid',
                component: HeroAsymmetricGrid,
                promptId: 'asymmetric-grid-hero-with-floating-card-components',
            },
            {
                id: 'hero-bento-grid',
                title: 'Bento Grid Showcase',
                component: HeroBentoGrid,
                promptId: 'bento-grid-hero-with-multi-content-modules',
            },
            {
                id: 'hero-scroll-reveal',
                title: 'Scroll Reveal Depth',
                component: HeroScrollReveal,
                promptId: 'scroll-triggered-reveal-hero-with-layered-depth',
            },
        ].map(pattern => attachPromptDetails(pattern, heroPromptSectionId));

        const navbarPatterns = [
            {
                id: 'navbar-classic',
                title: 'Logo Left, Actions Right',
                component: NavbarClassic,
                promptId: 'horizontal-navigation-bar-with-logo-left-links-right',
            },
            {
                id: 'navbar-centered-logo',
                title: 'Centered Logo Split Navigation',
                component: NavbarCenteredLogo,
                promptId: 'centered-logo-navbar-with-split-navigation',
            },
            {
                id: 'navbar-mega-menu',
                title: 'Mega Menu Dropdown',
                component: NavbarMegaMenu,
                promptId: 'mega-menu-dropdown-navigation',
            },
            {
                id: 'navbar-sidebar-drawer',
                title: 'Hamburger with Drawer',
                component: NavbarSidebarDrawer,
                promptId: 'sidebar-navigation-hamburger-menu',
            },
            {
                id: 'navbar-transparent-scroll',
                title: 'Transparent to Solid Scroll',
                component: NavbarTransparentScroll,
                promptId: 'transparent-navbar-with-scroll-triggered-background',
            },
            {
                id: 'navbar-two-tier',
                title: 'Two-Tier Utility + Main Nav',
                component: NavbarTwoTier,
                promptId: 'two-tier-navigation-top-bar-main-nav',
            },
            {
                id: 'navbar-underline-indicator',
                title: 'Underline Active Indicator',
                component: NavbarUnderlineIndicator,
                promptId: 'inline-navigation-with-underline-indicators',
            },
            {
                id: 'navbar-split-search',
                title: 'Split Navigation with Search',
                component: NavbarSplitSearch,
                promptId: 'split-navigation-with-search-bar',
            },
            {
                id: 'navbar-with-breadcrumb',
                title: 'Navbar with Breadcrumb Trail',
                component: NavbarWithBreadcrumb,
                promptId: 'navbar-with-integrated-breadcrumb',
            },
            {
                id: 'navbar-fab',
                title: 'Floating Action Button Nav',
                component: NavbarFab,
                promptId: 'floating-action-button-fab-navigation',
            },
        ].map(pattern => attachPromptDetails(pattern, navbarPromptSectionId));

        return [
            {
                id: 'cta',
                label: 'CTA',
                icon: MegaphoneIcon,
                description: 'Conversion-focused call to actions',
                patternLabel: 'CTA pattern',
                promptSectionId: ctaPromptSectionId,
                promptSectionTitle:
                    resolvePromptSectionMeta(ctaPromptSectionId)?.title ?? undefined,
                patterns: ctaPatterns,
            },
            {
                id: 'feature',
                label: 'Features',
                icon: LayersIcon,
                description: 'Showcase product and capability highlights',
                patternLabel: 'Feature pattern',
                promptSectionId: featurePromptSectionId,
                promptSectionTitle:
                    resolvePromptSectionMeta(featurePromptSectionId)?.title ?? undefined,
                patterns: featurePatterns,
            },
            {
                id: 'hero',
                label: 'Hero',
                icon: SparklesIcon,
                description: 'Primary above-the-fold layouts',
                patternLabel: 'Hero variant',
                promptSectionId: heroPromptSectionId,
                promptSectionTitle:
                    resolvePromptSectionMeta(heroPromptSectionId)?.title ?? undefined,
                patterns: heroPatterns,
            },
            {
                id: 'navbar',
                label: 'Navigation',
                icon: PanelsTopLeftIcon,
                description: 'Top-of-experience navigation systems',
                patternLabel: 'Navigation pattern',
                promptSectionId: navbarPromptSectionId,
                promptSectionTitle:
                    resolvePromptSectionMeta(navbarPromptSectionId)?.title ?? undefined,
                patterns: navbarPatterns,
            },
            {
                id: 'placeholder',
                label: 'Coming soon',
                icon: LayoutDashboardIcon,
                description: 'Add more sections as you author patterns',
                patternLabel: 'Pattern preview',
                patterns: [],
            },
        ];
    }, []);

    const [activeSection, setActiveSection] = useState(sections[0]);
    const [promptPreview, setPromptPreview] = useState<PromptPreviewData | null>(null);
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
                                                {activeSection.patternLabel}
                                            </p>
                                            {!pattern.promptDetails ? (
                                                <p className="text-[11px] text-muted-foreground/60">
                                                    프롬프트가 아직 연결되지 않았어요
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                disabled={!pattern.promptDetails}
                                                onClick={() => {
                                                    if (!pattern.promptDetails) return;
                                                    setPromptPreview({
                                                        sectionId: pattern.promptDetails.sectionId,
                                                        sectionTitle:
                                                            pattern.promptDetails.sectionTitle ??
                                                            activeSection.label,
                                                        patternId: pattern.promptDetails.key,
                                                        patternTitle: pattern.title,
                                                        documentTitle: pattern.promptDetails.title,
                                                        prompt: pattern.promptDetails.prompt,
                                                        sourcePath:
                                                            pattern.promptDetails.sourcePath,
                                                        order: pattern.promptDetails.order,
                                                    });
                                                }}
                                            >
                                                프롬프트 보기
                                            </Button>
                                            <Button size="sm" variant="ghost">
                                                Inspect
                                            </Button>
                                        </div>
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
                <PromptPreviewDialog
                    open={Boolean(promptPreview)}
                    data={promptPreview}
                    onClose={() => setPromptPreview(null)}
                />
            </main>
        </div>
    );
}
