export interface GeneratedArticle {
    title: string;
    metaDescription: string;
    keywords: string[];
    sections: ArticleSection[];
}

export interface ArticleSection {
    heading: string;
    content: string;
}

export interface OutlineNode {
    heading: string;
    level: number;
    children?: OutlineNode[];
}