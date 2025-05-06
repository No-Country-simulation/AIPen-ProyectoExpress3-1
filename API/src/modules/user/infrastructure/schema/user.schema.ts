import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({ collection: 'users', autoCreate: true})
export class User {
    @Prop()
    _id: string;
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    createdAt: Date;
    @Prop()
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);