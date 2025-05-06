import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {USER_REPOSITORY} from "./modules/user/domain/repository/user.repository";
import {UserMongoImplRepository} from "./modules/user/infrastructure/repository/user-mongo-impl.repository";
import {CREATE_USER_USE_CASE} from "./modules/user/domain/usecase/create-user.usecase";
import {CreateUserImplUsecase} from "./modules/user/application/usecase/create-user-impl.usecase";

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
    UserModule],
  controllers: [],
  providers: [

  ],
})
export class AppModule {}
