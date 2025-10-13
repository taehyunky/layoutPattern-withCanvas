import { FormEvent, useState } from 'react';

export function FooterContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <section className="grid gap-8 @[1024px]:grid-cols-[1fr_1fr]">
                <form className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm" onSubmit={handleSubmit}>
                    <h2 className="text-lg font-semibold text-foreground">Talk to our team</h2>
                    <div className="grid gap-4 @[768px]:grid-cols-2">
                        <input
                            required
                            placeholder="Name"
                            className="h-12 rounded-xl border border-border/60 bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Work email"
                            className="h-12 rounded-xl border border-border/60 bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <textarea
                        rows={4}
                        placeholder="How can we help?"
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Send message
                    </button>
                    <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary transition ${
                            submitted ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        Thanks! We’ll get back soon.
                    </p>
                </form>
                <div className="space-y-4">
                    <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Headquarters
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            427 Teheran-ro, Gangnam-gu, Seoul
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">+82-2-1234-5678</p>
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Support
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">support@canvas.app</p>
                        <p className="mt-1 text-sm text-muted-foreground">Mon-Fri · 24h response SLA</p>
                    </div>
                </div>
            </section>
            <div className="grid gap-6 @[768px]:grid-cols-4 text-sm text-muted-foreground">
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Product</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a className="hover:text-primary" href="#">Features</a></li>
                        <li><a className="hover:text-primary" href="#">Pricing</a></li>
                        <li><a className="hover:text-primary" href="#">Roadmap</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Company</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a className="hover:text-primary" href="#">About</a></li>
                        <li><a className="hover:text-primary" href="#">Careers</a></li>
                        <li><a className="hover:text-primary" href="#">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Resources</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a className="hover:text-primary" href="#">Docs</a></li>
                        <li><a className="hover:text-primary" href="#">Community</a></li>
                        <li><a className="hover:text-primary" href="#">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Legal</h3>
                    <ul className="mt-2 space-y-1">
                        <li><a className="hover:text-primary" href="#">Privacy</a></li>
                        <li><a className="hover:text-primary" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
            <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Canvas Labs Inc. All rights reserved.
            </p>
        </footer>
    );
}
