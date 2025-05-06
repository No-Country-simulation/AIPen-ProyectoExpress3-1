import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class UserDto {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
