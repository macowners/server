import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Question } from 'src/schema/question.schema'

@Injectable()
export class QuestionService {
  constructor(@InjectModel('Question') private readonly questionModel: Model<Question>) {}

  async createQuestion(content2: string): Promise<Question> {
    const newQuestion = new this.questionModel({ content2 })
    return await newQuestion.save()
  }

  async getAllQuestion(): Promise<Question[]> {
    return await this.questionModel.find().exec()
  }
}
