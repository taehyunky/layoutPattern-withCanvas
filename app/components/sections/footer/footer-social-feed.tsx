const socialPosts = [
    {
        platform: 'Twitter',
        content: '“Canvas reduced our campaign launch time by 45%. Our team loves the AI snippets.”',
        author: '@marketerhq',
    },
    {
        platform: 'LinkedIn',
        content: 'New blog: How product marketers run high-impact launches with Canvas automation.',
        author: 'Canvas · Product Marketing',
    },
    {
        platform: 'Instagram',
        content: 'Scenes from our global offsite—collaboration, workshops, and lots of energy.',
        author: '@canvas.app',
    },
];

export function FooterSocialFeed() {
    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <section className="grid gap-6 @[1024px]:grid-cols-[1.2fr_0.8fr]">
                <div className="grid gap-4 @[768px]:grid-cols-3">
                    {[
                        {
                            heading: 'Product',
                            links: ['Overview', 'AI assistant', 'Analytics', 'Integrations'],
                        },
                        {
                            heading: 'Company',
                            links: ['About', 'Careers', 'Press', 'Contact'],
                        },
                        {
                            heading: 'Resources',
                            links: ['Help center', 'Community', 'Docs', 'Status'],
                        },
                    ].map(column => (
                        <div key={column.heading} className="space-y-3">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {column.heading}
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {column.links.map(link => (
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
                <aside className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Social feed
                        </h3>
                        <a href="#" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Follow us
                        </a>
                    </div>
                    <div className="grid gap-3">
                        {socialPosts.map(post => (
                            <article
                                key={post.platform}
                                className="space-y-2 rounded-2xl border border-border/60 bg-background p-4 shadow-sm"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    {post.platform}
                                </p>
                                <p className="text-sm text-muted-foreground">{post.content}</p>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                    {post.author}
                                </p>
                            </article>
                        ))}
                    </div>
                </aside>
            </section>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
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
