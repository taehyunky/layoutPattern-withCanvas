import { CheckCircle2Icon, SparklesIcon, UsersIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

export function HeroBentoGrid() {
    return (
        <section
            className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-background px-5 py-14 @[640px]:px-10 @[1024px]:px-14"
            aria-labelledby="bento-hero-heading"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,68,246,0.12),_transparent_55%)]" />

            <div className="mx-auto flex max-w-6xl flex-col gap-10">
                <div className="flex flex-col gap-4 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                    <div className="flex flex-col gap-3">
                        <Badge
                            variant="outline"
                            className="w-fit gap-2 border-dashed px-3 py-1 text-xs uppercase tracking-[0.35em]"
                        >
                            Bento hero presets
                        </Badge>
                        <h1
                            id="bento-hero-heading"
                            className="text-3xl font-semibold tracking-tight text-foreground @[640px]:text-4xl @[768px]:text-[52px] @[768px]:leading-[1.05]"
                        >
                            Arrange multi-module hero canvases effortlessly.
                        </h1>
                    </div>
                    <Button size="lg" className="gap-1.5 self-start @[640px]:px-6 @[768px]:self-auto">
                        Launch designer
                        <SparklesIcon className="size-4" />
                    </Button>
                </div>

                <div className="grid gap-4 @[420px]:grid-cols-2 @[768px]:grid-cols-4 @[768px]:gap-5">
                    <div className="group relative col-span-1 row-span-1 flex flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6 shadow-[0_32px_80px_-24px_rgba(59,68,246,0.35)] @[420px]:p-8 @[768px]:col-span-2 @[768px]:row-span-2">
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                                Headline module
                            </p>
                            <h2 className="text-3xl font-semibold text-primary-foreground @[768px]:text-4xl">
                                Hero stories that feel crafted, not generated.
                            </h2>
                            <p className="text-sm text-primary-foreground/80">
                                Build layouts with modular presets. Combine imagery, stats, CTA
                                stacks, and testimonial loops into one cohesive hero state.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/70">
                            <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1">
                                <SparklesIcon className="size-3.5" />
                                Intelligent grouping
                            </span>
                            <span className="rounded-full bg-primary/20 px-3 py-1">
                                Responsive ready
                            </span>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 @[420px]:p-7">
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Social proof
                        </p>
                        <div className="flex -space-x-3">
                            {[0, 1, 2, 3].map(i => (
                                <div
                                    key={`avatar-${i}`}
                                    className="size-12 rounded-full border-2 border-background bg-gradient-to-br from-muted to-muted/60"
                                />
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Trusted by over 180 design-led teams scaling marketing launches.
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-xs font-medium text-foreground">
                            <UsersIcon className="size-3.5" />
                            Live collaboration enabled
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 @[420px]:p-7">
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Metrics
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-3xl font-semibold text-foreground">+32%</p>
                                <p className="text-xs text-muted-foreground">Launch velocity</p>
                            </div>
                            <div>
                                <p className="text-3xl font-semibold text-foreground">6x</p>
                                <p className="text-xs text-muted-foreground">Faster iteration</p>
                            </div>
                        </div>
                        <div className="mt-auto space-y-2 text-xs text-muted-foreground">
                            <p className="flex items-center gap-2">
                                <CheckCircle2Icon className="size-3.5 text-emerald-500" />
                                Accessibility tuned
                            </p>
                            <p className="flex items-center gap-2">
                                <CheckCircle2Icon className="size-3.5 text-sky-500" />
                                Auto responsive
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-muted/70 p-5 @[420px]:p-7">
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Media slot
                        </p>
                        <div className="h-32 rounded-2xl border border-dashed border-border/70 bg-background/80" />
                        <p className="text-xs text-muted-foreground">
                            Drop product renders or brand footage. Automatically adapts to aspect
                            ratio.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid gap-4 @[420px]:grid-cols-2 @[768px]:hidden">
                <div className="rounded-2xl border border-border/60 bg-background/75 p-4 text-sm text-muted-foreground">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                        Mobile guidance
                    </p>
                    <p className="mt-2 leading-6">
                        Modules collapse into a vertical stack with reduced gaps (16-20px). Primary
                        headline module stays first with increased padding to maintain emphasis.
                    </p>
                </div>
            </div>
        </section>
    );
}
