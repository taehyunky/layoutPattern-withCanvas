import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const drawerLinks = [
    { label: 'Dashboard', hint: 'Overview & reports' },
    { label: 'Projects', hint: 'Active sprints' },
    { label: 'Teams', hint: 'Members & access' },
    { label: 'Notifications', hint: 'Inbox & alerts' },
];

export function NavbarSidebarDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-100 shadow-xl @container">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_10%_0%,rgba(15,118,110,0.35),transparent)]" />

            <div className="relative px-6 pb-10 pt-24 @[768px]:px-10 @[768px]:pt-28">
                <nav className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-5 @[768px]:px-10">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase text-emerald-200">
                            Pulse
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] text-emerald-100/70">
                            Workflows
                        </span>
                    </div>
                    <div className="hidden items-center gap-4 text-sm text-white/80 @[768px]:flex">
                        <button type="button" className="transition-opacity hover:text-white">
                            Product
                        </button>
                        <button type="button" className="transition-opacity hover:text-white">
                            Pricing
                        </button>
                        <button type="button" className="transition-opacity hover:text-white">
                            Support
                        </button>
                        <Button size="sm" variant="secondary" className="bg-white/10 text-white">
                            Login
                        </Button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsDrawerOpen(value => !value)}
                        className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur transition hover:border-white/40 @[768px]:hidden"
                        aria-expanded={isDrawerOpen}
                        aria-controls="drawer-navigation"
                        aria-label="Toggle navigation drawer"
                    >
                        {isDrawerOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </nav>

                <div className="space-y-6 text-white/80 @[768px]:pr-32">
                    <h2 className="text-2xl font-semibold @[480px]:text-3xl">
                        Guide users from a compact hamburger into a rich navigation drawer.
                    </h2>
                    <p className="text-sm text-white/70 @[480px]:text-base">
                        The slide-in panel supports deep IA while keeping the main surface distraction
                        free. Overlay scrim and swipe-to-dismiss reinforce focused exploration.
                    </p>
                </div>

                <div className="mt-8 hidden rounded-3xl border border-white/10 bg-white/10 p-8 text-sm text-white/80 @[768px]:flex">
                    <div className="w-72 space-y-4 border-r border-white/10 pr-6">
                        <p className="text-xs uppercase tracking-widest text-white/60">
                            Drawer hierarchy
                        </p>
                        <div className="space-y-2">
                            {drawerLinks.map(link => (
                                <div
                                    key={link.label}
                                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                                >
                                    <p className="text-sm font-semibold">{link.label}</p>
                                    <p className="text-xs text-white/60">{link.hint}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="rounded-2xl border border-dashed border-white/20 px-6 py-8 text-center text-xs uppercase tracking-[0.35em] text-white/50">
                            Desktop surfaces keep the drawer closed by default
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`absolute inset-0 z-20 flex transform bg-slate-900/80 backdrop-blur-sm transition-all duration-300 @[768px]:hidden ${
                    isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                <button
                    type="button"
                    className="flex-1"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close navigation overlay"
                />
                <aside
                    id="drawer-navigation"
                    className={`relative flex w-[80%] max-w-[320px] flex-col gap-3 border-l border-white/10 bg-slate-950/95 px-6 py-8 text-left text-white shadow-lg transition-transform duration-300 ${
                        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <p className="text-xs uppercase tracking-widest text-white/60">Navigation</p>
                    <div className="space-y-4 text-sm">
                        {drawerLinks.map(link => (
                            <button
                                key={link.label}
                                type="button"
                                className="flex w-full flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <span className="text-sm font-semibold">{link.label}</span>
                                <span className="text-xs text-white/60">{link.hint}</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-auto space-y-3">
                        <Button className="w-full">
                            Launch workspace
                            <ArrowRight className="ml-2 size-4" />
                        </Button>
                        <Button variant="secondary" className="w-full bg-white/10 text-white">
                            Contact support
                        </Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
