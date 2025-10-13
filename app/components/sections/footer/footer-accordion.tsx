import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

const footerSections = [
    {
        heading: 'Product',
        links: ['Features', 'Pricing', 'Roadmap', 'Integrations'],
    },
    {
        heading: 'Company',
        links: ['About', 'Careers', 'Press', 'Ethics'],
    },
    {
        heading: 'Resources',
        links: ['Docs', 'Community', 'Status', 'Support'],
    },
    {
        heading: 'Legal',
        links: ['Privacy', 'Terms', 'Security'],
    },
];

export function FooterAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <footer className="space-y-8 rounded-3xl border border-border/70 bg-background/95 p-10 shadow-lg">
            <div className="grid gap-6 @[1024px]:grid-cols-[1fr_1fr]">
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-foreground">Canvas</h2>
                    <p className="text-sm text-muted-foreground">
                        The collaborative canvas for go-to-market teams building launch-ready assets.
                    </p>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                        Join the community: <a href="#" className="text-primary">Slack</a> ·{' '}
                        <a href="#" className="text-primary">YouTube</a> ·{' '}
                        <a href="#" className="text-primary">Podcast</a>
                    </p>
                </div>
            </div>
            <div className="space-y-3 @[768px]:grid @[768px]:grid-cols-4 @[768px]:gap-6">
                {footerSections.map((section, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={section.heading} className="rounded-2xl border border-border/60 bg-background/90 shadow-sm">
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left"
                            >
                                <span className="text-sm font-semibold text-foreground">{section.heading}</span>
                                <ChevronDownIcon
                                    className={`size-4 text-muted-foreground transition-transform ${
                                        isOpen ? 'rotate-180 text-primary' : ''
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                            >
                                <ul className="space-y-2 px-4 pb-4 text-sm text-muted-foreground">
                                    {section.links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="transition hover:text-primary">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span>© {new Date().getFullYear()} Canvas Labs Inc.</span>
                <a href="#" className="hover:text-primary">
                    Back to top
                </a>
            </div>
        </footer>
    );
}
