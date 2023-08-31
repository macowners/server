import * as mongoose from 'mongoose'

export const CommentSchema = new mongoose.Schema(
  {
    content: String,
    postTitle: String, // 게시물 제목
    postContent: String, // 게시물 내용
  },
  { timestamps: true },
)

export interface Comment extends mongoose.Document {
  content: string
  postTitle: string
  postContent: string
  createdAt: Date
  updatedAt: Date
}
