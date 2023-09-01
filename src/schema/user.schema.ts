import { HydratedDocument } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  img: string

  @Prop({ required: true })
  name: string

  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop()
  group: string[]

  @Prop()
  score: number
}

export const UserSchema = SchemaFactory.createForClass(User)
