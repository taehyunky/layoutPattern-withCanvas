import { FormEvent, useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';

const betaFeatures = [
    {
        name: 'Canvas offline mode',
        description: 'Capture feedback and sync later when you reconnect.',
        release: 'Beta window · July 2024',
        status: 'Seats available',
    },
    {
        name: 'AI compliance assistant',
        description: 'Automatically flag governance issues before publishing.',
        release: 'Beta window · August 2024',
        status: 'Waitlist',
    },
];

export function RoadmapBetaSignup() {
    const [joined, setJoined] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setJoined(true);
        setTimeout(() => setJoined(false), 3000);
    };

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="flex flex-col gap-3 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Early access
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                        곧 출시될 기능을 가장 먼저 체험하세요
                    </h2>
                </div>
                <form
                    className="flex w-full max-w-lg flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm @[768px]:flex-row @[768px]:items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        required
                        placeholder="이메일을 입력하세요"
                        className="h-12 flex-1 rounded-full border border-border/60 bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Join waitlist
                        <ArrowUpRightIcon className="size-4" />
                    </button>
                </form>
            </header>
            <div className="grid gap-4 @[768px]:grid-cols-2">
                {betaFeatures.map(feature => (
                    <article
                        key={feature.name}
                        className="space-y-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-lg font-semibold text-foreground">{feature.name}</h3>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {feature.release}
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            {feature.status}
                        </span>
                    </article>
                ))}
            </div>
            <div
                role="status"
                className={`text-sm font-semibold text-primary transition ${joined ? 'opacity-100' : 'opacity-0'}`}
            >
                Thanks! We’ll reach out when beta slots open.
            </div>
        </section>
    );
}
