import { useEffect, useRef, useState } from 'react';
import { Copy, FileText, X } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { cn } from '~/lib/utils';

export type PromptPreviewData = {
    sectionId: string;
    sectionTitle?: string;
    patternId: string;
    patternTitle: string;
    documentTitle?: string;
    prompt: string;
    sourcePath?: string;
    order?: number;
};

type PromptPreviewDialogProps = {
    open: boolean;
    data: PromptPreviewData | null;
    onClose: () => void;
};

export function PromptPreviewDialog({ open, data, onClose }: PromptPreviewDialogProps) {
    const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) {
            setCopyStatus('idle');
            return;
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, onClose]);

    useEffect(() => {
        if (open) {
            containerRef.current?.focus();
        }
    }, [open, data]);

    if (!open || !data) return null;

    const { patternTitle, prompt, sectionTitle, sourcePath } = data;

    async function handleCopy() {
        try {
            if (typeof navigator !== 'undefined' && navigator?.clipboard) {
                await navigator.clipboard.writeText(prompt);
                setCopyStatus('success');
                setTimeout(() => setCopyStatus('idle'), 2000);
            } else {
                throw new Error('Clipboard API unavailable');
            }
        } catch (error) {
            console.error('[PromptPreviewDialog] Copy failed:', error);
            setCopyStatus('error');
            setTimeout(() => setCopyStatus('idle'), 3000);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 py-8 backdrop-blur-sm">
            <button
                type="button"
                className="absolute inset-0 -z-10 cursor-default"
                aria-label="Close prompt preview"
                onClick={onClose}
            />
            <div
                ref={containerRef}
                tabIndex={-1}
                className={cn(
                    'relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-2xl outline-none @[640px]:rounded-3xl'
                )}
            >
                <header className="flex items-start justify-between gap-3 border-b border-border/60 px-6 py-4 @[640px]:px-8 @[640px]:py-6">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            Prompt preview
                        </p>
                        <h3 className="text-lg font-semibold leading-tight text-foreground @[640px]:text-xl">
                            {patternTitle}
                        </h3>
                        <div className="space-y-1 text-xs text-muted-foreground/80">
                            {sectionTitle ? <p>{sectionTitle}</p> : null}
                            {data.documentTitle && data.documentTitle !== patternTitle ? (
                                <p className="text-muted-foreground/70">
                                    문서 제목: {data.documentTitle}
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={handleCopy}
                        >
                            <Copy className="size-4" />
                            {copyStatus === 'success'
                                ? '복사 완료'
                                : copyStatus === 'error'
                                  ? '복사 실패'
                                  : '프롬프트 복사'}
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            aria-label="Close prompt preview"
                            onClick={onClose}
                        >
                            <X className="size-4" />
                        </Button>
                    </div>
                </header>
                <ScrollArea className="max-h-[70vh]">
                    <div className="space-y-3 p-6 @[640px]:space-y-4 @[640px]:px-8 @[640px]:py-6">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <FileText className="size-4" />
                            <span>
                                {sourcePath ? sourcePath : '문서 정보 없음'} ·{' '}
                                {prompt.split('\n').length}줄
                            </span>
                        </div>
                        <pre className="whitespace-pre-wrap rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm leading-6 text-foreground">
                            {prompt}
                        </pre>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
