import {Module} from "@nestjs/common";
import {GeminiService} from "../ai/application/service/geminis.service";
import {SearchModule} from "../search/search.module";
import {GENERATE_ARTICLE_USE_CASE} from "./domain/usecase/generate-article.usecase";
import {GenerateArticleImplUsecase} from "./application/usecase/generate-article-impl.usecase";
import {ArticleController} from "./infrastructure/controller/article.controller";
import {AIModule} from "../ai/ai.module";
import {ArticleGenerationService} from "./application/service/article-generation.service";

@Module({
    imports: [SearchModule, AIModule],
    controllers: [ArticleController],
    providers: [
        GeminiService,
        ArticleGenerationService,
        {
            provide: GENERATE_ARTICLE_USE_CASE,
            useClass: GenerateArticleImplUsecase,
        }
    ],
})
export class ArticleModule {}