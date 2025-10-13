import { LinkedinIcon, MailIcon } from 'lucide-react';

const leaders = [
    {
        name: 'Mina Lee',
        title: 'CEO & Co-founder',
        bio: '제품 비전과 조직 전략을 총괄하며, 창업 이전에는 글로벌 SaaS 기업에서 디자인 플랫폼 구축을 리드했습니다. 고객과 제품 팀이 더 가깝게 협업할 수 있는 구조를 만드는 데 집중합니다.',
        achievements: ['2023 Forbes 30 Under 30 Asia', 'Stanford GSB, MBA'],
        photo:
            'https://images.unsplash.com/photo-1544723795-3fb62c1a4b73?auto=format&fit=crop&w=760&q=80',
    },
    {
        name: 'Theo Ramirez',
        title: 'Chief Technology Officer',
        bio: '분산 인프라, 실시간 협업, 생성형 AI 시스템을 15년간 개발했습니다. Theo는 팀이 복잡한 기술 의사결정을 빠르게 내릴 수 있도록 투명한 문화를 구축합니다.',
        achievements: ['AWS Serverless Hero', 'MIT EECS'],
        photo:
            'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=760&q=80',
    },
];

export function AboutLeadershipShowcase() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Leadership
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    전략과 실행을 잇는 리더십 팀
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground @[768px]:text-base">
                    각 리더는 성장 단계에 맞춘 제품 전략, 엔지니어링 운영, 고객 성공 경험을 직접
                    설계하며, 구성원과 고객 사이의 신뢰를 최우선으로 둡니다.
                </p>
            </header>
            <div className="space-y-10">
                {leaders.map(leader => (
                    <article
                        key={leader.name}
                        className="grid gap-8 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm transition hover:border-primary/50 hover:shadow-lg @[1024px]:grid-cols-[320px_1fr]"
                    >
                        <figure className="relative h-72 w-full overflow-hidden rounded-3xl bg-muted @[1024px]:h-full">
                            <img
                                src={leader.photo}
                                alt={`${leader.name} portrait`}
                                className="size-full object-cover"
                                loading="lazy"
                            />
                        </figure>
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                                    Executive profile
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                                    {leader.name}
                                </h3>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {leader.title}
                                </p>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground @[1024px]:text-base">
                                {leader.bio}
                            </p>
                            <ul className="flex flex-wrap gap-3">
                                {leader.achievements.map(item => (
                                    <li
                                        key={item}
                                        className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                                >
                                    <LinkedinIcon className="size-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                                >
                                    <MailIcon className="size-4" />
                                    Email {leader.name.split(' ')[0]}
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
