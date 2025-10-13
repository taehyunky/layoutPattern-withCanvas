import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.resolve(__dirname, '../docs');
const OUTPUT_PATH = path.resolve(__dirname, '../app/lib/pattern-prompts.json');

const IGNORED_FILES = new Set(['viewport-roadmap.md', 'section-guide.md']);

const SECTION_ID_OVERRIDES = {};

const SLUG_REPLACEMENTS = [
    { pattern: /&/g, value: 'and' },
    { pattern: /[^a-z0-9]+/g, value: '-' },
    { pattern: /-{2,}/g, value: '-' },
    { pattern: /^-|-$/g, value: '' },
];

function slugify(value) {
    const lower = value.trim().toLowerCase();
    return SLUG_REPLACEMENTS.reduce((result, rule) => result.replace(rule.pattern, rule.value), lower);
}

async function getMarkdownFiles() {
    const entries = await fs.readdir(DOCS_DIR);
    return entries
        .filter(entry => entry.endsWith('.md') && !IGNORED_FILES.has(entry))
        .map(entry => path.resolve(DOCS_DIR, entry));
}

function normaliseSectionId(filename) {
    const base = path.basename(filename, path.extname(filename));
    const slug = slugify(base);
    return SECTION_ID_OVERRIDES[base] ?? SECTION_ID_OVERRIDES[slug] ?? slug;
}

function parsePatterns(content) {
    const lines = content.split('\n');
    const titleMatch = lines.find(line => line.startsWith('# '));
    const sectionTitle = titleMatch ? titleMatch.replace(/^#\s+/, '').trim() : '';
    const patterns = [];

    const headingRegex = /^##\s+(\d+)\.\s+(.*)$/;

    for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];
        const headingMatch = line.match(headingRegex);

        if (!headingMatch) continue;

        const [, orderString, patternTitleRaw] = headingMatch;
        const order = Number.parseInt(orderString, 10);
        const patternTitle = patternTitleRaw.trim();
        const patternId = slugify(patternTitle);

        const bodyLines = [];
        let cursor = index + 1;
        while (cursor < lines.length) {
            const current = lines[cursor];
            if (current.startsWith('## ')) break;
            if (current.trim() === '---') {
                cursor += 1;
                continue;
            }
            bodyLines.push(current);
            cursor += 1;
        }

        while (bodyLines.length && bodyLines[0].trim() === '') {
            bodyLines.shift();
        }

        while (bodyLines.length && bodyLines[bodyLines.length - 1].trim() === '') {
            bodyLines.pop();
        }

        const prompt = bodyLines.join('\n').trim();

        patterns.push({
            order,
            patternId,
            title: patternTitle,
            prompt,
        });
    }

    return { sectionTitle, patterns };
}

async function extractPrompts() {
    const files = await getMarkdownFiles();
    const result = {};

    for (const filePath of files) {
        const content = await fs.readFile(filePath, 'utf8');
        const { sectionTitle, patterns } = parsePatterns(content);
        const sectionId = normaliseSectionId(filePath);
        const sourcePath = path.relative(path.resolve(__dirname, '..'), filePath).replace(/\\/g, '/');

        result[sectionId] = {
            title: sectionTitle,
            patterns: patterns.reduce((acc, pattern) => {
                acc[pattern.patternId] = {
                    order: pattern.order,
                    title: pattern.title,
                    prompt: pattern.prompt,
                    sourcePath,
                };
                return acc;
            }, {}),
        };
    }

    const sortedSectionIds = Object.keys(result).sort();
    const sorted = sortedSectionIds.reduce((acc, sectionId) => {
        const section = result[sectionId];
        const sortedPatternEntries = Object.entries(section.patterns).sort((a, b) => a[1].order - b[1].order);
        acc[sectionId] = {
            title: section.title,
            patterns: Object.fromEntries(sortedPatternEntries),
        };
        return acc;
    }, {});

    const outputContent = `${JSON.stringify(sorted, null, 4)}\n`;
    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, outputContent, 'utf8');
}

extractPrompts().catch(error => {
    console.error('[extract-prompts] Error:', error);
    process.exit(1);
});
