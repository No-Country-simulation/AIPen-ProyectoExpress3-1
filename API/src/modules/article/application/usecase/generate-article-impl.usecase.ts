import {Injectable} from "@nestjs/common";
import {GenerateArticleUseCase} from "../../domain/usecase/generate-article.usecase";
import {ArticleGenerationService} from "../service/article-generation.service";

@Injectable()
export class GenerateArticleImplUsecase implements GenerateArticleUseCase{
    constructor(private readonly articleGenerationService: ArticleGenerationService) {
    }
    execute(keywords: string, style: "informative" | "serious" | "playful" | "critical", language: "es" | "en"): Promise<any> {
        return this.articleGenerationService.generateSEOArticle(keywords, style, language)
    }

}