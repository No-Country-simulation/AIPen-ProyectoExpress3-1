import {Controller, Post, Body, Inject} from '@nestjs/common';
import {GENERATE_ARTICLE_USE_CASE, GenerateArticleUseCase} from "../../domain/usecase/generate-article.usecase";
import {GeneratedArticle} from "../../domain/interface/article.interface";
import {CreateArticleDto} from "../../domain/dto/create-article.dto";


@Controller('article')
export class ArticleController {
    constructor(@Inject(GENERATE_ARTICLE_USE_CASE) private readonly generateArticleUseCase: GenerateArticleUseCase,) {}

    @Post('generate')
    async generateArticle(
        @Body() body: CreateArticleDto,
    ): Promise<GeneratedArticle> {
        return this.generateArticleUseCase.execute(
            body.keywords,
            body.style,
            body.language
        );
    }
}