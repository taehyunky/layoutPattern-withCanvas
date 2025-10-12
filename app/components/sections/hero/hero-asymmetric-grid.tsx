import { motion } from 'framer-motion';
import { LineChartIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

export function HeroAsymmetricGrid() {
    return (
        <section
            className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-background px-5 py-14 @[640px]:px-10 @[768px]:px-12"
            aria-labelledby="asymmetric-hero-heading"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_55%)]" />

            <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 @[768px]:grid-cols-12 @[768px]:gap-8">
                <motion.div
                    className="col-span-1 flex flex-col gap-6 @[768px]:col-span-7"
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Badge
                        variant="secondary"
                        className="w-fit gap-2 bg-foreground text-background"
                    >
                        <SparklesIcon className="size-3.5" />
                        Hero orchestrator
                    </Badge>
                    <h1
                        id="asymmetric-hero-heading"
                        className="text-3xl font-bold tracking-tight text-foreground @[640px]:text-[40px] @[768px]:text-[52px] @[768px]:leading-[1.05]"
                    >
                        Orchestrate asymmetric hero layouts with layered motion.
                    </h1>
                    <p className="max-w-xl text-sm leading-6 text-muted-foreground @[640px]:text-base @[640px]:leading-7">
                        Mix typography with floating data cards, schedule reveal timings, and export
                        responsive grid templates directly into your Remix project.
                    </p>
                    <div className="flex flex-col gap-3 @[640px]:flex-row @[640px]:flex-wrap @[640px]:items-center">
                        <Button size="lg" className="w-full gap-2 @[640px]:w-auto @[640px]:px-6">
                            Generate layout
                            <SparklesIcon className="size-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full @[640px]:w-auto @[640px]:px-6">
                            Preview in canvas
                        </Button>
                    </div>
                </motion.div>

                <div className="col-span-1 grid grid-cols-1 gap-4 @[768px]:col-span-5 @[768px]:grid-cols-2">
                    <motion.div
                        className="col-span-1 @[768px]:col-span-2 rounded-3xl border border-white/20 bg-white/[0.08] p-6 text-white shadow-[0_25px_60px_-12px_rgba(59,68,246,0.35)] backdrop-blur-2xl"
                        style={{ backgroundImage: 'linear-gradient(135deg,#3523ff26,#3523ff4d)' }}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                            Live timeline
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold">Staggered CTA reveals</h3>
                        <p className="mt-2 text-sm text-white/70">
                            Auto-layer hero elements with 200ms offsets for cinematic entry.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/70">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1">
                                <LineChartIcon className="size-3.5" />
                                Conversion boost +18%
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1">
                                <ShieldCheckIcon className="size-3.5" />
                                Accessibility safe
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative col-span-1 flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-inner"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    >
                        <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Grid label
                        </span>
                        <p className="text-sm text-muted-foreground">
                            Assign hero modules to the 12-column system with snap hints.
                        </p>
                        <div className="mt-auto h-28 rounded-xl border border-dashed border-border/70 bg-muted/40" />
                    </motion.div>

                    <motion.div
                        className="relative col-span-1 flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 shadow-inner"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    >
                        <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Floating cards
                        </span>
                        <p className="text-sm text-muted-foreground">
                            Apply glassmorphism presets and configure hover lift effects.
                        </p>
                        <div className="mt-auto space-y-2">
                            <div className="h-3 rounded-full bg-muted" />
                            <div className="h-3 w-3/4 rounded-full bg-muted" />
                            <div className="h-3 w-1/2 rounded-full bg-muted" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-muted-foreground @[768px]:hidden">
                <div className="rounded-2xl border border-border/60 bg-background/75 p-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                        Layout guidance
                    </p>
                    <p className="mt-2 leading-6">
                        Tablets collapse into a 60:40 stack, while mobile devices convert to a
                        single column with cards moving beneath the primary copy.
                    </p>
                </div>
            </div>
        </section>
    );
}
