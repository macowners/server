import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Comment } from 'src/schema/comment.schema'

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {}

  async createComment(content: string): Promise<Comment> {
    const newComment = new this.commentModel({ content })
    return await newComment.save()
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.commentModel.find().exec()
  }
}
