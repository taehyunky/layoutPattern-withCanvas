import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { useRef } from 'react';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

const fadeIn = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
};

export function HeroSplitScreen() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.9', 'end start'],
    });

    const mediaTranslate = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-background"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(99,102,241,0.18),transparent_45%)]" />

            <div className="mx-auto grid h-full max-w-7xl items-center gap-8 px-5 py-12 @[640px]:px-8 @[768px]:grid-cols-[3fr_2fr] @[768px]:gap-14 @[768px]:py-20 @[1024px]:px-16">
                <motion.div
                    {...fadeIn}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: [0.21, 1, 0.23, 1] }}
                    className="flex flex-col gap-8 @[768px]:order-1"
                >
                    <Badge
                        variant="outline"
                        className="w-fit gap-1.5 border-dashed px-3 py-1 text-[11px] uppercase tracking-[0.35em] @[640px]:text-xs"
                    >
                        Launch-ready hero kits
                    </Badge>
                    <div className="space-y-5 text-balance">
                        <h1 className="text-3xl font-semibold tracking-tight text-foreground @[640px]:text-4xl @[768px]:text-[56px] @[768px]:leading-[1.05] @[1024px]:text-[64px]">
                            Build split-screen hero stories in minutes.
                        </h1>
                        <p className="max-w-xl text-sm leading-6 text-muted-foreground @[640px]:text-base @[640px]:leading-7 @[768px]:text-lg">
                            Pair bold copy with immersive media. Configure device previews, overlay
                            treatments, and CTAs without leaving the canvas experience.
                        </p>
                    </div>
                    <div className="flex w-full flex-col items-stretch gap-3 @[640px]:flex-row @[640px]:flex-wrap @[640px]:items-center @[640px]:justify-start">
                        <Button size="lg" className="w-full gap-1.5 @[640px]:w-auto @[640px]:px-6">
                            Start composing
                            <ArrowRightIcon className="size-4" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full gap-1.5 @[640px]:w-auto @[640px]:px-6"
                        >
                            <PlayIcon className="size-4" />
                            Watch a demo
                        </Button>
                    </div>
                    <dl className="grid gap-4 text-sm text-muted-foreground @[768px]:grid-cols-2">
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
                            <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                                Layout variants
                            </dt>
                            <dd className="mt-2 text-2xl font-semibold text-foreground">12+</dd>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur">
                            <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                                Interactive regions
                            </dt>
                            <dd className="mt-2 text-2xl font-semibold text-foreground">
                                Drag &amp; snap
                            </dd>
                        </div>
                    </dl>
                </motion.div>

                <div className="@[768px]:order-2 @[768px]:pl-4">
                    <div className="mb-8 flex justify-center @[768px]:hidden">
                        <div className="w-full max-w-xs overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-primary/30 to-primary/50 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=880&q=80"
                                alt="Product canvas preview"
                                className="h-72 w-full object-cover"
                            />
                        </div>
                    </div>

                    <motion.div
                        style={{ y: mediaTranslate }}
                        className="relative hidden @[768px]:flex @[768px]:h-full @[768px]:items-center"
                    >
                        <div className="relative ml-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/40 shadow-2xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
                            <img
                                src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=880&q=80"
                                alt="Layered hero editor"
                                className="h-full w-full object-cover opacity-90"
                            />
                            <div className="absolute bottom-6 left-6 right-6 space-y-4 rounded-2xl border border-white/20 bg-black/40 p-6 text-white backdrop-blur-xl">
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                                        Canvas preview
                                    </p>
                                    <p className="text-lg font-semibold">Aurora Studio</p>
                                    <p className="text-sm text-white/70">
                                        Responsive hero typography and media pairing set in seconds.
                                    </p>
                                </div>
                                <div className="flex items-center justify-between text-xs uppercase text-white/70">
                                    <span>Live</span>
                                    <span>Syncing…</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
