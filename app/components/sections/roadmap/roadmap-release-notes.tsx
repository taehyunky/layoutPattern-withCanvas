import { useState } from 'react';
import { ChevronDownIcon, ExternalLinkIcon } from 'lucide-react';

const releaseNotes = [
    {
        version: 'v3.14.0',
        date: 'May 28, 2024',
        highlights: [
            'Introduced automated slide generation for sales decks.',
            'Improved analytics dashboard with cohort comparison.',
        ],
        links: [
            { label: 'Release blog', href: '#' },
            { label: 'Documentation', href: '#' },
        ],
    },
    {
        version: 'v3.13.1',
        date: 'May 11, 2024',
        highlights: [
            'Stability fixes for high-volume workspaces.',
            'Figma sync now supports custom token formats.',
        ],
        links: [{ label: 'Docs', href: '#' }],
    },
];

export function RoadmapReleaseNotes() {
    const [openVersion, setOpenVersion] = useState(releaseNotes[0].version);

    return (
        <section className="space-y-6 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <header className="space-y-3 @[768px]:text-left text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    Release notes
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground @[1024px]:text-4xl">
                    버전별 개선 사항을 아코디언으로 제공해요
                </h2>
            </header>
            <div className="space-y-3">
                {releaseNotes.map(note => {
                    const isOpen = openVersion === note.version;
                    return (
                        <article
                            key={note.version}
                            className="rounded-3xl border border-border/60 bg-background/90 shadow-sm transition hover:border-primary/50"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenVersion(isOpen ? '' : note.version)}
                                className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left"
                            >
                                <div className="space-y-1">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        {note.version}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{note.date}</p>
                                </div>
                                <ChevronDownIcon
                                    className={`size-5 text-muted-foreground transition-transform ${
                                        isOpen ? 'rotate-180 text-primary' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                            >
                                <div className="space-y-4 px-6 pb-6">
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {note.highlights.map(item => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-3 text-sm">
                                        {note.links.map(link => (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                                            >
                                                {link.label}
                                                <ExternalLinkIcon className="size-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
