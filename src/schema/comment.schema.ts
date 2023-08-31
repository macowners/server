import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CommentDocument = HydratedDocument<Comment>

@Schema()
export class Comment {
  @Prop({ required: true })
  content: string

  @Prop({ required: true })
  postTitle: string

  @Prop({ required: true })
  postContent: string

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop({ default: Date.now })
  updatedAt: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment)