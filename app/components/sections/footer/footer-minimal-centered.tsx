import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export function FooterMinimalCentered() {
    return (
        <footer className="flex flex-col items-center gap-6 rounded-3xl border border-border/70 bg-background/95 p-12 text-center shadow-lg">
            <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Canvas</h2>
                <p className="text-sm text-muted-foreground">
                    Design faster. Collaborate smarter. Present with confidence.
                </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <a href="#" className="transition hover:text-primary">
                    Product
                </a>
                <a href="#" className="transition hover:text-primary">
                    Pricing
                </a>
                <a href="#" className="transition hover:text-primary">
                    Docs
                </a>
                <a href="#" className="transition hover:text-primary">
                    Contact
                </a>
            </nav>
            <div className="flex items-center gap-3">
                {[TwitterIcon, LinkedinIcon, GithubIcon].map(Icon => (
                    <a
                        key={Icon.name}
                        href="#"
                        className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-primary hover:text-primary"
                    >
                        <Icon className="size-4" />
                    </a>
                ))}
            </div>
            <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Canvas Labs Inc. All rights reserved.
            </p>
        </footer>
    );
}
