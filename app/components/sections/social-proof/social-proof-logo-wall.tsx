const logos = [
    'Linear',
    'Segment',
    'Superhuman',
    'Figma',
    'Snowflake',
    'Loom',
    'Notion',
    'Intercom',
    'Webflow',
    'Mixpanel',
    'Zapier',
    'Vercel',
];

export function SocialProofLogoWall() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="text-center space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Trusted by product teams
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    전 세계 2,000개 이상의 팀이 사용 중이에요
                </h2>
            </header>
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-6 @[768px]:grid-cols-4 @[1024px]:grid-cols-6">
                {logos.map(logo => (
                    <div
                        key={logo}
                        className="flex h-20 items-center justify-center rounded-2xl border border-border/60 bg-muted/20 p-4 transition hover:border-primary/40 hover:bg-muted/30 filter grayscale hover:grayscale-0"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground">
                            {logo}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
