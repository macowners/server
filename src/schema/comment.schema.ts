import * as mongoose from 'mongoose'

export const CommentSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
})

export interface Comment extends mongoose.Document {
  content: string
  createdAt: Date
}
