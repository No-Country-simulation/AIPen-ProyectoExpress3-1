import {Controller, Get, Post, Body, Patch, Param, Delete, Inject, Logger} from '@nestjs/common';
import { CreateUserDto } from '../../domain/dto/create-user.dto';
import { UpdateUserDto } from '../../domain/dto/update-user.dto';
import {CREATE_USER_USE_CASE, CreateUserUseCase} from "../../domain/usecase/create-user.usecase";

@Controller('user')
export class UserController {
  constructor(@Inject(CREATE_USER_USE_CASE) private readonly createUserUseCase: CreateUserUseCase,) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    Logger.log('ss');
    return this.createUserUseCase.execute(createUserDto);
  }
}
