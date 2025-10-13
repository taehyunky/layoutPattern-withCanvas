import prompts from './pattern-prompts.json';

export type PatternPrompt = {
    order: number;
    title: string;
    prompt: string;
    sourcePath: string;
};

export type SectionPrompts = {
    title: string;
    patterns: Record<string, PatternPrompt>;
};

export type PatternPromptRegistry = Record<string, SectionPrompts>;

const registry = prompts as PatternPromptRegistry;

export function getPatternPrompt(sectionId: string, patternId: string): PatternPrompt | null {
    const section = registry[sectionId];
    if (!section) return null;
    const pattern = section.patterns[patternId];
    return pattern ?? null;
}

export function listSectionPrompts(sectionId: string): PatternPrompt[] {
    const section = registry[sectionId];
    if (!section) return [];
    return Object.values(section.patterns).sort((a, b) => a.order - b.order);
}

export function getSectionPromptMetadata(sectionId: string): SectionPrompts | null {
    return registry[sectionId] ?? null;
}

export function getUnusedPrompts(
    sectionIds: string[],
    patternsBySection: Record<string, string[]>
): Record<string, string[]> {
    const unusedMap: Record<string, string[]> = {};

    for (const sectionId of sectionIds) {
        const section = registry[sectionId];
        if (!section) continue;
        const renderedPatterns = new Set(patternsBySection[sectionId] ?? []);
        const unused = Object.keys(section.patterns).filter(patternId => !renderedPatterns.has(patternId));
        if (unused.length) {
            unusedMap[sectionId] = unused;
        }
    }

    return unusedMap;
}

export function getMissingPrompts(
    sectionPromptMap: Record<string, string[]>
): Record<string, string[]> {
    const missingMap: Record<string, string[]> = {};

    for (const [sectionId, patternIds] of Object.entries(sectionPromptMap)) {
        const section = registry[sectionId];
        const missing = patternIds.filter(patternId => !section?.patterns?.[patternId]);
        if (missing.length) {
            missingMap[sectionId] = missing;
        }
    }

    return missingMap;
}

export const patternPromptRegistry = registry;
