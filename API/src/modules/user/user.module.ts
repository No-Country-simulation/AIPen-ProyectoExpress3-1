import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controller/user.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./infrastructure/schema/user.schema";
import {USER_REPOSITORY} from "./domain/repository/user.repository";
import {UserMongoImplRepository} from "./infrastructure/repository/user-mongo-impl.repository";
import {CREATE_USER_USE_CASE} from "./domain/usecase/create-user.usecase";
import {CreateUserImplUsecase} from "./application/usecase/create-user-impl.usecase";

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UserController],
  providers: [
      {
    provide: USER_REPOSITORY,
    useClass: UserMongoImplRepository,
  },
    {
      provide: CREATE_USER_USE_CASE,
      useClass: CreateUserImplUsecase,
    }],
})
export class UserModule {}
