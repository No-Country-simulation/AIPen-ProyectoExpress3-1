import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { GeminiService } from '../../../ai/application/service/geminis.service';
import { GoogleScraperService } from '../../../search/application/service/google-scraper.service';
import {
    ArticleSection,
    GeneratedArticle, OutlineNode,
} from '../../domain/interface/article.interface';
import { GoogleResult } from '../../../search/domain/interface/search.interface';

@Injectable()
export class ArticleGenerationService {
    constructor(
        private readonly googleScraper: GoogleScraperService,
        private readonly gemini: GeminiService,
    ) {}

    async generateSEOArticle(
        keywords: string,
        style: string,
        language: string,
    ): Promise<GeneratedArticle> {
        const searchResults = await this.googleScraper.scrapeGoogleSearch(keywords);

        const titles = await this.generateTitles(keywords, searchResults, language);
        const selectedTitle = titles[0];

        const topics = await this.generateTopics(selectedTitle, searchResults, language);

        const outline = await this.generateOutline(selectedTitle, topics, language);

        const sections: ArticleSection[] = [];
        await this.walkOutlineAndGenerate(outline, style, language, sections);

        const metaDescription = await this.generateMetaDescription(selectedTitle, language);
        const keywordsArr = await this.extractKeywords(selectedTitle, language);

        return { title: selectedTitle, sections, metaDescription, keywords: keywordsArr };
    }

    private cleanJson(text: string): string {
        return text
            .replace(/```json\s*/g, '')
            .replace(/```/g, '')
            .replace(/[\x00-\x1F\x7F]/g, '')
            .trim();
    }

    private extractAndParseJson<T>(text: string, context: string): T {
        const cleaned = this.cleanJson(text);
        const idxObj = cleaned.indexOf('{');
        const idxArr = cleaned.indexOf('[');
        let startIdx: number;
        let endChar: '}' | ']';

        if (idxArr !== -1 && (idxArr < idxObj || idxObj === -1)) {
            startIdx = idxArr;
            endChar = ']';
        } else if (idxObj !== -1) {
            startIdx = idxObj;
            endChar = '}';
        } else {
            throw new HttpException(
                `No JSON found in ${context}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

        const endIdx = cleaned.lastIndexOf(endChar);
        if (endIdx === -1 || endIdx <= startIdx) {
            throw new HttpException(
                `No closing ${endChar} in ${context}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

        const jsonStr = cleaned.substring(startIdx, endIdx + 1);
        try {
            return JSON.parse(jsonStr) as T;
        } catch (err: any) {
            throw new HttpException(
                `JSON parse error in ${context}: ${err.message}`,
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    private async generateTitles(
        keywords: string,
        context: GoogleResult[],
        language: string,
    ): Promise<string[]> {
        const prompt = `
Generate 5 SEO-optimized article titles about "${keywords}" in ${language}.
Requirements:
- Use title case
- Max 60 characters
- Include main keyword
- No markdown
- JSON array format: ["Title 1", "Title 2"]
Context: ${JSON.stringify(context.slice(0, 2))}
`;
        const raw = await this.gemini.generateContent(prompt);
        return this.extractAndParseJson<string[]>(raw, 'generateTitles');
    }

    private async generateTopics(
        title: string,
        context: GoogleResult[],
        language: string,
    ): Promise<string[]> {
        const prompt = `
Generate 8 SEO-optimized article subtopics for "${title}" in ${language}.
Requirements:
- H2 heading format
- Include related keywords
- Max 8 words each
- JSON array format: ["Topic 1", "Topic 2"]
Context: ${JSON.stringify(context.slice(0, 2))}
`;
        const raw = await this.gemini.generateContent(prompt);
        return this.extractAndParseJson<string[]>(raw, 'generateTopics');
    }


    private async generateOutline(
        title: string,
        topics: string[],
        language: string,
    ): Promise<OutlineNode[]> {
        const prompt = `
Generate an article outline, in JSON, for the title "${title}" in ${language}.
Return an array of nodes with:
- "heading": text
- "level": integer (1 for H1, 2 for H2, 3 for H3, …)
- "children": optional array of same nodes
Use topics: ${JSON.stringify(topics)}
`;
        const raw = await this.gemini.generateContent(prompt);
        return this.extractAndParseJson<OutlineNode[]>(raw, 'generateOutline');
    }


    private async walkOutlineAndGenerate(
        nodes: OutlineNode[],
        style: string,
        language: string,
        sections: ArticleSection[],
    ) {
        for (const node of nodes) {
            const prompt = `
Write ${style} SEO-optimized content in ${language} for "${node.heading}".
Requirements:
- Use markdown
- Heading level: H${node.level}
- If subheadings are needed, use H${node.level + 1}
- 2-3 paragraphs
- Bullet points where appropriate
- Natural keyword usage
- Return JSON: {"heading":"${node.heading}","level":${node.level},"content":"..."}
`;
            const raw = await this.gemini.generateContent(prompt);
            const result = this.extractAndParseJson<{ heading: string; level: number; content: string }>(
                raw,
                `section ${node.heading}`,
            );

            sections.push({
                heading: `${'#'.repeat(result.level)} ${result.heading.replace(/^#*\s*/, '')}`,
                content: result.content.trim(),
            });

            if (node.children?.length) {
                await this.walkOutlineAndGenerate(node.children, style, language, sections);
            }
        }
    }


    private async generateMetaDescription(title: string, language: string): Promise<string> {
        const prompt = `
Generate SEO meta description for "${title}" in ${language}.
Requirements:
- 150-160 characters
- Include main keyword
- Call to action
- No markdown
`;
        return (await this.gemini.generateContent(prompt)).trim();
    }

    private async extractKeywords(title: string, language: string): Promise<string[]> {
        const prompt = `
Extract 5 SEO keywords from "${title}" in ${language}.
Requirements:
- Lowercase
- Comma-separated
- JSON array format
`;
        const raw = await this.gemini.generateContent(prompt);
        return this.extractAndParseJson<string[]>(raw, 'extractKeywords');
    }
}
