import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  text: string

  @Prop({ required: true, ref: 'User' }) // Assuming User model
  userId: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
