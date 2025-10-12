import type { PropsWithChildren } from 'react';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { cn } from '~/lib/utils';

type CanvasWorkspaceProps = PropsWithChildren<{
    className?: string;
    minScale?: number;
    maxScale?: number;
    initialScale?: number;
}>;

export function CanvasWorkspace({
    children,
    className,
    minScale = 0.3,
    maxScale = 2,
    initialScale = 0.8,
}: CanvasWorkspaceProps) {
    return (
        <TransformWrapper
            initialScale={initialScale}
            minScale={minScale}
            maxScale={maxScale}
            limitToBounds={false}
            centerOnInit
            wheel={{ step: 0.1 }}
            doubleClick={{ disabled: true }}
            pinch={{ step: 0.1 }}
            panning={{ velocityDisabled: true, lockAxisX: false, lockAxisY: false }}
        >
            {({ zoomIn, zoomOut, resetTransform, centerView, state, ...rest }: any) => {
                const scalePercent = (((state as any)?.scale ?? initialScale) * 100).toFixed(0);

                return (
                    <div className={cn('relative size-full overflow-hidden', className)}>
                        <div className="absolute right-6 top-6 z-20 flex items-center gap-2 rounded-full border bg-background/95 px-4 py-2 text-sm shadow">
                            <button
                                type="button"
                                className="rounded-full border px-2 py-1 text-xs"
                                onClick={() => zoomOut()}
                            >
                                -
                            </button>
                            <span className="min-w-16 text-center text-xs font-medium tabular-nums">
                                {scalePercent}%
                            </span>
                            <button
                                type="button"
                                className="rounded-full border px-3 py-1 text-xs"
                                onClick={() => resetTransform()}
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="rounded-full border px-3 py-1 text-xs"
                                onClick={() => centerView?.()}
                            >
                                Center
                            </button>
                            <button
                                type="button"
                                className="rounded-full border px-2 py-1 text-xs"
                                onClick={() => zoomIn()}
                            >
                                +
                            </button>
                        </div>
                        <TransformComponent
                            wrapperClass="size-full"
                            contentClass="size-full"
                            {...rest}
                        >
                            <div
                                className="grid gap-16 min-w-[2000px] bg-slate-50 p-24 dark:bg-slate-900/90"
                                style={{
                                    gridTemplateRows: 'repeat(2, auto)',
                                    gridAutoFlow: 'column',
                                }}
                            >
                                {children}
                            </div>
                        </TransformComponent>
                    </div>
                );
            }}
        </TransformWrapper>
    );
}
