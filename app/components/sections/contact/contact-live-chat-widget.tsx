import { useState } from 'react';
import { MessageCircleIcon, PhoneIcon, SendIcon } from 'lucide-react';

const mockMessages = [
    { id: 1, author: 'agent', content: '안녕하세요! 무엇을 도와드릴까요?', time: '09:31' },
    { id: 2, author: 'user', content: '엔터프라이즈 요금제 데모가 궁금합니다.', time: '09:32' },
    { id: 3, author: 'agent', content: '곧 전담 컨설턴트가 연결될 예정입니다.', time: '09:33' },
];

export function ContactLiveChatWidget() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);
    const [online] = useState(true);

    const handleSend = () => {
        if (!message.trim()) return;
        const newMessage = {
            id: Date.now(),
            author: 'user',
            content: message.trim(),
            time: new Intl.DateTimeFormat('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
            }).format(new Date()),
        };
        setMessages(prev => [...prev, newMessage]);
        setMessage('');
    };

    return (
        <section className="grid gap-10 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg @[1024px]:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Live chat
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    실시간으로 상담원과 연결하세요
                </h2>
                <p className="text-sm text-muted-foreground @[1024px]:text-base">
                    영업일 기준 60초 이내 응답을 보장합니다. 현재{' '}
                    <span className="font-semibold text-primary">
                        {online ? '상담원이 온라인 상태' : '상담원이 오프라인 상태'}
                    </span>
                    입니다.
                </p>
                <div className="flex flex-wrap gap-3 rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-primary/80">
                    <div className="font-semibold uppercase tracking-[0.2em]">Hours</div>
                    <div>Weekdays 24h · Weekends 10-18 KST</div>
                </div>
                <div className="grid gap-4 @[640px]:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-background/90 p-4 text-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Alternative contact
                        </p>
                        <p className="mt-2 font-semibold text-foreground">support@canvas.app</p>
                        <p className="text-muted-foreground">평균 응답 시간 6시간</p>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/90 p-4 text-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Phone support
                        </p>
                        <a
                            href="tel:+82212345678"
                            className="mt-2 inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
                        >
                            <PhoneIcon className="size-4" />
                            +82-2-1234-5678
                        </a>
                        <p className="text-muted-foreground">긴급 이슈 · SLA 고객 전용</p>
                    </div>
                </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-inner">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-foreground">Canvas Support</p>
                        <p className="text-xs text-muted-foreground">
                            {online ? 'Available now' : 'Offline · Leave a message'}
                        </p>
                    </div>
                    <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                            online
                                ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-500'
                                : 'border border-amber-500/40 bg-amber-500/10 text-amber-500'
                        }`}
                    >
                        <span className="relative inline-block size-2 rounded-full bg-current">
                            <span className="absolute inset-0 animate-ping rounded-full bg-current/60" />
                        </span>
                        {online ? 'Online' : 'Offline'}
                    </span>
                </div>
                <div className="space-y-3 rounded-2xl border border-border/60 bg-background/95 p-4">
                    <div className="flex flex-col gap-3">
                        {messages.map(messageItem => (
                            <div
                                key={messageItem.id}
                                className={`flex ${
                                    messageItem.author === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                            >
                                <div
                                    className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm ${
                                        messageItem.author === 'user'
                                            ? 'rounded-br-none bg-primary text-primary-foreground'
                                            : 'rounded-bl-none border border-border/60 bg-background/90 text-foreground'
                                    }`}
                                >
                                    <p>{messageItem.content}</p>
                                    <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-white/70">
                                        {messageItem.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-border/60 bg-background px-4 py-2">
                    <MessageCircleIcon className="size-5 text-muted-foreground" />
                    <input
                        className="flex-1 border-none bg-transparent text-sm focus:outline-none"
                        placeholder="메시지를 입력하세요…"
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                        onKeyDown={event => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                                handleSend();
                            }
                        }}
                    />
                    <button
                        type="button"
                        onClick={handleSend}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                        <SendIcon className="size-4" />
                    </button>
                </div>
            </div>
        </section>
    );
}
