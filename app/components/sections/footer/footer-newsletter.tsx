import { FormEvent, useState } from 'react';

const linkColumns = [
    {
        heading: 'Product',
        links: ['Workspace', 'AI assistant', 'Analytics', 'Integrations'],
    },
    {
        heading: 'Company',
        links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
        heading: 'Resources',
        links: ['Help center', 'Security', 'API docs', 'Community'],
    },
];

export function FooterNewsletter() {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <footer className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <section className="rounded-3xl border border-primary/40 bg-primary/10 p-8">
                <div className="grid gap-6 @[1024px]:grid-cols-[1.3fr_0.7fr] @[1024px]:items-center">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-primary">Stay in the loop</h2>
                        <p className="text-sm text-primary/80">
                            월간 제품 로드맵과 베타 소식을 받아보세요. 스팸 없이 핵심 정보만 전합니다.
                        </p>
                    </div>
                    <form className="flex flex-col gap-3 @[768px]:flex-row" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            required
                            placeholder="email@company.com"
                            className="h-12 flex-1 rounded-full border border-primary/40 bg-white/80 px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <button
                            type="submit"
                            className="rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/60"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary transition ${
                            subscribed ? 'opacity-100' : 'opacity-0'
                        }`}
                        aria-live="polite"
                    >
                        Thanks for subscribing!
                    </p>
                </div>
            </section>
            <section className="grid gap-8 @[768px]:grid-cols-3">
                {linkColumns.map(column => (
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
            <div className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
                © {new Date().getFullYear()} Canvas Labs Inc. All rights reserved.
            </div>
        </footer>
    );
}
