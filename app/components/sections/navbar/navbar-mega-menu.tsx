import { useState } from 'react';
import { ChevronRight, Menu, Sparkles, X } from 'lucide-react';

import { Button } from '~/components/ui/button';

type MegaKey = 'products' | 'solutions' | 'company' | 'resources';

const topLevelNav: { key: MegaKey; label: string; blurb: string }[] = [
    {
        key: 'products',
        label: 'Products',
        blurb: 'UI suites, motion kits, prototyping tools.',
    },
    {
        key: 'solutions',
        label: 'Solutions',
        blurb: 'Fintech, SaaS, healthcare, and commerce systems.',
    },
    {
        key: 'company',
        label: 'Company',
        blurb: 'Teams, open roles, operating principles.',
    },
    {
        key: 'resources',
        label: 'Resources',
        blurb: 'Tutorials, webinars, component changelogs.',
    },
];

const megaMenuContent: Record<
    MegaKey,
    { heading: string; description: string; items: { title: string; summary: string }[] }[]
> = {
    products: [
        {
            heading: 'Design Systems',
            description: 'Curated component libraries for fast handoff.',
            items: [
                {
                    title: 'Latitude UI',
                    summary: '400+ responsive components with tokens.',
                },
                {
                    title: 'Vector Motion',
                    summary: 'Micro-interactions for hero and onboarding.',
                },
                {
                    title: 'Narrative CMS',
                    summary: 'Content-first marketing page builder.',
                },
            ],
        },
        {
            heading: 'Automation',
            description: 'Workflow orchestration for async product squads.',
            items: [
                { title: 'Flowstate', summary: 'Collaborative sprint rituals.' },
                { title: 'Sequence', summary: 'Ship-ready email cadences.' },
                { title: 'SignalOps', summary: 'Operational dashboards with alerts.' },
            ],
        },
        {
            heading: 'Services',
            description: 'Partner with our product strategists.',
            items: [
                { title: 'Brand Lab', summary: 'Identity systems & visual language.' },
                { title: 'Product Sprints', summary: '2-week experiments with founders.' },
                { title: 'Enterprise Lab', summary: 'Scale design systems to 30+ teams.' },
            ],
        },
    ],
    solutions: [
        {
            heading: 'Industries',
            description: 'Playbooks tuned to regulated and high-growth verticals.',
            items: [
                { title: 'Fintech', summary: 'Ledger, onboarding, and trust patterns.' },
                { title: 'Healthcare', summary: 'HIPAA-aligned onboarding and portals.' },
                { title: 'Climate', summary: 'Impact reporting and investment flows.' },
            ],
        },
        {
            heading: 'Team Models',
            description: 'Adaptable to how your product squads ship.',
            items: [
                {
                    title: 'Velocity Pods',
                    summary: 'Cross-functional pods focused on speed.',
                },
                {
                    title: 'Governance',
                    summary: 'Central oversight with distributed authoring.',
                },
                {
                    title: 'Embedded',
                    summary: 'Drop-in experts aligned to product areas.',
                },
            ],
        },
        {
            heading: 'Scale',
            description: 'Growing from prototype to platform.',
            items: [
                { title: 'Series A', summary: 'Ship your market-ready product.' },
                { title: 'Series B', summary: 'Codify rituals and design ops.' },
                { title: 'Enterprise', summary: 'Global releases with governance.' },
            ],
        },
    ],
    company: [
        {
            heading: 'People',
            description: 'Meet the multidisciplinary team building Aurora.',
            items: [
                { title: 'Leadership', summary: 'Founding team and advisors.' },
                { title: 'Studios', summary: 'Regional hubs across four time zones.' },
                { title: 'Careers', summary: 'Open roles in product and ops.' },
            ],
        },
        {
            heading: 'Investors',
            description: 'Partners aligned to long-term design systems.',
            items: [
                { title: 'Signal Peak', summary: 'Seed partner focused on design tooling.' },
                { title: 'Northwind', summary: 'Series A backers enabling global expansion.' },
                { title: 'Independent Angels', summary: 'Operators from Figma, Vercel, Linear.' },
            ],
        },
        {
            heading: 'Culture',
            description: 'How we work async with discipline and warmth.',
            items: [
                { title: 'Operating Manual', summary: 'Principles and rituals we keep.' },
                { title: 'Story', summary: 'From freelancing to full-stack studio.' },
                { title: 'Press', summary: 'Media kit and press releases.' },
            ],
        },
    ],
    resources: [
        {
            heading: 'Guides',
            description: 'Deep dives on shipping accessible product surfaces.',
            items: [
                { title: 'Onboarding', summary: 'Map activation journeys with data.' },
                { title: 'Accessibility', summary: 'AA-first pattern implementations.' },
                { title: 'Design to Dev', summary: 'Bridge tokens between teams.' },
            ],
        },
        {
            heading: 'Events',
            description: 'Live sessions with product leads and design systems teams.',
            items: [
                { title: 'Roadshow', summary: 'Quarterly release walkthroughs.' },
                { title: 'Workshops', summary: 'Hands-on component architecture.' },
                { title: 'Office Hours', summary: 'Ask the team anything weekly.' },
            ],
        },
        {
            heading: 'Changelog',
            description: 'Follow updates across kits and services.',
            items: [
                { title: 'Component Drops', summary: 'New sections shipped monthly.' },
                { title: 'Case Studies', summary: 'Breakdowns of shipped launches.' },
                { title: 'Toolkit Updates', summary: 'Version notes and migration tips.' },
            ],
        },
    ],
};

export function NavbarMegaMenu() {
    const [activeKey, setActiveKey] = useState<MegaKey>('products');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const activeContent = megaMenuContent[activeKey];

    return (
        <div className="relative w-full overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm @container">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

            <div className="relative px-6 py-6 @[768px]:px-10 @[1024px]:px-16">
                <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow">
                            <Sparkles className="size-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">Aurora</p>
                            <p className="text-xs text-muted-foreground">
                                Modular product navigation system
                            </p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-6 @[960px]:flex">
                        {topLevelNav.map(item => (
                            <button
                                key={item.key}
                                type="button"
                                onMouseEnter={() => setActiveKey(item.key)}
                                onFocus={() => setActiveKey(item.key)}
                                className="flex flex-col items-start rounded-xl border border-transparent px-4 py-2 text-left transition-colors duration-200 hover:border-border/60 hover:bg-muted/50"
                            >
                                <span
                                    className={`text-sm font-medium ${
                                        activeKey === item.key ? 'text-primary' : 'text-foreground'
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span className="text-xs text-muted-foreground/80">
                                    {item.blurb}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button size="sm" className="hidden @[960px]:inline-flex">
                            Contact sales
                        </Button>
                        <button
                            type="button"
                            className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-background text-foreground shadow-sm @[960px]:hidden"
                            onClick={() => setIsMobileMenuOpen(value => !value)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mega-menu-mobile"
                        >
                            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>

                <div className="mt-6 hidden rounded-3xl border border-border/70 bg-background/95 p-8 shadow-inner @[960px]:grid @[960px]:grid-cols-3 @[960px]:gap-8">
                    {activeContent.map(column => (
                        <div key={column.heading} className="space-y-4">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-primary">
                                    {column.heading}
                                </p>
                                <p className="text-sm text-muted-foreground/90">
                                    {column.description}
                                </p>
                            </div>
                            <div className="space-y-3">
                                {column.items.map(item => (
                                    <button
                                        key={item.title}
                                        type="button"
                                        className="w-full rounded-2xl border border-border/60 bg-muted/40 px-4 py-3 text-left transition-colors duration-200 hover:border-primary/50 hover:bg-primary/5"
                                    >
                                        <p className="text-sm font-semibold text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{item.summary}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    id="mega-menu-mobile"
                    className="mt-4 space-y-4 @[960px]:hidden"
                >
                    {isMobileMenuOpen ? (
                        topLevelNav.map(item => (
                            <div
                                key={item.key}
                                className="rounded-2xl border border-border/70 bg-background/95"
                            >
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                                    onClick={() =>
                                        setActiveKey(current =>
                                            current === item.key ? current : item.key
                                        )
                                    }
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            {item.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{item.blurb}</p>
                                    </div>
                                    <ChevronRight
                                        className={`size-4 transition-transform ${
                                            activeKey === item.key ? 'rotate-90 text-primary' : ''
                                        }`}
                                    />
                                </button>

                                {activeKey === item.key ? (
                                    <div className="space-y-3 border-t border-border/70 px-4 py-4">
                                        {megaMenuContent[item.key].map(section => (
                                            <div key={section.heading} className="space-y-2">
                                                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                                    {section.heading}
                                                </p>
                                                <div className="space-y-3">
                                                    {section.items.map(entry => (
                                                        <button
                                                            key={entry.title}
                                                            type="button"
                                                            className="flex w-full flex-col rounded-xl border border-border/70 bg-muted/40 px-3 py-3 text-left"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            <span className="text-sm font-semibold text-foreground">
                                                                {entry.title}
                                                            </span>
                                                            <span className="text-xs text-muted-foreground">
                                                                {entry.summary}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <div className="rounded-2xl border border-dashed border-border/60 bg-muted/30 px-6 py-4 text-sm text-muted-foreground">
                            Expand to explore mega menu groupings on mobile.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
