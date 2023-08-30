import * as mongoose from 'mongoose'

export const QuestionSchema = new mongoose.Schema({
  content2: String,
  createdAt: { type: Date, default: Date.now },
})

export interface Question extends mongoose.Document {
  content2: string
  createdAt: Date
}
