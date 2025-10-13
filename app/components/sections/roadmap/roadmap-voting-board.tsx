import { useState } from 'react';
import { ThumbsUpIcon } from 'lucide-react';

type Idea = {
    id: number;
    title: string;
    description: string;
    status: 'Under Review' | 'In Progress' | 'Planned' | 'Completed';
    votes: number;
};

const featureIdeas: Idea[] = [
    {
        id: 1,
        title: 'Private template sharing',
        description: 'Share templates with select clients via secure links.',
        status: 'In Progress',
        votes: 286,
    },
    {
        id: 2,
        title: 'Canvas to PDF automation',
        description: 'Schedule recurring exports to PDF and push to a shared drive.',
        status: 'Under Review',
        votes: 179,
    },
    {
        id: 3,
        title: 'Slack digest notifications',
        description: 'Daily summary of new comments and approvals in Slack.',
        status: 'Planned',
        votes: 142,
    },
];

const statusColor: Record<Idea['status'], string> = {
    'Under Review': 'text-amber-600 bg-amber-500/10 border-amber-400/40',
    'In Progress': 'text-sky-600 bg-sky-500/10 border-sky-400/40',
    Planned: 'text-slate-600 bg-slate-500/10 border-slate-400/40',
    Completed: 'text-emerald-600 bg-emerald-500/10 border-emerald-400/40',
};

export function RoadmapVotingBoard() {
    const [votes, setVotes] = useState(() => new Map(featureIdeas.map(idea => [idea.id, idea.votes])));

    const handleVote = (id: number) => {
        setVotes(prev => new Map(prev).set(id, (prev.get(id) ?? 0) + 1));
    };

    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 @[768px]:text-left text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Voice of the customer
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    원하는 기능에 투표하세요
                </h2>
                <p className="text-sm text-muted-foreground">
                    가장 많은 표를 받은 아이디어는 로드맵에 우선 반영됩니다.
                </p>
            </header>
            <div className="grid gap-4">
                {featureIdeas.map(idea => (
                    <article
                        key={idea.id}
                        className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg @[768px]:flex-row @[768px]:items-center @[768px]:justify-between"
                    >
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-lg font-semibold text-foreground">{idea.title}</h3>
                                <span
                                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusColor[idea.status]}`}
                                >
                                    {idea.status}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{idea.description}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => handleVote(idea.id)}
                            className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                        >
                            <ThumbsUpIcon className="size-4" />
                            {votes.get(idea.id)} votes
                        </button>
                    </article>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-border/60 bg-background/90 px-6 py-4 text-sm text-muted-foreground">
                <p>새로운 아이디어가 있다면 공유해주세요.</p>
                <button className="rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40">
                    Submit idea
                </button>
            </div>
        </section>
    );
}
