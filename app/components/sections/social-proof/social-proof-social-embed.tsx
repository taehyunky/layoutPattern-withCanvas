import { TwitterIcon, LinkedinIcon, MessageCircleIcon } from 'lucide-react';

const posts = [
    {
        platform: 'Twitter',
        icon: TwitterIcon,
        content: '“새로운 레이아웃 캔버스로 5일 만에 신규 온보딩 플로우 완성! 자료 공유가 너무 간편하다.”',
        handle: '@uxhaeun',
    },
    {
        platform: 'LinkedIn',
        icon: LinkedinIcon,
        content: '“캔버스 기반 협업 프로세스를 도입하고 전사 디자인 리뷰 시간이 절반으로 줄었습니다.”',
        handle: 'Minjae Kim · Growth @ Insightful',
    },
    {
        platform: 'Community',
        icon: MessageCircleIcon,
        content: '“프롬프트 미리보기 기능 덕분에 콘텐츠 팀이 QA 문서를 따로 만들 필요가 없어졌어요.”',
        handle: 'Sona · SaaS Makers',
    },
];

export function SocialProofSocialEmbed() {
    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-8 shadow-lg">
            <div className="flex flex-col gap-2 @[768px]:flex-row @[768px]:items-baseline @[768px]:justify-between">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[768px]:text-4xl">
                    소셜에서 전해지는 생생한 반응
                </h2>
                <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                    대화에 참여하기
                </button>
            </div>
            <div className="grid gap-4 @[768px]:grid-cols-3">
                {posts.map(post => {
                    const Icon = post.icon;
                    return (
                        <article
                            key={post.handle}
                            className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon className="size-5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">{post.platform}</p>
                                    <p className="text-xs text-muted-foreground">{post.handle}</p>
                                </div>
                            </div>
                            <p className="text-sm leading-6 text-muted-foreground">{post.content}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
