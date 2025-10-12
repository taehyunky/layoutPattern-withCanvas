import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { Button } from '~/components/ui/button';

export function HeroScrollReveal() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            setIsReducedMotion(query.matches || isMobile);
        };

        handleChange();
        query.addEventListener('change', handleChange);
        return () => query.removeEventListener('change', handleChange);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', isReducedMotion ? '0%' : '30%']
    );
    const midgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', isReducedMotion ? '0%' : '20%']
    );
    const foregroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', isReducedMotion ? '0%' : '12%']
    );

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-background px-5 py-16 @[640px]:px-10"
            aria-labelledby="scroll-hero-heading"
        >
            <motion.div
                style={{ y: backgroundY }}
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]"
            />

            <motion.div
                style={{ y: midgroundY }}
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-br from-transparent via-primary/10 to-transparent"
            />

            <motion.div
                style={{ y: foregroundY }}
                className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center"
            >
                <div className="h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
            </motion.div>

            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-0 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    className="inline-flex items-center rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-muted-foreground"
                >
                    Scroll synchronized
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    id="scroll-hero-heading"
                    className="text-3xl font-semibold tracking-tight text-foreground @[640px]:text-4xl @[768px]:text-[58px]"
                >
                    Engage visitors with layered hero reveals tuned to scroll velocity.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="max-w-2xl text-sm leading-6 text-muted-foreground @[640px]:text-base @[640px]:leading-7 @[768px]:text-lg"
                >
                    Layer ambient gradients, oversized typography, and call-to-action clusters.
                    Configure parallax depth and intersection triggers without custom scripting.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="flex w-full flex-col gap-3 @[640px]:w-auto @[640px]:flex-row @[640px]:flex-wrap @[640px]:items-center @[640px]:justify-center"
                >
                    <Button size="lg" className="w-full @[640px]:w-auto @[640px]:px-6">
                        Enable parallax mode
                    </Button>
                    <Button size="lg" variant="outline" className="w-full @[640px]:w-auto @[640px]:px-6">
                        View interaction docs
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="relative mt-8 flex w-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-8 text-left shadow-lg"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        Timeline
                    </p>
                    <div className="flex flex-col gap-6 text-sm text-muted-foreground">
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
                                00:00 – Anchor headline
                            </p>
                            <p>Full opacity + scale-in FOV</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
                                00:04 – CTA cascade
                            </p>
                            <p>Individual button lift, shadow deepening</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
                                00:08 – Ambient glass cards
                            </p>
                            <p>Offset parallax with depth blur</p>
                        </div>
                    </div>
                </motion.div>

                <div className="w-full rounded-2xl border border-border/60 bg-background/75 p-4 text-sm text-muted-foreground @[640px]:hidden">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                        Mobile guidance
                    </p>
                    <p className="mt-2 leading-6">
                        Parallax motion is minimized on mobile for smoother performance. Layers
                        settle into a stacked composition with headline and CTA prioritised.
                    </p>
                </div>
            </div>
        </section>
    );
}
