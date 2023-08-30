import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Comment } from '../schema/comment.schema'

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async createComment(text: string, userId: string): Promise<Comment> {
    const newComment = new this.commentModel({ text, userId })
    return newComment.save()
  }

  async getComments(): Promise<Comment[]> {
    return this.commentModel.find().exec()
  }
}
