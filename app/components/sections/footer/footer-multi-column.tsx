const footerColumns = [
    {
        heading: 'Product',
        links: ['Canvas workspace', 'AI pattern library', 'Analytics', 'Integrations'],
    },
    {
        heading: 'Company',
        links: ['About', 'Careers', 'Press', 'Contact'],
    },
    {
        heading: 'Resources',
        links: ['Help center', 'Community', 'Changelog', 'Status'],
    },
    {
        heading: 'Legal',
        links: ['Privacy policy', 'Terms of service', 'Security', 'GDPR'],
    },
    {
        heading: 'Contact',
        links: ['hello@canvas.app', '+82-2-1234-5678', 'Slack community', 'LinkedIn'],
    },
];

export function FooterMultiColumn() {
    return (
        <footer className="rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="grid gap-8 @[1024px]:grid-cols-[1fr_auto]">
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-foreground">Canvas</h2>
                    <p className="text-sm text-muted-foreground">
                        Collaborative workspace for high-performing go-to-market teams.
                    </p>
                </div>
                <div className="max-w-sm text-sm text-muted-foreground">
                    <p>
                        Join 1,200+ teams using Canvas to launch campaigns faster. Start your free trial
                        today.
                    </p>
                </div>
            </div>
            <div className="mt-8 grid gap-6 @[768px]:grid-cols-3 @[1024px]:grid-cols-5">
                {footerColumns.map(column => (
                    <div key={column.heading} className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {column.heading}
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {column.links.map(link => (
                                <li key={link}>
                                    <a className="transition hover:text-primary" href="#">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Legal</a>
                </div>
            </div>
        </footer>
    );
}
