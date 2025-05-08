import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {SearchModule} from "./modules/search/search.module";
import {AIModule} from "./modules/ai/ai.module";
import {ArticleModule} from "./modules/article/article.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }) ,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule, SearchModule, AIModule, ArticleModule],
  controllers: [],
  providers: [

  ],
})
export class AppModule {}
