import { PaperclipIcon, SendIcon, ShieldAlertIcon } from 'lucide-react';

export function ContactSupportTicket() {
    return (
        <section className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Submit a ticket
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        SLA 보장을 위한 공식 티켓 생성
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        우선순위에 따라 즉시 대응하는 전담 엔지니어가 배정됩니다.
                    </p>
                </div>
            </header>
            <form className="grid gap-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm @[1024px]:grid-cols-2">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="ticket-subject">
                        Subject
                    </label>
                    <input
                        id="ticket-subject"
                        required
                        className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="ticket-category">
                        Category
                    </label>
                    <select
                        id="ticket-category"
                        className="h-12 w-full rounded-xl border border-border/60 bg-background px-3 text-sm font-medium transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                        <option>Technical</option>
                        <option>Billing</option>
                        <option>Security</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="ticket-priority">
                        Priority
                    </label>
                    <select
                        id="ticket-priority"
                        className="h-12 w-full rounded-xl border border-border/60 bg-background px-3 text-sm font-medium transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Urgent</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="ticket-email">
                        Contact email
                    </label>
                    <input
                        id="ticket-email"
                        type="email"
                        required
                        className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                </div>
                <div className="space-y-2 @[1024px]:col-span-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="ticket-description">
                        Description
                    </label>
                    <textarea
                        id="ticket-description"
                        rows={5}
                        required
                        className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="재현 절차, 발생 시각, 기대 결과 등을 자세히 적어주세요."
                    />
                    <p className="text-xs text-muted-foreground">
                        로그 파일이나 스크린샷을 첨부하면 문제 해결이 더 빨라집니다.
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 @[1024px]:col-span-2">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        <PaperclipIcon className="size-4" />
                        Attach file
                    </button>
                    <div className="flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                        <ShieldAlertIcon className="size-4" />
                        SLA: Urgent tickets answered in &lt; 30m
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        <SendIcon className="size-4" />
                        Submit ticket
                    </button>
                </div>
            </form>
        </section>
    );
}
