export function FooterLegalDisclaimer() {
    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <section className="grid gap-6 @[768px]:grid-cols-4 text-sm text-muted-foreground">
                {[
                    {
                        heading: 'Product',
                        links: ['Features', 'Pricing', 'Roadmap', 'Integrations'],
                    },
                    {
                        heading: 'Solutions',
                        links: ['Marketing', 'Sales', 'Customer success', 'Enterprise'],
                    },
                    {
                        heading: 'Resources',
                        links: ['Docs', 'Community', 'Events', 'Status'],
                    },
                    {
                        heading: 'Company',
                        links: ['About', 'Blog', 'Careers', 'Press'],
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
            <section className="rounded-3xl border border-border/60 bg-background/90 p-6 text-xs text-muted-foreground">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Legal disclaimer
                </h3>
                <p className="mt-3 leading-relaxed">
                    Canvas is not responsible for outcomes derived from AI-generated content. Customers are
                    required to review assets prior to distribution. Canvas complies with SOC 2 Type II and
                    GDPR standards. For additional legal requests, contact legal@canvas.app.
                </p>
                <p className="mt-3 leading-relaxed">
                    Use of Canvas is governed by the Master Subscription Agreement. By accessing the service,
                    you agree to data processing outlined in our Privacy Policy. Canvas may update terms with
                    30 days’ notice. Continued use after notice constitutes acceptance of updated terms.
                </p>
            </section>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc. All rights reserved.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </footer>
    );
}
