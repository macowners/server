import { Body, Controller, Get, Post } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { Comment } from 'src/schema/comment.schema'

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(@Body('content') content: string): Promise<Comment> {
    return await this.commentsService.createComment(content)
  }

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return await this.commentsService.getAllComments()
  }
}
