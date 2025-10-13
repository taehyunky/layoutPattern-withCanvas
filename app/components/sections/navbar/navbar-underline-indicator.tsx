import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigationLinks = ['Overview', 'Analytics', 'Customers', 'Billing', 'Automation'];

export function NavbarUnderlineIndicator() {
    const [activeLink, setActiveLink] = useState('Analytics');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="w-full rounded-3xl border border-border/60 bg-background shadow-sm @container">
            <div className="flex items-center justify-between px-6 py-5 @[768px]:px-10">
                <div className="flex items-center gap-3">
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        Orbit
                    </span>
                    <span className="hidden text-xs uppercase tracking-[0.35em] text-muted-foreground @[640px]:block">
                        Insights
                    </span>
                </div>
                <div className="hidden items-center gap-6 @[768px]:flex">
                    {navigationLinks.map(link => {
                        const isActive = activeLink === link;

                        return (
                            <button
                                key={link}
                                type="button"
                                onClick={() => setActiveLink(link)}
                                className="relative pb-2 text-sm font-medium transition-colors duration-200 hover:text-primary"
                            >
                                <span className={isActive ? 'text-primary' : 'text-muted-foreground'}>
                                    {link}
                                </span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-center rounded-full transition-transform duration-200 ${
                                        isActive ? 'scale-100 bg-primary' : 'scale-0 bg-muted'
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>
                <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-foreground @[768px]:hidden"
                    onClick={() => setIsMobileOpen(value => !value)}
                    aria-expanded={isMobileOpen}
                    aria-controls="underline-navbar-mobile"
                    aria-label="Toggle navigation"
                >
                    {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            <div className="border-t border-border/60 bg-muted/30 px-6 py-4 text-xs text-muted-foreground @[768px]:px-10">
                <div className="flex items-center gap-3">
                    <span className="hidden rounded-full border border-muted-foreground/30 px-3 py-1 @[640px]:inline-flex">
                        Active: {activeLink}
                    </span>
                    <span className="leading-tight">
                        Animated underline indicator tracks the current page and previews hover
                        targets.
                    </span>
                </div>
            </div>

            {isMobileOpen ? (
                <div
                    id="underline-navbar-mobile"
                    className="border-t border-border/70 bg-background px-6 py-4 text-sm @[768px]:hidden"
                >
                    <div className="space-y-3">
                        {navigationLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 ${
                                    activeLink === link
                                        ? 'border-primary/40 bg-primary/5 text-primary'
                                        : 'border-border/70 bg-background text-foreground'
                                }`}
                                onClick={() => {
                                    setActiveLink(link);
                                    setIsMobileOpen(false);
                                }}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    {activeLink === link ? 'Current' : 'Visit'}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
