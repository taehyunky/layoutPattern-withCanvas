import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MessageCircleIcon,
    TwitterIcon,
} from 'lucide-react';

const socialChannels = [
    {
        platform: 'Twitter',
        handle: '@canvasapp',
        url: '#',
        icon: TwitterIcon,
        cta: 'Message on Twitter',
    },
    {
        platform: 'LinkedIn',
        handle: 'Canvas · Collaborative Design',
        url: '#',
        icon: LinkedinIcon,
        cta: 'Connect on LinkedIn',
    },
    {
        platform: 'Instagram',
        handle: '@canvas.design',
        url: '#',
        icon: InstagramIcon,
        cta: 'DM on Instagram',
    },
    {
        platform: 'Facebook',
        handle: 'facebook.com/canvasapp',
        url: '#',
        icon: FacebookIcon,
        cta: 'Message on Facebook',
    },
];

export function ContactSocialMedia() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 text-center shadow-lg">
            <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Social inbox
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    사용하는 채널로 바로 대화하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    모든 소셜 메시지는 1시간 이내에 응답됩니다. 공식 계정으로 빠르게 연결하세요.
                </p>
            </div>
            <div className="grid gap-6 @[768px]:grid-cols-2">
                {socialChannels.map(channel => (
                    <article
                        key={channel.platform}
                        className="flex h-full flex-col items-center gap-4 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
                    >
                        <channel.icon className="size-12 text-primary" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                {channel.platform}
                            </p>
                            <p className="mt-2 text-lg font-semibold text-foreground">{channel.handle}</p>
                        </div>
                        <a
                            href={channel.url}
                            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            <MessageCircleIcon className="size-4" />
                            {channel.cta}
                        </a>
                    </article>
                ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Prefer email? <a className="text-primary" href="mailto:social@canvas.app">social@canvas.app</a>
            </p>
        </section>
    );
}
