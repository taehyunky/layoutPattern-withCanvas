import { useState } from 'react';
import { HelpCircleIcon, SendIcon } from 'lucide-react';

const faqs = [
    {
        question: '무료 체험은 얼마나 사용할 수 있나요?',
        answer: '14일 동안 모든 기능을 제한 없이 사용할 수 있으며, 프로젝트 내보내기까지 제공됩니다.',
    },
    {
        question: '엔터프라이즈 요금제는 어떻게 구성되어 있나요?',
        answer: '사용자 수, 전용 성공 매니저, 보안 인증 범위에 따라 맞춤형으로 제공합니다.',
    },
    {
        question: '기존 디자인 시스템을 가져올 수 있나요?',
        answer: 'Figma, Sketch, Storybook 등 주요 디자인 시스템을 자동으로 변환하는 마이그레이션 도구를 제공하고 있습니다.',
    },
];

export function ContactFaqHybrid() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="space-y-12 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 text-center @[768px]:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Need help?
                </p>
                <div className="flex flex-col gap-2 @[1024px]:flex-row @[1024px]:items-end @[1024px]:justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                        자주 묻는 질문을 먼저 확인하고, 그래도 도움이 필요하다면 문의하세요
                    </h2>
                    <p className="text-sm text-muted-foreground @[1024px]:max-w-sm">
                        온보딩, 보안, 가격 등 핵심 질문을 정리했습니다.
                    </p>
                </div>
            </header>
            <div className="space-y-16">
                <div className="grid gap-6 @[1024px]:grid-cols-[1fr_1fr]">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/40"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-center justify-between gap-6 text-left"
                                    >
                                        <span className="flex items-center gap-3 text-sm font-semibold text-foreground @[1024px]:text-base">
                                            <HelpCircleIcon className="size-5 text-primary" />
                                            {faq.question}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                            {isOpen ? 'Hide' : 'Show'}
                                        </span>
                                    </button>
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="mt-4 text-sm text-muted-foreground">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <aside className="flex flex-col justify-between rounded-3xl border border-primary/40 bg-primary/5 p-8 text-primary/80">
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                                Still need help?
                            </p>
                            <h3 className="text-xl font-semibold text-primary">지원 팀에 바로 문의하세요</h3>
                            <p className="text-sm">
                                FAQ로 해결되지 않는 내용은 아래 폼으로 메시지를 남겨주세요. 8시간
                                이내 이메일로 답변드립니다.
                            </p>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li>· Dedicated onboarding specialist</li>
                            <li>· SSO & 보안 정책 가이드</li>
                            <li>· 데이터 마이그레이션 컨설팅</li>
                        </ul>
                    </aside>
                </div>
                <form className="grid gap-6 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm @[768px]:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="faq-name">
                            Name
                        </label>
                        <input
                            id="faq-name"
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="faq-email">
                            Work email
                        </label>
                        <input
                            id="faq-email"
                            type="email"
                            className="h-12 w-full rounded-xl border border-border/60 bg-background px-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <div className="space-y-2 @[768px]:col-span-2">
                        <label className="text-sm font-medium text-foreground" htmlFor="faq-message">
                            Message
                        </label>
                        <textarea
                            id="faq-message"
                            rows={5}
                            className="w-full rounded-xl border border-border/60 bg-background px-4 py-4 text-base shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40 @[768px]:w-max"
                    >
                        <SendIcon className="size-4" />
                        Contact support
                    </button>
                </form>
            </div>
        </section>
    );
}
