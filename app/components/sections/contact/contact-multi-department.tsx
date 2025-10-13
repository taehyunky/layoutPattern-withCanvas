import { BriefcaseIcon, HeadphonesIcon, MegaphoneIcon } from 'lucide-react';

const departments = [
    {
        name: 'Sales',
        description: '제품 데모, 라이선스, 파트너십 관련 문의',
        email: 'sales@canvas.app',
        phone: '+1-415-555-0183',
        icon: BriefcaseIcon,
    },
    {
        name: 'Support',
        description: '기술 지원, 계정 문제, SLA 요청',
        email: 'support@canvas.app',
        phone: '+82-2-1234-5679',
        icon: HeadphonesIcon,
    },
    {
        name: 'Press',
        description: '미디어, PR, 인터뷰 관련 문의',
        email: 'press@canvas.app',
        phone: '+82-2-1234-5680',
        icon: MegaphoneIcon,
    },
];

export function ContactMultiDepartment() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Choose a team
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        문의 유형에 따라 전담 팀이 바로 연결됩니다
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        각 팀은 평일 기준 12시간 이내 응답을 목표로 운영됩니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-6 @[768px]:grid-cols-3">
                {departments.map(department => (
                    <article
                        key={department.name}
                        className="flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                    >
                        <department.icon className="size-10 text-primary" />
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-foreground">{department.name}</h3>
                            <p className="text-sm text-muted-foreground">{department.description}</p>
                        </div>
                        <div className="space-y-2 text-sm">
                            <a
                                href={`mailto:${department.email}`}
                                className="block font-medium text-primary transition hover:text-primary/80"
                            >
                                {department.email}
                            </a>
                            <a
                                href={`tel:${department.phone.replace(/[^0-9+]/g, '')}`}
                                className="block font-medium text-primary transition hover:text-primary/80"
                            >
                                {department.phone}
                            </a>
                        </div>
                        <button
                            type="button"
                            className="mt-auto inline-flex items-center justify-center rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            Contact {department.name}
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
