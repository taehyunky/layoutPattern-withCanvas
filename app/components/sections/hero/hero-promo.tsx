import { SparklesIcon } from 'lucide-react';

import { Badge } from '~/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';

export function HeroPromo() {
    return (
        <Card className="w-full max-w-[720px] gap-0 overflow-hidden border-none bg-gradient-to-br from-primary/5 via-background to-secondary p-0 shadow-lg">
            <CardHeader className="gap-4 px-6 pt-10 pb-0 @[640px]:px-10 @[1024px]:px-12">
                <Badge variant="secondary" className="w-fit gap-1 bg-primary/10 text-primary">
                    <SparklesIcon className="size-3.5" />
                    New Release
                </Badge>
                <CardTitle className="text-3xl font-semibold tracking-tight @[480px]:text-4xl">
                    Design faster with our adaptive layout kits.
                </CardTitle>
                <CardDescription className="text-sm leading-6 text-muted-foreground @[480px]:text-base @[480px]:leading-7">
                    Build modular page sections you can remix in any project. Drag, drop, and
                    publish without wrestling with spacing tokens.
                </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-8 pt-6 @[640px]:px-10 @[640px]:pb-12 @[640px]:pt-8 @[1024px]:px-12">
                <div className="flex flex-wrap items-center gap-3">
                    <Button size="lg" className="w-full @[480px]:w-auto">
                        Browse component library
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full @[480px]:w-auto">
                        View Changelog
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-2 bg-background/60 px-6 py-5 text-sm text-muted-foreground @[640px]:px-10 @[640px]:py-6 @[1024px]:px-12">
                <div className="flex items-center gap-3">
                    <div className="size-2.5 rounded-full bg-emerald-500" />
                    Live usage across 420+ teams
                </div>
            </CardFooter>
        </Card>
    );
}
