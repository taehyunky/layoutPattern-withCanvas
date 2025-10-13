import { useState } from 'react';
import { Globe, Menu, Search, UserRound, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const utilityLinks = ['Status', 'Docs', 'Support'];
const primaryLinks = ['Overview', 'Platform', 'Enterprise', 'Pricing'];

export function NavbarTwoTier() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <div className="w-full overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm @container">
            <div className="border-b border-border/60 bg-muted/40 px-6 py-2 text-xs text-muted-foreground @[768px]:px-10">
                <div className="flex items-center justify-between gap-3">
                    <div className="hidden items-center gap-3 @[640px]:flex">
                        {utilityLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-3 @[640px]:justify-between">
                        <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 @[640px]:flex">
                            <Globe className="size-3.5 text-muted-foreground" />
                            <span className="text-xs font-medium">Global</span>
                            <span className="text-xs text-muted-foreground/80">English</span>
                        </div>
                        <span className="text-xs text-muted-foreground/80">
                            Upcoming webinar: Scaling navigation systems — August 12 • 10AM PT
                        </span>
                    </div>
                </div>
            </div>

            <div className="px-6 py-5 @[768px]:px-10">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                            Northwind
                        </span>
                        <span className="hidden text-xs uppercase tracking-[0.35em] text-muted-foreground @[640px]:block">
                            Platform
                        </span>
                    </div>
                    <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground @[960px]:flex">
                        {primaryLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                    <div className="hidden items-center gap-3 @[768px]:flex">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Search className="size-4" />
                            Search
                        </Button>
                        <Button size="sm" className="gap-2">
                            <UserRound className="size-4" />
                            Sign in
                        </Button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsMobileNavOpen(value => !value)}
                        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-sm @[768px]:hidden"
                        aria-expanded={isMobileNavOpen}
                        aria-controls="two-tier-navbar-mobile"
                        aria-label="Toggle navigation"
                    >
                        {isMobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {isMobileNavOpen ? (
                <div
                    id="two-tier-navbar-mobile"
                    className="border-t border-border/70 bg-background/95 px-6 py-4 text-sm @[768px]:hidden"
                >
                    <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-muted/40 px-4 py-3">
                            <span className="font-medium text-foreground">Search knowledgebase</span>
                            <Search className="size-4 text-muted-foreground" />
                        </div>
                        {primaryLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 font-medium text-foreground"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Open
                                </span>
                            </button>
                        ))}
                        <Button className="w-full">Sign in</Button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
