import { useState } from 'react';
import { Bell, Menu, Search, ShoppingCart, User, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const quickLinks = ['Library', 'Playlists', 'Live', 'Studio'];

export function NavbarSplitSearch() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm @container">
            <div className="flex items-center gap-6 px-6 py-5 @[768px]:px-10">
                <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        Resonant
                    </span>
                    <span className="hidden text-xs uppercase tracking-[0.35em] text-muted-foreground @[640px]:block">
                        Audio
                    </span>
                </div>

                <div className="hidden flex-1 items-center rounded-full border border-border/70 bg-muted/40 px-4 py-2 text-sm text-muted-foreground @[960px]:flex">
                    <Search className="mr-2 size-4 text-muted-foreground/70" />
                    <input
                        type="search"
                        placeholder="Search tracks, artists, or podcasts"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    />
                    <Button variant="secondary" size="sm" className="ml-2 rounded-full">
                        Quick search
                    </Button>
                </div>

                <div className="hidden items-center gap-3 @[768px]:flex">
                    <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                        aria-label="Notifications"
                    >
                        <Bell className="size-4" />
                    </button>
                    <button
                        type="button"
                        className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                        aria-label="Cart"
                    >
                        <ShoppingCart className="size-4" />
                    </button>
                    <Button size="sm" className="gap-2">
                        <User className="size-4" />
                        Account
                    </Button>
                </div>

                <div className="flex items-center gap-2 @[960px]:hidden">
                    <button
                        type="button"
                        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70"
                        onClick={() => setIsSearchOverlayOpen(true)}
                        aria-label="Open search overlay"
                    >
                        <Search className="size-5" />
                    </button>
                    <button
                        type="button"
                        className="inline-flex size-11 items-center justify-center rounded-full border border-border/70"
                        onClick={() => setIsMobileNavOpen(value => !value)}
                        aria-expanded={isMobileNavOpen}
                        aria-controls="split-search-navbar-mobile"
                        aria-label="Toggle navigation"
                    >
                        {isMobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            <div className="border-t border-border/60 bg-muted/30 px-6 py-3 text-xs text-muted-foreground @[768px]:px-10">
                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-medium uppercase tracking-widest text-muted-foreground/80">
                        Quick links
                    </span>
                    {quickLinks.map(link => (
                        <span key={link} className="rounded-full border border-dashed border-border/60 px-3 py-1">
                            {link}
                        </span>
                    ))}
                </div>
            </div>

            {isMobileNavOpen ? (
                <div
                    id="split-search-navbar-mobile"
                    className="border-t border-border/70 bg-background/95 px-6 py-4 text-sm @[960px]:hidden"
                >
                    <div className="space-y-3">
                        {quickLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 font-medium text-foreground"
                                onClick={() => setIsMobileNavOpen(false)}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Visit
                                </span>
                            </button>
                        ))}
                        <Button className="w-full">Explore catalog</Button>
                    </div>
                </div>
            ) : null}

            {isSearchOverlayOpen ? (
                <div className="absolute inset-0 z-20 flex flex-col gap-4 bg-background/98 px-6 py-6 @[768px]:px-10">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-muted-foreground">Search catalog</p>
                        <button
                            type="button"
                            className="inline-flex size-10 items-center justify-center rounded-full border border-border/80"
                            onClick={() => setIsSearchOverlayOpen(false)}
                            aria-label="Close search overlay"
                        >
                            <X className="size-5" />
                        </button>
                    </div>
                    <div className="flex items-center rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm">
                        <Search className="mr-3 size-5 text-muted-foreground" />
                        <input
                            autoFocus
                            type="search"
                            placeholder="Try “Chillwave essentials”"
                            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground/80">
                            Recent
                        </p>
                        <div className="space-y-2">
                            {['Spatial audio mixes', 'Live room sessions', 'Creator toolkit'].map(item => (
                                <button
                                    key={item}
                                    type="button"
                                    className="w-full rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-left text-foreground"
                                    onClick={() => setIsSearchOverlayOpen(false)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
