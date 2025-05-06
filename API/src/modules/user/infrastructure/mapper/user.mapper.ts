import {User, UserDocument} from "../schema/user.schema";
import {UserDto} from "../../domain/dto/user.dto";
import {CreateUserDto} from "../../domain/dto/create-user.dto";

export class UserMapper {
    static toDto(userDocument: UserDocument): UserDto {
        return {
            id: userDocument._id,
            name: userDocument.name,
            email: userDocument.email,
            password: userDocument.password,
            createdAt: userDocument.createdAt || new Date(),
            updatedAt: userDocument.updatedAt || new Date()
        }
    }

    static toEntity(userDto: UserDto | CreateUserDto): Partial<User> {
        return {
            name: userDto.name,
            email: userDto.email,
            password: userDto.password,
        };
    }
}