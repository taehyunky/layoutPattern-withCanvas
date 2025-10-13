import { ArrowUpRightIcon } from 'lucide-react';

const openings = [
    {
        title: 'Product Designer, Canvas Intelligence',
        department: 'Design',
        location: 'Seoul · Hybrid',
        tag: 'Priority hire',
    },
    {
        title: 'Senior Frontend Engineer',
        department: 'Engineering',
        location: 'Remote · APAC',
        tag: 'TypeScript · Remix',
    },
    {
        title: 'Customer Success Architect',
        department: 'Customer Success',
        location: 'Singapore · On-site',
        tag: 'Enterprise accounts',
    },
];

export function AboutCareerIntegration() {
    return (
        <section className="space-y-12 rounded-3xl border border-border/70 bg-background/95 shadow-lg">
            <div className="space-y-6 border-b border-border/60 px-10 py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Join our team
                </p>
                <div className="flex flex-col gap-6 @[1024px]:flex-row @[1024px]:items-center @[1024px]:justify-between">
                    <div className="space-y-4 @[1024px]:max-w-3xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                            우리가 만드는 제품은 사람을 위한 도구입니다. 같은 목표를 가진 동료를 찾습니다.
                        </h2>
                        <p className="text-sm text-muted-foreground @[1024px]:text-base">
                            25개국에서 원격으로 근무하는 팀과 함께 성장할 준비가 된 분들과 만나고
                            싶습니다. 유연한 근무 환경, 전담 온보딩 멘토, 그리고 학습 지원 제도를
                            제공합니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-3xl border border-primary/30 bg-primary/5 p-6 text-primary/80">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em]">Benefits</p>
                        <ul className="space-y-2 text-sm font-medium">
                            <li>· Remote-first & flexible schedule</li>
                            <li>· Professional development budget</li>
                            <li>· Inclusive culture with mentorship</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space-y-6 px-10 pb-12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Featured openings</h3>
                        <p className="text-sm text-muted-foreground">
                            채용 중인 핵심 포지션을 소개합니다. 역할별 맞춤형 온보딩을 지원합니다.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        View all openings
                        <ArrowUpRightIcon className="size-4" />
                    </a>
                </div>
                <div className="grid gap-4 @[768px]:grid-cols-3">
                    {openings.map(opening => (
                        <article
                            key={opening.title}
                            className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                        >
                            <div className="space-y-3">
                                <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                                    {opening.tag}
                                </span>
                                <h4 className="text-lg font-semibold text-foreground">
                                    {opening.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">{opening.department}</p>
                                <p className="text-sm text-muted-foreground">{opening.location}</p>
                            </div>
                            <button
                                type="button"
                                className="mt-6 inline-flex items-center justify-center rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                Apply now
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
