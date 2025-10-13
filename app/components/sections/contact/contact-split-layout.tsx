import type { FormEvent } from 'react';
import { useState } from 'react';
import {
    AtSignIcon,
    MapPinIcon,
    MessageCircleIcon,
    PhoneIcon,
    SendIcon,
} from 'lucide-react';

export function ContactSplitLayout() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2200);
    };

    return (
        <section className="grid gap-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1.1fr_0.9fr]">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                        Contact sales
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        맞춤형 데모를 요청하세요
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        회사 규모와 사용 시나리오를 입력해 주시면 1:1로 맞춤형 워크스페이스를 준비해
                        드립니다.
                    </p>
                </div>
                <div className="grid gap-4 @[640px]:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="split-name">
                            Name
                        </label>
                        <input
                            id="split-name"
                            required
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="split-company">
                            Company
                        </label>
                        <input
                            id="split-company"
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                </div>
                <div className="grid gap-4 @[640px]:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="split-email">
                            Work email
                        </label>
                        <input
                            id="split-email"
                            type="email"
                            required
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="split-phone">
                            Phone number
                        </label>
                        <input
                            id="split-phone"
                            type="tel"
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="split-message">
                        How can we help?
                    </label>
                    <textarea
                        id="split-message"
                        rows={5}
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    <SendIcon className="size-4" />
                    {isSubmitting ? 'Sending...' : 'Request demo'}
                </button>
            </form>
            <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Talk to a human</h3>
                    <p className="text-sm text-muted-foreground">
                        전 세계 지원 센터가 각 지역 시간대에 맞춰 대응합니다.
                    </p>
                </div>
                <dl className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                        <PhoneIcon className="mt-1 size-4 text-primary" />
                        <div>
                            <dt className="font-semibold text-foreground">Call us</dt>
                            <dd className="text-muted-foreground">+82-2-1234-5678 (Weekdays 9-18 KST)</dd>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <AtSignIcon className="mt-1 size-4 text-primary" />
                        <div>
                            <dt className="font-semibold text-foreground">Email</dt>
                            <dd className="text-muted-foreground">hello@canvas.app</dd>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <MessageCircleIcon className="mt-1 size-4 text-primary" />
                        <div>
                            <dt className="font-semibold text-foreground">Live chat</dt>
                            <dd className="text-muted-foreground">평일 24시간, 주말 10-18 (KST)</dd>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <MapPinIcon className="mt-1 size-4 text-primary" />
                        <div>
                            <dt className="font-semibold text-foreground">Office</dt>
                            <dd className="text-muted-foreground">
                                427 Teheran-ro, Gangnam-gu, Seoul
                            </dd>
                        </div>
                    </div>
                </dl>
                <div className="h-40 overflow-hidden rounded-2xl border border-border/60 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
            </aside>
        </section>
    );
}
