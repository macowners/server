import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../guard/AuthGuard' // Assuming you have a JWT guard
import { CommentService } from './comment.service'
import { User } from '../decorator/user.decorator'

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createComment(@Body() body: { text: string }, @User() user: any) {
    const { text } = body
    const userId = user.sub
    return this.commentService.createComment(text, userId)
  }

  @Get()
  async getComments() {
    return this.commentService.getComments()
  }
}
