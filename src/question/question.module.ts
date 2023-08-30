import { Module } from '@nestjs/common'
import { QuestionService } from './question.service'
import { QuestionController } from './question.controller'
import { QuestionSchema } from 'src/schema/question.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
