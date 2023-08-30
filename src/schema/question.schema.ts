import * as mongoose from 'mongoose'

export const QuestionSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
})

export interface Question extends mongoose.Document {
  content: string
  createdAt: Date
}
