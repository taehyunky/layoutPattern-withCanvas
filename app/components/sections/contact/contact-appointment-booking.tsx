import { useState } from 'react';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';

const days = [
    { label: 'Mon 12', slots: ['10:00', '13:30', '16:00'] },
    { label: 'Tue 13', slots: ['09:30', '11:00', '15:00'] },
    { label: 'Wed 14', slots: ['10:30', '14:00', '17:30'] },
    { label: 'Thu 15', slots: ['09:00', '12:30', '18:00'] },
];

export function ContactAppointmentBooking() {
    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    return (
        <section className="space-y-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Book a session
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        30분 동안 제품 전문가와 만나보세요
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        Zoom 또는 Google Meet를 통해 맞춤형 데모를 제공합니다.
                    </p>
                </div>
            </header>
            <div className="grid gap-8 @[1024px]:grid-cols-[0.9fr_1.1fr]">
                <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <CalendarIcon className="size-5 text-primary" />
                        Select a date
                    </div>
                    <div className="grid gap-3 @[768px]:grid-cols-2">
                        {days.map(day => (
                            <button
                                key={day.label}
                                type="button"
                                onClick={() => {
                                    setSelectedDay(day);
                                    setSelectedSlot(null);
                                }}
                                className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                                    selectedDay.label === day.label
                                        ? 'border-primary bg-primary/10 text-primary'
                                        : 'border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary'
                                }`}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <ClockIcon className="size-5 text-primary" />
                        Available times (KST)
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {selectedDay.slots.map(slot => (
                            <button
                                key={slot}
                                type="button"
                                onClick={() => setSelectedSlot(slot)}
                                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                                    selectedSlot === slot
                                        ? 'border border-primary bg-primary text-primary-foreground'
                                        : 'border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary'
                                }`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                    <div className="rounded-2xl border border-primary/40 bg-primary/5 p-4 text-sm text-primary/80">
                        <p className="font-semibold uppercase tracking-[0.2em]">Timezone</p>
                        <p>Korea Standard Time (UTC+9). 자동으로 로컬 시간대로 변환됩니다.</p>
                    </div>
                </aside>
                <form className="space-y-6 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="booking-name">
                            Name
                        </label>
                        <input
                            id="booking-name"
                            required
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="booking-email">
                            Work email
                        </label>
                        <input
                            id="booking-email"
                            type="email"
                            required
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="booking-notes">
                            Notes
                        </label>
                        <textarea
                            id="booking-notes"
                            rows={4}
                            className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                            placeholder="특정 관심 기능이나 검토 중인 사례가 있다면 알려주세요."
                        />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background px-4 py-4 text-sm">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <VideoIcon className="size-5 text-primary" />
                            <span>회의는 Zoom 링크로 자동 발송됩니다.</span>
                        </div>
                        <span className="rounded-full border border-border/60 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {selectedDay.label} · {selectedSlot ?? 'Select time'}
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        Confirm booking
                    </button>
                </form>
            </div>
        </section>
    );
}
