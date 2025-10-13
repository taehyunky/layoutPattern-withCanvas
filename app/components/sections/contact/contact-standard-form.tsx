import type { FormEvent } from 'react';
import { useState } from 'react';

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export function ContactStandardForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3200);
    };

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[768px]:mx-auto @[768px]:max-w-3xl">
            <header className="space-y-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Contact us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    프로젝트에 대해 이야기 나눠볼까요?
                </h2>
                <p className="text-sm text-muted-foreground">
                    문의 주시면 24시간 이내에 담당자가 직접 연락드립니다.
                </p>
            </header>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 @[640px]:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="contact-name">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            required
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="contact-email">
                            Email
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="contact-subject">
                        Subject
                    </label>
                    <input
                        id="contact-subject"
                        name="subject"
                        className="h-14 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="contact-message">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <p className="text-xs text-muted-foreground">
                        제품 데모, 파트너십, 고객 지원 등 어떤 문의든 환영합니다.
                    </p>
                </div>
                <button
                    type="submit"
                    className="w-full rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    Send message
                </button>
                <div
                    role="status"
                    aria-live="polite"
                    className={`text-center text-sm font-semibold text-primary transition ${
                        submitted ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    메시지가 전송되었습니다. 곧 연락드릴게요!
                </div>
            </form>
        </section>
    );
}
