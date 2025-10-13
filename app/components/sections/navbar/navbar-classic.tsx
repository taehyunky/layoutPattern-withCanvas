import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const primaryLinks = ['Features', 'Pricing', 'Templates', 'Resources'];

export function NavbarClassic() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-slate-100 shadow-lg @container">
            <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,rgba(148,163,184,0.25),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(140%_140%_at_90%_-10%,rgba(37,99,235,0.32),transparent)]" />
            </div>

            <nav className="relative flex items-center justify-between px-6 py-4 @[640px]:px-8 @[960px]:px-12">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow @[768px]:size-11">
                        LK
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold uppercase tracking-wide text-white">
                            LumenKit
                        </span>
                        <span className="hidden text-xs uppercase tracking-[0.2em] text-white/60 @[640px]:block">
                            Experience Studio
                        </span>
                    </div>
                </div>

                <div className="hidden items-center gap-6 text-sm font-medium @[768px]:flex">
                    {primaryLinks.map(link => (
                        <button
                            key={link}
                            type="button"
                            className="transition-colors duration-200 hover:text-primary"
                        >
                            {link}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Button size="sm" className="hidden @[768px]:inline-flex">
                        Book a demo
                    </Button>
                    <Button size="sm" variant="secondary" className="hidden @[768px]:inline-flex">
                        Start free trial
                    </Button>
                    <button
                        type="button"
                        onClick={() => setIsMobileOpen(value => !value)}
                        aria-expanded={isMobileOpen}
                        aria-controls="classic-navbar-mobile"
                        aria-label="Toggle navigation"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur transition-all duration-200 hover:border-white/40 @[768px]:hidden"
                    >
                        {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </nav>

            <div className="relative hidden border-t border-white/10 px-6 py-4 text-sm/[1.6] @[768px]:block">
                <p className="text-white/70">
                    Sticky, frosted navigation keeps key actions on screen as users scroll through
                    your hero narrative.
                </p>
            </div>

            {isMobileOpen ? (
                <div
                    id="classic-navbar-mobile"
                    className="relative border-t border-white/15 px-6 py-4 @[768px]:hidden"
                >
                    <div className="flex flex-col gap-4 text-sm font-medium text-white/80">
                        {primaryLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-white/40">
                                    Explore
                                </span>
                            </button>
                        ))}
                        <Button size="lg" className="w-full">
                            Start free trial
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full bg-white/10">
                            Book a demo
                        </Button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
