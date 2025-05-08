export class CreateArticleDto {
    keywords: string;
    style: 'informative' | 'serious' | 'playful' | 'critical';
    language: 'es' | 'en' = 'es';
}