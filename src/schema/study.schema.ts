import { HydratedDocument } from 'mongoose'
import { Prop, Schema } from '@nestjs/mongoose'

export type StudyDocument = HydratedDocument<Study>

@Schema()
export class Study {
  @Prop({ required: true, unique: true })
  name: string

  @Prop({ required: true })
  owner: string

  @Prop({ required: true })
  type: string
}
