import { LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';

const teamMembers = [
    {
        name: 'Minji Park',
        role: 'Head of Product Design',
        bio: '12년 이상의 디자인 리더십 경험을 바탕으로 사용자 몰입형 경험을 설계합니다.',
        photo:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
    },
    {
        name: 'Jordan Kim',
        role: 'CTO',
        bio: '분산형 인프라와 AI 워크플로우 자동화를 이끄는 엔지니어링 책임자입니다.',
        photo:
            'https://images.unsplash.com/photo-1544723795-3fb62c1a4b73?auto=format&fit=crop&w=640&q=80',
    },
    {
        name: 'Sora Choi',
        role: 'Lead Researcher',
        bio: '사용자 리서치와 인사이트 해석을 통해 제품 전략에 실제 데이터를 반영합니다.',
        photo:
            'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=640&q=80',
    },
    {
        name: 'Eli Martinez',
        role: 'Head of People',
        bio: '글로벌 팀 확장을 위해 문화, 채용, 온보딩 프로그램을 설계합니다.',
        photo:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    },
    {
        name: 'Grace Na',
        role: 'Chief of Staff',
        bio: '조직 운영과 전략적 실행을 조율하여 우선순위를 명확히 합니다.',
        photo:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=640&q=80',
    },
    {
        name: 'Lucas Cho',
        role: 'Head of Engineering',
        bio: '확장성 높은 플랫폼 구조와 품질 중심의 개발 문화를 구축합니다.',
        photo:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
    },
];

export function AboutTeamGrid() {
    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Our team
                </p>
                <div className="flex flex-col gap-2 @[768px]:flex-row @[768px]:items-end @[768px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        서로 다른 전문성을 가진 리더들이 함께합니다
                    </h2>
                    <p className="text-sm text-muted-foreground @[768px]:max-w-xs">
                        디자인, 엔지니어링, 운영, 리서치 각 영역을 대표하는 리더십 팀을 소개합니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-6 @[640px]:grid-cols-2 @[1024px]:grid-cols-3">
                {teamMembers.map(member => (
                    <article
                        key={member.name}
                        className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center text-center @[768px]:items-start @[768px]:text-left">
                            <figure className="relative mb-4 size-32 overflow-hidden rounded-full border-4 border-background shadow-lg transition group-hover:border-primary/60">
                                <img
                                    src={member.photo}
                                    alt={`${member.name} profile`}
                                    className="size-full object-cover"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                            <p className="text-sm font-medium text-primary/80">{member.role}</p>
                            <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-3 @[768px]:justify-start">
                            {[LinkedinIcon, TwitterIcon, MailIcon].map((Icon, index) => (
                                <a
                                    key={Icon.name}
                                    href="#"
                                    aria-label={`${member.name} social link ${index + 1}`}
                                    className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
