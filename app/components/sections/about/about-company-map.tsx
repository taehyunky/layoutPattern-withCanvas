import { useState } from 'react';
import { ClockIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const offices = [
    {
        id: 'seoul',
        name: 'Seoul HQ',
        address: '427 Teheran-ro, Gangnam-gu, Seoul, South Korea',
        timezone: 'KST (UTC+9)',
        phone: '+82-2-1234-5678',
        coords: { x: '62%', y: '38%' },
    },
    {
        id: 'san-francisco',
        name: 'San Francisco',
        address: '548 Market St, San Francisco, CA 94104, USA',
        timezone: 'PST (UTC-8)',
        phone: '+1-415-555-0182',
        coords: { x: '18%', y: '43%' },
    },
    {
        id: 'singapore',
        name: 'Singapore Hub',
        address: '3 Fraser Street, #05-21, Singapore 189352',
        timezone: 'SGT (UTC+8)',
        phone: '+65-6909-8821',
        coords: { x: '56%', y: '58%' },
    },
];

export function AboutCompanyMap() {
    const [activeOffice, setActiveOffice] = useState(offices[0]);

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Global presence
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        3개의 허브 오피스로 글로벌 팀을 지원합니다
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        각 지역의 고객 성공 매니저가 현지 언어와 시간에 맞춰 지원합니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-8 @[1024px]:grid-cols-[1.2fr_0.8fr]">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6 shadow-inner dark:from-slate-800 dark:via-slate-900 dark:to-slate-950">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0,_rgba(255,255,255,0)_60%)]" />
                    <div className="relative flex h-[420px] items-center justify-center">
                        <div className="aspect-[2/1] w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_70%_70%,_rgba(14,165,233,0.2),_transparent_40%)]" />
                        {offices.map(office => (
                            <button
                                key={office.id}
                                type="button"
                                onClick={() => setActiveOffice(office)}
                                className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em]"
                                style={{ left: office.coords.x, top: office.coords.y }}
                            >
                                <span
                                    className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-primary text-white shadow-lg ring-4 ring-primary/30 transition group-hover:scale-110 group-focus:outline-none group-focus:ring-4 group-focus:ring-primary/50"
                                    aria-hidden
                                >
                                    <MapPinIcon className="size-5" />
                                </span>
                                <span className="rounded-full bg-background/90 px-3 py-1 text-[10px] text-foreground shadow">
                                    {office.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                                Selected office
                            </p>
                            <h3 className="text-xl font-semibold text-foreground">
                                {activeOffice.name}
                            </h3>
                        </div>
                        <div className="flex gap-2">
                            {offices.map(office => (
                                <button
                                    key={office.id}
                                    type="button"
                                    onClick={() => setActiveOffice(office)}
                                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                                        activeOffice.id === office.id
                                            ? 'border-primary bg-primary/10 text-primary'
                                            : 'border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary'
                                    }`}
                                >
                                    {office.name.split(' ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>
                    <dl className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPinIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <dt className="font-semibold text-foreground">Address</dt>
                                <dd className="text-muted-foreground">{activeOffice.address}</dd>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ClockIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <dt className="font-semibold text-foreground">Timezone</dt>
                                <dd className="text-muted-foreground">{activeOffice.timezone}</dd>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <PhoneIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <dt className="font-semibold text-foreground">Phone</dt>
                                <dd className="text-muted-foreground">{activeOffice.phone}</dd>
                            </div>
                        </div>
                    </dl>
                    <button
                        type="button"
                        className="w-full rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Get directions
                    </button>
                </aside>
            </div>
        </section>
    );
}
