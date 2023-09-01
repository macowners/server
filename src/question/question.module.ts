import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { QuestionSchema } from 'src/schema/question.schema'
import { QuestionService } from './question.service'
import { QuestionController } from './question.controller'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/post',
        filename: (_, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`)
        },
      }),
    }),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
