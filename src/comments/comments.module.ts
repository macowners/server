import { Module } from '@nestjs/common'
import { CommentsController } from './comments.controller'
import { CommentSchema } from '../schema/comment.schema'
import { CommentsService } from './comments.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
