import {CreateUserDto} from "../dto/create-user.dto";
import {UserDto} from "../dto/user.dto";

export const CREATE_USER_USE_CASE = 'CREATE_USER_USE_CASE';

export interface CreateUserUseCase {
    execute(createUserDto: CreateUserDto): Promise<UserDto>;
}