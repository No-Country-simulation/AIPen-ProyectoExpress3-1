import {CreateUserUseCase} from "../../domain/usecase/create-user.usecase";
import {CreateUserDto} from "../../domain/dto/create-user.dto";
import {UserDto} from "../../domain/dto/user.dto";
import {USER_REPOSITORY, UserRepository} from "../../domain/repository/user.repository";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class CreateUserImplUsecase implements CreateUserUseCase{
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: UserRepository) {
    }
    async execute(createUserDto: CreateUserDto): Promise<UserDto> {
        const existingUser = await this.userRepository.findUserByEmail(createUserDto.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        return this.userRepository.createUser(createUserDto);
    }
}