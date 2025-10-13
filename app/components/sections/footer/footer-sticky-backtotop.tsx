import { ArrowUpIcon } from 'lucide-react';

export function FooterStickyBackToTop() {
    return (
        <footer className="relative rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="grid gap-6 @[768px]:grid-cols-4 text-sm text-muted-foreground">
                {[
                    {
                        heading: 'Product',
                        links: ['Overview', 'AI assistant', 'Analytics', 'Integrations'],
                    },
                    {
                        heading: 'Solutions',
                        links: ['Marketing', 'Sales enablement', 'Product launches', 'Customer success'],
                    },
                    {
                        heading: 'Resources',
                        links: ['Docs', 'Changelog', 'Community', 'Status'],
                    },
                    {
                        heading: 'Company',
                        links: ['About', 'Careers', 'Press', 'Contact'],
                    },
                ].map(section => (
                    <div key={section.heading} className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {section.heading}
                        </h3>
                        <ul className="space-y-2">
                            {section.links.map(link => (
                                <li key={link}>
                                    <a href="#" className="transition hover:text-primary">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                </div>
            </div>
            <button
                type="button"
                className="fixed bottom-10 right-10 inline-flex size-12 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                aria-label="Back to top"
            >
                <ArrowUpIcon className="size-5" />
            </button>
        </footer>
    );
}
