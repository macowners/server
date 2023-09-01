import { HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type QuestionDocument = HydratedDocument<Question>

@Schema()
export class Question {
  @Prop()
  img: string

  @Prop({ required: true })
  content2: string

  @Prop({ default: Date.now })
  createdAt: Date
}

export const QuestionSchema = SchemaFactory.createForClass(Question)
