export function FooterAppDownload() {
    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="grid gap-8 @[1024px]:grid-cols-[1.2fr_0.8fr]">
                <section className="grid gap-6 @[768px]:grid-cols-3">
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
                            links: ['Help center', 'API docs', 'Community', 'Status'],
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
                </section>
                <section className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">Canvas mobile apps</h3>
                    <p className="text-sm text-muted-foreground">
                        언제 어디서나 피드백을 받고 승인하세요. iOS와 Android에서 동일한 경험을 제공합니다.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#"
                            className="flex items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                        >
                             App Store
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 rounded-xl border border-border/60 bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                        >
                            ▶ Google Play
                        </a>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/80 p-4 text-xs text-muted-foreground">
                        스토어에서 "Canvas workspace"를 검색하세요. 또는 QR 코드를 스캔해 다운로드 하세요.
                    </div>
                </section>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc.</span>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
}
