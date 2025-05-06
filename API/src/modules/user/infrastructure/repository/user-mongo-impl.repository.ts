import { CreateUserDto } from "../../domain/dto/create-user.dto";
import { UpdateUserDto } from "../../domain/dto/update-user.dto";
import { UserDto } from "../../domain/dto/user.dto";
import {UserRepository} from "../../domain/repository/user.repository";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../schema/user.schema";
import {Model} from "mongoose";
import {UserMapper} from "../mapper/user.mapper";

@Injectable()
export class UserMongoImplRepository implements UserRepository {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    }
    async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
        return this.userModel
            .create(UserMapper.toEntity(createUserDto))
            .then(UserMapper.toDto);
    }
    async findUserByEmail(email: string): Promise<UserDto | null> {
        const user = await this.userModel.findOne({ email }).exec();
        return user ? UserMapper.toDto(user) : null;
    }
    async findUserById(id: string): Promise<UserDto | null> {
        const user = await this.userModel.findById(id).exec();
        return user ? UserMapper.toDto(user) : null;
    }
    async updateUserByEmail(email: string, updateUserDto: any): Promise<UserDto | null> {
        const updatedUser = await this.userModel
            .findOneAndUpdate(
                { email },
                { $set: updateUserDto },
                { new: true }
            )
            .exec();

        return updatedUser ? UserMapper.toDto(updatedUser) : null;
    }
    async updateUserById(id: string, updateUserDto: UpdateUserDto): Promise<UserDto | null> {
        const updatedUser = await this.userModel
            .findByIdAndUpdate(
                id,
                { $set: updateUserDto },
                { new: true }
            )
            .exec();

        return updatedUser ? UserMapper.toDto(updatedUser) : null;
    }
}