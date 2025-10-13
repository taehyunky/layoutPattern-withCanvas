import { useState } from 'react';
import { CopyIcon, MailIcon, PhoneIcon } from 'lucide-react';

const contactMethods = [
    {
        label: 'Email',
        value: 'team@canvas.app',
        icon: MailIcon,
        href: 'mailto:team@canvas.app',
    },
    {
        label: 'Phone',
        value: '+82-2-1234-5678',
        icon: PhoneIcon,
        href: 'tel:+82212345678',
    },
];

export function ContactMinimalEmailPhone() {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = async (value: string, label: string) => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedField(label);
            setTimeout(() => setCopiedField(null), 2200);
        } catch (error) {
            console.warn('Clipboard unavailable', error);
        }
    };

    return (
        <section className="flex flex-col items-center gap-8 rounded-3xl border border-border/70 bg-background/95 p-12 text-center shadow-lg">
            <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Quick contact
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    바로 연결하고 싶으신가요?
                </h2>
                <p className="text-sm text-muted-foreground">
                    가장 빠른 이메일과 전화 채널입니다. 클릭하면 바로 연결됩니다.
                </p>
            </div>
            <div className="flex flex-col items-center gap-6 @[768px]:flex-row">
                {contactMethods.map(method => (
                    <div
                        key={method.label}
                        className="flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-background/90 px-10 py-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
                    >
                        <method.icon className="size-10 text-primary" />
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                            {method.label}
                        </p>
                        <a
                            href={method.href}
                            className="text-2xl font-semibold text-foreground transition hover:text-primary"
                        >
                            {method.value}
                        </a>
                        <button
                            type="button"
                            onClick={() => handleCopy(method.value, method.label)}
                            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            <CopyIcon className="size-4" />
                            Copy
                        </button>
                    </div>
                ))}
            </div>
            <div
                className={`rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition ${
                    copiedField ? 'opacity-100' : 'opacity-0'
                }`}
                aria-live="polite"
            >
                {copiedField ? `${copiedField} copied to clipboard` : 'clipboard idle'}
            </div>
        </section>
    );
}
