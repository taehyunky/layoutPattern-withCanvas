import { useState } from 'react';
import { ClockIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';

const locations = [
    {
        id: 'seoul',
        name: 'Seoul HQ',
        address: '427 Teheran-ro, Gangnam-gu, Seoul',
        phone: '+82-2-1234-5678',
        hours: 'Mon-Fri 09:00-18:00 KST',
        map: 'https://images.unsplash.com/photo-1526481280695-3c4693f06b99?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'sf',
        name: 'San Francisco',
        address: '548 Market St, San Francisco, CA 94104',
        phone: '+1-415-555-0182',
        hours: 'Mon-Fri 09:00-18:00 PST',
        map: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'singapore',
        name: 'Singapore Hub',
        address: '3 Fraser Street, #05-21, Singapore 189352',
        phone: '+65-6909-8821',
        hours: 'Mon-Fri 09:00-18:00 SGT',
        map: 'https://images.unsplash.com/photo-1526655009434-0f4cbd084fde?auto=format&fit=crop&w=1200&q=80',
    },
];

export function ContactLocationSelector() {
    const [selected, setSelected] = useState(locations[0]);

    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Visit us
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        가까운 오피스를 선택하세요
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        각 오피스는 예약제로 운영됩니다. 방문 전 메일을 남겨주세요.
                    </p>
                </div>
            </header>
            <div className="grid gap-6 @[1024px]:grid-cols-[0.9fr_1.1fr]">
                <aside className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Select location
                    </label>
                    <select
                        value={selected.id}
                        onChange={event => {
                            const found = locations.find(location => location.id === event.target.value);
                            if (found) setSelected(found);
                        }}
                        className="h-12 w-full rounded-xl border border-border/60 bg-background px-3 text-sm font-medium transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPinIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">{selected.address}</p>
                                <p className="text-muted-foreground">사전 예약 필수</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <PhoneIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">{selected.phone}</p>
                                <p className="text-muted-foreground">현지 언어 상담 지원</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ClockIcon className="mt-1 size-4 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">{selected.hours}</p>
                                <p className="text-muted-foreground">공휴일은 운영하지 않습니다.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        <NavigationIcon className="size-4" />
                        Get directions
                    </button>
                </aside>
                <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted">
                    <img
                        src={selected.map}
                        alt={`${selected.name} map preview`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
