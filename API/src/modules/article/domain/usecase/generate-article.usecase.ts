export const GENERATE_ARTICLE_USE_CASE = 'GENERATE_ARTICLE_USE_CASE';
export interface GenerateArticleUseCase {
    execute(keywords: string, style: 'informative' | 'serious' | 'playful' | 'critical', language: 'es' | 'en'): Promise<any>;
}