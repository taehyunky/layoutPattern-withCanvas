const locations = [
    {
        city: 'Seoul HQ',
        address: '427 Teheran-ro, Gangnam-gu, Seoul',
        phone: '+82-2-1234-5678',
    },
    {
        city: 'San Francisco',
        address: '548 Market St, San Francisco, CA',
        phone: '+1-415-555-0182',
    },
    {
        city: 'Singapore Hub',
        address: '3 Fraser Street, #05-21, Singapore',
        phone: '+65-6909-8821',
    },
];

export function FooterLocations() {
    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <section className="grid gap-8 @[1024px]:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-foreground">Global offices</h2>
                    <div className="grid gap-3 @[768px]:grid-cols-3">
                        {locations.map(location => (
                            <div key={location.city} className="space-y-2 rounded-2xl border border-border/60 bg-background p-4">
                                <h3 className="text-sm font-semibold text-foreground">{location.city}</h3>
                                <p className="text-xs text-muted-foreground">{location.address}</p>
                                <p className="text-xs text-muted-foreground">{location.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-64 overflow-hidden rounded-3xl border border-border/60 bg-[url('https://images.unsplash.com/photo-1526483360412-f4dbaf036963?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-transparent" />
                </div>
            </section>
            <section className="grid gap-6 @[768px]:grid-cols-4 text-sm text-muted-foreground">
                {[
                    {
                        heading: 'Product',
                        links: ['Features', 'Pricing', 'Roadmap', 'Integrations'],
                    },
                    {
                        heading: 'Resources',
                        links: ['Docs', 'Community', 'Status', 'Events'],
                    },
                    {
                        heading: 'Company',
                        links: ['About', 'Careers', 'Press', 'Contact'],
                    },
                    {
                        heading: 'Legal',
                        links: ['Privacy', 'Terms', 'Security'],
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
            </section>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </footer>
    );
}
