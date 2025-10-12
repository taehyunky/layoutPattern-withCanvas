import { motion } from 'framer-motion';

import { Button } from '~/components/ui/button';

const fadeStack = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

export function HeroMinimalCentered() {
    return (
        <section
            className="relative isolate overflow-hidden rounded-3xl"
            aria-labelledby="minimal-hero-heading"
        >
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                    alt="Immersive digital canvas"
                    className="block h-full w-full object-cover @[768px]:hidden"
                    loading="lazy"
                />
                <video
                    className="hidden h-full w-full object-cover @[768px]:block"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-holographic-ui-1080p.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/65 to-black/75" />
            </div>

            <div
                className="relative z-10 mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center gap-7 px-5 py-20 text-center text-white @[640px]:px-10"
                style={{
                    paddingTop: 'calc(6rem + env(safe-area-inset-top,0px))',
                    paddingBottom: 'calc(6rem + env(safe-area-inset-bottom,0px))',
                }}
            >
                <motion.span
                    {...fadeStack}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.4em] @[640px]:text-xs"
                >
                    Layer Canvas
                </motion.span>

                <motion.h1
                    {...fadeStack}
                    transition={{ ...fadeStack.transition, delay: 0.08 }}
                    id="minimal-hero-heading"
                    className="text-3xl font-semibold tracking-tight leading-[1.12] @[640px]:text-4xl @[768px]:text-[52px]"
                >
                    Design immersive hero takeovers with a single click.
                </motion.h1>

                <motion.p
                    {...fadeStack}
                    transition={{ ...fadeStack.transition, delay: 0.16 }}
                    className="max-w-2xl text-sm leading-6 text-white/80 @[640px]:text-base @[640px]:leading-7"
                >
                    Drop your brand headline and CTA, choose a background motion preset, and preview
                    across breakpoints. No timeline editing required.
                </motion.p>

                <motion.div
                    {...fadeStack}
                    transition={{ ...fadeStack.transition, delay: 0.24 }}
                    className="flex w-full flex-col gap-3 @[640px]:w-auto @[640px]:flex-row @[640px]:items-center"
                >
                    <Button
                        size="lg"
                        className="w-full bg-white text-black hover:bg-white/90 @[640px]:w-auto @[640px]:px-6"
                    >
                        Start a session
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="w-full text-white hover:bg-white/10 @[640px]:w-auto @[640px]:px-6"
                    >
                        Explore templates
                    </Button>
                </motion.div>

                <motion.div
                    {...fadeStack}
                    transition={{ ...fadeStack.transition, delay: 0.32 }}
                    className="flex flex-wrap items-center justify-center gap-5 text-[10px] uppercase tracking-[0.32em] text-white/70 @[640px]:text-xs"
                >
                    <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-400" />
                        Live Preview Sync
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-sky-400" />
                        Adaptive ratio tooling
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-purple-400" />
                        Export-ready overlays
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
