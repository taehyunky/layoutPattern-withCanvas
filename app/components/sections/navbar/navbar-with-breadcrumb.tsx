import { useState } from 'react';
import { ChevronRight, Home, Menu, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const navLinks = ['Solutions', 'Pricing', 'Case studies', 'Company'];
const breadcrumb = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Platform', href: '/platform' },
    { label: 'Control center', href: '/platform/control' },
    { label: 'Usage metrics', href: '#' },
];

export function NavbarWithBreadcrumb() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="w-full rounded-3xl border border-border/60 bg-background shadow-sm @container">
            <div className="flex items-center justify-between gap-4 px-6 py-5 @[768px]:px-10">
                <div className="flex items-center gap-3">
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                        Atlas
                    </span>
                    <span className="hidden text-xs uppercase tracking-[0.35em] text-muted-foreground @[640px]:block">
                        Intelligence
                    </span>
                </div>
                <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground @[768px]:flex">
                    {navLinks.map(link => (
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
                    <Button variant="outline" size="sm">
                        Sign in
                    </Button>
                    <Button size="sm">Launch console</Button>
                </div>
                <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-sm @[768px]:hidden"
                    onClick={() => setIsMobileOpen(value => !value)}
                    aria-expanded={isMobileOpen}
                    aria-controls="breadcrumb-navbar-mobile"
                    aria-label="Toggle navigation"
                >
                    {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            <div className="border-t border-border/60 bg-muted/30 px-6 py-3 text-xs text-muted-foreground @[768px]:px-10">
                <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-2 text-xs">
                        {breadcrumb.map((item, index) => {
                            const isLast = index === breadcrumb.length - 1;
                            const Icon = item.icon;

                            return (
                                <li key={item.label} className="flex items-center gap-2">
                                    <span
                                        className={`flex items-center gap-1 rounded-full border border-border/50 px-3 py-1 ${
                                            isLast ? 'border-primary/40 bg-primary/10 text-primary' : ''
                                        }`}
                                    >
                                        {Icon ? <Icon className="size-3.5" /> : null}
                                        <span className="hidden @[480px]:inline">{item.label}</span>
                                        <span className="@[480px]:hidden">
                                            {index === 0 ? 'Home' : `${item.label.slice(0, 3)}...`}
                                        </span>
                                    </span>
                                    {isLast ? null : <ChevronRight className="size-3.5 text-border" />}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>

            {isMobileOpen ? (
                <div
                    id="breadcrumb-navbar-mobile"
                    className="border-t border-border/70 bg-background/95 px-6 py-4 text-sm @[768px]:hidden"
                >
                    <div className="space-y-3">
                        {navLinks.map(link => (
                            <button
                                key={link}
                                type="button"
                                className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background px-4 py-3 font-medium text-foreground"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    View
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
