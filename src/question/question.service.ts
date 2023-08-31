import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { QuestionDto } from 'src/dto/question.dto'
import { Question } from 'src/schema/question.schema'

@Injectable()
export class QuestionService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<Question>) {}

  async create(body: QuestionDto): Promise<Question> {
    const newQuestion = new this.questionModel(body)
    return await newQuestion.save()
  }

  async getAll(): Promise<Question[]> {
    return await this.questionModel.find().exec()
  }
}
