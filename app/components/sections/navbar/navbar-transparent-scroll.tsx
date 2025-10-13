import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function NavbarTransparentScroll() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleScrollState = () => setIsScrolled(value => !value);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-slate-950 text-white shadow-xl @container">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(140%_120%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(160%_140%_at_20%_120%,rgba(236,72,153,0.2),transparent)]" />
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            <div className="relative min-h-[340px]">
                <header
                    className={`sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-5 transition-all duration-300 @[768px]:px-10 ${
                        isScrolled
                            ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur'
                            : 'bg-transparent'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                                isScrolled ? 'bg-primary text-slate-950' : 'bg-white/10 text-white'
                            }`}
                        >
                            Nova
                        </span>
                        <span
                            className={`text-xs uppercase tracking-[0.25em] ${
                                isScrolled ? 'text-white/80' : 'text-white/60'
                            }`}
                        >
                            Product
                        </span>
                    </div>
                    <div className="hidden items-center gap-6 text-sm font-medium @[960px]:flex">
                        {['Overview', 'Features', 'Use cases', 'Pricing'].map(label => (
                            <button
                                key={label}
                                type="button"
                                className={`transition-colors duration-200 ${
                                    isScrolled ? 'hover:text-primary' : 'hover:text-white'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                        <Button
                            size="sm"
                            variant="secondary"
                            className={`border ${
                                isScrolled
                                    ? 'border-primary/40 bg-primary/10 text-primary'
                                    : 'border-white/20 bg-white/10 text-white'
                            }`}
                        >
                            Request access
                        </Button>
                    </div>
                    <div className="flex items-center gap-3 @[960px]:hidden">
                        <button
                            type="button"
                            className={`inline-flex size-11 items-center justify-center rounded-full border transition ${
                                isScrolled
                                    ? 'border-white/20 bg-white/5'
                                    : 'border-white/30 bg-white/10'
                            }`}
                            onClick={toggleScrollState}
                            aria-label="Toggle scroll state preview"
                        >
                            {isScrolled ? <ArrowDown className="size-5" /> : <ArrowUpRight className="size-5" />}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(value => !value)}
                            className={`inline-flex size-11 items-center justify-center rounded-full border transition ${
                                isScrolled
                                    ? 'border-white/20 bg-white/5'
                                    : 'border-white/30 bg-white/10'
                            }`}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="transparent-navbar-mobile"
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </header>

                <div className="relative px-6 pb-16 pt-6 @[768px]:px-10">
                    <div className="max-w-xl space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                            Above the fold
                        </p>
                        <h2 className="text-3xl font-semibold leading-tight @[480px]:text-4xl">
                            Transparent hero nav transitions into a high-contrast shell on scroll.
                        </h2>
                        <p className="text-sm text-white/70 @[480px]:text-base">
                            Use intersection observers to switch between translucent and solid states.
                            Adjust text color tokens and optional height reduction for clarity after
                            the hero segment.
                        </p>
                    </div>

                    <div className="mt-10 hidden @[960px]:grid @[960px]:grid-cols-2 @[960px]:gap-10">
                        <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-white/60">
                                Initial state
                            </p>
                            <p className="text-sm text-white/80">
                                Nav overlays hero imagery with transparent background, light text,
                                and optional drop shadow suppression.
                            </p>
                        </div>
                        <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-white/60">Scrolled</p>
                            <p className="text-sm text-white/80">
                                Solid background, subtle shadow, text color inversion, optional height
                                reduction from 80px to 64px.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen ? (
                <div
                    id="transparent-navbar-mobile"
                    className="border-t border-white/10 bg-slate-950/95 px-6 py-4 @[960px]:hidden"
                >
                    <div className="flex flex-col gap-3 text-sm">
                        {['Overview', 'Features', 'Use cases', 'Pricing'].map(item => (
                            <button
                                key={item}
                                type="button"
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white/80"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>{item}</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">
                                    View
                                </span>
                            </button>
                        ))}
                        <Button className="w-full">Request access</Button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
