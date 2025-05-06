import {CreateUserDto} from "../dto/create-user.dto";
import {UserDto} from "../dto/user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

export const USER_REPOSITORY = 'USER_REPOSITORY';
export interface UserRepository {
    createUser(createUserDto: CreateUserDto): Promise<UserDto>;
    findUserByEmail(email: string): Promise<UserDto | null>;
    findUserById(id: string): Promise<UserDto | null>;
    updateUserByEmail(email: string, updateUserDto: any): Promise<UserDto | null>;
    updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<UserDto | null>;
}