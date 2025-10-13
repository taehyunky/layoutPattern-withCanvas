import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const leftNav = ['Platform', 'Solutions', 'Customers'];
const rightNav = ['Resources', 'Pricing', 'Contact'];

export function NavbarCenteredLogo() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="w-full rounded-3xl border border-border/70 bg-gradient-to-b from-background via-background to-muted/40 shadow-sm @container">
            <nav className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-6 @[768px]:px-10 @[960px]:px-16">
                <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-background text-foreground shadow-sm @[768px]:hidden"
                    onClick={() => setIsMobileOpen(value => !value)}
                    aria-expanded={isMobileOpen}
                    aria-controls="centered-navbar-mobile"
                >
                    {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>

                <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground @[768px]:flex">
                    {leftNav.map(link => (
                        <button
                            key={link}
                            type="button"
                            className="transition-colors duration-200 hover:text-foreground"
                        >
                            {link}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-3 rounded-full border border-border/70 bg-background px-4 py-2 shadow">
                        <div className="h-8 w-[2px] rounded-full bg-primary" />
                        <span className="text-base font-semibold tracking-wide uppercase text-foreground">
                            Aurora Studio
                        </span>
                        <div className="h-8 w-[2px] rounded-full bg-primary/60" />
                    </div>
                </div>

                <div className="hidden items-center justify-end gap-8 text-sm font-medium text-muted-foreground @[768px]:flex">
                    {rightNav.map(link => (
                        <button
                            key={link}
                            type="button"
                            className="transition-colors duration-200 hover:text-foreground"
                        >
                            {link}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-end @[768px]:hidden">
                    <span className="text-sm font-medium text-muted-foreground">Navigation</span>
                </div>
            </nav>

            {isMobileOpen ? (
                <div
                    id="centered-navbar-mobile"
                    className="border-t border-border/70 px-6 py-5 text-sm @[768px]:hidden"
                >
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Top links
                    </p>
                    <div className="mt-3 flex flex-col gap-3">
                        {[...leftNav, ...rightNav].map(link => (
                            <button
                                key={link}
                                type="button"
                                className="flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-3 font-medium text-foreground"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                <span>{link}</span>
                                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                    Go
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
