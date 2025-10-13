import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { MessageCircle, Plus, Settings, Share2, Sparkle, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

const quickActions: { icon: LucideIcon; label: string; description: string }[] = [
    {
        icon: Sparkle,
        label: 'Start new flow',
        description: 'Trigger automation template',
    },
    {
        icon: MessageCircle,
        label: 'Open chat',
        description: 'Contact success squad',
    },
    {
        icon: Share2,
        label: 'Share snapshot',
        description: 'Send current analytics',
    },
    {
        icon: Settings,
        label: 'Preferences',
        description: 'Update workspace rules',
    },
];

export function NavbarFab() {
    const [isFabOpen, setIsFabOpen] = useState(true);

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 text-white shadow-xl @container">
            <div className="absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.3),transparent)]" />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(120%_80%_at_80%_120%,rgba(236,72,153,0.25),transparent)]" />
            </div>

            <div className="relative min-h-[360px] px-6 py-6 @[768px]:px-10 @[768px]:py-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                            Halo
                        </span>
                        <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                            Command
                        </span>
                    </div>
                    <Button size="sm" variant="secondary" className="hidden bg-white/15 text-white @[640px]:inline-flex">
                        Dashboard
                    </Button>
                </div>

                <div className="mt-16 max-w-md space-y-4 @[768px]:mt-20">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                        Floating action navigation
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight @[480px]:text-4xl">
                        Consolidate secondary navigation into a tactile FAB launcher.
                    </h2>
                    <p className="text-sm text-white/75 @[480px]:text-base">
                        Use tap-friendly spacing, scrim overlays, and haptic cues on mobile. Limit to
                        4–6 high-intent actions to reduce paralysis.
                    </p>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4 @[480px]:bottom-10 @[480px]:right-10">
                    {isFabOpen ? (
                        <div className="flex w-64 flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl">
                            {quickActions.map(action => {
                                const Icon = action.icon;
                                return (
                                    <button
                                        key={action.label}
                                        type="button"
                                        className="group flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left transition hover:border-white/30 hover:bg-white/10"
                                    >
                                        <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                                            <Icon className="size-4" />
                                        </span>
                                        <span className="flex-1">
                                            <span className="block text-sm font-semibold text-white">
                                                {action.label}
                                            </span>
                                            <span className="block text-xs text-white/60">
                                                {action.description}
                                            </span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    ) : null}

                    <button
                        type="button"
                        onClick={() => setIsFabOpen(value => !value)}
                        className={`flex size-16 items-center justify-center rounded-full text-white shadow-xl transition-transform duration-200 @[480px]:size-[4.5rem] ${
                            isFabOpen ? 'bg-primary scale-100' : 'bg-white/15 scale-95'
                        }`}
                        aria-expanded={isFabOpen}
                        aria-label="Toggle quick navigation"
                    >
                        {isFabOpen ? <X className="size-6" /> : <Plus className="size-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
